import prisma from '@/server/database'

async function getAllUser(options = {}) {
  const results = await prisma.user
    .findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed get all user. The reasone is ${err}`
      })
    })

  return results
}

async function getUserById(options = {}) {
  const results = await prisma.user
    .findFirst({
      where: {
        id: options.id
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to get user by id, the reason is ${err}`
      })
    })

  return results
}

async function createUser(options = {}) {
  const results = await prisma.user
    .create({
      data: {
        email: options.email,
        password: options.password,
        nickName: options.nickName
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to create an user, the reason is ${err}`
      })
    })

  return results
}

async function updateUserById(options = {}) {
  const results = await prisma.user
    .update({
      data: {
        email: options.email,
        password: options.password,
        nickName: options.nickName
      },
      where: {
        id: options.id
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to update the user by id, the reason is ${err}`
      })
    })

  return results
}

async function deleteUserById(options = {}) {
  const results = await prisma.user
    .delete({
      where: {
        id: options.id
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to delete the user by id, the reason is ${err}`
      })
    })
  return results
}

async function getUserByEmail(option = {}) {
  const results = await prisma.user
    .findFirst({
      where: {
        email: option.email
      }
    })
    .catch((err) => {
      console.error(err)
      throw createError({
        statusCode: 500,
        statusMessage: `Failed to get user by email, the reason is ${err}`
      })
    })
  return results
}

export default {
  getAllUser,
  getUserByEmail,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
}
