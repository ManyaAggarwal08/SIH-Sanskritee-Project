CREATE DATABASE IF NOT EXISTS heritage;
USE heritage;
#creating the table heritage_places
CREATE TABLE heritage_places (
    place_id INT PRIMARY KEY AUTO_INCREMENT,
    
    name VARCHAR(150) NOT NULL,
    alternate_name VARCHAR(150),
    
    district VARCHAR(150),
    state VARCHAR(100),
    
    place_type VARCHAR(100),
    
    introduction TEXT,
    location_description TEXT,
    
    best_months VARCHAR(100),
    best_time_of_day VARCHAR(100),
    suggested_year INT,
    
    mythological_religious_importance TEXT,
    historical_importance TEXT,
    relation_to_indian_heritage TEXT,
    
    fun_facts TEXT,
    atmosphere_vibe TEXT,
    one_line_speciality TEXT,
    
    unesco_status VARCHAR(100),
    protected_by VARCHAR(200)
);
#inserting data into the heritage_places table
INSERT INTO heritage_places
(
    name,
    alternate_name,
    district,
    state,
    place_type,
    introduction,
    location_description,
    best_months,
    best_time_of_day,
    suggested_year,
    mythological_religious_importance,
    historical_importance,
    relation_to_indian_heritage,
    fun_facts,
    atmosphere_vibe,
    one_line_speciality,
    unesco_status,
    protected_by
)
VALUES

(
    'Ellora Caves',
    'Verul',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Rock-cut caves',
    'Ellora Caves are a UNESCO World Heritage Site in Maharashtra, famous for 34 rock-cut caves representing Buddhism, Hinduism and Jainism. They were created over several centuries, broadly from about the 6th to 12th century CE.',
    'The complex extends for more than 2 km along a basalt cliff.',
    'October-March',
    'Morning',
    NULL,
    'Cave 16 - Kailasa Temple is dedicated to Lord Shiva. Its sculptures include the famous scene of Ravana attempting to lift Mount Kailasa, Shiva''s abode. Many sculptures depict stories and figures from Hindu religious traditions, including Shiva, Vishnu and other deities.',
    'Ellora represents three religious traditions: Buddhism, Hinduism/Brahmanism and Jainism. The caves were excavated in different phases over centuries. Kailasa Temple (Cave 16) is the largest monolithic temple at Ellora and an extraordinary achievement of rock-cut architecture. Ellora became a UNESCO World Heritage Site in 1983.',
    'Ellora is one of India''s major examples of rock-cut architecture, sculpture and religious heritage. UNESCO recognises it as a masterpiece of human creative genius and highlights its importance as evidence of ancient Indian civilization. The presence of three major religious traditions within one monumental complex demonstrates a historical tradition of religious coexistence.',
    '34 caves form the main Ellora complex. Kailasa Temple is carved out of a single rock mass. Three religions are represented in one site: Hinduism, Buddhism and Jainism. Some ancient paintings still survive, although many are faded.',
    'Set among the Charanandri Hills, with a rocky landscape and greenery around the monument. The atmosphere is peaceful, spiritual and monumental. The contrast between natural basalt hills and enormous carved structures makes the site distinctive.',
    'Ellora is a unique meeting point of three religions, ancient Indian art and extraordinary rock-cut engineering, especially the monumental Kailasa Temple.',
    'UNESCO World Heritage Site',
    NULL
),

