import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded'
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded'
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import TakeoutDiningRoundedIcon from '@mui/icons-material/TakeoutDiningRounded'
import { Card, CardContent, Container, Typography } from '@mui/material'

const orderTypeIconMap = {
  QSR: <FastfoodRoundedIcon fontSize="small" />,
  'Dine-In': <EventSeatRoundedIcon fontSize="small" />,
  Takeaway: <TakeoutDiningRoundedIcon fontSize="small" />,
  Pickup: <StorefrontRoundedIcon fontSize="small" />,
  Delivery: <DeliveryDiningRoundedIcon fontSize="small" />,
}

function OrderTypesSection({ orderTypes }) {
  return (
    <section id="order-types" className="bg-[#f8fffb] py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34]">
          Order Types
        </Typography>
        <Typography className="!mt-3 !font-sans !text-[#355A4F]">
          Run every service model from one platform with workflows tuned for each order channel.
        </Typography>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {orderTypes.map((orderType) => (
            <Card key={orderType.title} className="!border-emerald-100 !bg-white">
              <CardContent>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8fffb] shadow-sm ring-1 ring-emerald-100">
                  <span className="inline-flex items-center justify-center leading-none text-emerald-600">
                    {orderTypeIconMap[orderType.title]}
                  </span>
                </div>
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {orderType.title}
                </Typography>
                <Typography className="!mt-2 !font-sans !text-sm !text-[#355A4F]">
                  {orderType.details}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OrderTypesSection
