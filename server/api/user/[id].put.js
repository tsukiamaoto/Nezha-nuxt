import services from '@/server/services';

export default defineEventHandler(async (event) => {
  const id = event.context.params;
  // const userId = parseInt(id, 10) || null

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to get the User id.'
    });
  }

  const body = await readBody(event);
  const results = await services.user.updateUserById({
    id,
    ...body
  });

  if (!results) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Failed to create an user.Please try later!'
    });
  }

  return results;
});
