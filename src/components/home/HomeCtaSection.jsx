import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Button, Container, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function HomeCtaSection() {
  return (
    <section className="bg-[#ecfdf5] py-10">
      <Container maxWidth="lg">
        <div className="rounded-2xl border border-emerald-200 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(6,78,59,0.08)] md:px-8 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Typography variant="h5" className="!font-sans !font-bold !text-[#1A3C34]">
                Ready to make operations feel effortless?
              </Typography>
              <Typography className="!mt-1 !font-sans !text-[#355A4F]">
                Start your free demo and see how SavoryOps aligns every role, branch, and workflow.
              </Typography>
            </div>
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact"
              endIcon={<ArrowOutwardRoundedIcon />}
              className="!self-start !rounded-full !bg-emerald-500 !px-6 !py-2.5 !font-semibold hover:!bg-emerald-600 md:!self-auto"
            >
              Start Scaling
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeCtaSection
