module.exports = {
  secret: 'jsonwebtoken',
  refreshTokenSecret: "some-s3cret-refre2h-token",
  tokenLife: 60, // 15 phút
  refreshTokenLife: 900,// một ngày
  url: 'mongodb://localhost:27017/chatbot',
  access_token: 'A3UUASVNN7RW762U5MEYATEZ7YP5OYB3',
  auth: 'Bearer ',
  version: '?v=20200611',
  // url:'mongodb://polo33333:12345678.c@ds135537.mlab.com:35537/ifood',
  default_image: "/images/default_image.png",
  suggest_image: "/images/default_image.png",
  suggest_content: "Ý định của bạn là?",
  server_url: "https://chatbox.tpsoft.vn"
};