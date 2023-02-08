import bcrypt from 'bcrypt'
import services from '@/server/services'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = await services.user.getUserByEmail({
    email: body.email
  })

  if (user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A user with this email address already exists.'
    })
  }

  const results = await services.user.createUser({
    email: body.email,
    password: bcrypt.hashSync(body.password, 10)
  })

  if (!results) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to create an user.Please try later!'
    })
  }

  return results
})
