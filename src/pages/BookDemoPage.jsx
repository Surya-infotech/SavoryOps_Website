import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import { Button, Card, CardContent, Container, MenuItem, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { submitDemoBook } from '../services/demoBookApi'

function getTimezoneLabel(timeZone) {
  const now = new Date()
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'shortOffset',
    hour12: false,
  }).formatToParts(now)
  const offset = parts.find((part) => part.type === 'timeZoneName')?.value || 'GMT'
  return `${timeZone} (${offset.replace('GMT', 'UTC')})`
}

const timezoneOptions =
  typeof Intl.supportedValuesOf === 'function'
    ? Intl.supportedValuesOf('timeZone').map((zone) => ({
        value: zone,
        label: getTimezoneLabel(zone),
      }))
    : [
        { value: 'Asia/Kolkata', label: 'Asia/Kolkata (UTC+05:30)' },
        { value: 'UTC', label: 'UTC (UTC+00:00)' },
      ]

function BookDemoPage() {
  const [selectedTimezone, setSelectedTimezone] = useState(timezoneOptions[0].value)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })
  const dateInputRef = useRef(null)
  const timeInputRef = useRef(null)

  const openPicker = (inputRef) => {
    if (!inputRef.current) return
    inputRef.current.focus()
    if (typeof inputRef.current.showPicker === 'function') {
      inputRef.current.showPicker()
    }
  }

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage({ type: '', text: '' })

    if (!formData.fullname.trim() || !formData.email.trim()) {
      setStatusMessage({ type: 'error', text: 'Name and Email are required.' })
      return
    }

    try {
      setIsSubmitting(true)
      await submitDemoBook({
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        preferredDate: selectedDate,
        preferredTime: selectedTime,
        timezone: selectedTimezone,
        notes: formData.notes,
      })

      setStatusMessage({
        type: 'success',
        text: 'Demo request submitted successfully. Our team will contact you shortly.',
      })
      setFormData({ fullname: '', email: '', phone: '', notes: '' })
      setSelectedDate('')
      setSelectedTime('')
      setSelectedTimezone(timezoneOptions[0].value)
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Unable to submit demo request right now. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-[#F8FFFB] py-16">
      <Container maxWidth="md">
        <section className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_14px_30px_rgba(6,78,59,0.08)] md:p-10">
          <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34] md:!text-4xl">
            Book Demo Call
          </Typography>
          <Typography className="!mt-3 !font-sans !text-[#355A4F]">
            Pick your timezone, preferred date, and time. Our team will connect with you for a guided SavoryOps demo.
          </Typography>

          <Card className="!mt-7 !rounded-3xl !border !border-emerald-100 !bg-[#fbfffd] !shadow-none">
            <CardContent component="form" onSubmit={handleSubmit} className="!grid !gap-4 !p-6">
              <TextField
                select
                label="Timezone"
                value={selectedTimezone}
                onChange={(event) => setSelectedTimezone(event.target.value)}
                fullWidth
              >
                {timezoneOptions.map((zone) => (
                  <MenuItem key={zone.value} value={zone.value}>
                    {zone.label}
                  </MenuItem>
                ))}
              </TextField>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Typography className="!mb-1 !text-sm !font-semibold !text-[#355A4F]">Preferred Date</Typography>
                  <button
                    type="button"
                    onClick={() => openPicker(dateInputRef)}
                    className="relative flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white px-4 py-4 text-left transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <span className={selectedDate ? 'text-[#1A3C34]' : 'text-slate-500'}>
                      {selectedDate || 'Select date'}
                    </span>
                    <CalendarMonthRoundedIcon className="!text-[#1A3C34]" />
                    <input
                      ref={dateInputRef}
                      type="date"
                      aria-label="Preferred Date"
                      value={selectedDate}
                      onChange={(event) => setSelectedDate(event.target.value)}
                      className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
                      tabIndex={-1}
                    />
                  </button>
                </div>
                <div>
                  <Typography className="!mb-1 !text-sm !font-semibold !text-[#355A4F]">Preferred Time</Typography>
                  <button
                    type="button"
                    onClick={() => openPicker(timeInputRef)}
                    className="relative flex w-full items-center justify-between rounded-2xl border border-slate-300 bg-white px-4 py-4 text-left transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <span className={selectedTime ? 'text-[#1A3C34]' : 'text-slate-500'}>
                      {selectedTime || 'Select time'}
                    </span>
                    <AccessTimeRoundedIcon className="!text-[#1A3C34]" />
                    <input
                      ref={timeInputRef}
                      type="time"
                      aria-label="Preferred Time"
                      value={selectedTime}
                      onChange={(event) => setSelectedTime(event.target.value)}
                      className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
                      tabIndex={-1}
                    />
                  </button>
                </div>
              </div>

              <TextField
                label="Your Name"
                placeholder="Enter your name"
                value={formData.fullname}
                onChange={handleChange('fullname')}
                required
                fullWidth
              />
              <TextField
                label="Email"
                placeholder="hello@yourcompany.com"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                fullWidth
              />
              <TextField
                label="Phone Number"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange('phone')}
                fullWidth
              />
              <TextField
                label="What would you like to see in the demo?"
                placeholder="White-label branding, owner panel, employee workflow, pricing, etc."
                value={formData.notes}
                onChange={handleChange('notes')}
                multiline
                minRows={4}
                fullWidth
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
                className="!mt-1 !rounded-full !bg-emerald-500 !px-6 !py-2.5 !font-bold hover:!bg-emerald-600"
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo Call'}
              </Button>
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-3 text-sm text-[#355A4F]">
              <PublicRoundedIcon fontSize="small" className="!mb-1 !text-emerald-600" />
              Timezone-aligned scheduling
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-3 text-sm text-[#355A4F]">
              <CalendarMonthRoundedIcon fontSize="small" className="!mb-1 !text-emerald-600" />
              Flexible date selection
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-white p-3 text-sm text-[#355A4F]">
              <AccessTimeRoundedIcon fontSize="small" className="!mb-1 !text-emerald-600" />
              Convenient time slots
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default BookDemoPage