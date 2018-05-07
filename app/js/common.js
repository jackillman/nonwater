var navMobile = document.querySelector(".nav-mobile");
var headerMenu = document.querySelector(".header__menu");

var storyAnch  = document.getElementById("story");
var storyBlock  = document.querySelector(".story");

var storyClose  = document.querySelector(".story__box-close");
var storyContent  = document.querySelector(".story__content");
var storyContentRight  = document.querySelector(".story__box-right");

var portfolioAnch  = document.getElementById("portfolio");
var portfolioContent  = document.querySelector(".portfolio");

var contactsAnch  = document.getElementById("contacts");
var contactsBlock  = document.querySelector(".contacts");
var contactsContent  = document.querySelector(".contacts__content");
var contactsContentRight  = document.querySelector(".contacts__box-right");

var mobMenu =  document.querySelector(".header__menu");

var condition = false;
var condition1 = false;
var condition2 = false;
var condition3 = false;
var intervalCarousel;
var transforms=80;
// мобильное меню
navMobile.addEventListener("click",function(){
    headerMenu.classList.toggle("active-mob");
})

// убираем мобильное меню при ресайзе
function screen_check(){
    if (window.innerWidth <= 499) { 
        headerMenu.classList.remove("active-mob");
    }else{
        headerMenu.classList.remove("active-mob");
    }
    if (window.innerWidth<=1200 && window.innerWidth>992){
        transforms = 80;
    }else if(window.innerWidth<=991 && window.innerWidth>=768){
        transforms = 75;
    }else if (window.innerWidth<=767){
        transforms = 0; 
    }
}
var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};
screen_check();
addEvent(window, "resize", function(event) {
    screen_check();
});


// нажатие на мою историю
storyAnch.addEventListener("click", function(e){
    e.preventDefault();
    myStopFunction();
    intervalCarousel = setInterval(carouselStart,5000);
    portfolioContent.style.left = "-5500px"
    contactsBlock.style.left = "-5500px";
    condition = !condition;
    storyContentRight.style.opacity = ( condition) ? "1" : "0";
    storyBlock.style.left = ( condition) ? "0" : "-5500px";
    storyContent.style.transform = "translate(0)";
    mobMenu.classList.remove("active-mob");
    condition3 = false;
    condition2 = false;
    condition1 = false;
  }, false);
// нажатие на крестик в моей истории
storyClose.addEventListener("click", function(){
    condition1 = !condition1;
    storyContent.style.transform = ( condition1) ? "translate(-"+transforms+"%)" : "translate(0)";
    storyContentRight.style.opacity = ( condition1) ? "0" : "1";
},false);
// нажатие на портфолио
portfolioAnch.addEventListener("click", function(e){
    e.preventDefault();
    myStopFunction();
    storyBlock.style.left = "-5500px";
    contactsBlock.style.left = "-5500px";
    condition2 = !condition2;
    portfolioContent.style.left = ( condition2) ? "0" : "-5500px";
    mobMenu.classList.remove("active-mob");
    condition = false;
    condition3 = false;
    myStopFunction(intervalCarousel);  
  }, false);
// нажатие на контакты
  contactsAnch.addEventListener("click", function(e){
    e.preventDefault();
    myStopFunction();
    storyBlock.style.left = "-5500px";
    portfolioContent.style.left = "-5500px";
    condition3 = !condition3;
    contactsContentRight.style.opacity = ( condition3) ? "1" : "0";
    contactsBlock.style.left = ( condition3) ? "0" : "-5500px";
    contactsContent.style.transform = "translate(0)";
    mobMenu.classList.remove("active-mob");
    // condition3 = false;
    condition2 = false;
    condition1 = false;
  }, false);

// картинки на бг - слайдер в моей истории
var imgItem = [
    'img/2-front-end.jpg',
    'img/2-front-end1.jpg',
    'img/5-front-end.jpg',
    'img/7-front-end.jpg',
], i=1;

