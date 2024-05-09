import { Router } from "express";
import { body, oneOf } from "express-validator";
import { handleInputsErrors } from "./modules/middlewares";
import { createProduct, getProducts } from "./handlers/products";
const router = Router();

/**
 * Product
 */

router.get("/product", getProducts);

router.get("/product/:id", (req, res) => {});
router.post(
  "/product/",
  body("name").isString(),
  handleInputsErrors,
  createProduct
);
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputsErrors,
  (req, res) => {}
);
router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */
router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  (req, res) => {}
);

router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  (req, res) => {}
);

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);

router.delete(
  "/updatepoint/:id",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);

console.log("hello", process.env.JWT_SECRET);

export default router;
