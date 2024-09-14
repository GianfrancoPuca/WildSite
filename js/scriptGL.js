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
const images = [
    { src: "imgs/DSC_4166.jpg", alt: "Foto 4166" },
    { src: "imgs/DSC_4173.jpg", alt: "Foto 4173" },
    { src: "imgs/DSC_4175.jpg", alt: "Foto 4175" },
    { src: "imgs/DSC_4220.jpg", alt: "Foto 4220" },
    { src: "imgs/DSC_4226.jpg", alt: "Foto 4226" },
    { src: "imgs/DSC_4229.jpg", alt: "Foto 4229" },
    { src: "imgs/DSC_4230.jpg", alt: "Foto 4230" },
    { src: "imgs/DSC_4231.jpg", alt: "Foto 4231" },
    { src: "imgs/DSC_4237.jpg", alt: "Foto 4237" },
    { src: "imgs/DSC_4244.jpg", alt: "Foto 4244" },
    { src: "imgs/DSC_4253.jpg", alt: "Foto 4253" },
    { src: "imgs/DSC_4262.jpg", alt: "Foto 4262" },
    { src: "imgs/DSC_4266.jpg", alt: "Foto 4266" },
    { src: "imgs/DSC_4280.jpg", alt: "Foto 4280" },
    { src: "imgs/DSC_4281.jpg", alt: "Foto 4281" },
    { src: "imgs/DSC_4286.jpg", alt: "Foto 4286" },
    { src: "imgs/DSC_4302.jpg", alt: "Foto 4302" },
    { src: "imgs/DSC_4304.jpg", alt: "Foto 4304" },
    { src: "imgs/DSC_4309.jpg", alt: "Foto 4309" },
    { src: "imgs/DSC_4311.jpg", alt: "Foto 4311" },
    { src: "imgs/DSC_4313.jpg", alt: "Foto 4313" },
    { src: "imgs/DSC_4317.jpg", alt: "Foto 4317" },
    { src: "imgs/DSC_4324.jpg", alt: "Foto 4324" },
    { src: "imgs/DSC_4326.jpg", alt: "Foto 4326" },
    { src: "imgs/DSC_4330.jpg", alt: "Foto 4330" },
    { src: "imgs/DSC_4333.jpg", alt: "Foto 4333" },
    { src: "imgs/DSC_4334.jpg", alt: "Foto 4334" },
    { src: "imgs/DSC_4336.jpg", alt: "Foto 4336" },
    { src: "imgs/DSC_4339.jpg", alt: "Foto 4339" },
    { src: "imgs/DSC_4343.jpg", alt: "Foto 4343" },
    { src: "imgs/DSC_4347.jpg", alt: "Foto 4347" },
    { src: "imgs/DSC_4348.jpg", alt: "Foto 4348" },
    { src: "imgs/DSC_4350.jpg", alt: "Foto 4350" },
    { src: "imgs/DSC_4351.jpg", alt: "Foto 4351" },
    { src: "imgs/DSC_4356.jpg", alt: "Foto 4356" },
    { src: "imgs/DSC_4357.jpg", alt: "Foto 4357" },
    { src: "imgs/DSC_4358.jpg", alt: "Foto 4358" },
    { src: "imgs/DSC_4361.jpg", alt: "Foto 4361" },
    { src: "imgs/DSC_4362.jpg", alt: "Foto 4362" },
    { src: "imgs/DSC_4369.jpg", alt: "Foto 4369" },
    { src: "imgs/DSC_4373.jpg", alt: "Foto 4373" },
    { src: "imgs/DSC_4374.jpg", alt: "Foto 4374" },
    { src: "imgs/DSC_4377.jpg", alt: "Foto 4377" },
    { src: "imgs/DSC_4380.jpg", alt: "Foto 4380" },
    { src: "imgs/DSC_4382.jpg", alt: "Foto 4382" },
    { src: "imgs/DSC_4384.jpg", alt: "Foto 4384" },
    { src: "imgs/DSC_4387.jpg", alt: "Foto 4387" },
    { src: "imgs/DSC_4388.jpg", alt: "Foto 4388" },
    { src: "imgs/DSC_4390.jpg", alt: "Foto 4390" },
    { src: "imgs/DSC_4391.jpg", alt: "Foto 4391" },
    { src: "imgs/DSC_4396.jpg", alt: "Foto 4396" },
    { src: "imgs/DSC_4399.jpg", alt: "Foto 4399" },
    { src: "imgs/DSC_4402.jpg", alt: "Foto 4402" },
    { src: "imgs/DSC_4406.jpg", alt: "Foto 4406" },
    { src: "imgs/DSC_4410.jpg", alt: "Foto 4410" },
    { src: "imgs/DSC_4417.jpg", alt: "Foto 4417" },
    { src: "imgs/DSC_4418.jpg", alt: "Foto 4418" },
    { src: "imgs/DSC_4425.jpg", alt: "Foto 4425" },
    { src: "imgs/DSC_4430.jpg", alt: "Foto 4430" },
    { src: "imgs/DSC_4440.jpg", alt: "Foto 4440" },
    { src: "imgs/DSC_4442.jpg", alt: "Foto 4442" },
    { src: "imgs/DSC_4449.jpg", alt: "Foto 4449" },
    { src: "imgs/DSC_4450.jpg", alt: "Foto 4450" },
    { src: "imgs/DSC_4452.jpg", alt: "Foto 4452" },
    { src: "imgs/DSC_4454.jpg", alt: "Foto 4454" },
    { src: "imgs/DSC_4460.jpg", alt: "Foto 4460" },
    { src: "imgs/DSC_4467.jpg", alt: "Foto 4467" },
    { src: "imgs/DSC_4468.jpg", alt: "Foto 4468" },
    { src: "imgs/DSC_4469.jpg", alt: "Foto 4469" },
    { src: "imgs/DSC_4474.jpg", alt: "Foto 4474" },
    { src: "imgs/DSC_4476.jpg", alt: "Foto 4476" },
    { src: "imgs/DSC_4479.jpg", alt: "Foto 4479" },
    { src: "imgs/DSC_4481.jpg", alt: "Foto 4481" },
    { src: "imgs/DSC_4483.jpg", alt: "Foto 4483" },
    { src: "imgs/DSC_4487.jpg", alt: "Foto 4487" },
    { src: "imgs/DSC_4489.jpg", alt: "Foto 4489" },
    { src: "imgs/DSC_4491.jpg", alt: "Foto 4491" },
    { src: "imgs/DSC_4496.jpg", alt: "Foto 4496" },
    { src: "imgs/DSC_4499.jpg", alt: "Foto 4499" },
    { src: "imgs/DSC_4500.jpg", alt: "Foto 4500" },
    { src: "imgs/DSC_4503.jpg", alt: "Foto 4503" },
    { src: "imgs/DSC_4527.jpg", alt: "Foto 4527" },
    { src: "imgs/DSC_4530.jpg", alt: "Foto 4530" },
    { src: "imgs/DSC_4533.jpg", alt: "Foto 4533" },
    { src: "imgs/DSC_4536.jpg", alt: "Foto 4536" },
    { src: "imgs/DSC_4538.jpg", alt: "Foto 4538" },
    { src: "imgs/DSC_4541.jpg", alt: "Foto 4541" },
    { src: "imgs/DSC_4559.jpg", alt: "Foto 4559" },
    { src: "imgs/DSC_4566.jpg", alt: "Foto 4566" },
    { src: "imgs/DSC_4576.jpg", alt: "Foto 4576" },
    { src: "imgs/DSC_4579.jpg", alt: "Foto 4579" },
    { src: "imgs/DSC_4580.jpg", alt: "Foto 4580" },
    { src: "imgs/DSC_4581.jpg", alt: "Foto 4581" },
    { src: "imgs/DSC_4585.jpg", alt: "Foto 4585" },
    { src: "imgs/DSC_4587.jpg", alt: "Foto 4587" },
    { src: "imgs/DSC_4590.jpg", alt: "Foto 4590" },
    { src: "imgs/DSC_4594.jpg", alt: "Foto 4594" },
    { src: "imgs/DSC_4595.jpg", alt: "Foto 4595" },
    { src: "imgs/DSC_4599.jpg", alt: "Foto 4599" },
    { src: "imgs/DSC_4600.jpg", alt: "Foto 4600" },
    { src: "imgs/DSC_4602.jpg", alt: "Foto 4602" },
    { src: "imgs/DSC_4603.jpg", alt: "Foto 4603" },
    { src: "imgs/DSC_4605.jpg", alt: "Foto 4605" },
    { src: "imgs/DSC_4611.jpg", alt: "Foto 4611" },
    { src: "imgs/DSC_4612.jpg", alt: "Foto 4612" },
    { src: "imgs/DSC_4613.jpg", alt: "Foto 4613" },
    { src: "imgs/DSC_4616.jpg", alt: "Foto 4616" },
    { src: "imgs/DSC_4617.jpg", alt: "Foto 4617" },
    { src: "imgs/DSC_4621.jpg", alt: "Foto 4621" },
    { src: "imgs/DSC_4632.jpg", alt: "Foto 4632" },
    { src: "imgs/DSC_4635.jpg", alt: "Foto 4635" },
    { src: "imgs/DSC_4638.jpg", alt: "Foto 4638" },
    { src: "imgs/DSC_4645.jpg", alt: "Foto 4645" },
    { src: "imgs/DSC_4647.jpg", alt: "Foto 4647" },
    { src: "imgs/DSC_4648.jpg", alt: "Foto 4648" },
    { src: "imgs/DSC_4649.jpg", alt: "Foto 4649" },
    { src: "imgs/DSC_4651.jpg", alt: "Foto 4651" },
    { src: "imgs/DSC_4653.jpg", alt: "Foto 4653" },
    { src: "imgs/DSC_4655.jpg", alt: "Foto 4655" },
    { src: "imgs/DSC_4657.jpg", alt: "Foto 4657" },
    { src: "imgs/DSC_4658.jpg", alt: "Foto 4658" },
    { src: "imgs/DSC_4664.jpg", alt: "Foto 4664" },
    { src: "imgs/DSC_4671.jpg", alt: "Foto 4671" },
    { src: "imgs/DSC_4673.jpg", alt: "Foto 4673" }
];
function renderPage(page) {
    galleryContainer.innerHTML = '';
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentImages = images.slice(start, end);

    currentImages.forEach(imgData => {
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
