import jwt from 'jsonwebtoken';

const runtimeConfig = useRuntimeConfig();

export default defineEventHandler((event) => {
  const jwtToken = getCookie(event, 'access_token');

  if (!jwtToken) {
    return;
  }

  try {
    const { data: userInfo } = jwt.verify(jwtToken, runtimeConfig.jwtSignSecret);

    if (userInfo?.id) {
      event.context.auth = {
        user: {
          id: userInfo.id
        }
      };
    }
  } catch (err) {
    console.error(err);
    throw createError({
      statusCode: 401,
      statusMessage: `Unauthorized`
    });
  }
});
