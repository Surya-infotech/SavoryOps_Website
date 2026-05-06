import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'

const contactItems = [
  {
    title: 'Email us',
    value: 'info@savoryops.com',
    icon: <EmailOutlinedIcon className="!text-emerald-600" />,
  },
  {
    title: 'Call us',
    value: '+91 7621908664',
    icon: <PhoneOutlinedIcon className="!text-emerald-600" />,
  },
  {
    title: 'Visit us',
    value: 'Surat, Gujarat, India.',
    icon: <LocationOnOutlinedIcon className="!text-emerald-600" />,
  },
]

function ContactPage() {
  return (
    <main className="bg-[#F8FFFB] py-16">
      <Container maxWidth="lg">
        <section className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_14px_30px_rgba(6,78,59,0.08)] md:p-10">
          <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34] md:!text-4xl">
            Let&apos;s Build Your White-Label Growth Journey
          </Typography>
          <Typography className="!mt-3 !max-w-4xl !font-sans !text-[#355A4F]">
            Whether you are launching your own branded restaurant platform or scaling multi-outlet operations, our
            team is here to help. Share your goals and we&apos;ll guide you with the right SavoryOps setup, service
            plan, and implementation path.
          </Typography>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="!rounded-3xl !border !border-emerald-100 !bg-white shadow-[0_10px_22px_rgba(6,78,59,0.06)]">
            <CardContent className="!p-6">
              <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                Contact Details
              </Typography>
              <Typography className="!mt-2 !font-sans !text-sm !text-[#355A4F]">
                Reach us directly for demos, partnership discussions, and onboarding support.
              </Typography>
              <div className="mt-5 space-y-3">
                {contactItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f8fffb] p-3"
                  >
                    <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
                      {item.icon}
                    </div>
                    <div>
                      <Typography className="!font-sans !text-xs !font-semibold !uppercase !tracking-wide !text-emerald-700">
                        {item.title}
                      </Typography>
                      <Typography className="!font-sans !text-sm !text-[#355A4F]">{item.value}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="!rounded-3xl !border !border-emerald-100 !bg-white shadow-[0_10px_22px_rgba(6,78,59,0.06)]">
            <CardContent className="!grid !gap-4 !p-6">
              <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                Tell Us About Your Project
              </Typography>
              <Typography className="!font-sans !text-sm !text-[#355A4F]">
                We usually reply quickly with a tailored recommendation.
              </Typography>
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="Full Name" placeholder="Your Name" fullWidth />
                <TextField label="Email" placeholder="hello@yourcompany.com" type="email" fullWidth />
              </div>
              <TextField
                label="What do you need?"
                placeholder="White-label setup, onboarding, app deployment, pricing plan, etc."
                multiline
                minRows={5}
                fullWidth
              />
              <Button
                variant="contained"
                size="large"
                className="!mt-1 !rounded-full !bg-emerald-500 !px-6 !py-2.5 !font-bold hover:!bg-emerald-600"
              >
                Send Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  )
}

export default ContactPage
