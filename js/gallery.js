// ── Gallery Data: 30 images ──────────────────────────────────────────────────
const galleryItems = [
    { src: "images/malalison.png",    caption: "Mararison (Malalison) Island — Culasi, Antique" },
    { src: "images/seco.png",         caption: "Seco Island — Tibiao, Antique" },
    { src: "images/nogas.png",        caption: "Nogas Island Marine Sanctuary — Anini-y, Antique" },
    { src: "images/malumpati.png",    caption: "Malumpati Cold Spring — Culasi / Barbaza, Antique" },
    { src: "images/bato.png",  caption: "Bugtong Bato Falls — Tibiao, Antique" },
    { src: "images/pulangbato.png",   caption: "Pulangbato Falls — Barbaza, Antique" },
    { src: "images/tigbawan.png",     caption: "Tigbawan Falls — Anini-y, Antique" },
    { src: "images/tibiao.png",       caption: "Tibiao River — Tibiao, Antique" },
    { src: "images/bugang.png",       caption: "Bugang River — Pandan, Antique" },
    { src: "images/madja.png",      caption: "Mount Madja-as — Highest Peak in Panay Island" },
    { src: "images/nangtud.png",      caption: "Mount Nangtud — Culasi, Antique" },
    { src: "images/riceterraces.png",     caption: "Iraynun-Bukidnon Rice Terraces — Valderrama, Antique" },
    { src: "images/sibalom.png",      caption: "Sibalom Natural Park — Sibalom, Antique" },
    { src: "images/aniniy.png", caption: "Anini-y Church — 17th Century Colonial Heritage" },
    { src: "images/patnongon.png",    caption: "Patnongon Church Ruins — Patnongon, Antique" },
    { src: "images/malandog.png",     caption: "Malandog Marker — Hamtic, Antique" },
    { src: "images/kawa.png",         caption: "Kawa Hot Bath Experience — Tibiao, Antique" },
    { src: "images/iraynun.png",      caption: "Indigenous Iraynun-Bukidnon People of Antique" },
    { src: "images/binirayanA.png",   caption: "Binirayan Festival — Street Parade" },
    { src: "images/binirayanB.png",   caption: "Binirayan Festival — Cultural Performance" },
    { src: "images/binirayanC.png",   caption: "Binirayan Festival — Reenactment of the Bornean Datus" },
    { src: "images/kinilaw.png",      caption: "Kinilaw — Fresh Fish Ceviche, a Local Delicacy" },
    { src: "images/budbod.png",       caption: "Budbod — Sweet Sticky Rice Dessert of Antique" },
    { src: "images/laswa.png",        caption: "Laswa — Traditional Antiqueño Vegetable Soup" },
    { src: "images/inubarang.png",    caption: "Inubarang Manok — Chicken Stew with Coconut Milk" },
    { src: "images/maruya.png",       caption: "Maruya — Classic Filipino Banana Fritters" },
    { src: "images/seaside.png",      caption: "Seaside Dining — Fresh Seafood with Ocean Views" },
    { src: "images/markets.png",      caption: "Local Markets — Authentic Street Food of Antique" },
    { src: "images/headerimg.png",    caption: "Antique Province — The Hidden Gem of the Philippines" },
    { src: "images/homestay.png",     caption: "Homestay Experience — Antiqueño Warmth and Hospitality" }
];

// ── Build Gallery Grid ───────────────────────────────────────────────────────
const grid = document.getElementById("galleryGrid");
galleryItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy">
        <div class="gallery-item-overlay">
            <span class="gallery-caption">${item.caption}</span>
        </div>
    `;
    div.addEventListener("click", () => openLightbox(index));
    grid.appendChild(div);
});

// ── Lightbox Logic ───────────────────────────────────────────────────────────
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    showLightboxImage();
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "";
}

function showLightboxImage() {
    const item = galleryItems[currentIndex];
    document.getElementById("lightboxImg").src             = item.src;
    document.getElementById("lightboxImg").alt             = item.caption;
    document.getElementById("lightboxCaption").textContent = item.caption;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showLightboxImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showLightboxImage();
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", prevImage);
document.getElementById("lightboxNext").addEventListener("click", nextImage);

// Close on overlay click (not on image)
document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", function(e) {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("active")) return;
    if (e.key === "ArrowLeft")  prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape")     closeLightbox();
});
