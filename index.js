// Show Nav bar but not hide
// const mbtn=document.querySelector('.mbtn');
// mbtn.addEventListener('click',showMenu);
// function showMenu(){
//     document.querySelector('.nav').style.display="block";
// }


/* Toggle on Nav slider */
$('.mbtn').click(
    function(){
        console.log("Clicked");
        $('.nav').slideToggle();
    }
)




/* Random Quotes */
var quotes=[
    "Everything is easy if your are crazy Nothing will be easy if you are lazy",
    "Life is really generous to those who pursue their personal legend",
    "Change your life today. Don’t gamble on the future, act now, without delay",
    "The only person you are destined to become is the person you decide to be",
    "No one is in control of your happiness but you; therefore, you have the power to change anything about yourself or your life that you want to change",
    "Don’t settle. Don’t finish crappy books. If you don’t like the menu, leave the restaurant. If you’re not on the right path, get off it",
    "You Had the power All Along , My DEAR",
    "Your limitation—it's only your imagination",
    "Push yourself, because no one else is going to do it for you",
    "Success doesn’t just find you. You have to go out and get it"

];
// Generate random number based on array length
function randomNumberGenerator(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    return randomNumber;
}
// Show quote on web 
function randomQuoteGenerator(){
    let getNumber=randomNumberGenerator();
    document.querySelector('.quote').innerHTML=quotes[getNumber];
}
randomQuoteGenerator();  //Calling function


/*Countdown Section*/
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



/*jquery slider slick*/

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

































