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
        photos: [
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80",
            "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",
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
};

if (selectedPlace && places[selectedPlace]) {
    placeName.textContent = places[selectedPlace].name;
    document.getElementById("locationPlaceName").textContent = places[selectedPlace].name;
    document.getElementById("placeDistance").textContent = "Calculating...";
    placeCategory.textContent = places[selectedPlace].category;
    placeDescription.textContent = places[selectedPlace].description;
    document.getElementById("placeAbout").textContent = places[selectedPlace].about;
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