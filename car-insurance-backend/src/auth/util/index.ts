export const getJwtPayloadFromUser = (user: {
  _id: string;
  email: string;
}) => ({
  sub: user._id,
  email: user.email,
});
