// Database
const type = ["produce", "project", "project"];
const title = ["Myself", "My Projects", "My Projects"];
const link = [
  null,
  {
    demo: "https://tonthong.github.io/WebCoure/",
    source: "https://github.com/TonThong/WebCoure",
  },
  {
    demo: "https://house-clone.vercel.app/",
    source: "https://github.com/TonThong/HouseClone",
  },
];
const introDescriptions = [null, "Website Course", "T Daily"];
const images = [
  "./assets/images/MyAvatar.jpg",
  "./assets/images/LandingPage.png",
  "./assets/images/TDaily.png",
];
const description = [
  "I'm a self-taught front-end web developer seeking an entry-level position. I hope to share my skills, expertise, and experience with your organization and clients.",
  "The website 'Website Course' by Ton That Thong is a landing page use for offers various AI-powered tools and resources for web development.",
  `The "T Daily" website provides a real estate platform featuring property listings. Users can browse various property options with details like prices, locations, and images.`,
];
const more = {
  education: ["Ton Duc Thang University 2023-2027"],
  skills: ["HTML,CSS,JS", "ReactJs, React Hooks, Redux", "Git, GitHub, VsCode"],
  contact: {
    phone: "+84774565578",
    email: "tonthong.work@gmail.com",
    address: "Ho Chi Minh City, Viet Nam",
    github: "https://github.com/TonThong",
  },
};

// Render
const introPage = document.querySelector(".intro-page");
const infoPage = document.querySelector(".info-page");
let index = 0;

function IntroPage(type, title, images, introDescriptions, more) {
  if (type == "produce") {
    return `<h3>${title}</h3>
        <img src="${images}" />
        <p>Ton That Thong</p>`;
  } else if (type == "project") {
    return `<h3>${title}</h3>
        <img id="projects" src="${images}" />
        <p>${introDescriptions}</p>`;
  }
}

function InfoPage(type, description, link, more) {
  if (type == "produce") {
    return `<p>I'm a <strong>front-end</strong> web developer</p>
        <h3>Contact with me</h3>
        <div>
          Phone:
          <p>${more.contact.phone}</p>
        </div>
        <div>
          Email:
          <p>${more.contact.email}</p>
        </div>
        <div>
          Address:
          <p>${more.contact.address}</p>
        </div>
        <div>
          Github:
          <a href="https://github.com/TonThong" target="_blank">
          ${more.contact.github}
          </a>`;
  } else if (type == "project") {
    return `<h4>
          ${description}
        </h4>
        <div>
          Preview:
          <a href=${link.demo} target="_blank">
            Link to Website
          </a>
        </div>
        <div>
          SourceCode:
          <a href=${link.source} target="_blank">
            Link to Source
          </a>
        </div>`;
  }
}
// Animation
function SlideToRight() {
  if (index == 0) {
    return;
  }

  let slidePage = document.querySelector(".page-slide-right");
  slidePage.style.zIndex = "10";
  slidePage.style.transition = "all 1.5s";
  slidePage.style.transform =
    "rotateX(15deg) translateY(calc(-70% - 10px)) translateX(-100%) rotateY(180deg)";
  setTimeout(() => {
    slidePage.style.zIndex = "1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform =
      "rotateX(15deg) translateY(calc(-70% - 10px)) translateX(-100%)";
  }, 1500);
  index -= 1;
  setTimeout(() => {
    introPage.innerHTML = IntroPage(
      type[index],
      title[index],
      images[index],
      introDescriptions[index]
    );
  }, 200);
  setTimeout(() => {
    infoPage.innerHTML = InfoPage(
      type[index],
      description[index],
      link[index],
      more
    );
  }, 1500);
}

function SlideToLeft() {
  if (index == type.length) {
    return;
  }

  let slidePage = document.querySelector(".page-slide-left");
  slidePage.style.transition = "all 1.5s";
  slidePage.style.zIndex = "10";
  slidePage.style.transform =
    "rotateX(15deg) translateY(calc(-70% - 10px)) rotateY(-180deg)";
  setTimeout(() => {
    slidePage.style.zIndex = "-1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform = "rotateX(15deg) translateY(calc(-70% - 10px))";
  }, 1500);
  index += 1;
  setTimeout(() => {
    introPage.innerHTML = IntroPage(
      type[index],
      title[index],
      images[index],
      introDescriptions[index]
    );
  }, 1300);
  setTimeout(() => {
    infoPage.innerHTML = InfoPage(
      type[index],
      description[index],
      link[index],
      more
    );
  }, 200);
}

let myTimeOut;
function HandleOpen(checkbox) {
  let pageSlideRight = document.querySelector(".page-slide-right");
  let pageSlideLeft = document.querySelector(".page-slide-left");
  let pagePreview = document.querySelector(".page-preview");
  let preview = document.querySelector(".preview");
  if (checkbox.checked == true) {
    myTimeOut = setTimeout(() => {
      pageSlideRight.style.display = "block";
      pageSlideLeft.style.display = "block";
      pagePreview.style.display = "flex";
      preview.style.display = "block";
    }, 1500);
  } else {
    clearTimeout(myTimeOut);
    console.log(checkbox.checked);
    pagePreview.style.display = "none";
    pageSlideRight.style.display = "none";
    preview.style.display = "none";
    pageSlideLeft.style.display = "none";
  }
}