(
    'Ajanta Caves',
    NULL,
    'Maharashtra',
    'Maharashtra',
    'Buddhist rock-cut monuments',
    'Ajanta Caves are a group of 30 ancient Buddhist rock-cut monuments in Maharashtra, famous especially for their exceptionally preserved murals, sculptures and Buddhist architecture. The earliest caves date to the 2nd-1st centuries BCE, with major additions in the 5th-6th centuries CE.',
    'Located in Maharashtra, in a horseshoe-shaped gorge above the Waghora River.',
    'November-March',
    'Morning',
    2026,
    'Ajanta is primarily a Buddhist religious site. The paintings depict Jataka tales - stories of Buddha''s previous lives. The later caves contain images of Buddha and Bodhisattvas.',
    'Developed in two major phases, separated by about four centuries. The first phase is associated with the Satavahana period. The second major phase occurred under the Vakatakas, especially during the 5th-6th centuries CE. The caves functioned as Buddhist monasteries and prayer halls. Ajanta became a UNESCO World Heritage Site in 1983.',
    'Ajanta is one of India''s greatest examples of ancient painting, sculpture and rock-cut architecture. UNESCO considers its art a unique artistic achievement and notes its influence beyond India, including Java. It provides evidence about the religious, social and cultural life of ancient India.',
    'Ajanta is particularly famous for its ancient murals. The paintings include Jataka stories, human figures, animals and scenes reflecting contemporary life. There are 30 caves, including unfinished ones. The caves were carved directly into basalt rock. They were rediscovered to wider modern attention in 1819 by British officer John Smith.',
    'Set in a horseshoe-shaped rocky gorge surrounded by greenery. The Waghora River flows below the caves. The atmosphere is quiet, natural, spiritual and secluded.',
    'Ajanta is India''s remarkable Buddhist art gallery carved into rock, best known for its ancient murals and Jataka paintings.',
    'UNESCO World Heritage Site',
    NULL
),

(
    'Daulatabad Fort',
    'Deogiri Fort',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Hill fortress',
    'Daulatabad Fort, originally called Deogiri, is a spectacular medieval hill fortress in Maharashtra, famous for its strategic location and highly advanced defensive architecture.',
    'Near Chhatrapati Sambhajinagar, Maharashtra. Located on a roughly 200-metre-high conical hill.',
    'October-March',
    'Morning',
    NULL,
    'The original name Deogiri is traditionally understood as "Hill of Gods". Some popular legends connect the fort with Bhima of the Mahabharata, but these are legends, not established historical facts.',
    'Founded by the Yadava ruler Bhillama V in the medieval period. It became an important Yadava capital and military stronghold. In 1327, Muhammad bin Tughluq shifted the capital of the Delhi Sultanate from Delhi to Daulatabad for a period. The fort later came under the Bahmani, Ahmadnagar, Mughal and Maratha regimes.',
    'Daulatabad represents India''s medieval military architecture and Deccan history. Its defensive design demonstrates sophisticated knowledge of terrain, fortification and warfare. It is a protected historical monument.',
    'The fort was designed to be extremely difficult to capture. Andheri is a dark, twisting passage designed to confuse attackers. Chand Minar is a famous tower rising over 63 metres. The lower slopes were partly cut away to create steep rock faces. Daulatabad briefly became the capital of the Delhi Sultanate.',
    'Majestic, rugged, adventurous and historical. The climb provides wide views across the Deccan landscape.',
    'Daulatabad is a remarkable example of medieval Indian military engineering, where a naturally strategic hill was transformed into an exceptionally difficult fortress to conquer.',
    NULL,
    'Archaeological Survey of India (ASI)'
),

