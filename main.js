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
const technologies = [
  null,
  "HTML, CSS, Javascript, Slick slider, ...",
  "HTML, CSS, Javascript, React, React hooks, axios, JSON sever, JWT, ...",
];
const features = [
  null,
  ["Responsive on Mobile, Tablet,… "],
  [
    "Create, delete folder and save, delete projects to the folder ",
    "Deploy on Vercel",
    "Pagination",
    "Login, Logout",
    "Mock API with JSON Server ",
  ],
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
  descriptionMySelf:
    "I'm a front-end developer seeking internship opportunities to gain valuable experience and advance my future career.",
  education: [
    "Ton Duc Thang University 2023-2027",
    "Infomation Technology - IT",
    " GPA 8.0/10",
  ],
  skills: [
    "HTML, CSS, Javascript",
    "ReactJs, React Hook, Redux,…",
    "Git, Vscode, Github",
  ],
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
const pageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-two");
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
  } else if (type == "") {
    return null;
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

function PagePreviewOne(type, images) {
  if (type == "produce") {
    return `<img src=${images}>`;
  } else if (type == "project") {
    return `<img id="projects" src=${images}>`;
  }
}

function PagePreviewTwo(
  type,
  images,
  description,
  technologies,
  features,
  link,
  more
) {
  if (type == "produce") {
    return `<div class="addendum">
          <div class="addendum-title">About Myself</div>
          <div class="addendum-content">
            ${more.descriptionMySelf}
          </div>
        </div>
        <div class="addendum">
          <div class="addendum-title">Education</div>
          <div class="addendum-content">
            ${more.education.map((info) => `<div>${info}</div>`).join("")}
          </div>
        </div>
        <div class="addendum">
          <div class="addendum-title">Skills</div>
          <div class="addendum-content">
          ${more.skills.map((info) => `<div>${info}</div>`).join("")}
          </div>
        </div>
        <div class="addendum">
          <div class="addendum-title">English</div>
          <div class="addendum-content">
            <div>
              Read document by english. Communicate fluently with others.
            </div>
          </div>
        </div>`;
  } else if (type == "project") {
    return `<div class="project-description">
          ${description}
        </div>
        <div>
          <div class="project-addendum">
            <div class= "title">Preview:</div>
            <a href=${link.demo} target="_blank">
              Link to Website
            </a>
          </div>
          <div class="project-addendum">
            <div class= "title">SourceCode:</div>
            <a href=${link.source} target="_blank">
              Link to Source
            </a>
          </div>
          <div class="project-addendum">
            <div class= "title">Features:</div>
            <div>
              ${features.map((feature) => `<div>${feature}</div>`).join("")}
            </div>
          </div>
          <div class="project-addendum">
            <div class= "title">Technologies:</div>
            <div>
              ${technologies}
            </div>
          </div>
        </div>
        `;
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

  index -= 1;
  console.log(description[index]);
  pageOne.innerHTML = PagePreviewOne(
    type[index],
    images[index],
    introDescriptions[index]
  );
  pageTwo.innerHTML = PagePreviewTwo(
    type[index],
    images[index],
    description[index],
    technologies[index],
    features[index],
    link[index],
    more
  );

  setTimeout(() => {
    slidePage.style.zIndex = "1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform =
      "rotateX(15deg) translateY(calc(-70% - 10px)) translateX(-100%)";
    infoPage.innerHTML = InfoPage(
      type[index],
      description[index],
      link[index],
      more
    );
  }, 1500);

  setTimeout(() => {
    introPage.innerHTML = IntroPage(
      type[index],
      title[index],
      images[index],
      introDescriptions[index]
    );
  }, 200);
}

function SlideToLeft() {
  if (index == type.length - 1) {
    return;
  }

  let slidePage = document.querySelector(".page-slide-left");
  slidePage.style.transition = "all 1.5s";
  slidePage.style.zIndex = "10";
  slidePage.style.transform =
    "rotateX(15deg) translateY(calc(-70% - 10px)) rotateY(-180deg)";
  index += 1;
  setTimeout(() => {
    slidePage.style.zIndex = "-1";
    slidePage.style.transition = "all 0s";
    slidePage.style.transform = "rotateX(15deg) translateY(calc(-70% - 10px))";
    introPage.innerHTML = IntroPage(
      type[index],
      title[index],
      images[index],
      introDescriptions[index]
    );
  }, 1500);

  pageOne.innerHTML = PagePreviewOne(
    type[index],
    images[index],
    introDescriptions[index]
  );
  pageTwo.innerHTML = PagePreviewTwo(
    type[index],
    images[index],
    description[index],
    technologies[index],
    features[index],
    link[index],
    more
  );

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
