/*
//밖에서 선언하면 계속 오류
//script태그 위에다 놓아서 오류 ㅠㅠ 아직 dom객체 생성전이라 오류발생한다고함.....
//body 클로징태그 위에다 script태그 놓기...
//참고문서 : https://stackoverflow.com/questions/42368773/cannot-read-property-style-of-undefined-uncaught-type-error
//Uncaught TypeError: Cannot read property 'style' of undefined at HTMLDocument.<anonymous>

//const addCommentBtn = document.getElementsByClassName("a-c-i-button")[0];
//const addCommentTxt = document.getElementsByClassName("a-c-i-textarea")[0];

document.addEventListener('keyup', function() {
    const addCommentBtn = document.getElementsByClassName("a-c-i-button")[0];
    const addCommentTxt = document.getElementsByClassName("a-c-i-textarea")[0];

    addCommentBtn.style.color = 
    addCommentTxt.value ? '#2F54FF' : '#0095f6'

    addCommentBtn.style.fontWeight = 
    addCommentTxt.value ? 600 : 400
})
*/

let searchInput = document.getElementsByClassName("input-text")[0];
let searchInputImg = document.getElementsByClassName("input-img")[0];
let addCommentBtn = document.getElementsByClassName("a-c-i-button")[0];
let addCommentTxt = document.getElementsByClassName("a-c-i-addtext")[0];

// 소소하게 걸어준 이벤트..
document.addEventListener('keyup', function(e) {
    searchInputImg.style.left =
    searchInput.value ? '5px' : '75px'

    searchInput.style.paddingLeft = 
    searchInput.value ? '20px' : '5px'
    
    addCommentBtn.style.color = 
    addCommentTxt.value ? '#2F54FF' : '#0095f6'

    addCommentBtn.style.fontWeight = 
    addCommentTxt.value ? 600 : 400
})

// 댓글 추가,삭제 이벤트
function addComment(comment) {
    let addCommentTagDivOut = document.getElementsByClassName("arti-comment")[0];
    let addCommentTagDivIn = document.createElement('div');
    let addCommentTagA = document.createElement('a');
    let addCommentTagSpan = document.createElement('span');
    // 댓글 삭제 버튼
    let addCommentTagButtonDel =document.createElement('button');

    addCommentTagDivIn.className = 'a-t-c-form';
    addCommentTagA.className = 'link a-t-c-userid';
    addCommentTagSpan.className = 'a-t-c-content';
    // 댓글 삭제버튼
    addCommentTagButtonDel.type = 'button';
    addCommentTagButtonDel.className = 'a-t-c-comment-del';
    addCommentTagButtonDel.innerHTML = '삭제';

    addCommentTagA.innerHTML = 'unknown_user'
    addCommentTagSpan.innerHTML = comment;

    addCommentTagDivIn.appendChild(addCommentTagA);
    addCommentTagDivIn.appendChild(addCommentTagSpan);
    // 댓글 삭제버튼
    addCommentTagDivIn.appendChild(addCommentTagButtonDel);
    addCommentTagDivOut.appendChild(addCommentTagDivIn);
}

addCommentTxt.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        if (addCommentTxt.value) {
            addComment(addCommentTxt.value);
        } else {
            alert("댓글을 입력하세요");
        }
    } 
})

/* 뻘짓..-> addCommentBtn.addEventListener('click',addComment(addCommentTxt.value)*/
addCommentBtn.addEventListener('click', function(){
    if (addCommentTxt.value) {
        addComment(addCommentTxt.value);
    } else {
        alert("댓글을 입력헤주세요");
    }
})

/* 삭제구현 다시..
let delCommentBtn = document.querySelector('.a-t-c-comment-del');

delCommentBtn.addEventListener('click', function() {
    addComment(addCommentTxt.value).remove();
})
*/