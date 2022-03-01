import {toDos, toDoForm, toDoList} from "./todo.js"

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form__input");
const logoutForm = document.querySelector(".logout-form");
const greeting = document.querySelector('.title__text');

export default function login() {
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

        // todo.js의 ToDoForm, ToDoList DOM 객체의 hidden 클래스를 제거함
        toDoForm.classList.remove(HIDDEN_CLASSNAME)
        toDoList.classList.remove(HIDDEN_CLASSNAME)

        localStorage.setItem(USERNAME_KEY, username)

        logoutForm.classList.remove(HIDDEN_CLASSNAME)
        paintGreetings(username)
    }

    function onLogoutSubmit(event) {
        event.preventDefault();

        logoutForm.classList.add(HIDDEN_CLASSNAME);
        greeting.innerText = 'ToDo List';
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginInput.value = '';

        // todo.js의 ToDoForm, ToDoList DOM 객체의 hidden 클래스를 추가함
        toDoForm.classList.add(HIDDEN_CLASSNAME);
        toDoList.classList.add(HIDDEN_CLASSNAME);

        localStorage.clear();

        // todo.js의 todos 변수를 초기화하고 toDoList 변수의 자식 엘리먼트들을 모두 삭제함
        toDos = [];
        [...toDoListContentWrapper.childNodes].forEach(li => li.remove())
    }

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`
    }

    loginForm.addEventListener('submit', onLoginSubmit);
    logoutForm.addEventListener('submit', onLogoutSubmit);

    // Local Storage에 저장된 username을 변수에 할당(만약 존재하지 않을 경우 null값이 할당됨)
    const savedUsername = localStorage.getItem(USERNAME_KEY)

    if (savedUsername === null) {

        // Local Storage에 저장된 username이 없을 경우 로그인 창을 활성화함
        loginForm.classList.remove(HIDDEN_CLASSNAME)

    } else {

        toDoForm.classList.remove(HIDDEN_CLASSNAME)
        toDoList.classList.remove(HIDDEN_CLASSNAME)
        logoutForm.classList.remove(HIDDEN_CLASSNAME);
        // Local Storage에 저장된 username이 있을 경우 환영 인사를 활성화함
        paintGreetings(savedUsername)

    }
}
