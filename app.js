const bannerTop = document.querySelector('.banner-top');
const emailInput = document.querySelector('.subscribe-input');
const subscribeBtn = document.querySelector('.subscribe-button');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-button');


// 기능 1. 특정 위치부터 탑 배너 색상 변경
// 기능 2. 스크롤 시 탑 배너 상단에 고정
window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
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

// 기능 1. 이메일 형식 유효성 검사
// 기능 2. 이메일 유효성 검사 통과 + 구독 버튼 클릭 시 모달 창 팝업
// 기능 3. 모달 창 팝업 시 스크롤 불가능
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

// 기능 1. 모달창 내부 버튼 클릭 시 모달 창 닫기
// 기능 2. 모달 창 닫으면 스크롤 다시 가능하게 하기
modalBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    document.body.classList.remove('no-scroll');
})