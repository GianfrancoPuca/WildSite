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

// Aggiornato con le immagini che mi hai fornito
const images = [
    { src: "imgs/Location/DSC_4166.jpg", alt: "Foto 4166" },
    { src: "imgs/Location/DSC_4173.jpg", alt: "Foto 4173" },
    { src: "imgs/Location/DSC_4175.jpg", alt: "Foto 4175" },
    { src: "imgs/Location/DSC_4220.jpg", alt: "Foto 4220" },
    { src: "imgs/Location/DSC_4244.jpg", alt: "Foto 4244" },
    { src: "imgs/Location/DSC_4253.jpg", alt: "Foto 4253" },
    { src: "imgs/Location/DSC_4286.jpg", alt: "Foto 4286" },
    { src: "imgs/Location/DSC_4399.jpg", alt: "Foto 4399" },
    { src: "imgs/Location/DSC_4425.jpg", alt: "Foto 4425" },
    { src: "imgs/Location/DSC_4430.jpg", alt: "Foto 4430" },
    { src: "imgs/Location/DSC_4440.jpg", alt: "Foto 4440" },
    { src: "imgs/Location/DSC_4474.jpg", alt: "Foto 4474" },
    { src: "imgs/Location/DSC_4559.jpg", alt: "Foto 4559" },
    { src: "imgs/Location/DSC_4594.jpg", alt: "Foto 4594" },
    { src: "imgs/Location/DSC_4602.jpg", alt: "Foto 4602" },
    { src: "imgs/Location/DSC_4635.jpg", alt: "Foto 4635" },
    { src: "imgs/Location/DSC00390.jpg", alt: "Foto 00390" },
    { src: "imgs/Location/DSC00392.jpg", alt: "Foto 00392" },
    { src: "imgs/Location/DSC00396.jpg", alt: "Foto 00396" },
    { src: "imgs/Location/DSC00398.jpg", alt: "Foto 00398" },
    { src: "imgs/Location/DSC00399.jpg", alt: "Foto 00399" },
    { src: "imgs/Location/DSC00400.jpg", alt: "Foto 00400" },
    { src: "imgs/Location/DSC00402.jpg", alt: "Foto 00402" },
    { src: "imgs/Location/DSC00405.jpg", alt: "Foto 00405" },
    { src: "imgs/Location/DSC00407.jpg", alt: "Foto 00407" }
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

    // Mescola le immagini e prendi solo quelle necessarie per la pagina corrente
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
