let http1 = new XMLHttpRequest();
http1.open("get", "pets.json", true);
http1.send();

http1.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let pets = JSON.parse(this.responseText);
        let output = "";

        for(let item of pets){
            output+= `
              <div class="pet swiper-slide">
                <img class="image" src="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.name}</p>
                <p class="vnd">${item.vnd}</p>
              </div>  
            `
        }
        document.querySelector(".pets").innerHTML = output;
    }
}


let http2 = new XMLHttpRequest();
http2.open("get", "products.json", true);
http2.send();

http2.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";

        for(let item of products){
            output+= `
              <div class="pet swiper-slide">
                <img class="image" src="${item.image}">
                <p class="title">${item.title}</p>
                <p class="description">${item.description}</p>
                <p class="vnd">${item.vnd}</p>
                <p class="gift">${item.gift}</p>
              </div>  
            `
        }
        document.querySelector(".products").innerHTML = output;
    }
}


let http = new XMLHttpRequest();
http.open("get", "frame56.json", true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let cardblog = JSON.parse(this.responseText);
        let output = "";

        for(let item of cardblog){
            output+=`
              <div class="card swiper-slide">
                <img class="image" src="${item.image}">
                <p class="title">${item.title}</p>
                <p class="name">${item.name}</p>
                <p class="description">${item.description}</p>
              </div>  
            `
        }
        document.querySelector(".swiper-wrapper").innerHTML = output;
    }
}

new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3, // Display 3 slides at a time

  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.buttonm2',
      prevEl: '.buttonm1',
    },

    breakpoints: {
      0:{
        slidesPerView: 1
      },
      780: {
        slidesPerView: 3
      }
    }
  
  });

var countDate = new Date("Nov 16, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 *60 * 24)) /  (1000 * 60 *60));
    var minutes = Math.floor((distance % (1000 * 60 *60)) /  (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000); 