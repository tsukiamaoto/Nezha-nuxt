import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import services from '@/server/services'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = await services.user.getUserByEmail({
    email: body.email
  })

  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'email or password is incorrect'
    })
  }

  if ((await bcrypt.compare(body.password, user.password)) !== true) {
    throw createError({
      statusCode: 400,
      statusMessage: 'email or password is incorrect'
    })
  }

  const jwtTokenPayload = {
    id: user.id
  }

  const maxAge = 60 * 60 * 24 * 7 // 7天過期
  const expires = Math.floor(Date.now() / 1000) + maxAge

  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSignSecret
  )

  setCookie(event, 'access_token', jwtToken, {
    httpOnly: true,
    maxAge,
    expires: new Date(expires * 1000),
    secure: process.env.NODE_ENV === 'production',
    path: '/'
  })

  return user
})
