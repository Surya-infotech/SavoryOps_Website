import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { submitContactLead } from '../../services/contactLeadApi'

const iconMap = {
  mail: <SendRoundedIcon fontSize="small" />,
  address: <PlaceRoundedIcon fontSize="small" />,
  phone: <HandshakeRoundedIcon fontSize="small" />,
}

function InHomeContactSection({ data }) {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage({ type: '', text: '' })

    if (!formData.fullname.trim() || !formData.email.trim()) {
      setStatusMessage({ type: 'error', text: 'Full Name and Email are required.' })
      return
    }

    try {
      setIsSubmitting(true)
      await submitContactLead({
        fullname: formData.fullname,
        email: formData.email,
        message: formData.message,
      })
      setStatusMessage({
        type: 'success',
        text: 'Inquiry sent successfully. We will contact you soon.',
      })
      setFormData({ fullname: '', email: '', message: '' })
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Unable to send inquiry right now. Please try again in a moment.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#f0fdf4] py-14">
      <Container maxWidth="lg">
        <Card className="!overflow-hidden !rounded-3xl !border-emerald-200 !bg-[#e7f7ef] shadow-[0_18px_45px_rgba(6,78,59,0.12)]">
          <CardContent className="!grid !gap-6 !p-5 md:!grid-cols-2 md:!gap-8 md:!p-8">
            <div>
              <Typography variant="h5" className="!font-sans !font-bold !leading-tight !text-[#1A3C34]">
                {data.title}
              </Typography>
              <Typography className="!mt-2 !font-sans !text-[#355A4F]">{data.subtitle}</Typography>
              <div className="mt-6 space-y-4">
                {data.infoItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2 text-[#355A4F]">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-700 shadow">
                      {iconMap[item.type]}
                    </span>
                    <span>
                      <strong className="text-[#1A3C34]">{item.label}</strong> {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="!rounded-2xl !border-emerald-100 !bg-white">
              <CardContent component="form" onSubmit={handleSubmit} className="!grid !gap-4 !p-5 md:!p-6">
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {data.formTitle}
                </Typography>
                <div className="grid gap-4 md:grid-cols-2">
                  <TextField
                    label="Full Name"
                    placeholder="Chef's Name"
                    value={formData.fullname}
                    onChange={handleChange('fullname')}
                    required
                    fullWidth
                    className="[&_.MuiOutlinedInput-root]:!rounded-xl"
                  />
                  <TextField
                    label="Email"
                    placeholder="hello@yourkitchen.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    fullWidth
                    className="[&_.MuiOutlinedInput-root]:!rounded-xl"
                  />
                </div>
                <TextField
                  label="How can we help?"
                  value={formData.message}
                  onChange={handleChange('message')}
                  multiline
                  minRows={4}
                  fullWidth
                  className="[&_.MuiOutlinedInput-root]:!rounded-xl"
                />
                {statusMessage.text ? (
                  <Typography
                    className={
                      statusMessage.type === 'error'
                        ? '!font-sans !text-sm !text-red-600'
                        : '!font-sans !text-sm !text-emerald-700'
                    }
                  >
                    {statusMessage.text}
                  </Typography>
                ) : null}
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={isSubmitting}
                  className="!rounded-full !bg-emerald-500 !py-3 !font-semibold hover:!bg-emerald-600"
                >
                  {isSubmitting ? 'Sending...' : 'Start the Conversation.'}
                </Button>
                <Typography className="!text-xs !font-sans !font-medium !text-[#4b6b5f]">{data.formCaption}</Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}

export default InHomeContactSection
