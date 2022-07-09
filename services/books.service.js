import axios from "axios";

// 🔽 controllers から入力された緯度経度を取り出す
export const getBooks = async ({auther}) => {
//   console.log(latitude, longitude);
  try {
    // 🔽 天気APIへのリクエストURLに緯度経度を埋め込む
    const url = `https://www.googleapis.com/books/v1/volumes?q=${auther}&maxResults=2`;
    const books = (await axios.get(url));
    return books.data.items; 
  } catch (e) {
    throw Error("Error while getting BooksInfo.");
  }
};