// слайдер в моей истории
function carouselStart(){

if(i > (imgItem.length-1)){
    $('.story__wrap').animate({'opacity':'0'},200,function(){
        i=1;
        $('.story__wrap').css({'background':'url('+imgItem[0]+')'});
    });
    $('.story__wrap').animate({'opacity':'1'},200);
}else{
    $('.story__wrap').animate({'opacity':'0'},200,function(){
        $('.story__wrap').css({'background':'url('+imgItem[i]+')'});
        i++;
    });
    $('.story__wrap').animate({'opacity':'1'},200);
}

}

function myStopFunction() {
        clearInterval(intervalCarousel);
}


// гриды - двух и трех колоночные

var works = [{name:"voila",imgSrc:"img/voila.jpg",hrefSrc:"http://eugeneburlak.in.ua/landings/voila/"},
            {name:"york",imgSrc:"img/york.jpg",hrefSrc:"http://eugeneburlak.in.ua/landings/york/"},
            {name:"aquaphob",imgSrc:"img/aquaphob.jpg",hrefSrc:"http://aquaphob.net/"},
            {name:"portal_ui",imgSrc:"img/portal_ui.jpg",hrefSrc:"http://eugeneburlak.in.ua/landings/portal_ui/"},

            {name:"shoppingbaby index",imgSrc:"img/shopbaby1.png",hrefSrc:"http://eugeneburlak.in.ua/landings/shoppingbaby/index.html"},
            {name:"shoppingbaby catalog",imgSrc:"img/shopbaby2.png",hrefSrc:"http://eugeneburlak.in.ua/landings/shoppingbaby/catalog.html"},
            
            {name:"portfolio_old",imgSrc:"img/portf.jpg",hrefSrc:"http://eugeneburlak.in.ua/landings/portf/"},
            {name:"millidesign",imgSrc:"img/millidesign.jpg",hrefSrc:"http://eugeneburlak.in.ua/landings/millidesign/"},
            {name:"bitcoin",imgSrc:"img/bitcoin.jpg",hrefSrc:"http://eugeneburlak.in.ua/apps/bitcoin/"},
            {name:"likebz",imgSrc:"img/likebz.jpg",hrefSrc:"https://likebz.com.ua/start/"},
            {name:"franchiese",imgSrc:"img/franchiese.png",hrefSrc:"https://nonwater.com/franchiese.php"},
            {name:"axis",imgSrc:"img/axis.png",hrefSrc:"http://eugeneburlak.in.ua/landings/axis/"}
          
            
        ];
var box = document.querySelector(".portfolio__box");
var threeGrid = document.getElementById("threeGrid");
var twoGrid = document.getElementById("twoGrid");
// нажатие на двухколоночный грид
threeGrid.addEventListener("click",function(){
    var html = "";
    works.forEach(function(item,i){
        html+="<div class='col-sm-4'>";
        html+="<div class='portfolio__box-item'>";
        html+="<a href='"+item.hrefSrc+"'>";
        html+="<img src='"+item.imgSrc+"'>";
        html+="<span>"+item.name+"</span></a></div></div>";
    });
   
    box.innerHTML = html;
});
// нажатие на треххколоночный грид
twoGrid.addEventListener("click",function(){
    var html = "";
    works.forEach(function(item,i){
        html+="<div class='col-sm-6'>";
        html+="<div class='portfolio__box-item'>";
        html+="<a href='"+item.hrefSrc+"'>";
        html+="<img class='twice' src='"+item.imgSrc+"'>";
        html+="<span>"+item.name+"</span></a></div></div>";
    });
   
    box.innerHTML = html;
});
// по дефолту двухколоночный грид
portfolio.addEventListener("click",function(){
    var html = "";
    works.forEach(function(item,i){
        html+="<div class='col-sm-4'>";
        html+="<div class='portfolio__box-item'>";
        html+="<a href='"+item.hrefSrc+"'>";
        html+="<img src='"+item.imgSrc+"'>";
        html+="<span>"+item.name+"</span></a></div></div>";
     });
   
    box.innerHTML = html;
});