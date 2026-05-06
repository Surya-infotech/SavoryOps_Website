import { Box, Card, CardContent, Container, Tab, Tabs, Typography } from '@mui/material'
import { useState } from 'react'

function FeatureWalkthroughSection({ tabsData }) {
  const [activeTab, setActiveTab] = useState(0)
  const activeContent = tabsData[activeTab]

  return (
    <section className="bg-[#f8fffb] py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34]">
          Feature Walkthrough
        </Typography>
        <Typography className="!mt-3 !font-sans !text-[#355A4F]">
          Explore how each SavoryOps interface works together to deliver clean operations.
        </Typography>

        <Box className="mt-8 overflow-x-auto">
          <Tabs
            value={activeTab}
            onChange={(_, value) => setActiveTab(value)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="inherit"
            TabIndicatorProps={{ style: { backgroundColor: '#10b981', height: 3 } }}
          >
            {tabsData.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                className="!min-h-0 !py-2 !font-sans !text-sm !font-semibold !text-[#1A3C34]"
              />
            ))}
          </Tabs>
        </Box>

        <Card className="!mt-6 !overflow-hidden !rounded-2xl !border-emerald-200 !bg-white">
          <CardContent className="!grid !items-start !gap-5 !p-5 md:!grid-cols-[1.05fr_0.95fr] md:!p-6">
            <div className="rounded-xl bg-[#f8fffb] p-4 md:p-5">
              <Typography variant="h5" className="!font-sans !font-bold !text-[#1A3C34]">
                {activeContent.title}
              </Typography>
              <Typography className="!mt-3 !font-sans !text-[#355A4F]">{activeContent.text}</Typography>
              <ul className="mt-5 space-y-2.5 text-[#355A4F]">
                {activeContent.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3 py-2 shadow-[0_2px_8px_rgba(6,78,59,0.05)]"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-700">
                      ✓
                    </span>
                    <span className="text-[15px]">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={activeContent.image}
              alt={activeContent.label}
              className="h-48 w-full rounded-xl border border-emerald-100 object-cover md:h-[280px]"
              loading="lazy"
            />
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}

export default FeatureWalkthroughSection
