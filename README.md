# React Expansion 01課題

## Google Books APIの追加

## 作成したもの
- Google Books APIを利用して書籍の情報を取得できるものを作成

## 確認手順
- npm startでサーバーを起動
- ブラウザにてlocalhost:3002/books を叩くと、２件の"soseki”に関する書籍が出てくる
- キーワードを渡して検索することも可能。 localhost:3002/books?auther=XXX （XXXは半角英字で入れる e.g. haruki murakami)
  入れたキーワードの書籍情報がヒットしたうちの最初の２件の結果を返す
  
## その他コメント
- React + Node.js楽しみです。
- Node.jsの課題は福岡のLAB生向け講座も受講している関係で、こちらの課題ではportを3002にして作成しております。
