const mbtn=document.querySelector('.mbtn');
mbtn.addEventListener('click',showMenu);
function showMenu(){
    document.querySelector('.nav').style.display="block";
}

// Countdown Section
function updateOfferTime(){
//   select ids
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const min = document.getElementById('mint');
    const sec = document.getElementById('sec');

// get today Date,hour,minutes and seconds
    const date = new Date();
    const todayDate = date.getDate();
    const todayHours = date.getHours();
    const todayMinutes = date.getMinutes();
    const todaySeconds = date.getSeconds();

/*update on UI
   Offer date is 5 Aug 2020*/
      days.innerHTML=35-todayDate;
      hours.innerHTML=24-todayHours;
      min.innerHTML=60-todayMinutes;
      sec.innerHTML=60-todaySeconds;

}
setInterval(updateOfferTime,1000);



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
// //     // setInterval(callback, 1000);
// //     console.log("scrollll");
// // }

































