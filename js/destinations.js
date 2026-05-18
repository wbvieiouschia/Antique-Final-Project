// ── Destinations Data Array ──────────────────────────────────────────────────
const destinations = [
    {
        id: 1,
        name: "Mararison Island (Malalison Island)",
        municipality: "Culasi",
        category: "Island",
        image: "images/malalison.png",
        description: "A stunning teardrop-shaped island with clear turquoise waters and white-sand beaches, perfect for island-hopping and snorkeling.",
        entranceFee: "₱50–₱100 per person (boat fee separate)",
        openingHours: "Open daily, sunrise to sunset",
        fullDescription: "Mararison Island, also known as Malalison, is one of Antique's most beautiful islands. Its teardrop shape, visible from above, makes it one of the most photographed spots in the province. The island features powdery white sand beaches, crystal-clear turquoise waters, and rich marine life perfect for snorkeling and swimming.",
        activities: ["Snorkeling", "Swimming", "Island hopping", "Photography", "Camping"],
        bestTime: "March to May (dry season)",
        travelTips: "Book a boat from the Culasi port early in the morning. Bring your own food and water as facilities are minimal on the island. Life jackets are provided for the boat ride."
    },
    {
        id: 2,
        name: "Nogas Island",
        municipality: "Anini-y",
        category: "Island",
        image: "images/nogas.png",
        description: "A pristine island marine sanctuary with untouched coral reefs and extraordinary marine biodiversity.",
        entranceFee: "₱50 environmental fee",
        openingHours: "7:00 AM – 5:00 PM daily",
        fullDescription: "Nogas Island is a protected marine sanctuary known for its exceptional biodiversity. Surrounded by healthy coral reefs teeming with colorful fish, sea turtles, and other marine creatures, it offers some of the best snorkeling and freediving in Western Visayas. The island itself is small and peaceful, ideal for a quiet day by the sea.",
        activities: ["Snorkeling", "Freediving", "Beach combing", "Wildlife spotting", "Swimming"],
        bestTime: "November to May",
        travelTips: "Take a boat from Anini-y proper. Avoid bringing single-use plastics to help protect the marine sanctuary. Fishing and taking of marine life is strictly prohibited."
    },
    {
        id: 3,
        name: "Seco Island",
        municipality: "Tibiao",
        category: "Beach",
        image: "images/seco.png",
        description: "A remote, breathtaking island with pristine white sandbars and emerald waters — Antique's most secluded paradise.",
        entranceFee: "₱100 per person",
        openingHours: "Open daily, sunrise to sunset",
        fullDescription: "Seco Island is one of the most remote and pristine island destinations in Antique. Accessible only by a longer boat ride, the island rewards travelers with stunning white sandbars, crystal-clear emerald waters, and total seclusion. It is an ideal destination for those seeking solitude and untouched natural beauty far from the crowds.",
        activities: ["Swimming", "Sandbar walking", "Snorkeling", "Picnicking", "Photography"],
        bestTime: "March to June",
        travelTips: "Hire a boat from Culasi or Pandan — the ride can take 1–2 hours depending on sea conditions. Bring all supplies including food and drinking water, as there are no facilities on the island."
    },
    {
        id: 4,
        name: "Bugtong Bato Falls",
        municipality: "Tibiao",
        category: "Waterfall",
        image: "images/bato.png",
        description: "A majestic multi-tiered waterfall cascading through ancient rock formations deep in a lush tropical forest.",
        entranceFee: "₱30 per person",
        openingHours: "8:00 AM – 5:00 PM",
        fullDescription: "Bugtong Bato Falls is one of the most popular natural attractions in Antique. Nestled in the forests of Tibiao, it cascades in multiple tiers through ancient volcanic rock formations. The surrounding area is rich in biodiversity and offers a cool, refreshing escape from the tropical heat. The natural pool at the base is perfect for swimming.",
        activities: ["Swimming", "Trekking", "Photography", "Nature walk"],
        bestTime: "Year-round; best during dry season (March–May)",
        travelTips: "Wear proper footwear — the trail can be slippery after rain. Hiring a local guide is recommended. The falls are best visited in the morning for better lighting and fewer crowds."
    },
    {
        id: 5,
        name: "Malumpati Cold Spring",
        municipality: "Culasi / Barbaza",
        category: "Adventure",
        image: "images/malumpati.png",
        description: "The gateway to Antique's most thrilling activity — river tubing along the rushing currents of the Bugang River.",
        entranceFee: "₱50 per person (river tubing fee separate, approx. ₱150–₱250)",
        openingHours: "8:00 AM – 5:00 PM",
        fullDescription: "Malumpati Cold Spring is the starting point for one of Antique's most iconic adventures: river tubing. Visitors ride inflatable tubes through the Bugang River's rushing currents, passing through lush forests and scenic limestone formations. The cold spring itself is perfect for a refreshing dip before or after the adventure.",
        activities: ["River tubing", "Swimming", "Photography", "Nature walk", "Kayaking"],
        bestTime: "March to May (dry season)",
        travelTips: "Book river tubing in advance during peak season. Life jackets are always provided. Avoid visiting during and immediately after heavy rains when currents may be unsafe. Waterproof your belongings."
    },
    {
        id: 6,
        name: "Pulangbato Falls",
        municipality: "Barbaza",
        category: "Waterfall",
        image: "images/pulangbato.png",
        description: "A striking waterfall named for its distinctive reddish iron-rich rock formations, surrounded by a surreal landscape.",
        entranceFee: "₱20 per person",
        openingHours: "8:00 AM – 5:00 PM",
        fullDescription: "Pulangbato Falls, meaning 'red rock,' takes its name from the vivid iron-rich reddish boulders shaped by centuries of flowing water. The waterfall plunges into a natural pool framed by dramatic orange and red rock formations, creating a striking and unique landscape. The area is also believed to have medicinal spring waters.",
        activities: ["Swimming", "Photography", "Nature walk", "Relaxation"],
        bestTime: "Year-round",
        travelTips: "Ask locals for directions as road signage can be limited. Wear water shoes for the rocky approach to the falls. Visit in the late morning for the best lighting on the reddish rocks."
    },
    {
        id: 7,
        name: "Tigbawan Falls",
        municipality: "Anini-y",
        category: "Waterfall",
        image: "images/tigbawan.png",
        description: "A hidden gem waterfall accessible through a scenic forest trek — one of Antique's best off-the-beaten-path experiences.",
        entranceFee: "Free (guide fee may apply)",
        openingHours: "8:00 AM – 4:00 PM",
        fullDescription: "Tigbawan Falls is a lesser-known but breathtaking waterfall tucked deep in the mountains of Anini-y. The trek to reach it winds through dense forest and across small streams, rewarding hikers with a peaceful cascade into a clear natural pool. Its remoteness ensures an authentic and crowd-free experience.",
        activities: ["Trekking", "Swimming", "Photography", "Bird watching"],
        bestTime: "March to May",
        travelTips: "Hire a local guide from the barangay — essential for finding the trail. Wear sturdy shoes and bring insect repellent. Start early to have enough daylight for the hike."
    },
    {
        id: 8,
        name: "Mount Madja-as",
        municipality: "Valderrama / Barbaza",
        category: "Mountain",
        image: "images/madja.png",
        description: "The highest peak in Panay Island at 2,117 meters — a legendary climb with panoramic views and endemic wildlife.",
        entranceFee: "Permit required (₱200–₱500 depending on entry point)",
        openingHours: "Registration before 6:00 AM required",
        fullDescription: "Mount Madja-as stands at 2,117 meters above sea level, making it the highest mountain in Panay Island and one of the most challenging climbs in the Visayas. The summit offers breathtaking 360-degree views of the surrounding islands and sea. The mountain is also home to numerous endemic plant and animal species.",
        activities: ["Mountaineering", "Bird watching", "Photography", "Camping", "Nature study"],
        bestTime: "March to May (dry season)",
        travelTips: "Register with the local tourism office and hire a certified guide — mandatory. Prepare for cold nights near the summit (temperatures can drop to 10°C). The climb typically takes 2 days. Bring rain gear even in dry season."
    },
    {
        id: 9,
        name: "Kawa Hot Bath",
        municipality: "Tibiao",
        category: "Adventure",
        image: "images/kawa.png",
        description: "Antique's most iconic experience — soaking in giant iron cauldrons heated by wood fire, infused with herbs and river minerals.",
        entranceFee: "₱250–₱350 per session",
        openingHours: "8:00 AM – 6:00 PM",
        fullDescription: "The Kawa Hot Bath is one of Antique's most iconic and unique experiences. Visitors soak in giant iron cauldrons (kawas) filled with herbal-infused hot water heated by wood fire. Set amidst a beautiful natural backdrop near the river, it is a deeply relaxing and memorable cultural experience unlike any other in the Philippines.",
        activities: ["Hot bath", "Photography", "River swimming", "Relaxation"],
        bestTime: "Year-round; especially enjoyable in cooler months (November–February)",
        travelTips: "Book in advance, especially on weekends and holidays. The experience is most enjoyable in the early morning or late afternoon. Combine with river tubing at nearby Malumpati for a full Tibiao adventure day."
    },
    {
        id: 10,
        name: "Anini-y Church (St. John the Baptist)",
        municipality: "Anini-y",
        category: "Historical Site",
        image: "images/aniniy.png",
        description: "A 17th-century Spanish colonial church — one of the oldest and best-preserved heritage structures in Antique.",
        entranceFee: "Free",
        openingHours: "During Mass hours and daylight hours",
        fullDescription: "The Anini-y Church, dedicated to St. John the Baptist, is one of the oldest Catholic churches in Antique. Built during the Spanish colonial era, it features classic Baroque architecture with thick coral stone walls, ornate altars, and well-preserved religious artifacts. It stands as a powerful symbol of Antique's deep Catholic faith and colonial heritage.",
        activities: ["Heritage tour", "Photography", "Prayer and reflection", "Historical research"],
        bestTime: "Year-round",
        travelTips: "Dress modestly when visiting — shorts and sleeveless tops are not appropriate inside the church. The town fiesta in June is an excellent time to experience local culture alongside this historic site."
    },
    {
        id: 11,
        name: "Iraynun-Bukidnon Rice Terraces",
        municipality: "Valderrama",
        category: "Mountain",
        image: "images/riceterraces.png",
        description: "The only known rice terrace clusters in the Visayas, handcrafted by the indigenous Iraynun-Bukidnon people over generations.",
        entranceFee: "Free (community guide fee recommended)",
        openingHours: "Open daily",
        fullDescription: "The Iraynun-Bukidnon Rice Terraces in Valderrama are an extraordinary feat of indigenous engineering and a living cultural heritage. Created by the indigenous Iraynun-Bukidnon people, these terraces represent generations of sustainable farming and community cooperation. They are currently being studied for nomination to the UNESCO World Heritage List.",
        activities: ["Cultural tourism", "Photography", "Trekking", "Community immersion"],
        bestTime: "June–August (planting season) or October–December (harvest season) for the best scenery",
        travelTips: "Engage with local guides to understand the deep cultural significance of the terraces. Respect the farmland, do not walk on the paddies, and observe community rules for visitors."
    },
    {
        id: 12,
        name: "Patnongon Church Ruins",
        municipality: "Patnongon",
        category: "Historical Site",
        image: "images/patnongon.png",
        description: "Hauntingly beautiful ruins of a 19th-century Augustinian church and convent — a dramatic window into Antique's colonial past.",
        entranceFee: "Free",
        openingHours: "Open daily, daylight hours",
        fullDescription: "The Patnongon Church Ruins are among the most evocative historical landmarks in Antique. The remains of this old Augustinian church and convent bear witness to the province's colonial history. The crumbling coral stone walls and overgrown arches create a dramatic and atmospheric setting beloved by history enthusiasts and photographers.",
        activities: ["Heritage tour", "Photography", "Historical research"],
        bestTime: "Year-round; morning light is ideal for photography",
        travelTips: "Visit in the early morning for the best lighting for photos. Combine with a visit to nearby heritage sites in San Jose de Buenavista for a full heritage day."
    },
    {
        id: 13,
        name: "Sibalom Natural Park",
        municipality: "Sibalom / San Remigio",
        category: "Mountain",
        image: "images/sibalom.png",
        description: "A protected forest reserve home to rare endemic species and pristine rivers — Antique's premier eco-tourism destination.",
        entranceFee: "₱50 per person",
        openingHours: "7:00 AM – 4:00 PM (guide required)",
        fullDescription: "Sibalom Natural Park is one of the most biologically diverse protected areas in the Philippines. Covering over 12,000 hectares of old-growth forest, it shelters rare endemic species such as the Panay cloudrunner and the Visayan warty pig. The park offers trekking trails, river walks, and an immersive eco-tourism experience for nature lovers.",
        activities: ["Trekking", "Bird watching", "Wildlife spotting", "River walk", "Photography"],
        bestTime: "March to May",
        travelTips: "A permit and a licensed guide are mandatory. Book through the DENR office in Sibalom. Bring your own water and meals. No littering — carry all waste out of the park."
    },
    {
        id: 14,
        name: "Tibiao River",
        municipality: "Tibiao",
        category: "Adventure",
        image: "images/tibiao.png",
        description: "A scenic river renowned for its kayaking, river camping, and the famous bamboo-rope bridge crossing experience.",
        entranceFee: "Varies by activity (₱150–₱400)",
        openingHours: "7:00 AM – 5:00 PM",
        fullDescription: "The Tibiao River is the heart of adventure tourism in northern Antique. Known for its clear waters, manageable rapids, and stunning forest scenery, it offers kayaking, river tubing, and camping along its banks. The iconic bamboo-rope bridge crossing is a favorite photo opportunity for visitors.",
        activities: ["Kayaking", "River tubing", "Camping", "Swimming", "Bridge crossing"],
        bestTime: "March to May",
        travelTips: "Organized tours are available at the Tibiao Ecopark. Life jackets and safety equipment are provided for all water activities. Avoid after heavy rainfall when water levels rise significantly."
    },
    {
        id: 15,
        name: "Malandog Marker",
        municipality: "Hamtic",
        category: "Historical Site",
        image: "images/malandog.png",
        description: "The legendary landing site of the ten Bornean datus — the very birthplace of Antique's civilization and identity.",
        entranceFee: "Free",
        openingHours: "Open daily",
        fullDescription: "The Malandog Marker in Hamtic commemorates one of Philippine history's most significant events: the legendary landing of the ten Bornean datus who purchased Panay Island from the Ati people. This pre-colonial episode is the foundation of Antique's cultural identity and is celebrated annually during the Binirayan Festival.",
        activities: ["Historical sightseeing", "Photography", "Cultural learning"],
        bestTime: "Year-round; most atmospheric during December (Binirayan Festival)",
        travelTips: "The marker is easily accessible from San Jose de Buenavista. Pair the visit with the nearby heritage sites and the Binirayan Festival in December for the full cultural experience."
    },

    // ── Food Destinations ────────────────────────────────────────────────────
    {
        id: 16,
        name: "Tibiao Ecopark Food Village",
        municipality: "Tibiao",
        category: "Food Destination",
        image: "images/kawa.png",
        description: "A unique open-air food experience at the famous Tibiao Ecopark, serving authentic Antiqueño dishes alongside the kawa hot bath adventure.",
        entranceFee: "Free to enter (food and activities priced separately)",
        openingHours: "8:00 AM – 7:00 PM daily",
        fullDescription: "The Tibiao Ecopark Food Village is the dining heart of Antique's premier eco-tourism destination. Set along the banks of the Tibiao River, guests enjoy traditional Kinaray-a cuisine — including bamboo-cooked fish, kinilaw, and inubarang manok — in open-air nipa huts surrounded by lush tropical scenery. The food is freshly prepared using organic, locally sourced ingredients.",
        activities: ["Dining", "Cultural immersion", "Bamboo cooking demo", "Local food tasting"],
        bestTime: "Year-round; best paired with kawa hot bath experience",
        travelTips: "Order in advance for group bookings. Try the bamboo-cooked dishes — a specialty unique to Tibiao. Combine with the kawa hot bath and river tubing for a full-day Tibiao experience."
    },
    {
        id: 17,
        name: "San Jose Public Market Food Strip",
        municipality: "San Jose de Buenavista",
        category: "Food Destination",
        image: "images/markets.png",
        description: "The bustling food strip of Antique's capital — the best place to sample authentic street food, fresh seafood, and local delicacies all in one place.",
        entranceFee: "Free",
        openingHours: "5:00 AM – 8:00 PM daily (peak hours: early morning)",
        fullDescription: "The San Jose Public Market Food Strip is the culinary heart of Antique Province. Every morning, locals and visitors gather here to enjoy freshly caught seafood, traditional kakanin (native rice cakes), kinilaw, puto, budbod, maruya, and a variety of hot breakfast staples. Dozens of stalls line the market with affordable, home-cooked Antiqueño favorites that represent generations of local culinary tradition.",
        activities: ["Street food tour", "Local market exploration", "Food tasting", "Souvenir shopping"],
        bestTime: "Early morning (5:00 AM – 9:00 AM) for the freshest produce and broadest selection",
        travelTips: "Bring cash — most stalls do not accept cards. Arrive early for the best variety. Don't miss the budbod and puto stalls near the main entrance. A light stomach going in is recommended — there's a lot to try!"
    },
    {
        id: 18,
        name: "Culasi Seafood Wharf",
        municipality: "Culasi",
        category: "Food Destination",
        image: "images/shrimp.png",
        description: "A lively seaside wharf where fishing boats unload their daily catch — fresh seafood sold and grilled right at the port, with stunning views of Mararison Island.",
        entranceFee: "Free",
        openingHours: "5:00 AM – 6:00 PM daily",
        fullDescription: "The Culasi Seafood Wharf is a must-visit for seafood lovers. As the departure point for boats heading to Mararison and Seco Island, the wharf comes alive each morning when fishing boats return with fresh catches of lapu-lapu, lobster, crab, shrimp, and various reef fish. Nearby eateries and open-air grills serve these straight from the sea, prepared with minimal seasoning to let the natural flavors shine.",
        activities: ["Fresh seafood dining", "Fish market browsing", "Boat watching", "Photography"],
        bestTime: "Early morning during fish landing (5:00 AM – 8:00 AM)",
        travelTips: "Pair your meal with a cold buko (coconut) drink available at the port. If you're heading to Mararison Island, grab a meal here before or after the boat trip. Negotiate directly with vendors for the freshest picks."
    },
    {
        id: 19,
        name: "Pandan Bay Seaside Restaurants",
        municipality: "Pandan",
        category: "Food Destination",
        image: "images/seaside.png",
        description: "A row of charming seaside restaurants along Pandan Bay offering fresh grilled seafood with panoramic sunset views over the Sibuyan Sea.",
        entranceFee: "Free (dining costs apply)",
        openingHours: "10:00 AM – 9:00 PM (most restaurants)",
        fullDescription: "The Pandan Bay Seaside Restaurant strip is one of Antique's most beloved dining experiences. Lined along a scenic stretch of coast, these open-air restaurants serve freshly caught fish, grilled squid, prawns, and local stews with unobstructed views of the Sibuyan Sea. Sunset dinner here — with the sky turning orange and gold over the water — is a highlight that many tourists describe as the most memorable meal of their Philippine travels.",
        activities: ["Sunset dining", "Fresh seafood feasting", "Waterfront strolling", "Photography"],
        bestTime: "Late afternoon to evening for sunset views (4:00 PM – 7:00 PM)",
        travelTips: "Arrive by 5:00 PM to secure a table for sunset dining — it gets busy. Ask about the day's fresh catch rather than ordering from the fixed menu for the best freshness. The grilled lobster, when available, is a must-try."
    },
    {
        id: 20,
        name: "Anini-y Delicacy Shops",
        municipality: "Anini-y",
        category: "Food Destination",
        image: "images/budbod.png",
        description: "A cluster of heritage shops in southern Antique renowned for their handmade native delicacies — the best place to shop for edible pasalubong from Antique.",
        entranceFee: "Free",
        openingHours: "6:00 AM – 6:00 PM daily",
        fullDescription: "The Anini-y Delicacy Shops are a beloved institution in southern Antique. These small, family-run shops have been producing traditional native delicacies for generations — including budbod, puto, bibingka, pastillas de leche, barquillos, and yema. Everything is made by hand using local ingredients. It is the go-to destination for tourists seeking authentic Antiqueño pasalubong (take-home gifts) and sweets to bring back for family and friends.",
        activities: ["Delicacy shopping", "Food tasting", "Pasalubong buying", "Local vendor chat"],
        bestTime: "Morning hours for the freshest batches",
        travelTips: "Stock up on budbod and barquillos — they make excellent gifts and travel well. Purchase from multiple shops to compare recipes. Bring extra cash as quantities are often limited and items sell out fast."
    }
];

// ── Rendering Logic ──────────────────────────────────────────────────────────
let activeFilter = "All";
let searchQuery  = "";

function getFilteredDestinations() {
    return destinations.filter(d => {
        const matchesFilter = activeFilter === "All" || d.category === activeFilter;
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q ||
            d.name.toLowerCase().includes(q) ||
            d.municipality.toLowerCase().includes(q) ||
            d.category.toLowerCase().includes(q);
        return matchesFilter && matchesSearch;
    });
}

function renderCards() {
    const grid     = document.getElementById("destGrid");
    const noRes    = document.getElementById("noResults");
    const filtered = getFilteredDestinations();

    if (filtered.length === 0) {
        grid.innerHTML = "";
        noRes.style.display = "block";
        return;
    }
    noRes.style.display = "none";
    grid.innerHTML = filtered.map(d => `
        <div class="dest-card">
            <img class="dest-card-img" src="${d.image}" alt="${d.name}" onerror="this.style.background='#cfd9df';this.removeAttribute('src')">
            <div class="dest-card-body">
                <div class="dest-card-name">${d.name}</div>
                <div class="dest-card-meta">
                    <span class="dest-badge dest-badge-cat">${d.category}</span>
                    <span class="dest-badge dest-badge-loc">📍 ${d.municipality}</span>
                </div>
                <p class="dest-card-desc">${d.description}</p>
                <p class="dest-card-info">🎟️ <b>Entrance:</b> ${d.entranceFee}</p>
                <p class="dest-card-info">🕐 <b>Hours:</b> ${d.openingHours}</p>
                <button class="dest-view-btn" onclick="openModal(${d.id})">View Details</button>
            </div>
        </div>
    `).join("");
}

function openModal(id) {
    const d = destinations.find(x => x.id === id);
    if (!d) return;

    document.getElementById("destModalLabel").textContent = d.name;
    document.getElementById("destModalBody").innerHTML = `
        <img class="dest-modal-img" src="${d.image}" alt="${d.name}" onerror="this.style.display='none'">
        <p style="color:#555;line-height:1.7;">${d.fullDescription}</p>
        <div class="modal-meta-grid">
            <div class="modal-meta-item">
                <b>📍 Location</b>
                ${d.municipality}, Antique
            </div>
            <div class="modal-meta-item">
                <b>🏷️ Category</b>
                ${d.category}
            </div>
            <div class="modal-meta-item">
                <b>🎟️ Entrance Fee</b>
                ${d.entranceFee}
            </div>
            <div class="modal-meta-item">
                <b>🕐 Opening Hours</b>
                ${d.openingHours}
            </div>
            <div class="modal-meta-item">
                <b>🌤️ Best Time to Visit</b>
                ${d.bestTime}
            </div>
            <div class="modal-meta-item">
                <b>💡 Travel Tips</b>
                ${d.travelTips}
            </div>
        </div>
        <div style="margin-top:15px;">
            <b style="color:var(--primary-blue);">🎯 Activities</b>
            <div class="modal-activities">
                ${d.activities.map(a => `<span class="modal-activity-tag">${a}</span>`).join("")}
            </div>
        </div>
    `;
    const modal = new bootstrap.Modal(document.getElementById("destModal"));
    modal.show();
}

// ── Event Listeners ──────────────────────────────────────────────────────────
document.getElementById("filterBtns").addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderCards();
});

document.getElementById("destSearch").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderCards();
});

// ── Initial Render ───────────────────────────────────────────────────────────
renderCards();
