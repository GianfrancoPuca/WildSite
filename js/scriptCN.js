function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
window.onscroll = function () {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.style.display = 'block';
    }
};
document.getElementById('scopri-btn').addEventListener('click', function () {
    window.location.href = 'scopri.html';
});
function makeCall() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("mobile")) {
        // Se l'utente è su un dispositivo mobile, apri l'app per chiamare
        window.location.href = "tel:+393401399605";
    } else {
        // Se è su un computer, mostra un alert con l'opzione di chiamata
        alert("Chiama ora: +39 340 1399605");
    }
}
