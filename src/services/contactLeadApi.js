const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

async function getVisitorLocationDetails() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
  let country = ''

  try {
    const locationResponse = await fetch('https://ipapi.co/json/')
    if (locationResponse.ok) {
      const locationData = await locationResponse.json()
      country = locationData?.country_name || ''
    }
  } catch {
    country = ''
  }

  return { timezone, country }
}

export async function submitContactLead({ fullname, email, message }) {
  const { timezone, country } = await getVisitorLocationDetails()

  const response = await fetch(`${BACKEND_URL}/system/contactlead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullname: fullname.trim(),
      email: email.trim(),
      message: message.trim(),
      timezone,
      country,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to submit contact lead')
  }

  return response
}
