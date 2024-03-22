let images = [];
let i = 0;
let loc = window.location.pathname.split("/")[1];
let current;
if (loc === "en") {
  images[0] = "../res/kezdolap/csoportkepCropped.jpg";
  images[1] = "../res/kezdolap/banner.png";
  images[2] = "../res/kezdolap/abra.jpg";
  images[3] = "../res/kezdolap/kontrol_cyc_2.png";
  images[4] = "../res/kezdolap/snap_154721_0124.jpg";
  images[5] = "../res/kezdolap/snap_092045_0001.jpg";
  current = "../res/kezdolap/csoportkepCropped.jpg";
} else {
  images[0] = "./res/kezdolap/csoportkepCropped.jpg";
  images[1] = "./res/kezdolap/banner.png";
  images[2] = "./res/kezdolap/abra.jpg";
  images[3] = "./res/kezdolap/kontrol_cyc_2.png";
  images[4] = "./res/kezdolap/snap_154721_0124.jpg";
  images[5] = "./res/kezdolap/snap_092045_0001.jpg";
  current = "./res/kezdolap/csoportkepCropped.jpg";
}

addEventListener("load", startTimer);

function setImg() {
  i = i === images.length - 1 ? 0 : i + 1;

  document.querySelector("#fadeImg").src = current;
  document.querySelector("#bannerImg").classList.add("transitioning-src");
  setTimeout(() => {
    document.querySelector("#bannerImg").setAttribute("src", images[i]);
    current = images[i];
    document.querySelector("#bannerImg").classList.remove("transitioning-src");
  }, 400);
}

function startTimer() {
  setInterval(setImg, 5000);
}
