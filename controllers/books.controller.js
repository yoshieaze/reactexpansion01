import { getBooks } from "../services/books.service.js";

export const getResult = async (req, res, next) => {
  // ๐ฝ ไฝ่ๆๅ ฑใใปใใใใ
  const auther = req.query.auther ?? `soseki`;
  try {
    // ๐ฝไฝ่ๆๅ ฑใๅๅฒไปฃๅฅใใ
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
