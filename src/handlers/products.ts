import prisma from "../db";

/**
 * all Products
 */
const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      Product: true,
    },
  });
  return res.json({ data: user.Product, error: [] });
};

/**
 * one Product
 */
const getOneProduct = async (req, res) => {
  const id = req.params.id;

  const product = await prisma.product.findUnique({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });

  res.json({ data: product });
};
