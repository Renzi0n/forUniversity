// Плавная прокрутка
 $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({scrollTop: top}, 1000);
	});

// Калькулятор
var total = document.getElementById('total'),
    section = document.getElementById('section'),
    elements = document.getElementById('elements'),
    elements2 = document.getElementById('elements2'),
    multip = document.getElementById('pages'),
    product = document.getElementById('productLandind'),
    sect,
    totals,
    elem,
    elem2,
    pag,
    mobile = 0,
    wordp = 0,
    editPrice = 0,
    dopePrice = 0;

const lend = 5000, // цена за лендинг
      start = 500, // минимальная цена
      elem1 = 200, // цена за элемент на сайте
      sect1 = 1000, // Цена за секцию лендинга
      pages = 7000, // начальная цена за многостранничник
      pagesOf = 1500, // цена за страницу
      mob = 1000, // минимальная цена за адаптив
      wp = 3000, // цена wordpress
      edit = 1200, // цена textolite
      dope = 500; // мин. цена за доп. услуги

$('#landing').on('click', function () {
    if ($('#landing').is(':checked')) {
        $('.land').show(700);
        $('#multip').prop('checked', false);
        $('.multi').hide(700);
        $('.two').removeClass('shadow');
        $('.one').addClass('shadow');
        totals = start + lend;
        total.value = totals + +mobile + wordp + editPrice + dopePrice;
        $('.product').show(500);
        product.value = 'Лэндинг ';
        $('.product2').hide(500);
    } else {
    	$('.land').hide(500);
        $('.one').removeClass('shadow');
    	total.value = start + mobile + wordp + editPrice + dopePrice;
        elements.value = '';
        section.value = '';
        $('.product').hide(500);
    };
});

section.addEventListener('change', () => {
    sect = section.value * sect1;
    total.value =  +total.value + sect;
    product.value = 'Лэндинг ' + String(section.value) + ' ' + String(elements.value);
    if (section.value == ''){
    total.value = +totals + elem + mobile + wordp + editPrice + dopePrice;                                                         
    };
    if (section.value == ''){
        if (elements.value == '') {
            total.value = totals + mobile + wordp + editPrice + dopePrice;
        };                                                          
    };
});

elements.addEventListener('change', () => {
    elem = elements.value * elem1;
    total.value = +total.value + elem;
    product.value = 'Лэндинг ' + String(section.value) + ' ' + String(elements.value);
    if (elements.value == ''){
    total.value = +totals + sect + mobile + wordp + editPrice + dopePrice;
    };
    if (elements.value == ''){   
        if (section.value == '') {
            total.value = totals + mobile + wordp + editPrice + dopePrice;
        };
    };
});

$('#multip').on('click', function () {
    if ($('#multip').is(':checked')) {
        $('.multi').show(700);
        $('#landing').prop('checked', false);
        $('.land').hide(700);
        $('.one').removeClass('shadow');
        $('.two').addClass('shadow');
        totals = start + pages;
        total.value = totals + +mobile + wordp + editPrice + dopePrice;
        $('.product').hide(500);
        $('.product2').show(500);
        productPage.value = 'Многостраничник ';
    } else {
    	$('.multi').hide(500);
        $('.two').removeClass('shadow');
    	total.value = start + mobile + wordp + editPrice + dopePrice;
        elements2.value = '';
        pages.value = '';
        $('.product2').hide(500);
    };
});

multip.addEventListener('change', () => {
    pag = multip.value * pagesOf;
    total.value =  +total.value + pag;
    productPage.value = 'Многостраничник ' + String(multip.value) + ' ' + String(elements2.value);
    if (multip.value == ''){
    total.value = +totals + elem2 + mobile + wordp + editPrice + dopePrice;                                                         
    };
    if (multip.value == ''){
        if (elements2.value == '') {
            total.value = totals + mobile + wordp + editPrice + dopePrice;
        };                                                          
    };
});

elements2.addEventListener('change', () => {
    elem2 = elements2.value * elem1;
    total.value = +total.value + elem2;
    productPage.value = 'Многостраничник ' + String(multip.value) + ' ' + String(elements2.value);
    if (elements2.value == ''){
    total.value = +totals + pag + mobile + wordp + editPrice + dopePrice;
    };
    if (elements2.value == ''){   
        if (multip.value == '') {
            total.value = totals + mobile + wordp + editPrice + dopePrice;
        };
    };
});

