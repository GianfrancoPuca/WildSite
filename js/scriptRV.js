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
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const eventType = document.getElementById('event-type').value;
    const message = document.getElementById('message').value;

    const bookingDetails = `Prenotazione di ${name}%0AEvento: ${eventType}%0ANumero di telefono: ${phone}%0AEmail: ${email}%0AMessaggio: ${message}`;

    const mailtoLink = `mailto:eventiwild@gmail.com?subject=Nuova Prenotazione&body=${bookingDetails}`;
    window.location.href = mailtoLink;

    const whatsappLink = `https://wa.me/3401399605?text=${bookingDetails}`;
    window.open(whatsappLink, '_blank');
});

