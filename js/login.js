/* Uncaught TypeError : Cannot read property발생
// 밖에서 변수 선언하면 에러남... scope pollution??
const id = document.getElementsByClassName("input-info")[0];
const pw = document.getElementsByClassName("input-info")[1];
const buttonChange = document.getElementsByTagName("button")[0];

// 위에서 만든 변수로 이벤트 걸어도 오류... 
// login.js:9 Uncaught TypeError: Cannot read property 'value' of undefined at HTMLDocument.<anonymous> (login.js:9)
document.addEventListener('keypress', function() {  
    if (id.value.length > 0 && pw.value.length > 0) {
        buttonChange.style.backgroundColor = '#0562f7';
    }
})

// 이렇게 하면
// Uncaught TypeError: Cannot read property 'addEventListener' of undefined
pw.addEventListener('keypress', function() {  
    if (id.value.length > 0 && pw.value.length > 0) {
        buttonChange.style.backgroundColor = '#0562f7';
    }
})
*/

// 밖에서 선언하면 오류.. 클래스 이름이 같아서 문제??
// 아니
// script태그 위에다 놓아서 오류 ㅠㅠ 아직 dom객체 생성전이라 오류발생한다고함.....
// body 클로징태그 위에다 script태그 놓기...
document.addEventListener('keyup', function() {
    const idCheck = document.getElementsByClassName("input-info")[0];
    const pwCheck = document.getElementsByClassName("input-info")[1];
    const btChange = document.getElementsByTagName("button")[0];

    btChange.style.backgroundColor = idCheck.value && pwCheck.value ? '#0562f7' : 'rgba(0,149,246,.3)'
})