$('#adapt').on('click', function () {
    if ($('#adapt').is(':checked')) {
        $('.four').addClass('shadow');
        total.value = +total.value + mob;
        mobile = mob;
        $('.product3').show(500);
        productMob.value = 'Адаптивная верстка';
    } else {
        $('.four').removeClass('shadow');
        total.value = +total.value - mob;
        mobile = 0;
        $('.product3').hide(500);
    };
});

$('#wordpress').on('click', function () {
    if ($('#wordpress').is(':checked')) {
        $('.three').addClass('shadow');
        total.value = +total.value + wp;
        wordp = wp;
        $('.product4').show(500);    
        productWp.value = 'WordPress';
    } else {
        $('.three').removeClass('shadow');
        total.value = +total.value - wp;
        wordp = 0;
        $('.product4').hide(500);
    };
});

$('#editor').on('click', function () {
    if ($('#editor').is(':checked')) {
        $('.five').addClass('shadow');
        total.value = +total.value + edit;
        editPrice = edit;
        $('.product5').show(500);    
        productTextolite.value = 'Редактор сайта';
    } else {
        $('.five').removeClass('shadow');
        total.value = +total.value - edit;
        editPrice = 0;
        $('.product5').hide(500);
    };
});

$('#dope').on('click', function () {
    if ($('#dope').is(':checked')) {
        $('.six').addClass('shadow');
        total.value = +total.value + dope;
        dopePrice = dope;
        $('.product6').show(500);    
        productDope.value = 'Доп. услуги';
        $('.dope').show(500);
    } else {
        $('.six').removeClass('shadow');
        total.value = +total.value - dope;
        dopePrice = 0;
        $('.product6').hide(500);
        $('.dope').hide(500);
    };
});

// МЕНЮ
$(window).scroll(function(){
    if ($(this).width() > 200) {
    if ($(window).scrollTop() >= 740) {
    $('.nav').removeClass('sticky');
    $('.menu-btn').show(400);
}; 
    if ($(window).scrollTop() <= 740) {
    $('.nav').addClass('sticky');
    $('.nav').removeClass('fixed');
    $('.navbar').removeClass('fixed');
    $('.menu-btn').css('display', 'none');
    $('.menu-btn').removeClass('borders');
};
};
});
   $('.menu-btn').click(function(){
   $('.nav').toggleClass('fixed', 200);
   $('.navbar').toggleClass('fixed', 200);
   $(this).toggleClass('borders', 500);
});

// Модальные окна
$("[class^='content_']").hide();
  
$(".cont1").click(function(){
    $("[class^='content_']").hide();
    $(".content_1").show();
    $('#exampleModalLong').modal('show');
});
  
$(".cont2").click(function(){
    $("[class^='content_']").hide();
    $(".content_2").show();
    $('#exampleModalLong').modal('show');
});

$('.image1').mouseenter(function(){
   $('.cont1').show(400);
});
$('.image2').mouseenter(function(){
   $('.cont2').show(400);
});
$('.image3').mouseenter(function(){
   $('.cont3').show(400);
});
$('.image4').mouseenter(function(){
   $('.cont4').show(400);
});
$('.image5').mouseenter(function(){
   $('.cont5').show(400);
});
$('.image6').mouseenter(function(){
   $('.cont6').show(400);
});
$('.image7').mouseenter(function(){
   $('.cont7').show(400);
});
$('.image8').mouseenter(function(){
   $('.cont8').show(400);
});
$('.image1').mouseleave(function(){
   $('.cont1').hide(400);
});
$('.image2').mouseleave(function(){
   $('.cont2').hide(400);
});
$('.image3').mouseleave(function(){
   $('.cont3').hide(400);
});
$('.image4').mouseleave(function(){
   $('.cont4').hide(400);
});
$('.image5').mouseleave(function(){
   $('.cont5').hide(400);
});
$('.image6').mouseleave(function(){
   $('.cont6').hide(400);
});
$('.image7').mouseleave(function(){
   $('.cont7').hide(400);
});
$('.image8').mouseleave(function(){
   $('.cont8').hide(400);
});
});