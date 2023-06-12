

let projects = [
    { title: "MyAccount", stack: "JS,Bootstrap,CSS,HTML", imgPath: "./images/myaccountScreenShot.png", projectLink: "https://myaccountgavi.netlify.app/", gitLink: "https://github.com/prodGavi/account.git" },
    { title: "ManageU", stack: "JS,TS,Bootstrap,CSS,HTML", imgPath: "./images/manageuScreenShot.png", projectLink: "https://manageugavi.netlify.app/", gitLink: "https://github.com/prodGavi/manageU.git" },
    { title: "Tech-It", stack: "JS,HTML,Bootstrap,CSS", imgPath: "./images/techItScreenShot.png", projectLink: "https://techitgavi.netlify.app/", gitLink: "https://github.com/prodGavi/Lesson-9.git" },
    { title: "Mardi Gras", stack: "JS,CSS,SASS,HTML,Bootstrap", imgPath: "./images/mardiScreenShot.png", projectLink: "https://master--mardigrasgavi.netlify.app/", gitLink: "https://github.com/prodGavi/MARDI-GRAS.git" }
]

function showProjectCards() {
    for (let project of projects) {
        document.getElementById("portfolioCards").innerHTML += `
        <div class="card col-md-3 m-4">
    <a href=${project.projectLink} class="card-img-top"><img class="portfolioImg" src="${project.imgPath}"> </a>
    <div class="card-body">
    <h5 class="card-title">${project.title} <a href=${project.gitLink}><i class="fa-brands fa-github"></i></a></h5>
    <p class="card-text"><strong>Stack:</strong> ${project.stack}</p>
    </div>
    </div>`
    };
}

showProjectCards()

let icons = [
    { title: "javascript", icon: "fa-brands fa-js", color: "#F0DC4D" },
    { title: "bootstrap", icon: "fa-brands fa-bootstrap", color: "#6F12F4" },
    { title: "html", icon: "fa-brands fa-html5", color: "#E54B20" },
    { title: "css", icon: "fa-brands fa-css3-alt", color: "#214CE4" },
    { title: "font-awesome", icon: "fa-solid fa-font-awesome", color: "#528DD7" },
    { title: "wordpress", icon: "fa-brands fa-wordpress", color: "#207096" }
];

function showSkillIcons() {
    for (let icon of icons) {
        document.getElementById("iconList").innerHTML +=
            `<div class="col-4 col-md-2 mb-2">
            <i class="${icon.icon} skillIcon" style="font-size:3.5rem; color:${icon.color}"></i>
            </div>
            `
    }
};

showSkillIcons();


function showThankYouPage() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value) && document.getElementById("firstname").value != "" && document.getElementById("lastname").value != "") {
        sessionStorage.setItem("firstname", document.getElementById("firstname").value);
        sessionStorage.setItem("lastname", document.getElementById("lastname").value);
        sessionStorage.setItem("email", document.getElementById("email").value);
        window.location.href = "thankYouPage.html";
    } else {
        alert("One of the values you entered is invalid.")
        return (false)
    }
}


