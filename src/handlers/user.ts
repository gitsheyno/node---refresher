import prisma from "../db";
import { hashPassword, createJWT, comparePasswords } from "../modules/auth";

/**
 * Create new User
 */
export const createNewUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.json({ token });
};

/**
 * Sign in user
 */
export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "nope" });
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};
