$(function(){

   $('.experts-slider__inner').slick({
    dots: false,
    slidesToShow: 4,
    // autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: '<div class="arrow arrow--prev"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 8.70711C7.68341 9.09763 8.31657 9.09763 8.7071 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538409 14.0474 0.538409 13.6568 0.928933L7.99999 6.58579L2.34314 0.928932C1.95261 0.538407 1.31945 0.538407 0.928925 0.928931C0.538401 1.31946 0.538401 1.95262 0.928925 2.34314L7.29289 8.70711ZM6.99999 7L6.99999 8L8.99999 8L8.99999 7L6.99999 7Z" fill="white"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.29289 8.70711C7.68341 9.09763 8.31657 9.09763 8.7071 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928933C14.6805 0.538409 14.0474 0.538409 13.6568 0.928933L7.99999 6.58579L2.34314 0.928932C1.95261 0.538407 1.31945 0.538407 0.928925 0.928931C0.538401 1.31946 0.538401 1.95262 0.928925 2.34314L7.29289 8.70711ZM6.99999 7L6.99999 8L8.99999 8L8.99999 7L6.99999 7Z" fill="white"/></svg></div>',
  });

   $('.who-2-slider__inner').slick({
    // dots: false,
    arrows: false,
    // fade: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.toggler').on('click', function(){
    $('.toggler').toggleClass('toggler--active');
  });

  // $('.toggler').click(function(e) {
  // e.preventDefault();
  // $(this).find('.toggler').toggleClass('toggler--active');
  // });

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
   
//  $(".menu__link, .header__link, .logo").on("click", function(event){
//         event.preventDefault();
//         var id = $(this).attr('href'),
//         top = $(id).offset().top;
//         $('.header__top').toggleClass('header__top--fixed');
//         $('body,html').animate({scrollTop: top-82}, 3500);
//     });

  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#contacts') {
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