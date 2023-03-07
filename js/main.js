$(function(){

  $('.click').click(function () {
    $('.modal__inner').toggleClass('modal__inner--active');
     
  });

  // Объявить переменную модального окна в текущей области видимости
var modal = document.getElementById('myModal');
// Переменная кнопки, открывающей модальное окно
var btn = document.getElementById('myBtn');
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = 'block';
};
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.onclick = function() {
modal.style.display = 'none';
};
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
};


   $('.experts-slider__inner').slick({
    dots: false,
    slidesToShow: 4,
    // autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
      breakpoint: 1150,
      settings: {
      slidesToShow: 2,
      centerMode: true,
      centerPadding: '15px',   
      prevArrow: '<div class="arrow-mob arrow-mob--prev"><svg width="155" height="16" viewBox="0 0 155 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976257 7.68342 -0.0976257 8.31658 0.292892 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07108 15.0711C8.46159 14.6805 8.46159 14.0474 8.07108 13.6569L2.41422 8L8.07108 2.34315C8.46159 1.95262 8.46159 1.31946 8.07108 0.928932C7.68054 0.538408 7.04738 0.538408 6.65686 0.928932L0.292892 7.29289ZM155 7H1V9H155V7Z" fill="#B1B1B1"/></svg></div>',
    nextArrow: '<div class="arrow-mob arrow-mob--next"><svg width="155" height="16" viewBox="0 0 155 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976257 7.68342 -0.0976257 8.31658 0.292892 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07108 15.0711C8.46159 14.6805 8.46159 14.0474 8.07108 13.6569L2.41422 8L8.07108 2.34315C8.46159 1.95262 8.46159 1.31946 8.07108 0.928932C7.68054 0.538408 7.04738 0.538408 6.65686 0.928932L0.292892 7.29289ZM155 7H1V9H155V7Z" fill="#B1B1B1"/></svg></div>',            
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '20px',   
      prevArrow: '<div class="arrow-mob arrow-mob--prev"><svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 8.70711C-0.0976333 8.31659 -0.0976334 7.68343 0.292892 7.2929L6.65685 0.928939C7.04738 0.538415 7.68054 0.538415 8.07107 0.928939C8.46159 1.31946 8.46159 1.95263 8.07107 2.34315L2.41422 8.00001L8.07107 13.6569C8.46159 14.0474 8.46159 14.6806 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM87 9L1 9.00001L1 7.00001L87 7L87 9Z" fill="#B1B1B1"/></svg></div>',
      nextArrow: '<div class="arrow-mob arrow-mob--next"><svg width="87" height="16" viewBox="0 0 87 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 8.70711C-0.0976333 8.31659 -0.0976334 7.68343 0.292892 7.2929L6.65685 0.928939C7.04738 0.538415 7.68054 0.538415 8.07107 0.928939C8.46159 1.31946 8.46159 1.95263 8.07107 2.34315L2.41422 8.00001L8.07107 13.6569C8.46159 14.0474 8.46159 14.6806 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292893 8.70711ZM87 9L1 9.00001L1 7.00001L87 7L87 9Z" fill="#B1B1B1"/></svg></div>',            
      }
    },    
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 8.70711C7.68341 9.09763 8.31657 9.09763 8.7071 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538409 14.0474 0.538409 13.6568 0.928933L7.99999 6.58579L2.34314 0.928932C1.95261 0.538407 1.31945 0.538407 0.928925 0.928931C0.538401 1.31946 0.538401 1.95262 0.928925 2.34314L7.29289 8.70711ZM6.99999 7L6.99999 8L8.99999 8L8.99999 7L6.99999 7Z" fill="white"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 8.70711C7.68341 9.09763 8.31657 9.09763 8.7071 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538409 14.0474 0.538409 13.6568 0.928933L7.99999 6.58579L2.34314 0.928932C1.95261 0.538407 1.31945 0.538407 0.928925 0.928931C0.538401 1.31946 0.538401 1.95262 0.928925 2.34314L7.29289 8.70711ZM6.99999 7L6.99999 8L8.99999 8L8.99999 7L6.99999 7Z" fill="white"/></svg></div>',
    
  });

   $('.who-2-slider__inner').slick({
    arrows: false,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
   
    responsive: [
    {
      breakpoint: 1100,
      settings: {
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '20px',               
      }
    },
    {
      breakpoint: 500,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '50px',               
      }
    },
  ],
  });

  $('.toggler').on('click', function(){
    $('.toggler').toggleClass('toggler--active');
  });

  // Набор функций
var base = {
	// Поиск элементов по классу
	findClass: function(str, node) {
		 if(document.getElementsByClassName) return (node || document).getElementsByClassName(str);
		 else {
			  var node = node || document, list = node.getElementsByTagName('*'), length = list.length, Class = str.split(/\s+/), classes = Class.length, array = [], i, j, key;
			  for(i = 0; i < length; i++) {
					key = true;
					for(j = 0; j < classes; j++) if(list[i].className.search('\\b' + Class[j] + '\\b') == -1) key = false;
					if(key) array.push(list[i]);
			  }
			  return array;
		 }
	},
	// Добавление обработчиков событий
	bind: function(node, type, listener) {
		if(node.addEventListener) node.addEventListener(type, listener, false);
		//@cc_on node.attachEvent('on' + type, function() { listener.call(node); });
	},
	// Реализация DOMContentLoaded
	init: [],
	ready: function() {
		if(!arguments.callee.done) {
			arguments.callee.done = true;
			if(this.timer) clearInterval(this.timer);
			var i, length = this.init.length;
			for(i = 0; i < length; i++) this.init[i]();
			this.init = [];
		}
	},
	check: function() {
		var _this = this, listener = function() {
			_this.ready();
		};
		if(document.addEventListener) document.addEventListener('DOMContentLoaded', listener, false);
		if(/KHTML|WebKit/i.test(navigator.userAgent)) this.timer = setInterval(function() {
			if(/loaded|complete/.test(document.readyState)) base.ready();
		}, 10);
		/*@cc_on document.write(unescape('%3CSCRIPT onreadystatechange="if(this.readyState==\'complete\') base.ready()" defer=defer src=\/\/:%3E%3C/SCRIPT%3E')); @*/
		this.bind(window, 'load', listener);
	}
};

// Функции для работы с панельками
var toggler = {
	process: function() {
		var i, list = base.findClass('toggler'), length = list.length;
		for(i = 0; i < length; i++) base.bind(list[i], 'click', this.toggle);
		list = base.findClass('content');
		length = list.length;
		for(i = 0; i < length; i++) list[i].style.display = 'none';
	},
	toggle: function() {
		var content = base.findClass('content', this.parentNode)[0], e = arguments[0] || window.event;
		if(content.style.display == 'block') {
			content.style.display = 'none';
			this.innerHTML = 'Показать';
		}
		else {
			content.style.display = 'block';
			this.innerHTML = 'Скрыть';
		}
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	}
};

// Ищем блоки с классом «toggle» по событию DOMContentLoaded
base.init.push(function() {
	toggler.process();
});

// Запускаем проверку готовности DOM
base.check();
   
$('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#about') {
      scrollPoint = scrollPoint - 65;
    } 
    if(scrollAnchor === '#services') {
      scrollPoint = scrollPoint - 65;
    }
    if(scrollAnchor === '#aks') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#news') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

});

var mixer = mixitup('.markets__inner');