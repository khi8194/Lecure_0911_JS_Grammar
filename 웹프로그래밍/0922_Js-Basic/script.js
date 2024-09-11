//단수의 html요소 선택시
const h1 = document.querySelector("h1");
console.log(h1);
// console.dir(h1);

//특정 부모요소 안쪽의 자식 요소 탐색 선택
const title = document.querySelector(".title a");
console.log(title);

//복수개 요소 탐색하는 방법
const list = document.querySelectorAll('ul li');
// console.log(list);
// console.log(list[1]);

//배열형태로 반환된 복수개의 html요소 하나씩 선택
for(let i=0; i<4; i++) {
    console.log(list[i]);
}
