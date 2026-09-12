// ===============================
// LOCATION
// ===============================

function getLocation() {

    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {

        status.innerText =
            "Location is not supported by this browser.";

        return;
    }

    status.innerText = "Finding your location...";

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            status.innerText =
                "Location detected successfully ✓";

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

        },

        function() {

            status.innerText =
                "Unable to access location. Please allow location permission.";

        }

    );

}



// ===============================
// INTEREST BUTTONS
// ===============================

const interests =
    document.querySelectorAll(".interest");

interests.forEach(function(button) {

    button.addEventListener("click", function() {

        button.classList.toggle("active");

    });

});


// ===============================
// GENERATE TRIP
// ===============================

function generateTrip() {

    const date =
        document.getElementById("visitDate").value;

    const days =
        document.getElementById("days").value;

    if (!date) {

        alert("Please select your visit date.");

        return;
    }

    localStorage.setItem("visitDate", date);
    localStorage.setItem("tripDays", days);

    window.location.href = "itinerary.html";

}
// LOCATION FEATURE
const locationBtn = document.getElementById("locationBtn");
const locationStatus = document.getElementById("locationStatus");

if (locationBtn) {
    locationBtn.addEventListener("click", () => {

        if (!navigator.geolocation) {
            locationStatus.textContent =
                "Location is not supported by this browser.";
            return;
        }

        locationStatus.textContent = "Finding your location...";

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                locationStatus.innerHTML =
                     `Location detected • ${latitude.toFixed(4)}, ${longitude.toFixed(4)}
                     <br>
                     <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
                     View on Map →
                     </a>`;
                locationBtn.textContent = "Location detected ✓";
            },

            () => {
                locationStatus.textContent =
                    "Unable to access your location.";
            }
        );
    });
}
// SEARCH FEATURE
const searchInput = document.getElementById("searchInput");
const placeCards = document.querySelectorAll(".place-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchText = searchInput.value.toLowerCase();

        placeCards.forEach(card => {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}
// CATEGORY FILTER
const categoryButtons = document.querySelectorAll(".filter");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.category;

        placeCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

        // Change active button
        categoryButtons.forEach(btn => {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
    });

});
// PLACE DETAILS
const placeName = document.getElementById("placeName");
const placeCategory = document.getElementById("placeCategory");
const placeDescription = document.getElementById("placeDescription");

const params = new URLSearchParams(window.location.search);
const selectedPlace = params.get("place");

