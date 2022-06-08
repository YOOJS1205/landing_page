const bannerTop = document.querySelector('.banner-top');
const emailInput = document.querySelector('.subscribe-input');
const subscribeBtn = document.querySelector('.subscribe-button');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-button');
const scrollBtn = document.querySelector('.scroll');


// 기능 1-1. 특정 위치부터 탑 배너 색상 변경
// 기능 1-2. 스크롤 시 탑 배너 상단에 고정
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        bannerTop.classList.add('fix');
    } else {
        bannerTop.classList.remove('fix');
    }

    if (window.scrollY >= 800) {
        bannerTop.classList.add('orange');
    } else {
        bannerTop.classList.remove('orange');
    }
})

// 기능 2-1. 이메일 형식 유효성 검사
// 기능 2-2. 이메일 유효성 검사 통과 + 구독 버튼 클릭 시 모달 창 팝업
// 기능 2-3. 모달 창 팝업 시 스크롤 불가능
subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const emailTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (emailTest.test(email) === false) {
        alert('올바른 이메일 형식이 아닙니다.')
    } else {
        modal.classList.remove('hide');
        document.body.classList.add('no-scroll');
    }
})

// 기능 3-1. 모달창 내부 버튼 클릭 시 모달 창 닫기
// 기능 3-2. 모달 창 닫으면 스크롤 다시 가능하게 하기
modalBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    document.body.classList.remove('no-scroll');
})

// 기능 4-1. 스크롤 시 스크롤 탑 버튼 활성화
// 기능 4-2. 페이지 맨 위로 올라오면 스크롤 탑 버튼 비활성화
window.addEventListener('scroll', () => {
    scrollBtn.classList.remove('hide');
    if (!window.scrollY) {
        scrollBtn.classList.add('hide');
    }
})

// 기능 5-1. 스크롤 탑 버튼 클릭 시 페이지 맨 위로 이동
// behavior 파라미터 ie에서 지원 안한다..
scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
})