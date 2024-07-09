export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let post = null;

  if (body.title && body.description && body.userId)
    await event.context.prisma.posts
      .create({
        data: {
          title: body.title,
          description: body.description,
          userId: body.userId,
        },
      })
      .then((response) => {
        post = response;
      });
  return {
    post,
  };
});
