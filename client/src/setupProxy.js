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

/** proxy server를 사용하는 이유
 * - 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어
 * - 캐시를 이용해 더 빠른 인터넷 이용 제공
 * - 더 나은 보안 제공
 * - 이용 제한된 사이트 접근 가능 
 */
