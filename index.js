const mbtn=document.querySelector('.mbtn');
mbtn.addEventListener('click',showMenu);
function showMenu(){
    document.querySelector('.nav').style.display="block";
}


// jquery slider slick

$('.testimonial__content').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
});

$(document).ready(function () {
    $('.notshow').removeClass('notshow');
});























// // Slider in testimonial 
// const testimonials = document.querySelectorAll('.testimonial');
// const testimonial_content=document.querySelector('.testimonial__content');
// let index=0;
// function showTestimonial(){
//   if(index<testimonials.length){
//       index+=1;
//            console.log((testimonials[index - 1]));
//         testimonial_content.insertAdjacentElement('afterbegin',testimonials[index-1]);
       
//     //   return testimonials[index-1];
//   }
//   else{
//       index=0;
//       index+=1;
//       console.log(testimonials[index - 1]);
//     //   return testimonials[index-1];
//   }
// }

// //  setInterval(showTestimonial,2000);

// // var testi = document.querySelectorAll('.testimonials');

// // window.addEventListener('scroll',handleScroll);
// // function handleScroll(){
// //     // setInterval(callback, 100000);
// //     console.log("scrollll");
// // }

































