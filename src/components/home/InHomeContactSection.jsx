import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded'
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material'

const iconMap = {
  mail: <SendRoundedIcon fontSize="small" />,
  address: <PlaceRoundedIcon fontSize="small" />,
  phone: <HandshakeRoundedIcon fontSize="small" />,
}

function InHomeContactSection({ data }) {
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
              <CardContent className="!grid !gap-4 !p-5 md:!p-6">
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {data.formTitle}
                </Typography>
                <div className="grid gap-4 md:grid-cols-2">
                  <TextField label="Full Name" placeholder="Chef's Name" fullWidth className="[&_.MuiOutlinedInput-root]:!rounded-xl" />
                  <TextField label="Email" placeholder="hello@yourkitchen.com" type="email" fullWidth className="[&_.MuiOutlinedInput-root]:!rounded-xl" />
                </div>
                <TextField label="How can we help?" multiline minRows={4} fullWidth className="[&_.MuiOutlinedInput-root]:!rounded-xl" />
                <Button
                  variant="contained"
                  size="large"
                  className="!rounded-full !bg-emerald-500 !py-3 !font-semibold hover:!bg-emerald-600"
                >
                  Start the Conversation.
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
