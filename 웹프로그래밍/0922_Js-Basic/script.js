// // window.onload = function(){ //}  //사용으로 스크립트 먼저 읽어옴
// console.log("test");
// //크롬 브라우저에서 F12 : 개발자도구
// /*
// DOM (Document Object Model) 문서 객체 모델
// */

// //DOM 찾기

// //doc에서 h1이라는 태그네임으로 찾겠다
// //그 결과값이 const el에 저장
// // const el = document.getElementsByTagName('h1')
// // console.log(el)

// //doc에서 h1이라는 태그네임으로 찾겠다
// //그 결과값이 const el에 저장
// const el = document.querySelector('h1')
// console.log(el) //null 출력
// //위에서부터 아래로 해석. 
// // 스크립트실행시점에서 script.js가 읽히는 시점에 h1이 없어 null값을 읽어옴
// /*<h1>JAVASCRIPT</h1> 
// <script src="script.js"></script> */


const h1 = document.querySelector("h1");
console.log(h1);
// console.dir(h1);

//특정 부모요소 안쪽의 자식 요소 탐색 선택
const title = document.querySelector(".title a");
console.log(title);