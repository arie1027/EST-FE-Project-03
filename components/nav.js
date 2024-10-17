const createNav = () => {
  // loadLogin 함수를 전역으로 등록
  window.loadLogin = () => {
    const linkToLogin = '../pages/login.html';
    
    fetch(linkToLogin)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        document.body.innerHTML = data;

        // 히스토리에 상태 추가
        window.history.pushState({ page: 'login' }, 'Login', linkToLogin);
      })
      .catch((error) => {
        console.error(error);
        // 에러 페이지 연결
        const errorLink = '../pages/error.html';
        fetch(errorLink)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
          })
          .then((data) => {
            document.body.innerHTML = data;
          })
          .catch(console.error);
      });
  };

  return `
    <div>
      nav입니다.
    </div>
    <button>
      장바구니
    </button>
    <button onclick="loadLogin()">
      로그인
    </button>
  `;
};

export default createNav;