import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded'
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded'
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import EventSeatRoundedIcon from '@mui/icons-material/EventSeatRounded'
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded'
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded'
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded'
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded'
import PriceChangeRoundedIcon from '@mui/icons-material/PriceChangeRounded'
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded'
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded'
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded'
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded'
import { Card, CardContent, Container, Typography } from '@mui/material'

const featureIconMap = {
  'Smart POS Core': <PointOfSaleRoundedIcon fontSize="small" />,
  'Dynamic Dashboard': <DashboardRoundedIcon fontSize="small" />,
  'Multi Restaurant': <RestaurantRoundedIcon fontSize="small" />,
  'Multi Branch Support': <StorefrontRoundedIcon fontSize="small" />,
  'Live Analytics': <BarChartRoundedIcon fontSize="small" />,
  'Order Reports': <AssessmentRoundedIcon fontSize="small" />,
  'QR Based Menu': <QrCode2RoundedIcon fontSize="small" />,
  'Table Reservation': <EventSeatRoundedIcon fontSize="small" />,
  'KOT Feature': <ReceiptLongRoundedIcon fontSize="small" />,
  'Combo Meals': <FastfoodRoundedIcon fontSize="small" />,
  'Addon Meals': <AddCircleOutlineRoundedIcon fontSize="small" />,
  'Branch Pricing': <PriceChangeRoundedIcon fontSize="small" />,
  'Staff Scheduling': <GroupsRoundedIcon fontSize="small" />,
  'Digital Invoice': <DescriptionRoundedIcon fontSize="small" />,
  'Fiscal Year Reports': <AccountBalanceRoundedIcon fontSize="small" />,
  'Multi Currency': <CurrencyExchangeRoundedIcon fontSize="small" />,
  'Multi Language': <LanguageRoundedIcon fontSize="small" />,
  'Customer Reviews': <StarRateRoundedIcon fontSize="small" />,
  'Referral System': <ShareRoundedIcon fontSize="small" />,
  Coupon: <ConfirmationNumberRoundedIcon fontSize="small" />,
  'Help Center': <ContactSupportRoundedIcon fontSize="small" />,
  'Tax Report': <CalculateRoundedIcon fontSize="small" />,
  'Branch Wise Report': <PieChartRoundedIcon fontSize="small" />,
  Subscription: <SubscriptionsRoundedIcon fontSize="small" />,
}

function SoftwareFeaturesGridSection({ features }) {
  const sortedFeatures = [...features].sort((a, b) => a.priority - b.priority)

  return (
    <section id="all-features" className="bg-white py-16">
      <Container maxWidth="lg">
        <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34]">
          All Software Features
        </Typography>
        <Typography className="!mt-3 !font-sans !text-[#355A4F]">
          Explore every SavoryOps capability in one section, shown feature-wise as clear cards.
        </Typography>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedFeatures.map((feature) => (
            <Card key={feature.title} className="!border-emerald-100 !bg-[#f8fffb]">
              <CardContent>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-emerald-100">
                  <span className="inline-flex items-center justify-center leading-none text-emerald-600">
                    {featureIconMap[feature.title] ?? <LaptopMacRoundedIcon fontSize="small" />}
                  </span>
                </div>
                <Typography variant="h6" className="!font-sans !font-bold !text-[#1A3C34]">
                  {feature.title}
                </Typography>
                <Typography className="!mt-2 !font-sans !text-sm !text-[#355A4F]">
                  {feature.details}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SoftwareFeaturesGridSection