const places = {
    bibi: {
        name: "Bibi Ka Maqbara",
        category: "MONUMENT",
        description: "A beautiful monument of Mughal-era architecture in Chhatrapati Sambhajinagar.",
        about: "Bibi Ka Maqbara is one of the most recognisable monuments of Chhatrapati Sambhajinagar. Its architecture reflects the influence of Mughal design and makes it an important part of the city's historical landscape.",
        bestTime: "October to March, especially during the cooler morning or late afternoon hours.",
        historicalImportance: "Bibi Ka Maqbara is an important Mughal-era monument in the Deccan and forms a significant part of the historical heritage of Chhatrapati Sambhajinagar.",
        heritageRelation: "Bibi Ka Maqbara reflects India's rich Mughal and Deccan heritage through its architecture, history and cultural significance.",
        story: "Local traditions often connect this monument with stories of Mughal-era life and the cultural traditions of the Deccan. These traditions are part of the way the monument is remembered and experienced today.",
        photos: [
            "https://images.unsplash.com/photo-159661046289-e319879846e41?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564540759233-c60657eea523?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "2.4 km",
        coordinates: {
            lat: 19.8776,
            lng: 75.3433
        }
    },

    daulatabad: {
        name: "Daulatabad Fort",
        category: "FORT",
        description: "A magnificent hill fort known for its powerful defenses and fascinating history.",
        about: "Daulatabad Fort is a remarkable medieval hill fortress known for its strategic location, massive defenses and fascinating history in the Deccan.",
        bestTime: "October to March, especially in the morning or late afternoon.",
        historicalImportance: "Daulatabad Fort is an important medieval hill fortress in the Deccan, known for its strategic location, strong defensive architecture and role in the history of the region.",
        heritageRelation: "Daulatabad Fort represents India's medieval Deccan heritage through its architecture, strategic design and long history of changing rulers and kingdoms.",
        story: "Local traditions and stories surrounding Daulatabad often highlight the fort's mysterious passages, powerful defenses and dramatic history. These stories add to the sense of wonder visitors experience while exploring the hill fort.",
        photos: [
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "15 km",
        coordinates: {
            lat: 19.9436,
            lng: 75.2219
        },
    },

    ajanta: {
        name: "Ajanta Caves",
        category: "CAVES",
        description: "Ancient rock-cut caves famous for Buddhist paintings, sculptures and heritage.",
        about: "The Ajanta Caves are an extraordinary group of rock-cut caves known for their ancient paintings, sculptures and Buddhist heritage.",
        bestTime: "October to March, when the weather is generally cooler and more comfortable for exploring the caves.",
        historicalImportance: "The Ajanta Caves are an important part of India's ancient Buddhist heritage and are renowned for their rock-cut architecture, paintings and sculptures created over many centuries.",
        heritageRelation: "The Ajanta Caves are a major part of India's Buddhist and artistic heritage, preserving ancient paintings, sculptures and rock-cut architecture.",
        story: "The Ajanta Caves are closely connected with Buddhist traditions and stories of monks who lived and meditated in the caves. Their paintings and sculptures preserve scenes and teachings associated with Buddhist traditions.",
        photos: [
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "100 km",
        coordinates: {
            lat: 20.5519,
            lng: 75.7033
        },
    },

    ellora: {
        name: "Ellora Caves",
        category: "CAVES",
        description: "A remarkable rock-cut heritage complex representing Buddhist, Hindu and Jain traditions.",
        about: "The Ellora Caves form a remarkable rock-cut heritage complex where Buddhist, Hindu and Jain traditions are represented together.",
        bestTime: "October to March, when the weather is generally cooler for exploring the cave complex.",
        historicalImportance: "The Ellora Caves are an important part of India's heritage, showcasing remarkable rock-cut architecture and the coexistence of Buddhist, Hindu and Jain traditions.",
        heritageRelation: "The Ellora Caves represent India's diverse cultural heritage through the shared presence of Buddhist, Hindu and Jain traditions in one remarkable rock-cut complex.",
        story: "Ellora is associated with traditions from Buddhism, Hinduism and Jainism. Local stories and religious traditions connected with the caves add to the cultural meaning of this remarkable rock-cut heritage site.",
        photos: [
            "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "30 km",
        coordinates: {
            lat: 20.0268,
            lng: 75.1793
        },
    },
        grishneshwar: {
        name: "Grishneshwar Temple",
        category: "TEMPLE",
        description: "A historic temple near the Ellora Caves, known for its cultural and religious significance.",
        about: "Grishneshwar Temple is an important heritage and pilgrimage site near the Ellora Caves. It is associated with the Jyotirlinga tradition and forms part of the cultural landscape of the Ellora region.",
        bestTime: "October to March, with cooler weather making temple visits more comfortable.",
        historicalImportance: "Grishneshwar Temple is an important heritage and pilgrimage site near Ellora, representing the long-standing religious and architectural traditions of the Deccan region.",
        heritageRelation: "Grishneshwar Temple represents India's living religious and architectural heritage and reflects the long-standing traditions of Hindu pilgrimage in the Deccan.",
        story: "According to Hindu tradition, Grishneshwar is associated with the legend of Ghushma, a devoted woman whose faith and devotion are connected with the manifestation of Lord Shiva as a Jyotirlinga. This traditional story is an important part of the temple's religious significance.",
        photos: [
            "https://images.unsplash.com/photo-1600100397608-f010a3a6f5f4?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "30 km",
        coordinates: {
            lat: 20.0237,
            lng: 75.1779
        }
    },
        aurangabadCaves: {
        name: "Aurangabad Caves",
        category: "CAVES",
        description: "An ancient rock-cut cave complex known for its sculptures and Buddhist heritage.",
        about: "Aurangabad Caves are a group of rock-cut caves located near Chhatrapati Sambhajinagar, known for their sculptures, architecture and connection with Buddhist heritage.",
        bestTime: "October to March, when the weather is generally cooler for exploring the caves.",
        historicalImportance: "The Aurangabad Caves are an important example of ancient Buddhist rock-cut architecture, with sculptures and monuments that reflect the artistic and religious traditions of the Deccan.",
        heritageRelation: "The Aurangabad Caves contribute to India's Buddhist and artistic heritage through their ancient sculptures, rock-cut architecture and connection to the Deccan region.",
        story: "The caves are connected with Buddhist traditions of meditation and monastic life. Their quiet rock-cut spaces and sculptures reflect the spiritual traditions that developed in the Deccan.",
        photos: [
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=700&q=80"
        ],
        distance: "5 km",
        coordinates: {
            lat: 19.8912,
            lng: 75.3222
        }
    },
        panchakki: {
        name: "Panchakki",
        category: "MONUMENT",
        description: "A historic water mill known for its ingenious engineering and peaceful surroundings.",
        about: "Panchakki is a historic water mill in Chhatrapati Sambhajinagar, showcasing the remarkable water-management and engineering techniques of its time.",
        bestTime: "October to March, when the weather is generally cooler and pleasant for exploring the site.",
        historicalImportance: "Panchakki is an important example of historical water-management and engineering in Chhatrapati Sambhajinagar, reflecting the ingenuity of the region's past.",
        heritageRelation: "Panchakki reflects India's engineering and architectural heritage through its historic water-management system and the ingenuity of the Deccan region.",
        story: "Local traditions remember Panchakki as a remarkable example of water-powered engineering. Stories surrounding the site often highlight the ingenuity used to bring water from a distant source and power the historic mill.",
        photos: [
            "YOUR_PHOTO_1",
            "YOUR_PHOTO_2",
            "YOUR_PHOTO_3"
        ],
        distance: "3 km",
        coordinates: {
            lat: 19.8876,
            lng: 75.3206
        }
    },
        gates: {
        name: "52 Historic Gates of Chhatrapati Sambhajinagar",
        category: "MONUMENT",
        description: "A remarkable network of historic gates that reflects the city's medieval architecture and urban heritage.",
        about: "The historic gates of Chhatrapati Sambhajinagar are an important part of the city's architectural identity and tell the story of its historic development.",
        bestTime: "October to March, when the weather is generally cooler for exploring the historic city.",
        historicalImportance: "The historic gates of Chhatrapati Sambhajinagar are an important part of the city's medieval heritage, reflecting its historic fortifications, urban planning and architectural character.",
        heritageRelation: "The historic gates preserve an important part of India's urban and architectural heritage, showing how medieval cities were protected and organised.",
        story: "Local stories surrounding the historic gates preserve memories of the old walled city and the life that once passed through these entrances. These traditions help connect the gates with the city's changing cultural landscape.",
        photos: [
            "YOUR_PHOTO_1",
            "YOUR_PHOTO_2",
            "YOUR_PHOTO_3"
        ],
        distance: "4 km",
        coordinates: {
            lat: 19.8762,
            lng: 75.3433
        }
    },
        aurangzebTomb: {
        name: "Aurangzeb's Tomb",
        category: "MONUMENT",
        description: "A simple historic tomb associated with the last major Mughal emperor.",
        about: "Aurangzeb's Tomb is located at Khuldabad near Chhatrapati Sambhajinagar and is known for its simple design and historical association with the Mughal period.",
        bestTime: "October to March, when the weather is generally cooler for exploring Khuldabad.",
        historicalImportance: "Aurangzeb's Tomb is an important historical site associated with the Mughal period in the Deccan and forms part of the region's rich historical heritage.",
        heritageRelation: "Aurangzeb's Tomb forms part of India's Mughal and Deccan heritage, reflecting the historical connections between the Mughal Empire and the region.",
        story: "The tomb is traditionally remembered for its simplicity and connection with Aurangzeb's personal wishes. Its modest appearance is often contrasted with the grand architecture associated with the Mughal period.",
        photos: [
            "YOUR_PHOTO_1",
            "YOUR_PHOTO_2",
            "YOUR_PHOTO_3"
        ],
        distance: "25 km",
        coordinates: {
            lat: 20.0064,
            lng: 75.1781
        }
    },
        soneriMahal: {
        name: "Soneri Mahal",
        category: "MONUMENT",
        description: "A historic palace known for its architecture and connection with the cultural heritage of the region.",
        about: "Soneri Mahal is a historic palace in Chhatrapati Sambhajinagar that reflects the architectural and cultural heritage of the region.",
        bestTime: "October to March, when the weather is generally cooler and pleasant for exploring the palace.",
        historicalImportance: "Soneri Mahal is an important historic palace that reflects the architectural and cultural heritage of the Deccan region and the history of Chhatrapati Sambhajinagar.",
        heritageRelation: "Soneri Mahal contributes to India's architectural and cultural heritage by preserving the history and artistic traditions of the Deccan region.",
        story: "Local traditions surrounding Soneri Mahal connect the palace with the artistic and cultural life of the Deccan. Stories about its historic grandeur help preserve memories of the people and traditions associated with the palace.",
        photos: [
            "YOUR_PHOTO_1",
            "YOUR_PHOTO_2",
            "YOUR_PHOTO_3"
        ],
        distance: "4 km",
        coordinates: {
            lat: 19.8801,
            lng: 75.3347
        }
    },
};

if (selectedPlace && places[selectedPlace]) {
    placeName.textContent = places[selectedPlace].name;
    document.getElementById("locationPlaceName").textContent = places[selectedPlace].name;
    document.getElementById("placeDistance").textContent = "Calculating...";
    placeCategory.textContent = places[selectedPlace].category;
    placeDescription.textContent = places[selectedPlace].description;
    document.getElementById("placeAbout").textContent = places[selectedPlace].about;
    document.getElementById("placeBestTime").textContent = places[selectedPlace].bestTime;
    document.getElementById("placeHistorical").textContent =  places[selectedPlace].historicalImportance;
    document.getElementById("placeHeritage").textContent = places[selectedPlace].heritageRelation;
    document.getElementById("placeStory").textContent = places[selectedPlace].story;
    document.getElementById("placePhoto1").src = places[selectedPlace].photos[0];
    document.getElementById("placePhoto2").src = places[selectedPlace].photos[1];
    document.getElementById("placePhoto3").src = places[selectedPlace].photos[2];
}
// NAVIGATE TO PLACE
const placeDistance = document.getElementById("placeDistance");

if (placeDistance && selectedPlace && places[selectedPlace]) {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(position) {

                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;

                const placeLat =
                    places[selectedPlace].coordinates.lat;

                const placeLng =
                    places[selectedPlace].coordinates.lng;

                const distance = calculateDistance(
                    userLat,
                    userLng,
                    placeLat,
                    placeLng
                );

                placeDistance.textContent =
                    `${distance.toFixed(1)} km`;

            },

            function() {

                placeDistance.textContent =
                    places[selectedPlace].distance;

            }

        );

    }
}
const navigateButton = document.getElementById("navigateButton");

if (navigateButton && selectedPlace && places[selectedPlace]) {
    const lat = places[selectedPlace].coordinates.lat;
    const lng = places[selectedPlace].coordinates.lng;

    navigateButton.addEventListener("click", () => {
        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
            "_blank"
        );
    });
}
const visitDate = document.getElementById("visitDate");
const selectedDateText = document.getElementById("selectedDateText");
const festivalTitle = document.getElementById("festivalTitle");
const festivalDescription = document.getElementById("festivalDescription");
const recommendation1Name =
    document.getElementById("recommendation1Name");

const recommendation1Description =
    document.getElementById("recommendation1Description");
if (visitDate && festivalTitle && festivalDescription) {
    visitDate.addEventListener("change", () => {
        const selectedMonth = new Date(visitDate.value).getMonth() + 1;

        if (selectedMonth === 10) {
            festivalTitle.textContent = "Festival & Heritage Experiences";
            festivalDescription.textContent =
               "October is a vibrant month for cultural celebrations. Explore heritage places and experience local traditions during the festive season.";

        recommendation1Name.textContent = "Grishneshwar Temple";
        recommendation1Description.textContent =
        "Visit this historic temple near Ellora and experience the cultural atmosphere of the region during the festive season.";
        } 
else if (selectedMonth === 11) {
    festivalTitle.textContent = "Heritage & Cultural Experiences";
    festivalDescription.textContent =
        "Discover heritage monuments, temples and cultural traditions that make the region special during this season.";

    recommendation1Name.textContent = "Ellora Caves";
    recommendation1Description.textContent =
        "Explore the remarkable rock-cut heritage of Ellora and discover the different cultural traditions represented at the site.";
        }
else {
            festivalTitle.textContent = "Heritage Experiences for Your Date";
            festivalDescription.textContent =
                "Explore heritage places and cultural experiences that can make your selected visit date special.";
        }
    });
}
if (visitDate && selectedDateText) {
    visitDate.addEventListener("change", () => {
        const selectedDate = new Date(visitDate.value);

        const formattedDate = selectedDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });

        selectedDateText.textContent =
            `Your selected visit date: ${formattedDate}`;
    });
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}
const interestButtons = document.querySelectorAll(".interest");

