function showThankYouPageContent() {
    console.log("function working");
    document.getElementById("thankYouMain").innerHTML = `<h1>Hi ${sessionStorage.getItem("firstname")} ${sessionStorage.getItem("lastname")}!</h1><p class="lead">I will contact you at <strong>"${sessionStorage.getItem("email")}"</strong> with further details ASAP. Thank You :)</p>`;
}

showThankYouPageContent()