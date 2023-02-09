import services from '@/server/services';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  // const userId = parseInt(id, 10) || null

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to get the User id.'
    });
  }

  const results = await services.user.deleteUserById({ id });
  if (!results) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to delete the user.Please try later!'
    });
  }

  return null;
});
