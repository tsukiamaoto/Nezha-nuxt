import services from '@/server/services'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  // const userId = parseInt(id, 10) || null

  if (id) {
    const user = await services.user.getUserById({ id })
    return user
  }

  return null
})
