import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import { Button, Card, CardContent, Container, MenuItem, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react'

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
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const dateInputRef = useRef(null)
  const timeInputRef = useRef(null)

  const openPicker = (inputRef) => {
    if (!inputRef.current) return
    inputRef.current.focus()
    if (typeof inputRef.current.showPicker === 'function') {
      inputRef.current.showPicker()
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
            <CardContent className="!grid !gap-4 !p-6">
              <TextField select label="Timezone" defaultValue={timezoneOptions[0].value} fullWidth>
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

              <TextField label="Your Name" placeholder="Enter your name" fullWidth />
              <TextField label="Email" placeholder="hello@yourcompany.com" type="email" fullWidth />
              <TextField
                label="What would you like to see in the demo?"
                placeholder="White-label branding, owner panel, employee workflow, pricing, etc."
                multiline
                minRows={4}
                fullWidth
              />

              <Button
                variant="contained"
                size="large"
                className="!mt-1 !rounded-full !bg-emerald-500 !px-6 !py-2.5 !font-bold hover:!bg-emerald-600"
              >
                Request Demo Call
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
