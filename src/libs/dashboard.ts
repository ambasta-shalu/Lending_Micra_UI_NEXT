export async function getDashboard() {
  const res = await fetch(`${process.env.API_END_POINT}/common/${process.env.API_VERSION}/dashboard`)
  if (!res.ok) throw new Error('failed to fetch dashboard')
  return res.json()
}