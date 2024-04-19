// 버튼내비이벤트
let btnNav =document.querySelector('.btn-nav');
let elNav = document.querySelector('#header-main nav');
let navNum=1;
function showNav(){
    if(navNum==1){
        elNav.style.height='245px';                
    }else{
        elNav.style.height=0;
    }
    navNum *= -1;
}
// 헤더스크롤이벤트
let _mainHeader = document.getElementById('header-main');
document.addEventListener('scroll',function(){
    let scroll = window.scrollY;
    if(scroll > 50){
        _mainHeader.style.position='fixed';
    }else{
        _mainHeader.style.position='relative';
    }
})
// 슬라이드 이벤트
$(document).ready(function(){
    $(".slider").bxSlider();
})