(
    'Bibi Ka Maqbara',
    NULL,
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Mughal mausoleum',
    'Bibi Ka Maqbara is a 17th-century Mughal mausoleum in Chhatrapati Sambhajinagar, Maharashtra, built in memory of Dilras Banu Begum (Rabia-ud-Durrani), wife of Emperor Aurangzeb. Because of its resemblance to the Taj Mahal, it is popularly called the Mini Taj of the Deccan.',
    'Located in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. About 4 km from central Chhatrapati Sambhajinagar.',
    'October-March',
    'Morning or late afternoon',
    2026,
    'It is not primarily a mythological site. It is a Mughal Islamic funerary monument serving as the tomb of Dilras Banu Begum. Its importance is mainly religious, architectural and historical.',
    'Built in the 17th century as a mausoleum for Aurangzeb''s wife. It reflects the Mughal architectural tradition in the Deccan. Its design was inspired by the Taj Mahal. ASI lists it officially as the Tomb of Rabia Daurani (Bibi-ka-Maqbara).',
    'It represents the Mughal architectural heritage of the Deccan. Its central dome, minarets, gardens and decorative work demonstrate the development of Mughal funerary architecture outside northern India.',
    'Often called the Mini Taj of the Deccan. It was constructed as a memorial to Aurangzeb''s wife. The monument is set within a formal garden, adding to its visual resemblance to the Taj Mahal.',
    'Peaceful, elegant and historically grand. The white marble-like appearance, central dome, minarets and surrounding garden create a calm and symmetrical setting.',
    'Bibi Ka Maqbara is the Deccan''s famous Mughal mausoleum, popularly known as the Mini Taj, built in memory of Aurangzeb''s wife.',
    NULL,
    'Archaeological Survey of India (ASI)'
),

(
    'Aurangabad Caves',
    NULL,
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Buddhist rock-cut caves',
    'Aurangabad Caves are a group of 12 Buddhist rock-cut caves, mainly dating from the 6th-7th centuries CE. They are known for their sculptures, Buddhist imagery and their location on a hillside overlooking the city.',
    'Present-day Chhatrapati Sambhajinagar, Maharashtra. Located on a hillside overlooking the city.',
    'October-March',
    'Morning or late afternoon',
    2026,
    'Aurangabad Caves are primarily Buddhist, so their importance is religious rather than mythological. The caves contain Buddhist sculptures and religious imagery.',
    'The caves were carved mainly during the 6th and 7th centuries CE. They provide evidence of Buddhist communities in the Deccan and help historians understand the region''s medieval Buddhist heritage.',
    'They are an important part of India''s Buddhist and rock-cut architectural heritage. They demonstrate the sophisticated ability of ancient Indian craftsmen to carve religious spaces directly into rock. Unlike Ajanta and Ellora, Aurangabad Caves are not a UNESCO World Heritage Site; they are protected by ASI.',
    'The caves are carved into a hillside overlooking Chhatrapati Sambhajinagar. They belong mainly to the Buddhist rock-cut tradition. Their sculptures show the artistic skill of Deccan craftsmen. They are relatively less famous than Ajanta and Ellora.',
    'Quiet, spiritual, historic and slightly adventurous. The hillside location provides views over the surrounding city and landscape.',
    'Aurangabad Caves are a lesser-known but important example of 6th-7th-century Buddhist rock-cut art and architecture.',
    NULL,
    'Archaeological Survey of India (ASI)'
),

(
    'Grishneshwar Jyotirlinga',
    'Grishneshwar Temple',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Hindu temple',
    'Grishneshwar Temple is a famous Shiva temple at Verul (Ellora), Maharashtra, and is traditionally regarded as the 12th and final Jyotirlinga of Lord Shiva. It is located very close to the Ellora Caves.',
    'Verul (Ellora), Chhatrapati Sambhajinagar district, Maharashtra. Dedicated to Lord Shiva.',
    'October-March',
    'Best experience during Mahashivratri',
    NULL,
    'Grishneshwar is one of the 12 Jyotirlingas of Lord Shiva according to Hindu tradition. Stories associated with the temple come from religious tradition and should be understood as faith-based legends, not independently verified historical events.',
    'The temple has an ancient religious history and is mentioned in traditions associated with the Shiva Purana and Skanda Purana. It suffered damage during periods of conflict in the 13th-14th centuries and was rebuilt/restored at different times, including efforts associated with Maloji Bhosale and Ahilyabai Holkar in the 18th century.',
    'It represents India''s living Hindu religious heritage and is an important pilgrimage centre. Maharashtra has three traditionally recognised Jyotirlingas: Grishneshwar, Trimbakeshwar and Bhimashankar. Its location near Ellora creates an important combination of spiritual and architectural heritage.',
    'It is traditionally regarded as the 12th and final Jyotirlinga. The temple is built using red volcanic rock and features elaborate stone carvings. It has a five-tiered shikhara and a sabha mandap with 24 carved pillars. It can be combined with Ellora Caves and Daulatabad Fort in the same heritage circuit.',
    'Spiritual, peaceful and devotional. Temple bells, chants and prayers create a distinctly religious atmosphere. During Mahashivratri, the atmosphere becomes more energetic with large numbers of devotees and special rituals.',
    'Grishneshwar is a living centre of Shiva worship and the traditionally recognised 12th Jyotirlinga, uniquely located beside the world-famous Ellora heritage landscape.',
    NULL,
    NULL
),

