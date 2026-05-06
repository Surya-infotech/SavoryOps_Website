import { Card, CardContent, Container, Typography } from '@mui/material'

const flowItems = [
  {
    title: 'QR Based Menu',
    text: 'Guests scan and instantly browse your personalized branch menu with smart upsells.',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Table Reservation',
    text: 'Accept and organize reservations with live status updates for host and owner teams.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'KOT Workflow',
    text: 'Route orders to kitchen stations with role-specific action views and real-time progress.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
  },
]

function ProductFlowGrid() {
  return (
    <section className="py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!text-[#1A3C34]">
          Feature Flow in Action
        </Typography>
        <Typography className="!mt-3 !text-[#355A4F]">
          Multiple visual moments showcase how your users move through each core workflow.
        </Typography>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {flowItems.map((item) => (
            <Card key={item.title} className="!overflow-hidden">
              <img src={item.image} alt={item.title} className="h-44 w-full object-cover" loading="lazy" />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography className="!mt-2 !text-sm !text-[#355A4F]">{item.text}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProductFlowGrid
