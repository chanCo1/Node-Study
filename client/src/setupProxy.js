// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
//   app.use(
//     '/api',
//     proxy({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );
// };

// 위에껀 구버전에 해당하는 코드이며 아래 변경된 코드로 사용해야한다.
// 또, .jsx는 인식하지 못하는것 같다.
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};
