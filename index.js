const navItemList = document.querySelectorAll(".nav-item");

const cityPropertyAddress = document.getElementById("city-property-address");
const cityPropertySize = document.getElementById("city-property-size");
const cityPropertyTime = document.getElementById("city-property-time");
const cityPropertyCondition = document.getElementById("city-property-condition");
const imageItem = document.querySelector(".image-wrapper__item");

const switchPageList = document.querySelectorAll(".page-wrapper__rectangle");

const arrowLeft = document.getElementById("page-wrapper__left-arrow");
const arrowRight = document.getElementById("page-wrapper__right-arrow");

class Room {
    constructor(address, apartmentSize, repairTime, condition, image) {
        this.address = address;
        this.apartmentSize = apartmentSize;
        this.repairTime = repairTime;
        this.condition = condition;
        this.image = image;
    }
}

const room1 = new Room (
    "Rostov-on-Don <br> LCD admiral",
    "81 m2",
    "3.5 months",
    "Upon request",
    "./image/image_1.jpg");

const room2 = new Room (
    "Sochi <br> Thieves",
    "105 m2",
    "4 months",
    "Upon request",
    "./image/image_2.jpg");

const room3 = new Room (
    "Rostov-on-Don <br> Patriotic",
    "93 m2",
    "3 months",
    "Upon request",
    "./image/image_3.jpg");
    
let roomList = [];

roomList.push(room1);
roomList.push(room2);
roomList.push(room3);

let currentIndex = 0;

for (let index = 0; index < navItemList.length; index++) {
    navItemList[index].addEventListener("click", (item) => {
        item.preventDefault();

        switchImage(index);
        swithPage(index);

        currentIndex = index;
    })
}

for (let index = 0; index < switchPageList.length; index++) {
    switchPageList[index].addEventListener("click", item => {
        item.preventDefault();

        switchImage(index);
        swithPage(index);

        currentIndex = index;
    })
}

arrowLeft.addEventListener("click", item => {
    if (currentIndex == 0) {
        currentIndex = 3;
    }
    currentIndex--;
    switchImage(currentIndex);
    swithPage(currentIndex);
})

arrowRight.addEventListener("click", item => {
    if (currentIndex == 2) {
        currentIndex = -1;
    }
    currentIndex++;
    switchImage(currentIndex);
    swithPage(currentIndex);
})

function switchImage(index) {
    cityPropertyAddress.innerHTML = roomList[index].address;
    cityPropertySize.innerHTML = roomList[index].apartmentSize;
    cityPropertyTime.innerHTML = roomList[index].repairTime;
    cityPropertyCondition.innerHTML = roomList[index].condition;
    imageItem.src = roomList[index].image;
}

function swithPage(index) {
    switchPageList.forEach(element => {
        element.classList.add("rectangle-disable");
    });

    navItemList.forEach(element => {
        element.classList.remove("active");
    });

    switchPageList[index].classList.remove("rectangle-disable");
    navItemList[index].classList.add("active");
}



