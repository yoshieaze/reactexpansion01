import { getBooks } from "../services/books.service.js";

export const getResult = async (req, res, next) => {
  // 🔽 作者情報をセットする
  const auther = req.query.auther ?? `soseki`;
  try {
    // 🔽作者情報を分割代入する
    const result = await getBooks({auther});
    return res.status(200).json({
      status: 200,
      data: result,
      message: "Successfully get Booksinfo!",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
