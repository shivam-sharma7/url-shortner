import express from "express";
import {
  createUrl,
  getAllUrl,
  getUrlById,
  deleteUrl,
} from "../controller/shortUrl";
const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrlById);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
