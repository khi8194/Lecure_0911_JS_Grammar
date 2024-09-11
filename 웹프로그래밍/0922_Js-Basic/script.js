// //단수의 html요소 선택시
// const h1 = document.querySelector("h1");
// console.log(h1);
// // console.dir(h1);

// //특정 부모요소 안쪽의 자식 요소 탐색 선택
// const title = document.querySelector(".title a");
// console.log(title);

// //복수개 요소 탐색하는 방법
// const list = document.querySelectorAll('ul li');
// // console.log(list);
// // console.log(list[1]);

// //배열형태로 반환된 복수개의 html요소 하나씩 선택
// // for(let i=0; i<4; i++) {
// //     console.log(list[i]);
// // }


// //화살표함수 표현식과 forEach 내장함수를 이용한 DOM반복 선택방법
// //배열.forEach((반복요소,순번)=>{반복코드})
// list.forEach((el) => console.log(el));


// //자바스크립트에서 함수 만드는 법
// //1. 함수선언식
// function plus (num1, num2) {
//     const result = num1+num2;
//     return result;
// }
// console.log(plus(2,4));

// //2. 함수표현식 (변수에 익명함수 대입)
// const minus = function(num1,num2) {
//     const result = num1 - num2;
//     return result;
// };
// console.log(minus(3,1));

// //3. 화살표 함수로 축약된 함수 표현식
// // 화살표 함수에서는 function 키워드 생략, 중괄호 안쪽에 return 문만 있으면 중괄호와 return문도 생략 가능
// //화살표 함수는 단지 기존 코드의 축약 말고도
// //함수 내부의 this 객체 생성을 막아서 고정해주는 효과 (객체지향 프로그램시 필요)
// const multiply = (num1, num2) => num1*num2;
// console.log(multiply(3,3));

const h1 = document.querySelector("h1");
const link = document.querySelector(".title a");
const list = document.querySelectorAll('ul li');

console.dir(h1);
console.dir(link);
console.dir(list[0]);

//DOM 스타일 제어
h1.style.backgroundColor = 'pink'; //h1 배경컬러 핑크 설정
h1.style.fontSize = '10rem'; //h1 폰트사이즈 설정


//DOM 속성 변경 (attribute 변경)
link.href = "https://www.naver.com";


//DOM의 텍스트 변경 (textnode)
list[0].innerText = "목록1";

//DOM의 html 구성 변경 (elementNode)
list[1].innerHTML = '<span>list2</span>';

//이벤트 : 사용자, 시스템이 웹상에서 발생시키는 모든 액션
// 사용자 이벤트 : click, mouseovr, mouseout, resize, scroll, mousewheel, mousemove 
// 시스템 이벤트 : load, error

//DOM의 이벤트설정
list[2].onclick = () => {
    console.log("You click list3");
};