(
    'Panchakki',
    'Water Mill',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Hydraulic engineering structure',
    'Panchakki, meaning water mill, is a 17th-century hydraulic engineering structure in Chhatrapati Sambhajinagar, Maharashtra. It is famous for using a water channel system to power a grinding mill.',
    'Located in Chhatrapati Sambhajinagar, Maharashtra.',
    'October-March',
    'Morning or late afternoon',
    NULL,
    'Panchakki is not primarily a mythological site. It is historically associated with a Sufi religious complex and the tomb of Baba Shah Musafir. Its importance is mainly spiritual, architectural and technological.',
    'Panchakki dates to the 17th century. Its hydraulic system was designed to use water power to operate a mill. It demonstrates sophisticated water-engineering knowledge in medieval Deccan society.',
    'Panchakki represents India''s heritage of traditional engineering, water management and Indo-Islamic architecture. It is also part of the rich historical landscape of Chhatrapati Sambhajinagar.',
    'It is a water-powered mill, not an ordinary wind- or manually operated mill. Water was channelled through a carefully designed system to provide power for grinding. Its hydraulic design demonstrates how historical builders used water flow and elevation to generate mechanical power.',
    'Peaceful, historic and spiritual. The water system and surrounding structures create a distinctive old-world atmosphere.',
    'Panchakki is a remarkable 17th-century water mill that showcases the advanced hydraulic engineering of medieval India.',
    NULL,
    NULL
),

(
    '52 Gates',
    '52 Gates of Aurangabad',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Historic gateways',
    'The 52 Gates of Aurangabad are historic gateways built around the old city during the Mughal period, especially in the 17th-18th centuries. They were part of the city''s fortification and urban defence system. Today, only a portion of the original gates survive.',
    'These gates formed part of the historic city''s defensive walls.',
    'October-March',
    'Morning or late afternoon',
    NULL,
    'The gates do not have a major mythological significance. Some gates are associated with neighbourhoods, roads or important historical places. Their primary importance is historical, architectural and defensive.',
    'The gates were constructed as part of the fortified medieval city of Aurangabad. They controlled movement into and out of the walled city. Several gates are named after directions, destinations or important localities. Bhadkal Gate is particularly famous.',
    'The gates represent the medieval urban and military heritage of the Deccan. They demonstrate how historic Indian cities used walls, gateways and controlled entrances for security. They are an important part of the architectural identity of present-day Chhatrapati Sambhajinagar.',
    'The popular name 52 Gates refers to the traditional count; not all 52 gates survive today. Bhadkal Gate is one of the oldest and most important surviving gates, dating to 1612. The gates collectively tell the story of how an entire historic city was planned and protected.',
    'Historic, urban and distinctly Deccani. The surviving gates are surrounded by the modern city, creating a contrast between old architecture and present-day life.',
    'Aurangabad''s famous 52 gates represent the fortified identity of a historic Deccan city, earning it the nickname City of Gates.',
    NULL,
    NULL
),