interestButtons.forEach((button) => {
    button.addEventListener("click", () => {
        interestButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});
function generateTrip() {
    const days = document.getElementById("days").value;
    const visitDateInput = document.getElementById("visitDate").value;

let visitDate = "Not selected";

if (visitDateInput) {
    visitDate = new Date(visitDateInput).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
    const selectedInterest =
        document.querySelector(".interest.active").dataset.interest;
        let recommendedPlace = "Bibi Ka Maqbara";

    if (selectedInterest === "temples") {
        recommendedPlace = "Grishneshwar Temple";
    } else if (selectedInterest === "caves") {
        recommendedPlace = "Ellora Caves";
    } else if (selectedInterest === "forts") {
        recommendedPlace = "Daulatabad Fort";
    } else if (selectedInterest === "history") {
        recommendedPlace = "Bibi Ka Maqbara";
    }    else if (selectedInterest === "nature") {
        recommendedPlace = "Ellora Caves";
    }
    
    const tripResult = document.getElementById("tripResult");

    tripResult.innerHTML = `
        <div class="trip-result-card">
            <h3>✨ Your ${days}-Day Heritage Itinerary</h3>
            <p class="itinerary-date">📅 Visit date: ${visitDate || "Not selected"}</p>
            <p class="itinerary-subtitle">A heritage journey planned around your interests</p>
            <p>Interest: ${selectedInterest}</p>
            <p>Day 1: <a href="place.html?place=${selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "caves" ? "ellora" : selectedInterest === "forts" ? "daulatabad" : "bibi"}">${recommendedPlace}</a> — explore its heritage and cultural significance. <a href="https://www.google.com/maps/search/?api=1&query=${places[selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "caves" ? "ellora" : selectedInterest === "forts" ? "daulatabad" : "bibi"].coordinates.lat},${places[selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "caves" ? "ellora" : selectedInterest === "forts" ? "daulatabad" : "bibi"].coordinates.lng}" target="_blank">View on Map →</a></p>
            ${days >= 2 ? `<p>Day 2: <a href="place.html?place=${selectedInterest === "temples" ? "bibi" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ajanta" : "ellora"}">${selectedInterest === "temples" ? "Bibi Ka Maqbara" : selectedInterest === "forts" ? "Daulatabad Fort" : selectedInterest === "caves" ? "Ajanta Caves" : "Ellora Caves"}</a> — continue discovering the heritage of the region. <a href="https://www.google.com/maps/search/?api=1&query=${places[selectedInterest === "temples" ? "bibi" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ajanta" : "ellora"].coordinates.lat},${places[selectedInterest === "temples" ? "bibi" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ajanta" : "ellora"].coordinates.lng}" target="_blank">View on Map →</a></p>` : ""}
            ${days >= 3 ? `<p>Day 3: <a href="place.html?place=${selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ellora" : "ajanta"}">${selectedInterest === "temples" ? "Grishneshwar Temple" : selectedInterest === "forts" ? "Daulatabad Fort" : selectedInterest === "caves" ? "Ellora Caves" : "Ajanta Caves"}</a> — explore another important heritage experience. <a href="https://www.google.com/maps/search/?api=1&query=${places[selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ellora" : "ajanta"].coordinates.lat},${places[selectedInterest === "temples" ? "grishneshwar" : selectedInterest === "forts" ? "daulatabad" : selectedInterest === "caves" ? "ellora" : "ajanta"].coordinates.lng}" target="_blank">View on Map →</a></p>` : ""}
        `;
}
function getLocation() {
    const locationStatus = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        locationStatus.textContent =
            "Location is not supported by this browser.";
        return;
    }

    locationStatus.textContent = "Finding your location...";

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationStatus.innerHTML =
                `Location detected • ${latitude.toFixed(4)}, ${longitude.toFixed(4)}
                <br>
                <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank">
                View on Map →
                </a>`;
        },
        function() {
            locationStatus.textContent =
                "Unable to access your location.";
        }
    );
}
// =========================
// LANGUAGE SELECTOR
// =========================

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {

        const language = this.value;

        const navTexts = document.querySelectorAll(
            ".navigation .nav-button span"
        );

        if (language === "hi") {

            navTexts[0].textContent = "होम";
            navTexts[1].textContent = "आज की विशेषता";
            navTexts[2].textContent = "खोजें";

        } else if (language === "mr") {

            navTexts[0].textContent = "मुख्यपृष्ठ";
            navTexts[1].textContent = "आजचे वैशिष्ट्य";
            navTexts[2].textContent = "अन्वेषण";

        } else {

            navTexts[0].textContent = "Home";
            navTexts[1].textContent = "Speciality of Day";
            navTexts[2].textContent = "Explore";

        }

    });

}