// DOM 객체(form, input, h1)를 변수에 할당하기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting')

// DOM 객체의 동적 변경을 위해 클래스 이름을 변수에 할당하기
const HIDDEN_CLASSNAME = "hidden"

// Local Storage의 username키를 변수에 할당하기
const USERNAME_KEY = "username"

// form이 submit되었을 때 실행될 함수
function onLoginSubmit(event) {
    event.preventDefault()

    // form이 submit되었을 때 로그인 창을 없애기 위해 클래스 이름('hidden')을 추가함
    loginForm.classList.add(HIDDEN_CLASSNAME)

    const username = loginInput.value

    // submit된 username을 Local Storage에 저장함
    localStorage.setItem(USERNAME_KEY, username)

    // input에 기입된 username을 바탕으로 환영 인사 문구를 활성화함
    paintGreetings(username)
}

// username을 인수로 받아 환영 인사를 활성화하는 함수
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// Local Storage에 저장된 username을 변수에 할당(만약 존재하지 않을 경우 null값이 할당됨)
const savedUsername = localStorage.getItem(USERNAME_KEY)


if (savedUsername === null) {

    // Local Storage에 저장된 username이 없을 경우 로그인 창을 활성화함
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {

    // Local Storage에 저장된 username이 있을 경우 환영 인사를 활성화함
    paintGreetings(savedUsername)
}