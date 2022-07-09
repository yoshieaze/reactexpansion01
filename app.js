import express from "express";
// 🔽 追加 おみくじのrouterを読み込む
import { omikujiRouter } from "./routes/omikuji.route.js";
// 🔽 追加 じゃんけんのルーティングを読み込む
import { jankenRouter } from "./routes/janken.route.js";
import { booksRouter } from "./routes/books.route.js";

const app = express();
const port = 3002;
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

app.get("/", (req, res) => {
//   res.send("Hello Node.js!");
res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

// 🔽 追加
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// 🔽 追加 じゃんけんのルーティングを追加
app.use("/janken", (req, res) => jankenRouter(req, res));

// 🔽 books追加
app.use("/books", (req, res) => booksRouter(req, res));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});