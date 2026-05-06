import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function FaqSection({ items, showViewMore = false }) {
  return (
    <section className="bg-white py-14">
      <Container maxWidth="lg">
        <Typography variant="h3" className="!font-sans !text-3xl !font-bold !text-[#1A3C34]">
          Curious about the secret sauce?
        </Typography>
        <Typography className="!mt-2 !font-sans !text-[#355A4F]">
          Helpful, light, and professional answers for your team.
        </Typography>

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <Accordion
              key={item.q}
              className="!rounded-2xl !border !border-emerald-100 !bg-[#f8fffb] !shadow-none before:!hidden"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreRoundedIcon className="!text-emerald-600" />}
                className="!rounded-2xl"
              >
                <Typography className="!font-sans !font-semibold !text-[#1A3C34]">{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex items-start gap-2">
                  <CheckCircleRoundedIcon fontSize="small" className="!mt-0.5 !text-emerald-400" />
                  <Typography className="!font-sans !text-[#355A4F]">{item.a}</Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        {showViewMore && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="outlined"
              component={RouterLink}
              to="/faq"
              className="!rounded-full !border-emerald-300 !px-6 !py-2 !font-semibold !text-emerald-700 hover:!border-emerald-500 hover:!bg-emerald-50"
            >
              View More
            </Button>
          </div>
        )}
      </Container>
    </section>
  )
}

export default FaqSection
