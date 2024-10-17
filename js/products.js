import createFooter from '../components/footer.js';
import createNav from '../components/nav.js';

function loadProducts() {

  // 상품 목록 페이지 연결
  const linkToProducts = '../pages/products.html';
  fetch(
    linkToProducts
  )
    .then((response) => {
      // 응답 실패
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      };

      // html 형식으로 반환
      return response.text();
    })
    .then((data) => {
      document.body.innerHTML = data; 

      document.querySelector('nav').innerHTML = createNav();
      document.querySelector('footer').innerHTML = createFooter();
      return data;
    })
    // 에러 처리
    .catch((error) => {
      console.error(error);

      // 에러 페이지 연결
      const errorLink = '../pages/error.html';
      fetch(
        errorLink
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          document.body.innerHTML = data;
          return data;
        })
        .catch((error) => {
          console.error(error);
        });
    });
};

// popstate 이벤트 리스너 추가
window.onpopstate = (event) => {
  if (event.state) {
    if (event.state.page === 'login') {
      loadLogin(); // 로그인 페이지 로드
    } else {
      loadProducts(); // 기본 페이지 로드
    }
  } else {
    loadProducts(); // 기본 페이지 로드
  }
};

loadProducts();