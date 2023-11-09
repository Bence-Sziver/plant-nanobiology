let images = [];
let i = 0;
images[0] = "./res/kezdolap/banner.png";
images[1] = "./res/kezdolap/7sah7.jpg";
images[2] = "./res/kezdolap/abra.jpg";
images[3] = "./res/kezdolap/cht02_25_5.jpg";
images[4] = "./res/kezdolap/gsnor_no_5cp15.jpg";
images[5] = "./res/kezdolap/kontrol_cyc_2.png";
let current = "./res/kezdolap/banner.png";

addEventListener('load', startTimer);

function setImg() {
    i = (i === images.length - 1) ? 0 : i + 1;

    document.querySelector("#fadeImg").src = current;
    document.querySelector("#bannerImg").classList.add("transitioning-src");
    setTimeout(() => {
        document.querySelector("#bannerImg").setAttribute('src', images[i]);
        current = images[i];
        document.querySelector("#bannerImg").classList.remove("transitioning-src");
    }, 400);
}

function startTimer() {
    setInterval(setImg, 5000);
}