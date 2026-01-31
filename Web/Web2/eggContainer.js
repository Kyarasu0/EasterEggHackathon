const container = document.getElementById("eggContainer");

/*
  文字列でもOK
  オブジェクトでもOK
*/
const sponsorImages = [
  { src: "images/sponsors/RiSRiST.jpg", color: "#ffffff" },
  { src: "images/sponsors/TechTrain.png", color: "#d1f0ff" },
  { src: "images/sponsors/Horizon.png", color: "#ffffff" },
  { src: "images/sponsors/MomoyamaTech_framed2.png", color: "#000000" },
  { src: "images/sponsors/random_logo.webp", color: "#f0d1ff" },
];

function loadSponsors() {
  sponsorImages.forEach((item) => {

    let src;
    let color = "#ffffff"; // デフォルト色

    // 文字列 or オブジェクト判定
    if (typeof item === "string") {
      src = item;
    } else {
      src = item.src;
      color = item.color || "#ffffff";
    }

    const egg = document.createElement("div");
    egg.className = "egg";
    egg.style.background = color;

    const img = document.createElement("img");
    img.src = src;

    egg.appendChild(img);
    container.appendChild(egg);
  });
}

loadSponsors();
