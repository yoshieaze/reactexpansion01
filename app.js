import express from "express";
// ð½ è¿½å  ãã¿ããã®routerãèª­ã¿è¾¼ã
import { omikujiRouter } from "./routes/omikuji.route.js";
// ð½ è¿½å  ãããããã®ã«ã¼ãã£ã³ã°ãèª­ã¿è¾¼ã
import { jankenRouter } from "./routes/janken.route.js";
import { booksRouter } from "./routes/books.route.js";

const app = express();
const port = 3002;
// ð½ è¿½å  POSTã§ãã¼ã¿ãåãåãããã«å¿è¦
app.use(express.urlencoded({ extended: true }));
// ð½ è¿½å  JSONãã¼ã¿ãä½¿ç¨ããããã«å¿è¦
app.use(express.json());

app.get("/", (req, res) => {
//   res.send("Hello Node.js!");
res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

// ð½ è¿½å 
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// ð½ è¿½å  ãããããã®ã«ã¼ãã£ã³ã°ãè¿½å 
app.use("/janken", (req, res) => jankenRouter(req, res));

// ð½ booksè¿½å 
app.use("/books", (req, res) => booksRouter(req, res));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});