(
    'Soneri Mahal',
    'Golden Palace',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Rajput-style palace and museum',
    'Soneri Mahal is a 17th-century Rajput-style palace in Chhatrapati Sambhajinagar, Maharashtra, now used as a museum. It is especially known for its ornamental golden paintings, which give the palace its name.',
    'Located in Chhatrapati Sambhajinagar, Maharashtra. Today it functions as a museum displaying historical objects, paintings and exhibits.',
    'October-March',
    'Morning or late afternoon',
    NULL,
    'No major mythological association is documented for Soneri Mahal. Its importance is primarily historical, architectural and cultural.',
    'Soneri Mahal dates to the 17th century. It reflects Rajput-style architectural influence in the Deccan. It has subsequently been adapted as a museum, preserving historical and artistic material.',
    'It represents the architectural and cultural heritage of medieval/early-modern Deccan India. Its museum function helps preserve and present historical artefacts and paintings to visitors.',
    'Its name Soneri (golden) comes from its famous golden decorative paintings/ornamentation. It is a 17th-century palace and is now a museum.',
    'Quiet, elegant and historical. Its decorative architecture and surrounding greenery make it a pleasant cultural stop.',
    'Soneri Mahal is a 17th-century Rajput-style palace famous for its golden decorative paintings and its present-day role as a museum.',
    NULL,
    NULL
),

(
    'Aurangzeb''s Tomb',
    'Tomb of Aurangzeb',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',
    'Mughal tomb',
    'Aurangzeb''s Tomb is the simple grave of Mughal emperor Aurangzeb at Khuldabad, Maharashtra, near Ellora. Unlike grand Mughal mausoleums, his grave is notably simple and open to the sky.',
    'Khuldabad, Chhatrapati Sambhajinagar district, Maharashtra. Near Ellora Caves and Grishneshwar Temple.',
    'October-March',
    'Morning or late afternoon',
    NULL,
    'The tomb is not connected to Hindu mythology. Khuldabad is historically an important Sufi centre, and Aurangzeb''s grave is located within the sacred historical landscape of the town. Its significance is mainly Islamic, historical and cultural.',
    'Aurangzeb ruled the Mughal Empire from 1658 to 1707. He died in 1707 and was buried at Khuldabad according to his wishes. His grave is deliberately simple, reflecting his stated preference for a modest burial. The tomb is officially protected by ASI.',
    'The site represents an important chapter of Mughal and Deccan history. It forms part of the rich historic landscape around Khuldabad-Ellora. The tomb itself is not a UNESCO World Heritage Site.',
    'Unlike grand Mughal tombs, Aurangzeb''s grave is extremely modest. It is traditionally described as open to the sky. A commonly repeated tradition says Aurangzeb wanted his burial expenses to come from money earned by selling caps he had personally stitched; this is best treated as historical tradition.',
    'Quiet, simple, spiritual and reflective. Khuldabad''s surrounding Sufi tombs, old architecture and nearby Ellora landscape give the area a strong historical atmosphere.',
    'Aurangzeb''s Tomb is remarkable for its simplicity - a modest open grave of one of the most powerful Mughal emperors, set in the historic Sufi town of Khuldabad.',
    NULL,
    'Archaeological Survey of India (ASI)'
);

#creating table 2 of details of individual gates
CREATE TABLE gate_details (
    gate_id INT PRIMARY KEY AUTO_INCREMENT,
    place_id INT NOT NULL,
    gate_name VARCHAR(100) NOT NULL,
    description TEXT,
    
    FOREIGN KEY (place_id)
        REFERENCES heritage_places(place_id)
        ON DELETE CASCADE
);

