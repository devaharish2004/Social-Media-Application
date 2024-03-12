import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 6001;

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
