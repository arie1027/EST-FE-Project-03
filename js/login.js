function loadLogin() {

  // 상품 목록 페이지 연결
  const linkToLogin = '../pages/login.html';
  fetch(
    linkToLogin
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

loadLogin();