#inserting data into the gates table
INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Bhadkal Gate',
    'Best choice overall. One of the oldest and most important surviving gates, dating to 1612. It is officially recorded in the National Mission on Monuments and Antiquities. Speciality: massive stone construction and distinctive architecture.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Delhi Gate',
    'One of the four principal historic gateways of the old city. Located toward the north, historically facing Delhi. Good choice if you want a large, impressive Mughal-era gateway.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Kaala Darwaza',
    'Connected historically with Qila-e-Ark. One of the recognisable surviving gates and currently quite easy to locate.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Rangeen Gate',
    'A surviving historic gateway within the old-city area. It was included in proposed conservation and lighting works.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Makai Gate',
    'Also known as Mecca Gate. One of the four principal directional gates. Historically faced west, toward Mecca.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Paithan Gate',
    'Another of the four principal gates. Historically marked the route toward Paithan to the south.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Kat Kat Gate',
    'Still identifiable and included in conservation proposals. Worth seeing if doing a wider City of Gates tour.'
FROM heritage_places
WHERE name = '52 Gates';


INSERT INTO gate_details
(
    place_id,
    gate_name,
    description
)
SELECT
    place_id,
    'Barapulla Gate',
    'Another surviving gateway included in the city''s conservation plans.'
FROM heritage_places
WHERE name = '52 Gates';

#creating heritage events table

CREATE TABLE heritage_events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    
    event_name VARCHAR(150) NOT NULL,
    alternate_name VARCHAR(150),
    
    location VARCHAR(200),
    district VARCHAR(150),
    state VARCHAR(100),
    
    duration VARCHAR(100),
    best_period VARCHAR(150),
    best_time_of_day VARCHAR(100),
    
    introduction TEXT,
    religious_importance TEXT,
    historical_cultural_importance TEXT,
    relation_to_indian_heritage TEXT,
    
    fun_facts TEXT,
    atmosphere_vibe TEXT,
    one_line_speciality TEXT
);

#inserting data into the events table

INSERT INTO heritage_events
(
    event_name,
    alternate_name,
    location,
    district,
    state,
    duration,
    best_period,
    best_time_of_day,
    introduction,
    religious_importance,
    historical_cultural_importance,
    relation_to_indian_heritage,
    fun_facts,
    atmosphere_vibe,
    one_line_speciality
)
VALUES
(
    'Karnapura Mela',
    'Karnapura Yatra',
    'Karnapura, near Padampura',
    'Chhatrapati Sambhajinagar',
    'Maharashtra',

    '11 October to 20 October',
    
    'According to tithi: from Ghatasthapana to Dussehra; main time during Navratri',
    
    'Evening',

    'Karnapura Mela is a traditional Navratri fair and religious yatra in Chhatrapati Sambhajinagar, Maharashtra, centred around the Karnapura/Bhavani Mata temple. It is known for devotion, shopping, food and large fairground attractions.',

    'The fair is centred around worship of the goddess at Karnapura during Navratri. Navratri celebrates the nine forms of Goddess Durga in Hindu tradition. Stories claiming a definite Mahabharata/Pandava origin are popular locally but are not established historical facts.',

    'Karnapura Yatra is an established traditional annual religious fair of Chhatrapati Sambhajinagar. It attracts large numbers of devotees during Navratri. The fair combines religious worship with traditional commerce and entertainment.',

    'Karnapura represents living Indian festival heritage - a tradition combining religion, community gathering, local markets, food and entertainment. Its importance is mainly intangible cultural and religious heritage rather than a monumental archaeological site.',

    'It is much more than a temple visit: the surrounding area becomes a large Navratri fairground. Visitors find food stalls, shopping stalls and amusement rides. Traditional attractions have included giant wheels and other rides. It is particularly popular as a family and community gathering.',

    'Colourful, crowded, energetic and devotional. During Navratri the area becomes full of lights, crowds, stalls, food and rides.',

    'Karnapura Mela is Chhatrapati Sambhajinagar''s vibrant Navratri tradition where devotion to the goddess meets the colourful culture of a traditional Indian fair.'
);

#if you want to check how was everything created 

SHOW TABLES;

SELECT * FROM heritage_places;

SELECT * FROM gate_details;

SELECT * FROM heritage_events;
