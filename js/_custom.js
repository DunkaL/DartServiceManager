

document.addEventListener("DOMContentLoaded", function() {
	
    new WOW().init();

	let introVideoBtn = document.querySelector('#intro-video-btn')

	const accordionItemHeader = document.querySelectorAll('.accordion-item-header');
	accordionItemHeader.forEach(accordionItemHeader => {
		accordionItemHeader.addEventListener('click', ev => {
			const currentlyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active');
			if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
				currentlyActiveAccordionItemHeader.classList.toggle('active');
				currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
			}

			accordionItemHeader.classList.toggle('active');
			const accordionItemBody = accordionItemHeader.nextElementSibling;
			if (accordionItemHeader.classList.contains('active')) {
				accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
			}else{
				accordionItemBody.style.maxHeight = 0;
			}
		})
	})

	$('.slider-slick').slick({
		vertical: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		centerPadding: 0,
		prevArrow: '<div class="slider-slick-arrow slider-slick-prev"><i class="far fa-angle-up"></i></div>',
		nextArrow: '<div class="slider-slick-arrow slider-slick-next"><i class="far fa-angle-down"></i></div>',
		// autoplay: true,
		autoplaySpeed: 3000,
	});


	$('.team-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.team-slider-nav',
		swipe: false
	});
	$('.team-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: 0,
		asNavFor: '.team-slider-for',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	introVideoBtn.addEventListener('click',(e) => {
		let video = e.currentTarget.closest('.intro-video').querySelector('video');
		video.play();
		$('.intro-video').addClass('intro-video--play')
		setTimeout(	()=>{
			$('.intro-video .intro-video-block').css({'display':'none'})
		}, 500)
	})

	$('#navOpen').click(function(){
		$('#headerNav').addClass('right-1')
		$('body').addClass('overflow-hidden')
	})
	
	$('#navClose').click(function(){
		$('#headerNav').removeClass('right-1')
		$('body').removeClass('overflow-hidden')
	})

});
