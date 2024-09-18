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
let currentPage = 0;
const itemsPerPage = 4; // Numero di immagini per pagina
const galleryContainer = document.getElementById('galleryContainer');

// Nuovo elenco di immagini
const images = [
    { src: "imgs/Food & Beverage/DSC_0095.jpeg", alt: "Foto 0095" },
    { src: "imgs/Food & Beverage/DSC_0104.jpeg", alt: "Foto 0104" },
    { src: "imgs/Food & Beverage/DSC_0108.jpeg", alt: "Foto 0108" },
    { src: "imgs/Food & Beverage/DSC_0112.jpeg", alt: "Foto 0112" },
    { src: "imgs/Food & Beverage/DSC_0117.jpeg", alt: "Foto 0117" },
    { src: "imgs/Food & Beverage/DSC_0131.jpeg", alt: "Foto 0131" },
    { src: "imgs/Food & Beverage/DSC_0133.jpeg", alt: "Foto 0133" },
    { src: "imgs/Food & Beverage/DSC_0138.jpeg", alt: "Foto 0138" },
    { src: "imgs/Food & Beverage/DSC_0143.jpeg", alt: "Foto 0143" },
    { src: "imgs/Food & Beverage/DSC_0148.jpeg", alt: "Foto 0148" },
    { src: "imgs/Food & Beverage/DSC_0151.jpeg", alt: "Foto 0151" },
    { src: "imgs/Food & Beverage/DSC_0154.jpeg", alt: "Foto 0154" },
    { src: "imgs/Food & Beverage/DSC_0163.jpeg", alt: "Foto 0163" },
    { src: "imgs/Food & Beverage/DSC_0171.jpeg", alt: "Foto 0171" },
    { src: "imgs/Food & Beverage/DSC_0174.jpeg", alt: "Foto 0174" },
    { src: "imgs/Food & Beverage/DSC_0188.jpeg", alt: "Foto 0188" },
    { src: "imgs/Food & Beverage/DSC_0195.jpeg", alt: "Foto 0195" },
    { src: "imgs/Food & Beverage/DSC_0197.jpeg", alt: "Foto 0197" },
    { src: "imgs/Food & Beverage/DSC_0212.jpeg", alt: "Foto 0212" },
    { src: "imgs/Food & Beverage/DSC_0226.jpeg", alt: "Foto 0226" },
    { src: "imgs/Food & Beverage/DSC_0238.jpeg", alt: "Foto 0238" },
    { src: "imgs/Food & Beverage/DSC_0263.jpeg", alt: "Foto 0263" },
    { src: "imgs/Food & Beverage/DSC_0267.jpeg", alt: "Foto 0267" },
    { src: "imgs/Food & Beverage/DSC_0277.jpeg", alt: "Foto 0277" },
    { src: "imgs/Food & Beverage/DSC_0288.jpeg", alt: "Foto 0288" },
    { src: "imgs/Food & Beverage/DSC_0293.jpeg", alt: "Foto 0293" },
    { src: "imgs/Food & Beverage/DSC_0297.jpeg", alt: "Foto 0297" },
    { src: "imgs/Food & Beverage/DSC_0299.jpeg", alt: "Foto 0299" },
    { src: "imgs/Food & Beverage/DSC_0311.jpeg", alt: "Foto 0311" },
    { src: "imgs/Food & Beverage/DSC_0335.jpeg", alt: "Foto 0335" },
    { src: "imgs/Food & Beverage/DSC_0344.jpeg", alt: "Foto 0344" },
    { src: "imgs/Food & Beverage/DSC_0359.jpeg", alt: "Foto 0359" },
    { src: "imgs/Food & Beverage/DSC_0399.jpeg", alt: "Foto 0399" },
    { src: "imgs/Food & Beverage/DSC_0409.jpeg", alt: "Foto 0409" },
    { src: "imgs/Food & Beverage/DSC_0412.jpeg", alt: "Foto 0412" },
    { src: "imgs/Food & Beverage/DSC_0419.jpeg", alt: "Foto 0419" },
    { src: "imgs/Food & Beverage/DSC_0425.jpeg", alt: "Foto 0425" },
    { src: "imgs/Food & Beverage/DSC_0435.jpeg", alt: "Foto 0435" },
    { src: "imgs/Food & Beverage/DSC_0438.jpeg", alt: "Foto 0438" },
    { src: "imgs/Food & Beverage/DSC_0464.jpeg", alt: "Foto 0464" },
    { src: "imgs/Food & Beverage/DSC_0467.jpeg", alt: "Foto 0467" },
    { src: "imgs/Food & Beverage/DSC_0482.jpeg", alt: "Foto 0482" },
    { src: "imgs/Food & Beverage/DSC_0519.jpeg", alt: "Foto 0519" },
    { src: "imgs/Food & Beverage/DSC_0541.jpeg", alt: "Foto 0541" },
    { src: "imgs/Food & Beverage/DSC_4262.jpg", alt: "Foto 4262" },
    { src: "imgs/Food & Beverage/DSC_4302.jpg", alt: "Foto 4302" },
    { src: "imgs/Food & Beverage/DSC_4304.jpg", alt: "Foto 4304" },
    { src: "imgs/Food & Beverage/DSC_4334.jpg", alt: "Foto 4334" },
    { src: "imgs/Food & Beverage/DSC_4347.jpg", alt: "Foto 4347" },
    { src: "imgs/Food & Beverage/DSC_4361.jpg", alt: "Foto 4361" },
    { src: "imgs/Food & Beverage/DSC_4362.jpg", alt: "Foto 4362" },
    { src: "imgs/Food & Beverage/DSC_4369.jpg", alt: "Foto 4369" },
    { src: "imgs/Food & Beverage/DSC_4373.jpg", alt: "Foto 4373" },
    { src: "imgs/Food & Beverage/DSC_4377.jpg", alt: "Foto 4377" },
    { src: "imgs/Food & Beverage/DSC_4384.jpg", alt: "Foto 4384" },
    { src: "imgs/Food & Beverage/DSC_4387.jpg", alt: "Foto 4387" },
    { src: "imgs/Food & Beverage/DSC_4390.jpg", alt: "Foto 4390" },
    { src: "imgs/Food & Beverage/DSC_4417.jpg", alt: "Foto 4417" },
    { src: "imgs/Food & Beverage/DSC_4503.jpg", alt: "Foto 4503" },
    { src: "imgs/Food & Beverage/DSC_4536.jpg", alt: "Foto 4536" },
    { src: "imgs/Food & Beverage/DSC_4538.jpg", alt: "Foto 4538" },
    { src: "imgs/Food & Beverage/DSC_4581.jpg", alt: "Foto 4581" },
    { src: "imgs/Food & Beverage/DSC_4587.jpg", alt: "Foto 4587" },
    { src: "imgs/Food & Beverage/DSC_4616.jpg", alt: "Foto 4616" },
    { src: "imgs/Food & Beverage/DSC_4632.jpg", alt: "Foto 4632" },
    { src: "imgs/Food & Beverage/DSC_4664.jpg", alt: "Foto 4664" },
    { src: "imgs/Food & Beverage/DSC_9744.jpeg", alt: "Foto 9744" },
    { src: "imgs/Food & Beverage/DSC_9789.jpeg", alt: "Foto 9789" },
    { src: "imgs/Food & Beverage/DSC_9792.jpeg", alt: "Foto 9792" },
    { src: "imgs/Food & Beverage/DSC_9808.jpeg", alt: "Foto 9808" },
    { src: "imgs/Food & Beverage/DSC_9836.jpeg", alt: "Foto 9836" },
    { src: "imgs/Food & Beverage/DSC_9855.jpeg", alt: "Foto 9855" },
    { src: "imgs/Food & Beverage/DSC_9898.jpeg", alt: "Foto 9898" },
    { src: "imgs/Food & Beverage/DSC_9904.jpeg", alt: "Foto 9904" },
    { src: "imgs/Food & Beverage/DSC_9941.jpeg", alt: "Foto 9941" },
    { src: "imgs/Food & Beverage/DSC_9960.jpeg", alt: "Foto 9960" },
    { src: "imgs/Food & Beverage/DSC_9972.jpeg", alt: "Foto 9972" },
    { src: "imgs/Food & Beverage/DSC_9994.jpeg", alt: "Foto 9994" },
    { src: "imgs/Food & Beverage/DSC00017.jpg", alt: "Foto 00017" },
    { src: "imgs/Food & Beverage/DSC00086.jpg", alt: "Foto 00086" },
    { src: "imgs/Food & Beverage/DSC00101.jpg", alt: "Foto 00101" },
    { src: "imgs/Food & Beverage/DSC00140.jpg", alt: "Foto 00140" },
    { src: "imgs/Food & Beverage/DSC00166.jpg", alt: "Foto 00166" },
    { src: "imgs/Food & Beverage/DSC00174 - Copia (2).png", alt: "Foto 00174 Copia" },
    { src: "imgs/Food & Beverage/DSC00182.jpg", alt: "Foto 00182" },
    { src: "imgs/Food & Beverage/DSC00185.jpg", alt: "Foto 00185" },
    { src: "imgs/Food & Beverage/DSC00189.jpg", alt: "Foto 00189" },
    { src: "imgs/Food & Beverage/DSC00197.jpg", alt: "Foto 00197" },
    { src: "imgs/Food & Beverage/DSC00207.jpg", alt: "Foto 00207" },
    { src: "imgs/Food & Beverage/DSC00224.jpg", alt: "Foto 00224" },
    { src: "imgs/Food & Beverage/DSC00244.jpg", alt: "Foto 00244" },
    { src: "imgs/Food & Beverage/DSC00277.jpg", alt: "Foto 00277" },
    { src: "imgs/Food & Beverage/DSC00305.jpg", alt: "Foto 00305" },
    { src: "imgs/Food & Beverage/DSC00320.jpg", alt: "Foto 00320" },
    { src: "imgs/Food & Beverage/DSC00351.jpg", alt: "Foto 00351" },
    { src: "imgs/Food & Beverage/DSC00361.jpg", alt: "Foto 00361" },
    { src: "imgs/Food & Beverage/DSC00388.jpg", alt: "Foto 00388" },
    { src: "imgs/Food & Beverage/_KMP5910.jpg", alt: "Foto KMP5910" },
    { src: "imgs/Food & Beverage/BURGER DELIVEROO.jpg", alt: "Foto BURGER DELIVEROO" }
];

// Funzione per mescolare l'array delle immagini in maniera casuale
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Scambia gli elementi
    }
}

function renderPage(page) {
    galleryContainer.innerHTML = '';
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    // Prendi solo quelle necessarie per la pagina corrente
    const currentImages = images.slice(); // Copia l'array per non modificare l'originale
    shuffleArray(currentImages); // Mescola l'array

    currentImages.slice(start, end).forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        galleryContainer.appendChild(img);
    });

    // Gestisci la visibilità dei pulsanti di navigazione
    document.getElementById('prevBtn').style.display = page > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').style.display = end < images.length ? 'inline-block' : 'none';
}

function changePage(direction) {
    const newPage = currentPage + direction;
    if (newPage >= 0 && newPage * itemsPerPage < images.length) {
        currentPage = newPage;
        renderPage(currentPage);
    }
}

// Inizializza la galleria alla prima pagina
renderPage(currentPage);

