const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export async function submitDemoBook(payload) {
  const response = await fetch(`${BACKEND_URL}/system/demobook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullname: payload.fullname.trim(),
      email: payload.email.trim(),
      phone: (payload.phone || '').trim(),
      preferredDate: payload.preferredDate || '',
      preferredTime: payload.preferredTime || '',
      timezone: payload.timezone || '',
      notes: (payload.notes || '').trim(),
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to submit demo booking')
  }

  return response
}
