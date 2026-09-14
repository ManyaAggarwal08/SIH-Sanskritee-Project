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

// LOCATION FEATURE
let userLatitude = null;
let userLongitude = null;
const savedLatitude = localStorage.getItem("userLatitude");
const savedLongitude = localStorage.getItem("userLongitude");

if (savedLatitude !== null && savedLongitude !== null) {
    console.log("PLACE PAGE SAVED LOCATION:", savedLatitude, savedLongitude);
    userLatitude = parseFloat(savedLatitude);
    userLongitude = parseFloat(savedLongitude);
}
console.log("LOCATION SCRIPT LOADED");
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
                userLatitude = position.coords.latitude;
                userLongitude = position.coords.longitude;
                localStorage.setItem("userLatitude", userLatitude);
                localStorage.setItem("userLongitude", userLongitude);
                locationStatus.innerHTML =
                     `Location detected • ${userLatitude.toFixed(4)}, ${userLongitude.toFixed(4)}
                     <br>
                     <a href="https://www.google.com/maps?q=${userLatitude},${userLongitude}" target="_blank">
                     View on Map →
                     </a>`;
                locationBtn.textContent = "Location detected ✓";
                updateExploreDistances();
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

        speciality: "Often called the “Mini Taj of the Deccan” because of its visual resemblance to the Taj Mahal.",

        culturalViews: {
            historical: "Bibi Ka Maqbara is a 17th-century Mughal mausoleum built in memory of Dilras Banu Begum, the wife of Aurangzeb. It reflects Mughal architectural influence in the Deccan.",
            
            traditional: "The monument is remembered through the cultural traditions and historical memory associated with the Mughal period and the Deccan region.",
            
            local: "Bibi Ka Maqbara is an important part of Chhatrapati Sambhajinagar's historic identity and reflects the city's Mughal and Deccan heritage.",
            
            tourist: "Visitors are drawn to its elegant architecture, peaceful gardens and its popular resemblance to the Taj Mahal, which has earned it the name “Mini Taj of the Deccan.”"
        },
        
        funFacts: [
    {
        title: "Mini Taj of the Deccan",
        text: "Bibi Ka Maqbara is popularly known as the “Mini Taj of the Deccan” because of its visual resemblance to the Taj Mahal."
    },
    {
        title: "Mughal Garden",
        text: "The monument is surrounded by gardens that form an important part of its Mughal architectural character."
    },
    {
        title: "Mughal Architecture",
        text: "Its dome, minarets and decorative elements reflect Mughal architectural influence in the Deccan."
    },
    {
        title: "A Memorial",
        text: "The monument was built in memory of Dilras Banu Begum, the wife of Aurangzeb."
    }
],
        experience: "Bibi Ka Maqbara offers a peaceful and elegant heritage experience. Its grand architecture, gardens and Mughal design create a memorable atmosphere for visitors exploring the history of the Deccan.",

        historicalRecord: "Bibi Ka Maqbara is a 17th-century Mughal mausoleum built in memory of Dilras Banu Begum, the wife of Aurangzeb. Often called the “Mini Taj of the Deccan,” it reflects Mughal architectural influence in the Deccan.",
        heritageHighlight: "Look closely at the dome, minarets and gardens to see how Mughal architectural ideas were adapted to the Deccan.",
        beliefNote: "Bibi Ka Maqbara is primarily a historical and architectural monument, rather than a site associated with a major mythological tradition.",
        description: "Bibi Ka Maqbara is a 17th-century Mughal mausoleum in Chhatrapati Sambhajinagar, Maharashtra, built in memory of Dilras Banu Begum (Rabia-ud-Durrani), wife of Emperor Aurangzeb.",

        about: "Bibi Ka Maqbara is a 17th-century Mughal mausoleum in Chhatrapati Sambhajinagar, Maharashtra, built in memory of Dilras Banu Begum (Rabia-ud-Durrani), wife of Emperor Aurangzeb. Because of its resemblance to the Taj Mahal, it is popularly called the “Mini Taj of the Deccan.”",

        bestTime: "October to March. The best time of day is morning or late afternoon. ASI's listed visiting hours are 9:00 a.m. to 5:30 p.m. or sunset, whichever is earlier.",

        historicalImportance: "Built in the 17th century as a mausoleum for Aurangzeb's wife, Bibi Ka Maqbara reflects the Mughal architectural tradition in the Deccan. Its design was inspired by the Taj Mahal, giving it its popular nickname. ASI lists it officially as the “Tomb of Rabia Daurani (Bibi-ka-Maqbara)”.",

        heritageRelation: "It represents the Mughal architectural heritage of the Deccan. Its combination of a central dome, minarets, gardens and decorative work demonstrates the development of Mughal funerary architecture outside northern India. It is part of Maharashtra's officially recognised heritage attractions.",

        story: "Bibi Ka Maqbara is not primarily a mythological site. It is a Mughal Islamic funerary monument, serving as the tomb of Dilras Banu Begum. Its importance is mainly religious, architectural and historical, rather than connected with Hindu mythology.",

        heroImage: "../assets/images/bibi.png",

        photos: [
            "../assets/images/bibi1.jpg",
            "../assets/images/bibi2.jpg",
            "../assets/images/bibi3.jpg"
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

        speciality: "The fort was designed to be extremely difficult to capture, using the natural hill along with artificial defensive structures.",

        culturalViews: {
            historical: "Daulatabad Fort, historically known as Deogiri, was an important medieval hill fortress. It was associated with the Yadava rulers and later became an important stronghold under the Bahmani, Ahmadnagar, Mughal and Maratha powers.",
            
            traditional: "Local traditions and legends are connected with the fort and its hill, although these stories should be understood as legends rather than established historical facts.",
            
            local: "Daulatabad Fort is an important part of the heritage of Chhatrapati Sambhajinagar and reflects the region's medieval history, military architecture and changing rulers.",
            
            tourist: "Visitors can explore the hill fortress, defensive passages and historic structures while experiencing impressive views from the elevated site."
        },
        
        funFacts: [
    {
        title: "Deogiri",
        text: "Daulatabad Fort was historically known as Deogiri and became an important medieval hill fortress."
    },
    {
        title: "Hilltop Fortress",
        text: "The fort rises on a steep, conical hill and uses the natural landscape as part of its defence."
    },
    {
        title: "Ingenious Defences",
        text: "The fort is known for clever defensive features, including difficult passages and the famous Andheri route."
    },
    {
        title: "Chand Minar",
        text: "The fort complex includes the tall Chand Minar, one of its most distinctive historic structures."
    }
],
        experience: "Daulatabad Fort offers an adventurous and historic experience. Visitors can explore steep pathways, defensive passages and hilltop structures while taking in views of the surrounding landscape.",
        historicalRecord: "Daulatabad Fort, historically known as Deogiri, was an important medieval hill fortress. It was associated with the Yadava rulers and later became an important stronghold under the Bahmani, Ahmadnagar, Mughal and Maratha powers.",
        heritageHighlight: "The fort's steep hill, defensive passages and Andheri route show how the natural landscape was incorporated into its military design.",
        beliefNote: "Local legends are associated with Daulatabad and its hill, but these stories should be understood as legends rather than established historical facts.",
        description: "Daulatabad Fort, originally called Deogiri, is a spectacular medieval hill fortress in Maharashtra, famous for its strategic location and highly advanced defensive architecture.",

        about: "Daulatabad Fort, originally called Deogiri, is a spectacular medieval hill fortress in Maharashtra, famous for its strategic location and highly advanced defensive architecture. It is located on a roughly 200-metre-high conical hill.",

        bestTime: "October to March, as cooler weather makes the climb more comfortable. The best time of day is morning, especially because the fort involves considerable walking and climbing.",

        historicalImportance: "Daulatabad Fort was founded by the Yadava ruler Bhillama V in the medieval period. It became an important Yadava capital and military stronghold. In 1327, Muhammad bin Tughluq shifted the capital of the Delhi Sultanate from Delhi to Daulatabad for a period. The fort later came under the Bahmani, Ahmadnagar, Mughal and Maratha regimes.",

        heritageRelation: "Daulatabad represents India's medieval military architecture and Deccan history. Its defensive design demonstrates sophisticated knowledge of terrain, fortification and warfare. It is a protected historical monument, with the Archaeological Survey of India (ASI) responsible for its protection.",

        story: "The original name Deogiri is traditionally understood as “Hill of Gods.” Some popular legends connect the fort with Bhima of the Mahabharata, but these are legends, not established historical facts.",

        heroImage: "../assets/images/df.png",

        photos: [
            "../assets/images/df1.jpg",
            "../assets/images/df2.jpg",
            "../assets/images/df3.jpg"
        ],

        distance: "15 km",

        coordinates: {
            lat: 19.9436,
            lng: 75.2219
        }
    },


    ajanta: {
        name: "Ajanta Caves",
        category: "CAVES",

        speciality: "Ajanta is particularly famous for its ancient murals, considered masterpieces of Buddhist religious art.",

        culturalViews: {
            historical: "Ajanta consists of 30 ancient Buddhist rock-cut monuments, with the earliest dating to the 2nd–1st centuries BCE and major development during the 5th–6th centuries CE.",
            
            traditional: "The caves reflect Buddhist religious traditions through their monasteries, sculptures and paintings, including stories connected with the Jataka tradition.",
            
            local: "Ajanta is an important part of Maharashtra's heritage and represents the region's long connection with Buddhist art, architecture and cultural traditions.",
            
            tourist: "Visitors can explore remarkable rock-cut caves, ancient sculptures and famous murals while experiencing the dramatic setting of the caves along the Waghora gorge."
        },

        funFacts: [
    {
        title: "30 Rock-Cut Monuments",
        text: "Ajanta consists of 30 ancient Buddhist rock-cut monuments carved into the rock of the Waghora gorge."
    },
    {
        title: "Jataka Stories",
        text: "The famous paintings and sculptures of Ajanta include stories associated with the Jataka tradition."
    },
    {
        title: "Ancient Buddhist Heritage",
        text: "The earliest caves date to the 2nd-1st centuries BCE, with major development during the 5th-6th centuries CE."
    },
    {
        title: "UNESCO World Heritage Site",
        text: "Ajanta was inscribed as a UNESCO World Heritage Site in 1983 in recognition of its outstanding cultural heritage."
    }
],
        experience: "Ajanta offers a deeply artistic and spiritual heritage experience. Visitors can explore ancient Buddhist caves, murals and sculptures set within the dramatic Waghora gorge.",
        historicalRecord: "Ajanta consists of 30 ancient Buddhist rock-cut monuments. The earliest caves date to the 2nd-1st centuries BCE, while major development took place during the 5th-6th centuries CE. The caves are famous for their murals, sculptures and Buddhist heritage.",
        heritageHighlight: "Ajanta's murals and sculptures provide an important record of ancient Buddhist art and cultural life.",
        beliefNote: "Ajanta is primarily connected with Buddhist religious traditions, including narratives and teachings represented through its paintings and sculptures.",
        description: "Ajanta Caves are a group of 30 ancient Buddhist rock-cut monuments in Maharashtra, famous especially for their exceptionally preserved murals, sculptures and Buddhist architecture.",

        about: "Ajanta Caves are a group of 30 ancient Buddhist rock-cut monuments in Maharashtra, famous especially for their exceptionally preserved murals, sculptures and Buddhist architecture. The earliest caves date to the 2nd-1st centuries BCE, with major additions in the 5th-6th centuries CE.",

        bestTime: "November to March, when the weather is cooler and more comfortable for sightseeing. Morning is the best time for a quieter visit and better sightseeing.",

        historicalImportance: "Ajanta developed in two major phases, separated by about four centuries. The first phase is associated with the Satavahana period. The second major phase occurred under the Vakatakas, especially during the 5th-6th centuries CE. The caves functioned as Buddhist monasteries and prayer halls. Ajanta became a UNESCO World Heritage Site in 1983.",

        heritageRelation: "Ajanta is one of India's greatest examples of ancient painting, sculpture and rock-cut architecture. It provides evidence about the religious, social and cultural life of ancient India. UNESCO considers its art a unique artistic achievement and notes its influence beyond India, including Java.",

        story: "Ajanta is primarily a Buddhist religious site, rather than a Hindu mythological site. The paintings depict Jataka tales — stories of Buddha's previous lives. The later caves contain images of Buddha and Bodhisattvas.",

        heroImage: "../assets/images/ac.png",

        photos: [
            "../assets/images/ac1.jpeg",
            "../assets/images/ac2.jpeg",
            "../assets/images/ac3.jpeg"
        ],

        distance: "100 km",

        coordinates: {
            lat: 20.5519,
            lng: 75.7033
        }
    },


    ellora: {
        name: "Ellora Caves",
        category: "CAVES",

        speciality: "Ellora is a unique meeting point of three religions, ancient Indian art and extraordinary rock-cut engineering—especially the monumental Kailasa Temple.",

        culturalViews: {
            historical: "Ellora is a UNESCO World Heritage Site with 34 rock-cut caves developed between the 6th and 12th centuries CE. The caves reflect the artistic and architectural traditions of Buddhism, Hinduism and Jainism.",
            
            traditional: "Ellora reflects three major religious traditions through its Buddhist, Hindu and Jain caves. Cave 16, the Kailasa temple, is dedicated to Shiva and includes scenes connected with Hindu traditions.",
            
            local: "Ellora is an important part of Maharashtra's Deccan heritage and represents the region's long history of religious diversity, artistic traditions and remarkable rock-cut craftsmanship.",
            
            tourist: "Visitors can experience an extraordinary collection of rock-cut monuments, including the massive Kailasa temple, while exploring the meeting point of three religious traditions."
        },
        
        funFacts: [
    {
        title: "34 Rock-Cut Caves",
        text: "Ellora is a remarkable complex of 34 rock-cut caves developed between the 6th and 12th centuries CE."
    },
    {
        title: "Three Religions",
        text: "The caves represent Buddhism, Hinduism and Jainism, making Ellora an important example of India's religious and artistic diversity."
    },
    {
        title: "Kailasa Temple",
        text: "Cave 16 contains the famous Kailasa temple, a massive monolithic temple dedicated to Shiva."
    },
    {
        title: "UNESCO Heritage",
        text: "Ellora was inscribed as a UNESCO World Heritage Site in 1983."
    }
],
        experience: "Ellora offers an extraordinary journey through India's religious and artistic heritage. Visitors can explore Buddhist, Hindu and Jain caves, including the monumental Kailasa temple.",
        historicalRecord: "Ellora is a UNESCO World Heritage Site containing 34 rock-cut caves developed between the 6th and 12th centuries CE. The caves represent Buddhist, Hindu and Jain traditions, including the monumental Kailasa temple in Cave 16.",
        heritageHighlight: "The Kailasa temple in Cave 16 is a remarkable example of monolithic rock-cut architecture and Hindu artistic tradition.",
        beliefNote: "Ellora reflects Buddhist, Hindu and Jain religious traditions. Its stories and religious imagery should be understood within those traditions.",
        description: "Ellora Caves are a UNESCO World Heritage Site in Maharashtra, famous for 34 rock-cut caves representing Buddhism, Hinduism and Jainism.",

        about: "Ellora Caves are a UNESCO World Heritage Site in Maharashtra, famous for 34 rock-cut caves representing Buddhism, Hinduism and Jainism. They were created over several centuries, broadly from about the 6th to 12th century CE.",

        bestTime: "October to March, because the weather is generally cooler and more comfortable. Morning is the best time for comfortable sightseeing and better natural light.",

        historicalImportance: "Ellora represents three religious traditions: Buddhism, Hinduism/Brahmanism and Jainism. The caves were excavated in different phases over centuries. Kailasa Temple (Cave 16) is the largest monolithic temple at Ellora and an extraordinary achievement of rock-cut architecture. Ellora became a UNESCO World Heritage Site in 1983.",

        heritageRelation: "Ellora is one of India's major examples of rock-cut architecture, sculpture and religious heritage. UNESCO recognises it as a masterpiece of human creative genius and highlights its importance as evidence of ancient Indian civilization. A particularly special feature is the presence of three major religious traditions within one monumental complex, demonstrating a historical tradition of religious coexistence.",

        story: "Cave 16 - Kailasa Temple is dedicated to Lord Shiva. Its sculptures include the famous scene of Ravana attempting to lift Mount Kailasa, Shiva's abode. Many sculptures depict stories and figures from Hindu religious traditions, including Shiva, Vishnu and other deities.",

        heroImage: "../assets/images/e.png",

        photos: [
            "../assets/images/e1.jpeg",
            "../assets/images/e2.jpeg",
            "../assets/images/e3.jpeg"
        ],

        distance: "30 km",

        coordinates: {
            lat: 20.0268,
            lng: 75.1793
        }
    },


    grishneshwar: {
        name: "Grishneshwar Temple",
        category: "TEMPLE",

        speciality: "It is traditionally regarded as the 12th and final Jyotirlinga.",

        culturalViews: {
            historical: "Grishneshwar is an ancient Shiva temple at Verul near Ellora and is traditionally regarded as the final of the twelve Jyotirlinga temples.",
            
            traditional: "The temple is connected with the traditional story of Ghushma and the worship of Lord Shiva. This story is part of religious belief and tradition.",
            
            local: "Grishneshwar is an important part of the religious and cultural heritage of the Chhatrapati Sambhajinagar region, especially because of its connection with Ellora.",
            
            tourist: "Visitors can experience a living Hindu heritage site with traditional temple architecture and a strong devotional atmosphere near the Ellora caves."
        },
        
        funFacts: [
    {
        title: "One of the 12 Jyotirlingas",
        text: "Grishneshwar is traditionally regarded as the final of the twelve Jyotirlinga temples dedicated to Lord Shiva."
    },
    {
        title: "Near Ellora",
        text: "The temple is located at Verul, close to the famous Ellora Caves."
    },
    {
        title: "Ghushma Tradition",
        text: "The temple is associated with the traditional story of Ghushma and her devotion to Lord Shiva."
    },
    {
        title: "Living Heritage",
        text: "Grishneshwar remains an active Hindu place of worship, connecting ancient traditions with living religious heritage."
    }
],
        experience: "Grishneshwar offers a devotional and cultural experience at a living Shiva temple near Ellora. Visitors can observe traditional worship and historic temple architecture.",
        historicalRecord: "Grishneshwar is an ancient Shiva temple at Verul near Ellora and is traditionally regarded as the final of the twelve Jyotirlinga temples. The temple has undergone rebuilding and restoration over different periods.",
        heritageHighlight: "The temple remains a living place of worship, connecting historic architecture with continuing Hindu religious traditions.",
        beliefNote: "The story of Ghushma is part of the religious tradition associated with Grishneshwar and is presented as a faith-based belief.",
        description: "Grishneshwar Temple is a famous Shiva temple at Verul (Ellora), Maharashtra, and is traditionally regarded as the 12th and final Jyotirlinga of Lord Shiva.",

        about: "Grishneshwar Temple is a famous Shiva temple at Verul (Ellora), Maharashtra, and is traditionally regarded as the 12th and final Jyotirlinga of Lord Shiva. It is located very close to the Ellora Caves.",

        bestTime: "October to March. The best experience is during Mahashivratri, usually in February or March.",

        historicalImportance: "The temple has an ancient religious history and is mentioned in traditions associated with the Shiva Purana and Skanda Purana. It suffered damage during periods of conflict in the 13th-14th centuries. It was rebuilt/restored at different times, including efforts associated with Maloji Bhosale and later Ahilyabai Holkar in the 18th century.",

        heritageRelation: "It represents India's living Hindu religious heritage and is an important pilgrimage centre. Maharashtra has three traditionally recognised Jyotirlingas: Grishneshwar, Trimbakeshwar and Bhimashankar. Its location near Ellora, a UNESCO World Heritage Site, makes the area an important combination of spiritual and architectural heritage.",

        story: "Grishneshwar is one of the 12 Jyotirlingas of Lord Shiva according to the Hindu tradition. The temple's religious tradition is associated with devotion to Shiva and the manifestation of the Jyotirlinga. Stories associated with the temple come from religious tradition and should be understood as faith-based legends, not independently verified historical events.",

        heroImage: "../assets/images/g.png",

        photos: [
            "../assets/images/g1.jpeg",
            "../assets/images/g2.jpeg",
            "../assets/images/g3.jpeg"
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

        speciality: "The caves are carved into a hillside overlooking Chhatrapati Sambhajinagar, giving them both historical and scenic value.",

        culturalViews: {
            historical: "The Aurangabad Caves are a group of 12 Buddhist rock-cut caves, carved mainly during the 6th and 7th centuries CE. Their sculptures and architectural remains provide evidence of Buddhist communities and artistic traditions in the Deccan.",
            
            traditional: "The caves are primarily connected with Buddhist religious traditions. Their sculptures and religious spaces reflect Buddhist spiritual practices and the development of rock-cut architecture in the Deccan.",
            
            local: "The caves form an important part of Chhatrapati Sambhajinagar's heritage and are a quieter historical attraction on the hillside overlooking the city.",
            
            tourist: "Visitors can explore ancient Buddhist sculptures and rock-cut spaces while enjoying hillside views. Compared with Ajanta and Ellora, the caves offer a quieter and more compact heritage experience."
        },
        
        funFacts: [
        {
            title: "12 Rock-Cut Caves",
            text: "The Aurangabad Caves consist of twelve Buddhist rock-cut caves."
        },
        {
            title: "6th-7th Century Heritage",
            text: "The caves were carved mainly during the 6th and 7th centuries CE."
        },
        {
            title: "Hillside Views",
            text: "The caves are carved into a hillside overlooking Chhatrapati Sambhajinagar, giving the site scenic as well as historical value."
        },
        {
            title: "A Quieter Experience",
            text: "They are less famous and generally less crowded than Ajanta and Ellora, making them a quieter heritage experience."
        }
    ],
        experience: "Aurangabad Caves offer a quiet, spiritual and historic experience. Visitors can explore Buddhist rock-cut spaces and sculptures while enjoying views over the surrounding city and landscape.",
        historicalRecord: "The Aurangabad Caves are a group of 12 Buddhist rock-cut caves, carved mainly during the 6th and 7th centuries CE. Their sculptures and architectural remains provide evidence of Buddhist communities and artistic traditions in the Deccan.",
        heritageHighlight: "The Buddhist sculptures and rock-cut spaces provide a quieter example of the Deccan's Buddhist architectural heritage.",
        beliefNote: "The caves are primarily connected with Buddhist religious traditions and do not have a major separate mythology documented in the research.",
        description: "Aurangabad Caves are a group of 12 Buddhist rock-cut caves, mainly dating from the 6th-7th centuries CE. They are known for their sculptures, Buddhist imagery and their location on a hillside overlooking the city.",
        about: "Aurangabad Caves are a group of 12 Buddhist rock-cut caves, mainly dating from the 6th-7th centuries CE. They are known for their sculptures, Buddhist imagery and their location on a hillside overlooking the city. They are a centrally protected monument under the Archaeological Survey of India (ASI).",

        bestTime: "October to March. The best time is morning or late afternoon, as the caves are on a hillside.",

        historicalImportance: "The caves were carved mainly during the 6th and 7th centuries CE. They provide evidence of the presence and artistic traditions of Buddhist communities in the Deccan. Their sculptures and architectural remains help historians understand the region's medieval Buddhist heritage.",

        heritageRelation: "Aurangabad Caves are an important part of India's Buddhist and rock-cut architectural heritage. They demonstrate the sophisticated ability of ancient Indian craftsmen to carve religious spaces directly into rock. Unlike Ajanta and Ellora, Aurangabad Caves are not a UNESCO World Heritage Site; they are protected by ASI.",

        story: "Aurangabad Caves are primarily Buddhist, so their importance is religious rather than mythological. The caves contain Buddhist sculptures and religious imagery and reflect the development of Buddhist rock-cut architecture in the Deccan.",

        heroImage: "../assets/images/auc.png",

        photos: [
            "../assets/images/auc1.jpeg",
            "../assets/images/auc2.jpeg",
            "../assets/images/auc3.jpeg"
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

        speciality: "It is a water-powered mill, not an ordinary wind- or manually operated mill.",

        culturalViews: {
            historical: "Panchakki is a historic water mill associated with a 17th-century Sufi complex. Its water-powered system demonstrates the advanced hydraulic engineering and water management of its time.",
            
            traditional: "The site is connected with Sufi traditions and the tomb complex of Baba Shah Musafir, giving Panchakki both spiritual and cultural significance.",
            
            local: "Panchakki is part of Chhatrapati Sambhajinagar's heritage and reflects the city's Indo-Islamic history, traditional water management and engineering knowledge.",
            
            tourist: "Visitors can see the historic water mill and understand how an ingenious water channel was used to power it, making the site an interesting combination of heritage, spirituality and engineering."
        },
        
        funFacts: [
    {
        title: "Water-Powered Mill",
        text: "Panchakki is a historic water mill powered by an ingenious underground water system."
    },
    {
        title: "17th-Century Engineering",
        text: "Its hydraulic system demonstrates the advanced water-management and engineering knowledge of its time."
    },
    {
        title: "Sufi Heritage",
        text: "Panchakki is associated with the Sufi complex and the tomb of Baba Shah Musafir."
    },
    {
        title: "Indo-Islamic Heritage",
        text: "The site combines historic engineering, water management and Indo-Islamic cultural heritage."
    }
],
        experience: "Panchakki offers a peaceful heritage experience combining Sufi traditions with historic engineering. Visitors can see the water mill and understand how its ingenious water system worked.",
        historicalRecord: "Panchakki is a historic water mill associated with a 17th-century Sufi complex. Its water-powered system demonstrates the hydraulic engineering and water-management knowledge of its time.",
        heritageHighlight: "The water-powered mill demonstrates historic hydraulic engineering and traditional water-management knowledge.",
        beliefNote: "Panchakki is associated with Sufi traditions and the tomb complex of Baba Shah Musafir rather than a major mythological tradition.",
        description: "Panchakki, meaning “water mill,” is a 17th-century hydraulic engineering structure in Chhatrapati Sambhajinagar, Maharashtra. It is famous for using a water channel system to power a grinding mill.",

        about: "Panchakki, meaning “water mill,” is a 17th-century hydraulic engineering structure in Chhatrapati Sambhajinagar, Maharashtra. It is famous for using a water channel system to power a grinding mill and is an important example of medieval water-management and engineering.",

        bestTime: "October to March. The best time is morning or late afternoon.",

        historicalImportance: "Panchakki dates to the 17th century. Its hydraulic system was designed to use water power to operate a mill. It demonstrates the sophisticated water-engineering knowledge present in medieval Deccan society.",

        heritageRelation: "Panchakki represents India's heritage of traditional engineering, water management and Indo-Islamic architecture. It is also part of the rich historical landscape of Chhatrapati Sambhajinagar, a region containing major heritage sites such as Ajanta and Ellora.",

        story: "Panchakki is not primarily a mythological site. It is historically associated with a Sufi religious complex and the tomb of Baba Shah Musafir. Its importance is mainly spiritual, architectural and technological.",

        heroImage: "../assets/images/p.png",

        photos: [
            "../assets/images/p1.jpeg",
            "../assets/images/p2.jpeg",
            "../assets/images/p3.jpeg"
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

        speciality: "A traditional count of 52 gates made Aurangabad famous as the “City of Gates.”",

        culturalViews: {
            historical: "The historic gates of Chhatrapati Sambhajinagar reflect the city's Mughal-era urban and defensive history. The traditional count is 52 gates, although not all of them survive today.",
            
            traditional: "The gates are part of the traditional identity of the historic city and are remembered as important entrances that connected different parts of the old urban settlement.",
            
            local: "The historic gates are a distinctive part of Chhatrapati Sambhajinagar's identity and are closely connected with the city's heritage as the 'City of Gates.'",
            
            tourist: "Visitors can explore surviving historic gateways and discover how they formed part of the city's old defensive and urban landscape."
        },
        
        funFacts: [
    {
        title: "The City of Gates",
        text: "Chhatrapati Sambhajinagar is traditionally associated with 52 historic gates, which gave the old city its distinctive identity."
    },
    {
        title: "Mughal-Era Heritage",
        text: "Many of the historic gates developed during the Mughal period as part of the city's expanding urban landscape."
    },
    {
        title: "Not All Survive",
        text: "Although the traditional number is 52, not all of the historic gates survive today."
    },
    {
        title: "Historic City Entrances",
        text: "The gates once served as important entrances connecting different parts of the historic city and its surrounding areas."
    }
],
        experience: "The historic gates offer a different kind of heritage experience by connecting visitors with the old urban landscape of Chhatrapati Sambhajinagar. Exploring the surviving gateways reveals the city's defensive and architectural history.",
        historicalRecord: "The historic gates of Chhatrapati Sambhajinagar reflect the city's Mughal-era urban and defensive history. The traditional count is 52 gates, although not all of them survive today.",
        heritageHighlight: "The surviving gateways provide a glimpse into the historic urban and defensive landscape of the old city.",
        beliefNote: "The historic gates are primarily associated with the city's urban and defensive heritage and are not linked with a major mythology in the research.",
        description: "The 52 Gates of Aurangabad are historic gateways built around the old city during the Mughal period, especially in the 17th-18th centuries. They were part of the city's fortification and urban defence system.",

        about: "The 52 Gates of Aurangabad are historic gateways built around the old city during the Mughal period, especially in the 17th-18th centuries. They were part of the city's fortification and urban defence system. Today, only a portion of the original gates survive.",

        bestTime: "October to March. The best time is morning or late afternoon.",

        historicalImportance: "The gates were constructed as part of the fortified medieval city of Aurangabad. They controlled movement into and out of the walled city. Several gates are named after directions, destinations or important localities. Bhadkal Gate is particularly famous and is among the best-known surviving gateways of the city.",

        heritageRelation: "The gates represent the medieval urban and military heritage of the Deccan. They demonstrate how historic Indian cities used walls, gateways and controlled entrances for security. They are an important part of the architectural identity of present-day Chhatrapati Sambhajinagar.",

        story: "The gates do not have a major mythological significance. Some gates are associated with neighbourhoods, roads or important historical places. Their primary importance is historical, architectural and defensive.",

        heroImage: "../assets/images/gates.png",

        photos: [
            "../assets/images/gates1.jpeg",
            "../assets/images/gates2.jpeg",
            "../assets/images/gates3.jpeg"
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

        speciality: "Unlike the grand Mughal tombs of India, Aurangzeb's grave is extremely modest.",

        culturalViews: {
            historical: "Aurangzeb's Tomb at Khuldabad is a simple grave associated with the Mughal emperor Aurangzeb, who died in 1707. His burial was deliberately kept simple according to his wishes.",
            
            traditional: "The tomb is connected with Islamic burial traditions and the historical memory surrounding Aurangzeb's life, rule and final resting place.",
            
            local: "Aurangzeb's Tomb forms part of the historic heritage of Khuldabad and the wider Chhatrapati Sambhajinagar region, which contains many important medieval monuments.",
            
            tourist: "Visitors experience a remarkably simple and open grave rather than a grand imperial monument, making the site quiet, reflective and historically distinctive."
        },
        
        funFacts: [
    {
        title: "A Simple Grave",
        text: "Aurangzeb's grave is remarkably simple and open to the sky, reflecting his wish for a modest burial."
    },
    {
        title: "At Khuldabad",
        text: "The tomb is located at Khuldabad, a historic town known for its important Islamic and medieval heritage."
    },
    {
        title: "Buried According to His Wishes",
        text: "Aurangzeb was buried according to his wishes for a simple resting place after his death in 1707."
    },
    {
        title: "A Reflective Experience",
        text: "The simplicity of the grave creates a quiet and reflective experience for visitors exploring the site's history."
    }
],
        experience: "Aurangzeb's Tomb offers a quiet and reflective heritage experience. Its simple open grave provides a striking contrast to grand imperial monuments and invites visitors to explore the history of Khuldabad.",
        historicalRecord: "Aurangzeb's Tomb at Khuldabad is the simple grave of the Mughal emperor Aurangzeb, who died in 1707. His burial was deliberately kept simple according to his wishes.",
        heritageHighlight: "The deliberately simple open grave stands in contrast to the grand mausoleums associated with many Mughal rulers.",
        beliefNote: "The site is connected with Islamic burial traditions and the historical memory of Aurangzeb rather than Hindu mythology.",
        description: "Aurangzeb's Tomb is the simple grave of Mughal emperor Aurangzeb (Alamgir) at Khuldabad, Maharashtra, near Ellora. Unlike grand Mughal mausoleums, his grave is notably simple and open to the sky.",

        about: "Aurangzeb's Tomb is the simple grave of Mughal emperor Aurangzeb (Alamgir) at Khuldabad, Maharashtra, near Ellora. Unlike grand Mughal mausoleums, his grave is notably simple and open to the sky. The site is a centrally protected monument under the Archaeological Survey of India (ASI).",

        bestTime: "October to March. The best time is morning or late afternoon.",

        historicalImportance: "Aurangzeb ruled the Mughal Empire from 1658 to 1707. He died in 1707 and was buried at Khuldabad according to his wishes. His grave is deliberately simple, reflecting his stated preference for a modest burial. The tomb is officially protected by the Archaeological Survey of India.",

        heritageRelation: "The site represents an important chapter of Mughal and Deccan history. It forms part of the rich historic landscape around Khuldabad - Ellora. The tomb itself is not a UNESCO World Heritage Site.",

        story: "The tomb is not connected to Hindu mythology. Khuldabad is historically an important Sufi centre, and Aurangzeb's grave is located within the sacred historical landscape of the town. Its significance is mainly Islamic, historical and cultural.",

        heroImage: "../assets/images/at.png",

        photos: [
            "../assets/images/at1.jpeg",
            "../assets/images/at2.jpeg",
            "../assets/images/at3.jpeg"
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

        speciality: "Its name “Soneri” (golden) comes from its famous golden decorative paintings/ornamentation.",

        culturalViews: {
            historical: "Soneri Mahal is a 17th-century Rajput-style palace in Chhatrapati Sambhajinagar. Its architecture and history reflect the early-modern cultural heritage of the Deccan.",
            
            traditional: "The palace is remembered for its traditional architectural character and its connection with the cultural history of the Deccan region.",
            
            local: "Soneri Mahal is part of Chhatrapati Sambhajinagar's historic identity and contributes to the city's architectural and cultural heritage.",
            
            tourist: "Visitors can explore the elegant palace architecture and its museum collections while experiencing a quieter and more intimate heritage site."
        },
        
        funFacts: [
    {
        title: "17th-Century Palace",
        text: "Soneri Mahal is a historic palace dating to the 17th century."
    },
    {
        title: "Rajput-Style Architecture",
        text: "The palace is known for its Rajput-style architectural character."
    },
    {
        title: "Golden Paintings",
        text: "The name Soneri Mahal is associated with its ornamental golden paintings."
    },
    {
        title: "Museum Today",
        text: "The historic palace now serves as a museum and cultural space."
    }
],
        experience: "Soneri Mahal offers a quiet and elegant heritage experience. Visitors can appreciate its Rajput-style architecture, historical character and museum collections while exploring the early-modern heritage of the Deccan.",
        historicalRecord: "Soneri Mahal is a 17th-century Rajput-style palace in Chhatrapati Sambhajinagar. Its architecture and history reflect the early-modern cultural heritage of the Deccan, and it now serves as a museum.",
        heritageHighlight: "The palace's Rajput-style architecture and ornamental golden paintings reflect the early-modern cultural heritage of the Deccan.",
        beliefNote: "Soneri Mahal is primarily associated with palace architecture and the cultural history of the Deccan, with no major mythology documented in the research.",
        description: "Soneri Mahal is a 17th-century Rajput-style palace in Chhatrapati Sambhajinagar, Maharashtra, now used as a museum. It is especially known for its ornamental golden paintings, which give the palace its name.",

        about: "Soneri Mahal is a 17th-century Rajput-style palace in Chhatrapati Sambhajinagar, Maharashtra, now used as a museum. It is especially known for its ornamental golden paintings, which give the palace its name. Today, it functions as a museum displaying historical objects, paintings and exhibits.",

        bestTime: "October to March. The best time is morning or late afternoon. Maharashtra Tourism recommends October to February as a particularly pleasant period for sightseeing in the district.",

        historicalImportance: "Soneri Mahal dates to the 17th century. It reflects Rajput-style architectural influence in the Deccan. The palace has subsequently been adapted as a museum, preserving historical and artistic material.",

        heritageRelation: "It represents the architectural and cultural heritage of medieval/early-modern Deccan India. Its museum function helps preserve and present historical artefacts and paintings to visitors.",

        story: "No major mythological association is documented for Soneri Mahal. Its importance is primarily historical, architectural and cultural.",

        heroImage: "../assets/images/sone.png",

        photos: [
            "../assets/images/sone1.jpeg",
            "../assets/images/sone2.jpeg",
            "../assets/images/sone3.jpeg"
        ],

        distance: "4 km",

        coordinates: {
            lat: 19.8801,
            lng: 75.3347
        }
    }

};
if (selectedPlace && places[selectedPlace]) {
    placeName.textContent = places[selectedPlace].name;
    const placeHeroImage = document.getElementById("placeHeroImage");

if (placeHeroImage) {
    placeHeroImage.src = places[selectedPlace].heroImage;
    placeHeroImage.alt = places[selectedPlace].name;
}
    const placeSpeciality = document.getElementById("placeSpeciality");

if (placeSpeciality) {
    placeSpeciality.textContent =
        "⭐ Speciality: " + places[selectedPlace].speciality;
}
if (places[selectedPlace].culturalViews) {
    document.getElementById("historicalView").textContent =
        places[selectedPlace].culturalViews.historical;

    document.getElementById("traditionalView").textContent =
        places[selectedPlace].culturalViews.traditional;

    document.getElementById("localView").textContent =
        places[selectedPlace].culturalViews.local;

    document.getElementById("touristView").textContent =
        places[selectedPlace].culturalViews.tourist;
}
if (places[selectedPlace].experience) {
    document.getElementById("placeExperience").textContent =
        places[selectedPlace].experience;
}
if (places[selectedPlace].historicalRecord) {
    document.getElementById("historicalRecord").textContent =
        places[selectedPlace].historicalRecord;
}
if (places[selectedPlace].heritageHighlight) {
    document.getElementById("heritageHighlight").textContent =
        places[selectedPlace].heritageHighlight;
}
if (places[selectedPlace].beliefNote) {
    document.getElementById("beliefNoteText").textContent =
        places[selectedPlace].beliefNote;
}
if (places[selectedPlace].funFacts) {
    document.getElementById("funFact1Title").textContent =
        places[selectedPlace].funFacts[0].title;

    document.getElementById("funFact1Text").textContent =
        places[selectedPlace].funFacts[0].text;

    document.getElementById("funFact2Title").textContent =
        places[selectedPlace].funFacts[1].title;

    document.getElementById("funFact2Text").textContent =
        places[selectedPlace].funFacts[1].text;

    document.getElementById("funFact3Title").textContent =
        places[selectedPlace].funFacts[2].title;

    document.getElementById("funFact3Text").textContent =
        places[selectedPlace].funFacts[2].text;

    document.getElementById("funFact4Title").textContent =
        places[selectedPlace].funFacts[3].title;

    document.getElementById("funFact4Text").textContent =
        places[selectedPlace].funFacts[3].text;
}
    document.getElementById("locationPlaceName").textContent = places[selectedPlace].name;
    document.getElementById("placeDistance").textContent = "Calculating...";
    placeCategory.textContent = places[selectedPlace].category;
    if (placeDescription) {
    placeDescription.textContent = places[selectedPlace].description;
    }
    document.getElementById("placeAbout").textContent = places[selectedPlace].about;
    document.getElementById("placeBestTime").textContent = places[selectedPlace].bestTime;
    document.getElementById("placeHistorical").textContent =  places[selectedPlace].historicalImportance;
    document.getElementById("placeHeritage").textContent = places[selectedPlace].heritageRelation;
    const placeStory = document.getElementById("placeStory");
    if (placeStory) {
        placeStory.textContent = places[selectedPlace].story;
    }
    document.getElementById("placePhoto1").src = places[selectedPlace].photos[0];
    document.getElementById("placePhoto2").src = places[selectedPlace].photos[1];
    document.getElementById("placePhoto3").src = places[selectedPlace].photos[2];
}
// NAVIGATE TO PLACE
const placeDistance = document.getElementById("placeDistance");

if (placeDistance && selectedPlace && places[selectedPlace]) {

    const savedLatitude = localStorage.getItem("userLatitude");
    const savedLongitude = localStorage.getItem("userLongitude");

    if (savedLatitude !== null && savedLongitude !== null) {

        const userLat = parseFloat(savedLatitude);
        const userLng = parseFloat(savedLongitude);

        const placeLat = places[selectedPlace].coordinates.lat;
        const placeLng = places[selectedPlace].coordinates.lng;

        const distance = calculateDistance(
            userLat,
            userLng,
            placeLat,
            placeLng
        );

        placeDistance.textContent =
            `${distance.toFixed(1)} km`;

    } else {
        placeDistance.textContent =
            places[selectedPlace].distance;
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

const eventDateInfo = document.getElementById("eventDateInfo");
const eventLocationInfo = document.getElementById("eventLocationInfo");

const recommendation1Name =
    document.getElementById("recommendation1Name");

const recommendation1Description =
    document.getElementById("recommendation1Description");

const recommendation1Image =
    document.getElementById("recommendation1Image");

const eventMainImage =
    document.getElementById("eventMainImage");

const exploreExperienceButton =
    document.getElementById("exploreExperienceButton");


if (visitDate) {

    visitDate.addEventListener("change", function () {

        const selectedDate = visitDate.value;

        if (!selectedDate) {
            return;
        }


        /* =========================
           DISPLAY SELECTED DATE
           ========================= */

        const dateObject = new Date(selectedDate + "T00:00:00");

        const formattedDate =
            dateObject.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            });

        if (selectedDateText) {
            selectedDateText.textContent =
                `Your selected visit date: ${formattedDate}`;
        }


        /* =========================
           DEFAULT EXPERIENCE
           ========================= */

        if (festivalTitle) {
            festivalTitle.textContent =
                "Heritage Experiences for Your Date";
        }

        if (festivalDescription) {
            festivalDescription.textContent =
                "Explore heritage places and cultural experiences that can make your selected visit date special.";
        }

        if (eventDateInfo) {
            eventDateInfo.textContent =
                "Heritage Experience";
        }

        if (eventLocationInfo) {
            eventLocationInfo.textContent =
                "Chhatrapati Sambhajinagar";
        }

        if (recommendation1Name) {
            recommendation1Name.textContent =
                "Grishneshwar Temple";
        }

        if (recommendation1Description) {
            recommendation1Description.textContent =
                "Visit this historic temple near Ellora and experience the cultural atmosphere of the region during the festive season.";
        }

        if (recommendation1Image) {
            recommendation1Image.src =
                "../assets/images/g.png";
        }

        if (eventMainImage) {
            eventMainImage.src =
                "../assets/images/g.png";
        }


        /* =========================
           KARNAPURA MELA
           OCTOBER 11–20, 2026
           ========================= */

        if (
            selectedDate >= "2026-10-11" &&
            selectedDate <= "2026-10-20"
        ) {

            if (festivalTitle) {
                festivalTitle.textContent =
                    "Karnapura Mela";
            }

            if (festivalDescription) {
                festivalDescription.textContent =
                    "Karnapura Mela, also known as Karnapura Yatra, is a vibrant Navratri tradition where devotion to the goddess meets the colourful culture of a traditional Indian fair.";
            }

            if (eventDateInfo) {
                eventDateInfo.textContent =
                    "October 11–20, 2026";
            }

            if (eventLocationInfo) {
                eventLocationInfo.textContent =
                    "Karnapura, Chhatrapati Sambhajinagar";
            }

            if (recommendation1Name) {
                recommendation1Name.textContent =
                    "Grishneshwar Temple";
            }

            if (recommendation1Description) {
                recommendation1Description.textContent =
                    "Visit this historic temple near Ellora and experience the cultural atmosphere of the region during the festive season.";
            }

            if (recommendation1Image) {
                recommendation1Image.src =
                    "../assets/images/g.png";
            }

            if (eventMainImage) {
                eventMainImage.src =
                    "../assets/images/km.png";
            }
        }


        /* =========================
           NOVEMBER
           ========================= */

        else if (dateObject.getMonth() === 10) {

            if (festivalTitle) {
                festivalTitle.textContent =
                    "Heritage & Cultural Experiences";
            }

            if (festivalDescription) {
                festivalDescription.textContent =
                    "Discover heritage monuments, temples and cultural traditions that make the region special during this season.";
            }

            if (recommendation1Name) {
                recommendation1Name.textContent =
                    "Ellora Caves";
            }

            if (recommendation1Description) {
                recommendation1Description.textContent =
                    "Explore the remarkable rock-cut heritage of Ellora and discover the different cultural traditions represented at the site.";
            }
        }


        /* =========================
           EXPLORE BUTTON
           ========================= */

        if (exploreExperienceButton) {

            exploreExperienceButton.onclick = function () {

                if (
                    selectedDate >= "2026-10-11" &&
                    selectedDate <= "2026-10-20"
                ) {

                    window.location.href =
                        "mela.html";

                } else {

                    window.location.href =
                        "place.html?place=grishneshwar";
                }

            };
        }
        if (recommendation1Image) {
    recommendation1Image.src = "../assets/images/g.png";
}

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
    localStorage.setItem("tripDays", days);
    localStorage.setItem("visitDate", visitDateInput);

let visitDate = "Not selected";

if (visitDateInput) {
    visitDate = new Date(visitDateInput).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
    const itineraryPlaces = {
     monuments: ["bibi", "panchakki", "gates", "aurangzebTomb", "soneriMahal"],
    temples: ["grishneshwar", "bibi", "ellora"],
    caves: ["ellora", "ajanta", "aurangabadCaves"],
    forts: ["daulatabad", "soneriMahal", "gates"],
    history: ["panchakki", "gates", "aurangzebTomb", "soneriMahal"],
    nature: ["ellora", "soneriMahal", "panchakki"]
    };
    const selectedInterest =
        document.querySelector(".interest.active").dataset.interest;
        localStorage.setItem("selectedInterest", selectedInterest);
        let recommendedPlace = places[itineraryPlaces[selectedInterest][0]].name;

    const tripResult = document.getElementById("tripResult");

    tripResult.innerHTML = `
        <div class="trip-result-card">
            <h3>✨ Your ${days}-Day Heritage Itinerary</h3>
            <p class="itinerary-date">📅 Visit date: ${visitDate || "Not selected"}</p>
            <p class="itinerary-subtitle">A heritage journey planned around your interests</p>
            <p>Interest: ${selectedInterest}</p>
            <p>Day 1: <a href="place.html?place=${itineraryPlaces[selectedInterest][0]}">${recommendedPlace}</a> — explore its heritage and cultural significance. <a href="https://www.google.com/maps/search/?api=1&query=${places[itineraryPlaces[selectedInterest][0]].coordinates.lat},${places[itineraryPlaces[selectedInterest][0]].coordinates.lng}" target="_blank">View on Map →</a></p>
            ${days >= 2 ? `<p>Day 2: <a href="place.html?place=${itineraryPlaces[selectedInterest][1]}">${places[itineraryPlaces[selectedInterest][1]].name}</a> — continue discovering the heritage of the region. <a href="https://www.google.com/maps/search/?api=1&query=${places[itineraryPlaces[selectedInterest][1]].coordinates.lat},${places[itineraryPlaces[selectedInterest][1]].coordinates.lng}" target="_blank">View on Map →</a></p>` : ""}
            ${days >= 3 ? `<p>Day 3: <a href="place.html?place=${itineraryPlaces[selectedInterest][2]}">${places[itineraryPlaces[selectedInterest][2]].name}</a> — explore another important heritage experience. <a href="https://www.google.com/maps/search/?api=1&query=${places[itineraryPlaces[selectedInterest][2]].coordinates.lat},${places[itineraryPlaces[selectedInterest][2]].coordinates.lng}" target="_blank">View on Map →</a></p>` : ""}
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
function loadGeneratedItinerary() {
    const itineraryContainer = document.getElementById("generatedItinerary");

    if (!itineraryContainer) {
        return;
    }

    const selectedInterest = localStorage.getItem("selectedInterest") || "history";
    const days = parseInt(localStorage.getItem("tripDays")) || 1;
    document.getElementById("summaryDays").textContent =
    `${days} Day${days > 1 ? "s" : ""}`;

    document.getElementById("summaryInterest").textContent =
    selectedInterest.charAt(0).toUpperCase() + selectedInterest.slice(1);

    const itineraryPlaces = {
        monuments: ["bibi", "panchakki", "gates", "aurangzebTomb", "soneriMahal"],
        temples: ["grishneshwar", "bibi", "ellora"],
        caves: ["ellora", "ajanta", "aurangabadCaves"],
        forts: ["daulatabad", "soneriMahal", "gates"],
        history: ["panchakki", "gates", "aurangzebTomb", "soneriMahal"],
        nature: ["ellora", "soneriMahal", "panchakki"]
    };

    const selectedPlaces = itineraryPlaces[selectedInterest] || itineraryPlaces.history;

    let html = "";

    for (let i = 0; i < days; i++) {
        const placeId = selectedPlaces[i];

        if (!placeId || !places[placeId]) {
            continue;
        }

        const place = places[placeId];

        html += `
            <section class="generated-day">
                <h2>Day ${i + 1}</h2>
                <h3>
                    <a href="place.html?place=${placeId}">
                        ${place.name}
                    </a>
                </h3>
                <p>${place.description}</p>
                <p>
                    📍 Distance: ${place.distance}
                </p>
                <p>
                    🕐 Best time: ${place.bestTime}
                </p>
                <a
                    href="https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}"
                    target="_blank"
                >
                    View on Map →
                </a>
            </section>
        `;
    }

    itineraryContainer.innerHTML = html;
}

loadGeneratedItinerary();
// UPDATE EXPLORE CARD DISTANCES
function updateExploreDistances() {

    if (userLatitude === null || userLongitude === null) {
        return;
    }

    const cards = document.querySelectorAll(".place-card");

    cards.forEach(card => {

        const placeId = card.dataset.place;
        const place = places[placeId];

        if (!place || !place.coordinates) {
            return;
        }

        const distance = calculateDistance(
            userLatitude,
            userLongitude,
            place.coordinates.lat,
            place.coordinates.lng
        );

        const distanceText = card.querySelector(".place-bottom span");

        if (distanceText) {
            distanceText.textContent =
                `📍 ${distance.toFixed(1)} km away`;
        }
    });
}
