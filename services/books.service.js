import axios from "axios";

// ð½ controllers ããå¥åãããç·¯åº¦çµåº¦ãåãåºã
export const getBooks = async ({auther}) => {
//   console.log(latitude, longitude);
  try {
    // ð½ å¤©æ°APIã¸ã®ãªã¯ã¨ã¹ãURLã«ç·¯åº¦çµåº¦ãåãè¾¼ã
    const url = `https://www.googleapis.com/books/v1/volumes?q=${auther}&maxResults=2`;
    const books = (await axios.get(url));
    return books.data.items; 
  } catch (e) {
    throw Error("Error while getting BooksInfo.");
  }
};