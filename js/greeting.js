const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault()
    const username = loginInput.value

    if (!/^[A-Za-z가-힣0-9]{1,16}$/.test(username)) {
        alert("아이디는 완전한 한글, 영문, 숫자만 쓸 수 있으며 1자 이상에서 16자 이하이어야 합니다")
        return
    }

    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)

    paintGreetings(username)
}

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