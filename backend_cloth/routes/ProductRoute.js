const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct,
  createProductReview,
  getSingleProductReviews,
  deleteProductReview,
} = require("../controller/ProductController");
const { isAuthenticatedUser, authorizedRoles, auth } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizedRoles("admin"), getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct);

router
  .route("/product/:id")
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct)
  .get(getSingleProduct);

router.route("/create/product/review").put(auth, createProductReview); // f
router.route("/product/reviews").put(isAuthenticatedUser, createProductReview); // r

router
  .route("/reviews")
  .get(getSingleProductReviews)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProductReview);

module.exports = router;
