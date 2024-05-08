import { validationResult } from "express-validator";

export const handleInputsErrors = (req, res, next) => {
  const errors = validationResult(req);
  console.log("req.body ", req.body);
  console.log(errors);
  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
