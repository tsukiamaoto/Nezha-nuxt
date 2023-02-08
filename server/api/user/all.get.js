import services from '@/server/services'

export default defineEventHandler(async () => {
  const allUsers = await services.user.getAllUser()
  return allUsers
})
