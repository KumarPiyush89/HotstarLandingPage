function loadCoupon() {
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('coupon').style.opacity = '1';
    document.getElementsByTagName('body').style.opacity = '0.6';


}

function closeCoupon() {
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementsByTagName('body').style.opacity = '1';
}

function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('darkmode');

}

let x = document.getElementById('out');
let y = document.getElementById('weatherOut');

function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data) {
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    x.innerText = `Latitude is ${lat} and longitude is ${long}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
        //api calling
    fetch(url, {
            method: 'GET'
        })
        // return promise
        .then((res) => res.json())
        // resolve promise
        .then((data) => {
            console.log(data)
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;
            y.innerText = `Your city is ${cityName} & temp is ${temp} °C`
        })
        .catch((err) => {
            console.log(err)
        })

}

document.getElementById("out").style.color = "white";
document.getElementById("weatherOut").style.color = "white";


const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Carousel functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slider");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides();
