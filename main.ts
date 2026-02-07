import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";
import categoryRouter from "./routes/category.routes.js";
import path from "path";
import orderProductRouter from "./routes/order-product.routes.js";
// import sequelize from "./config/config.js";
dotenv.config();

const app = express();

// cookies

app.use(cookieParser());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static

app.use(
  "/upload/images",
  express.static(path.join(process.cwd(), "upload/images"))
);

// routers

app.use(authRouter);
app.use(categoryRouter);
app.use(orderProductRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ishlayabdi: ${PORT}`);
});
