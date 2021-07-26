const mongoose = require('mongoose');

const Project = require('./models/project.js');

const newData = [
    {
        name: "Abhilash Gayan",
        photos: [
            "/Exhibition/Abhilash Gayan/1 - Abhilash Gayan.jpeg", 
            "/Exhibition/Abhilash Gayan/2 - Abhilash Gayan.jpg",
            "/Exhibition/Abhilash Gayan/3 - Abhilash Gayan.jpeg",
            "/Exhibition/Abhilash Gayan/4 - Abhilash Gayan.jpeg"
        ],
        title: "The Brahmaputra,The Riverine Fishing Communities and The Uzan Bazar Fish Market",
        writeup: `Fishing is the primary occupation of various native riverine groups. The Brahmaputra boasts a rich biodiversity and serves as the lifeline of the native fishing communities. These images captured near the Uzan Bazar ghat in Guwahati, gives us an idea about the lives of the people of these communities and their work culture. The fishermen venture out deep into the vastness of the Brahmaputra early in the morning. After they return with their catch, they may sell the fish directly in the nearby markets or sell it to different vendors. A major part of the fish catch is marketed fresh in the local fishmarkets. Located at the Uzan Bazar ghat at the south bank of the Brahmaputra, the Uzan Bazar fish market is one of the largest in the region. This market never fails to impress a fish lover with its huge variety. The place is vastly crowded in the morning hours as plenty of people rush to grab their share of freshly caught fish from the market. The Uzan Bazar fish market holds great significance as the livelihoods of the local fishermen and fish vendors are primarily dependent on the market and the river. It also gives an impression of the rich fishing culture of the native people. This is a beautiful example of how the Brahmaputra supports the lives of many local communities and boosts their businesses.`,
        bio: `I am Abhilash Gayan and I am a master’s student at Tezpur University. I am a hobbyist photographer and a beginner. I believe that a photo is worth the story it tells.`,
        twitter: "",
        instagram: "@abhilash_gayan",
        index: 1
    },
    {
        name: "Aditi Patil",
        photos: [
            "/Exhibition/Aditi Patil/A fishermen_s lifeline - Aditi Patil.jpg",
            "/Exhibition/Aditi Patil/Children playing by the river bank - Aditi Patil.jpg",
            "/Exhibition/Aditi Patil/Photogenic, poetic Brahmaputra - Aditi Patil.jpg",
            "/Exhibition/Aditi Patil/The river as center of friendship - Aditi Patil.jpg",
            "/Exhibition/Aditi Patil/the river connects - Aditi Patil.jpg"
        ],
        title: "Brahmaputra’s belonging",
        writeup: `Spent my teenage years next to the river. And then I was uprooted and sent off to attend college in the extreme west of the country. I hated the change. I missed my friends, the hills, the abundance of greens but most of all I missed the river from my backyard. The might of the river of been lavishly written about. Her travel from Himalaya to Bay of Bengal is an adventure in itself. Her ever-changing forms imitate life. How she makes people feel is spun into poems and songs. I strongly believe that the river has a pull, an attraction, a gravity of its own which plays on people of all kinds – fisher folk, farmers, dating couples, children, elders and on me. While identities of people in North East often clash in insider-outsider binaries, the river unifies. She connects the disconnected. She can bridge boundaries and borders. After studying and working across India, this enormity of the Brahmaputra pulled me back to her after 20 years. Now when I touch her waters, it feels as if I never left. She is the center of my friendships in the city. She is my family here.`,
        bio: `I work as a researcher with an NGO called Wildlife Conservation Society. My current research is on understanding drivers of illegal wildlife trade. I've also authored a book called 'Patriarchy and the Pangolin'. \nTheme explored: Living with the river`,
        twitter: "@Adiitiee",
        instagram: "@aditi_patil",
        index: 2
    },
    {
        name: "Agniva Das",
        photos: [
            "/Exhibition/Agniva Das/Brahmaputra 1 - Agniva Das.jpeg",
            "/Exhibition/Agniva Das/Brahmaputra 2 - Agniva Das.jpeg",
            "/Exhibition/Agniva Das/Brahmaputra 3 - Agniva Das.jpeg"
        ],
        title: `Brahmaputra: The Mass Employer`,
        writeup: `The mighty river Brahmaputra has provided the people of Assam and all the regions it flows through with not only food and water but also has provided the people with a source of employment. Fresh water fishing is the primary source of income for hundreds if not thousands of people living by this mighty river. For centuries, hundreds of families have been dependent on the river for their food, clean water and fishing as an employment opportunity. River based fisheries are of particular importance in the tropical regions as they provide food and nutrition to millions of people and support their livelihood. In recent times, the ever-increasing demands of water for irrigation, agriculture, domestic and industrial use and hydropower generation have impacted the river flow and habitats and consequently the fisheries and river-fish dependent communities. It is really sad to see that these communities of people who have been fishing in and around the waters of the mighty Brahmaputra are slowly being displaced due to increased demand of water supply and the international politics with China as the river originates there. \n The Assamese and Bengali population are very fond of fish and thus every morning the markets of Guwahati are flooded with hundreds of kilograms of fish. While we people love to consume fish almost every single day, we hardly think about the communities of fisherman who literally wake up in the middle of the night to go out into the river to meet our demand of fish every single day. Having spoken to a few of them, I’ve come to know about the hardships they face and would personally like to thank them for their contribution to our society. My photographs display these fisherman hard at work and also the various methods and traditional techniques of catching fish using bamboo and nets.`,
        bio: `I'm Agniva Das, a student of law at National Law University and Judicial Academy, Assam. I've been an avid photography enthusiast my entire life and I've been clicking photographs for more than 5 years now. During these 5 years, I've tried my hand in almost every kind of photography genre from Wildlife photography at National Parks, to Landscape photography at beautiful locations such as Sikkim, Andamans and closer to home, Shillong. I'm very eager to try new things out and learn in the process. In recent times, I've been much more interested in Astrophotography and I'm almost certain that I'll be pursuing this not only as a hobby but also a side profession.`,
        twitter: "",
        instagram: "@agniv.jpeg",
        index: 3
    },

    //TODO: Ye problem de rha hai
    {
        name: "Anuron Mullik",
        photos: [
            "/Exhibition/Anuron Mullik/Anuron Mullik - Anuron Mullik.jpg",
            "/Exhibition/Anuron Mullik/Anuron Mullik 2 - Anuron Mullik.jpg"
        ],
        title: "Sunset on the banks of Brahmaputra (Tezpur)",
        writeup: `The pictures were taken at Ganesh Ghat, Tezpur(Assam). This was during the sunset time when the pictures were clicked. It was winter season at that time. The river was silent and had a majestic view during the sunset. I went to Tezpur for an internship at DRL, DRDO and when I had this opportunity to visit the Ganesh Ghat, I grabbed it as soon as I could. I know the beauty of Ganges back at my city Kolkata and so I wanted to see Brahmaputra eagerly. I was overwhelmed with joy when I first saw the Brahmaputra and so was my friend who accompanied me. It was so pleasant and beautiful.`,
        bio: "I am a student of Narula Institute of Technology and I am passionate about Photography. I like street photography as well as nature photography. Street photography really excites me and whenever I get the chance to explore the street, I never miss it",
        twitter: "",
        instagram: "@anuronmullik",
        index: 4
    },
    {
        name: "Arundhati Deka",
        photos: [
            "/Exhibition/Arundhati Deka/Picture 1 – Women in the agricultural field in Majuli - Arundhati Deka.jpg",
            "/Exhibition/Arundhati Deka/Picture 2 – Women from Sadiya with jakoi - Arundhati Deka.jpg",
            "/Exhibition/Arundhati Deka/Picture 3 – Man and woman in a boat in Majuli - Arundhati Deka.JPG",
            "/Exhibition/Arundhati Deka/Picture 4 – Woman engaging in fishing, from 2017 flood, while on the way to Dhubri - Arundhati Deka.jpg",
            "/Exhibition/Arundhati Deka/Picture 5 – Woman simultaneously conducting chore and taking care of her child during flood, from a char in Goalpara - Arundhati Deka.jpg",
        ],
        title: `Women of the river, from the floodplains of Assam`,
        writeup: `Assam has a diverse group of communities, and the role of the women within these communities also sometimes remain the same in the private while changing constantly in the public. The women of the tribal communities in Assam (specifically Deori and Mishing) are engaged both at the private and public space from household activities and looking after the family to agricultural activities (Picture 1 – Women in the agricultural field in Majuli), fishing, and fetching wood for cooking. This often overburden the women. Especially during the harvest season, they barely have time left for themselves. The mornings are for household work of cleaning and cooking, then spending the entire day at the field, and then coming back home and engaging in domestic chores again. But within the public sphere, there is a clear gender divide in the public. Women engage in the activities of sowing and reaping in the agricultural field, while the men engage in ploughing and carrying the reaped harvest from the field (heavy load). Women use the jakoi (Picture 2 – Women from Sadiya with jakoi) as an equipment for catching fish, while men generally use fishing nets. The men usually row the boats, while the women are often discouraged and unless absolutely necessary (Picture 3 – Man and woman in a boat in Majuli). While the women from the lower reaches of Assam don’t really engage in the public sphere as much, fishing (Picture 4 – Woman engaging in fishing, from 2017 flood, while on the way to Dhubri) as an activity during the flood season diminishes the gender roles as both the genders engage in it as an alternative source of livelihood. Within the char communities, the engagement of women with the public space tends to be even less with their mobility being restricted often to the compound of their house, but like the other communities within the private space they are the primary caretakers (Picture 5 – Woman simultaneously conducting chore and taking care of her child during flood, from a char in Goalpara), often left with trauma upon loss.`,
        bio: `Arundhati Deka is a Research Associate at the Department of Humanities and Social Sciences, IIT Guwahati. Currently she is working on understanding the need for science-media communication and diplomacy in the Brahmaputra, and to realize what role water infrastructure plays in the evolution of nature-society relationship. Previously she has been engaged with ‘Transnational Policy Dialogue for Improved Water Governance of Brahmaputra River’ for 4 years, which has generated a platform to work on cross cutting issues for the riparian nations. She has a master's degree in Environmental Studies and Resources Management and a bachelor's degree in Geology. Her research interest lies in development studies and particularly on water science, policy, and governance; socio-hydrology; and gender in water.`,
        twitter: "@aru_91",
        instagram: "",
        index: 5
    },
    {
        name: "Ashima Sharma",
        photos: [
            "/Exhibition/Ashima Sharma/IMG 0000 - ashima sharma.jpeg",
            "/Exhibition/Ashima Sharma/IMG_0207 - ashima sharma.jpeg",
            "/Exhibition/Ashima Sharma/IMG_9290 - ashima sharma.jpeg",
            "/Exhibition/Ashima Sharma/IMG_9329 - ashima sharma.jpeg",
            "/Exhibition/Ashima Sharma/IMG_9382 - ashima sharma.jpeg"
        ],
        title: `The Shifting Chars of Brahmaputra`,
        writeup: `Chars or sandbanks in the Brahmaputra are home to approximately twenty-five lakh people whose lives are like shifting sand. \nWhen Amitav Ghosh, in the title of his book, The Hungry Tide, personifies the tide to hunger, it extends beyond its literal sense to show how islanders fight with calamitous environment each day, yet choose to live with it. He writes: \n“…transformation is the rule of life: rivers stray from week to week, and islands are made and unmade in days.” (Ghosh, 2005)\n LIVING WITH THE RIVER\n Pagla Nodi or ‘mad river’ is a song of the boatmen. It captures the many moods of the river—as a ravaging force during the flood, as a nurturer and as the only reality of people for whom land and water is the same.`,
        bio: `Ashima Sharma is a graduate in (B.A. (Hons.) Journalism and Communication from O.P. Jindal Global University, India. She will be joining the London School of Economics and Political Science in September 2021 to pursue a master’s degree in human rights. In October 2020 she was awarded the Graduate Research Immersion Programme (GRIP) Scholarship by O.P Jindal Global University to research on the Rohingyas and their erasure of human rights.  Her focus in research has been on refugees and migration and has worked with an international film production researching on the Rohingyas. She also runs her own podcast called The Hook (https://thehook.podbean.com) She has previously worked with Innovative Change Collaborative (ICCo) as a consultant- research and documentation on a project titled Work: No Child’s Business (WNCB). The alliance includes Save the Children, UNICEF, and Stop Child Labor Coalition in six countries.`,
        twitter: "@AshimaS4",
        instagram: "@____ashima____",
        index: 6
    },
    {
        name: "Ayanava Sil",
        photos: [
            "/Exhibition/Ayanava Sil/1 - Ayanava Sil.jpg",
            "/Exhibition/Ayanava Sil/2 - Ayanava Sil.jpg",
            "/Exhibition/Ayanava Sil/3 - Ayanava Sil.jpg",
            "/Exhibition/Ayanava Sil/4 - Ayanava Sil.jpg",
            "/Exhibition/Ayanava Sil/5 - Ayanava Sil.jpg",
            
        ],
        title: `Into Prayers`,
        writeup: `The River is sacred to Hindus, Pilgrims travel thousands of miles to pray and bathe themselves in the river as part of a purification ritual. India is a land of festivals that are celebrated throughout the year in different corners of the country with joy and enthusiasm. Lakhs of devotees from across the country gather every day at River Banks to offer prayers. There are different rituals that take place, mainly in the Morning and in the Evening, to complete these rituals, devotees have to stand at the banks of the rivers for long hours. Standing in a river and praying release energy from your body. It is believed that these rituals of standing in the water and praying detoxify the body and mind and provides mental calmness. It also enhances immunity, infuses energy and reduces the frequency of anger, and all other negative emotions`,
        bio: `I am Ayanava Sil a resident of Kolkata, India. By education I hold a degree of Master Of Business Administration in Marketing. Photography to me is an exemption to see things differently. I am a Street and Documentary photographer, with an objective of documenting everyday life. The uncertainty and the suspense drives me the most towards these genres of Photography. Documenting people over the years has provided me with the invaluable opportunity to explore the unknown and to embrace the conglomerate realities of people.`,
        twitter: "@ayanava",
        instagram: "@ayanava3",
        index: 7
    },
    {
        name: "Ayon Pratim Saikia",
        photos: [
            "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 1 - ONBOARD FILMS.jpg",
            "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 2 - ONBOARD FILMS.jpg",
            "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 3 - ONBOARD FILMS.jpg",
            "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 4 - ONBOARD FILMS.jpg",
            "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 5 - ONBOARD FILMS.jpg",
        ],
        title: `Symbiosis`,
        writeup: `PHOTOGRAPH NO.1 \nIt represents the life and colour of the villagers residing in the bank of river Brahmaputra. A lady heads in search of her cattle during sunset.\nPHOTOGRAPH NO.2\nThe water buffaloes loves their bath during summer and relaxes in Brahmaputra River.\nPHOTOGRAPH NO.3\nThe occupation of the villagers residing in the banks are mostly fishing, cattle rearing and farming. They sell their products in the nearby town markets. This photograph is of a villager crossing a fertile river land where they keep their cattle.\nPHOTOGRAPH NO.4\nA fisherman fishing in Brahmaputra River during a sunset.\nPHOTOGRAPH NO.5\nA photograph of children playing in the sandy river bank during evening.`,
        bio: `I am a freelance photographer from Sadiya, Assam. I have been capturing river Brahmaputra and life around for a while now. I have a special connection with this river, and I am always inspired by the beauty of it`,
        twitter: "",
        instagram: "@ayonpratimsaikia",
        index: 8
    },
    {
        name: "Bikash Chetry",
        photos: [
            "/Exhibition/Bikash Chetry/Pic 1 Bikash Clay collected by Kumars_2021 - Bikash Chetry.JPG",
            "/Exhibition/Bikash Chetry/Pic 2 Bikash Women Potters_2021 - Bikash Chetry.JPG",
            "/Exhibition/Bikash Chetry/Pic 3 Bikash_potter carrying the pots to boats_2021 - Bikash Chetry.JPG",
            "/Exhibition/Bikash Chetry/Pic 4 Bikash_Tying up the pot_2021 - Bikash Chetry.JPG",
            "/Exhibition/Bikash Chetry/Pic 5 Bikash_getting ready for sail_2021 - Bikash Chetry.JPG",
        ],
        title: `River as a source of Livelihood`,
        writeup: `These pictures were taken as part of my MPhil research in Majuli to understand the Re-theorizing livelihood practices due to twin process of flood and river bank erosion, soil and its materiality for community also how it has changed over decades.
        The manifestation of flood in Assam has been a perennial occurrence in Brahmaputra valley and it has been boon and sorrow for the community at the same time. The potter community ‘Kumars’ from Salmora (Majuli. Assam) expressed this artistry has been the mainstay of the livelihood and income as the men from the household sail to Sadia, Tezpur, Lakhimpur districts and other neighboring districts to sell the pots on their country made boats. The income generated from it is used a means of sustenance to cope from deluge. However, due to the rapid flood and river bank erosion, it has been continuously eroding/washing away the ‘Kumar matti’ shown in first and second picture used by the potters as they face existential crisis of their traditional livelihood and it has been now dwindling due to the rapid floods. Kumar community from both Dakhinpat Kumar Gaon and Salmora has gone through a major crisis due to river bank erosions per se; the loss of specific types of soil for pottery making has created threat for the traditional livelihood acutely. This in turn affects the islander primarily women potters’ source of income. As seen in the first picture this type of clay is obtained from clay pits from about twenty-five to thirty feet depth near the river banks and the sources for this clay are extremely limited. Largely, this clay can be procured from riverbanks, which is constantly eroding. Over the year the traditional potters are forced to use sand or use inferior quality soil (a type of soil locally called ‘Lodha-maati’) this not only gives the pots a low-quality finish but also potters get less price for such pots.`,
        bio: `I have worked in Social Development sector for more than 3 year and then joined Centre for North East Studies and Policy Research (CNESPR), Jamia Millia Islamia, New Delhi as Assistant Professor (Guest). Currently I am Doctoral candidate at Department of Social Development, University of Cape town. Most of my research has been on water, space, and agency and to understand human and river relationship in Brahmaputra valley. My research interest includes Post-colonial Disasters studies, Gender and Disasters, Indigenous Knowledge System and Practices, Disaster Risk Reduction.`,
        twitter: "@bikashchetry92",
        instagram: "bikash.chetry_26",
        index: 9
    },
    {
        name: "Bikramjeet Dhar",
        photos: [
            "/Exhibition/Bikramjeet Dhar/bd30adb0-42d3-4e1b-9860-a046752eb997 - MLA SPAD.jpg",
            "/Exhibition/Bikramjeet Dhar/f2af5b54-0eda-4614-b7cf-5b1a80489341 - MLA SPAD.jpg",
        ],
        title: `Impacts of Brahmaputra on livelihood and its erosional problems`,
        writeup: `Pic 1\nHuman civilization has forever sought a water body to survive and grow; the banks of a river have been the most preferred location for human proliferation and growth. History is replete with such instances where rivers have been the melting pots of civilizations; in fact, many civilizations have been named after the rivers beside which they have grown. The Brahmaputra has been no different as the chequered Assamese civilization has grown along its northern and southern banks. Besides, the Brahmaputra Valley has attracted other civilizations to survive and thrive on its fertile banks. That there has been a demographic imbalance due to this is another matter altogether.\nFishing has been the traditional occupation of the Kaivarta community since the time of human habitation on the island. The land form, its water level, aquatic plants and seasonal variations are the guiding and significant factors of the occupation. It plays a significant role in maintaining the natural cycle and hence sustaining the ecological value of the area. Fishing is one of the main sources of livelihood for a section of people in Majuli. It is practiced by mostly scheduled caste and tribes like Mishings and Deories. The different types of water bodies of Majuli Island are the main resources. They include the wet land, marshy land, ponds, rivulets etc. Different fishing techniques have been evolved by man based on the level of water and probability of fishes.\nPic 2\nThe river Brahmaputra has been the lifeline of northeastern India since ages. This mighty river runs for 2880 kms through China, India and Bangladesh. Any alluvial river of such magnitude has problems of sediment erosion-deposition attached with it; the Brahmaputra is no exception. The problems of flood, erosion and drainage congestion in the Brahmaputra basin are gigantic. The Brahmaputra river is characterized by its exceedingly large flow, enormous volume of sediment load, continuous changes in channel morphology, rapid bed aggradations and bank line recession and erosion. The river has braided channel in most of its course in the alluvial plains of Assam. The lateral changes in channels cause severe erosion along the banks leading to a considerable loss of good fertile land each year. Bank oscillation also causes shifting of outfalls of its tributaries bringing newer areas under waters. Thousands of hectares of agricultural land is suffering from severe erosion continuously in the Brahmaputra basin covering parts of states like Assam, Arunachal Pradesh, Meghalaya, Nagaland and Manipur`,
        bio: `I'm an architect by profession. Curious about nature and urbanism and how both of them work in one microcosm.`,
        twitter: "",
        instagram: "@_vincent_van_vinci",
        index: 10
    },
    {
        name: "Chandrani Sinha",
        photos: [
            "/Exhibition/Chandrani Sinha/children of chars - chandrani Sinha.JPG",
            "/Exhibition/Chandrani Sinha/Fishing in chars - chandrani Sinha.JPG",
            "/Exhibition/Chandrani Sinha/life in chars (2) - chandrani Sinha.JPG",
            "/Exhibition/Chandrani Sinha/Old man in chars - chandrani Sinha.JPG",
        ],
        title: `Life in river island of Brahmaputra`,
        writeup: `Children of char\nThe photo is taken in one of the chars in Kamrup rural in Assam depicts the condition of the children staying in the river island know as chars in local language. The hardship they had to face since birth, the girl child are more vulnerable to atrocities and trafficking.\nLife in chars\nA skeleton of a dead goat. This photo depicts the hardship of river and the people staying in its bank. as every year lot of their cattle die due to flood.\nOld man in char\nJabbar Ali, a 61 years old man returning from his work to his char Major Tup situated in Kamrup rural in Assam. This is his routine since past 21 years.\nFishing In char\nA boat waiting for his luck to catch fishes near a char. Most of the char communities are dependent on fishing. Due to climate change they get a less catch nowadays.`,
        bio: `Chandrani Sinha is an independent multimedia journalist, currently based in Guwahati Assam India. She has been reporting stories from Northeast India for 9 years. Currently, she contributes to both Indian and international media organizations. She intensively works on climate change in conflict areas, the environment, and sustainable development along with other human-interest stories. She also covers the eastern corridor of India along with all the North-Eastern states.`,
        twitter: "@chandranisinha1",
        instagram: "@chandranisinha",
        index: 11
    },
    {
        name: "Deepshikha Pegu",
        photos: [
            "/Exhibition/Deepshikha Pegu/after - Deepshikha Pegu.png",
            "/Exhibition/Deepshikha Pegu/dusk - Deepshikha Pegu.png",
            "/Exhibition/Deepshikha Pegu/omw - Deepshikha Pegu.png",
            "/Exhibition/Deepshikha Pegu/rituals - Deepshikha Pegu.png"
        ],
        title: `Hiraeth`,
        writeup: `Hiraeth, a homesickness for a home to which you cannot return. A home which maybe never was the nostalgia, the yearning, the grief for the lost places of the past. A remembrance of forgotten rituals, majorly due to the changing relationships between the people and the river.`,
        bio: `Deepshikha is a designer, currently working for an ed-tech firm based in Mumbai. She also identifies as a multi-disciplinary artist, intersecting design, and media as tools and medium to delve into the domain of Culture (both Tangible and Intangible). She is currently exploring film as a medium to understand the relations and complexities of the social structure of Indigenous Cultures, in the context of Assam. Currently, topics of displacement due to socio-political aspects has also been one of her major areas of interest`,
        twitter: "@DeepshikhaPegu2",
        instagram: "",
        index: 12
    },
    {
        name: "Devadeep Gupta",
        photos: [
            "/Exhibition/Devadeep G/1. ReedWall - Devadeep Gupta.jpg",
            "/Exhibition/Devadeep G/2. Wall-making - Devadeep Gupta.jpg",
            "/Exhibition/Devadeep G/3. Wall-Making - Devadeep Gupta.jpg",
            "/Exhibition/Devadeep G/4.Exchange - Devadeep Gupta.jpg",
            "/Exhibition/Devadeep G/5. Post Disaster - Devadeep Gupta.JPG",
        ],
        title: `Wall-building as a collective exercise and activation tool for community gathering and exchange, while addressing the problem which is stigmatized with the identities of the said communities.`,
        writeup: `As monsoons urge on the raging waters of the mad river, lands of the river-banks fall unceasingly to the relentless. The high, concrete walls on banks of the urban areas hold a fight. The wall defies the water. The villages witness the wrath as lands and wells and fields are engulfed to the unsated watery hunger. \n“We have to build a wall too.”\n “Yes, we do.”\n “Like the ones in the city. They protect the shops and the cycles, the poles and the dogs.”\n “We will make a wall too.”\n “Yes, we do.”\n The idea to create a wall presented itself directly out of the circumstantial influences in the site. The surrounding shapes of the land added to the inspiration, reflecting themselves in the form and material of the intervention.\nThe absurdity of a grass wall used to stop a relentless force of nature expands upon the complex relationship of the community with the river, and their risky existence along its banks. The work contextualizes the irony of the river appearing as a threat to riverine communities, and at the same time, facilitating these literal straws of grass, upon which the villagers of Baladmari Char 1 hang on to during days of peril. \nThe site for wall-making becomes a point of gathering and exchange through dialogue, and extends itself as a symbolic statement in the context of the social and cultural history of Baladmari. \nUndoubtedly, most of the wall is washed away within few hours. A section which remains is morphed into a temporal exhibition space of photographs made around the site during the process of wall-making. The re-activation of the space is intended to generate an impression of the action that outlasts its temporary being.`,
        bio: `My artistic practices come into play as an exploration of perspectives with an emphasis on absurdities of the everyday reality of my subjects. The focus is placed on long-term artistic research that tries to seek a balance between the people and the landscape. The form of my actions tries to expand, and at the same time contest the widespread blanket understandings associated with the current state of certain social aspects, the outtakes of which are shared through the mediums of installations, photographs, and videos.`,
        twitter: "",
        instagram: " @vevaveev",
        index: 13
    },
    {
        name: "Dheeman Garg",
        photos: [
            "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra - Dheemaan Garg.jpg",
            "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra1 - Dheemaan Garg.jpg",
            "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra2 - Dheemaan Garg.jpg"
        ],
        title: ` Living with the River; River infrastructure`,
        writeup: `The mighty Brahmaputra has been the harbinger of life for the city of Guwahati to the point that the city cannot even be imagined without it. Despite the destructive annual floods which lead to loss of land, life and livestock, the river remains the most cherished attribute of the city. For a state dependent on rice cultivation and fishing, the river is undoubtedly the primary source of life and livelihood. One cannot easily comprehend the magnitude of the Brahmaputra’s impact on the lives of the people of the city of Guwahati, and the state of Assam at large. \nSettlements by the banks of rivers are a common phenomenon across the world. Given the alluvial soil around the Brahmaputra, it is only natural that populations have settled very close to its shores. For the people who have settled in colonies just by the banks, the river means more to them than a mainstream city dweller could ever imagine. Their day begins with a prayer to the sun, taking a holy dip in the water. Their livelihood depends mostly on the river; some belong to fishing communities, cloth washing communities, boating communities, and vendors who bring produce from their remote villages in the ferries to be sold in the city. \nThese images depict similar instances; life in the river. They reflect how these people mark a positive beginning to their day - taking a holy dip at dawn, invoking the blessings of the sun and the river god; and setting off to work for the day. All these images offer the Saraighat bridge at the backdrop, which is one of the most remarkable pieces of infrastructure built on the Brahmaputra. Built between the years 1958 and 1962, this bridge connects North and South Guwahati, which are otherwise separated by the Brahmaputra. Considering its rich history, the Saraighat bridge poses as a mark of culture and is a major part of the heritage of the city and the state.`,
        bio: `I'm a final year student of Journalism and Mass Communication and a freelance photographer based around Guwahati, Assam. It fulfils me to find new subjects and areas to work on. Most of my work reflects the nature and culture of North-East India. When I'm not working, I spend my time traveling and finding stories, striking conversations with people I meet on the way, and learning about their cultures. Attending and documenting various festivals like the Ambubachi Mela in Guwahati, the Junbeel Mela in Morigaon, the Hornbill Festival in Nagaland, my knowledge of various cultures grew with time. My interest in capturing stories has led me to working with advertisements and related media projects. I enjoy exploring everything the world of photography has to offer, one little technique and detail at a time.`,
        twitter: "",
        instagram: "",
        index: 14
    },
    {
        name: "Dhritiman Deka",
        photos: [
            "/Exhibition/Dhritiman Deka/Dhritiman Deka - Dhritiman Deka.jpg",
            "/Exhibition/Dhritiman Deka/Dhritiman Deka 1.jpg",
            "/Exhibition/Dhritiman Deka/Dhritiman Deka 2.jpg"
        ],
        title: `Energy`,
        writeup: `The son of Brahma, river Brahmaputra has been a source of life, livelihood and inspiration for many. The strength and agility of this river making its way amidst the steep cut mountains to the valleys of culture, signifies a powerful journey called life. The serene, quite, and otherwise calm nature of the river symbolizing the enchanting hues of existence goes along with the wrath of that furious rage where it strives for freedom reflecting on the turmoil, distress and tumultuous waters of the region. The river is us and its primordial voyage from the cradle of dawn to the heights of civilization is the decadence of mankind. \nWhat is it to live with something? Is it the same as livelihood? Is it more, is it less? It is definitely much more. The river correlates with people’s emotions, they need to flow. River makes emotions look like energy in motion. Stopping the flow means blocking the energy. Thus it surely is not about the livelihood. It encompasses the sentimentalities. I personally feel that when I say living, it means longer than staying, something which is more permanent in relation to staying which might be temporary. So, it is the longer residence with it that increases its significance and experience for them. Bruises left by the sudden wrath and destruction of the river also however calm down. People get accustomed to this inner complaint. Living means being there in both its bad and good; when you cannot always expect to be perfect but love it nonetheless with its occasional hiccups to let go. \nThe world is a small place to accommodate this huge chunk of people, so humans have always attempted to settle down whosesoever they find a small patch of land even if it is in the middle of the river and sometimes in a tiny little boat. There is probably a river in each of our lives. The literal reflection on the water can also be seen as a kind of mirror reflection of the boatman and the river living with and in each other. Channelizing energy though each other.`,
        bio: `I am student pursuing my master’s degree in Sociology at Cotton University. I have developed a keen interest in photography over the past 10 years. As of now I am working on my own photo-book. Most of my shots are based on Brahmaputra only. I also served as the editor of Cottonian, the annual journal of Cotton University in the year 2016.`,
        twitter: "",
        instagram: "@dhritimaann",
        index: 15
    },
    {
        name: "Gurnam Jagota",
        photos: [
            "/Exhibition/Gurnam Jagota/Heavenly Pathway - Gurnam Jagota.jpg",
            "/Exhibition/Gurnam Jagota/Livelihood at the Brahmaputra - Gurnam Jagota.jpg"
        ],
        title: `Livelihood at the Brahmaputra, Heavenly Pathway`,
        writeup: `Livelihood at the Brahmaputra \nIt was summer morning that I happened to visit the Uzan Bazar fish market (Guwahati) on the shores of the Brahmputra. On one side were the fisherman who were pulling out their catch and there were others who were buying the fresh catch. I happened to see another set of people who were loading their cycles with variety of fishes to sell across the city presumably. This cycle caught my attention, just overlooking the Brahmaputra and it made me realize how the river continued to be a livelihood for the fishermen, the sellers and of course the transporters across the city. \nHeavenly Pathway \nI clicked this picture while taking a walking in a park built along the bank of the river Bhramaputra. I happened to pass through this particular pathway and though it looked like a path to a different world.`,
        bio: `I'm a traveler at heart and like to click pictures. Basically, a hobbyist photographer. I have keen interest in heritage and nature photography`,
        twitter: "",
        instagram: "@gurrjag",
        index: 16
    },

    //? Isko dekhna hai ek aur baar
    {
        name: "Hirokjyoti Pathak",
        photos: [
            "/Exhibition/Hirokjyoti Pathak/activities by the river-01 - Hirokjyoti Pathak.jpeg",
            "/Exhibition/Hirokjyoti Pathak/cycle and flood-01 - Hirokjyoti Pathak.jpeg",
            "/Exhibition/Hirokjyoti Pathak/dhobi and boat-01 - Hirokjyoti Pathak.jpeg",
            "/Exhibition/Hirokjyoti Pathak/fresh catch-01 - Hirokjyoti Pathak.jpeg",
            "/Exhibition/Hirokjyoti Pathak/woman in boat-01 - Hirokjyoti Pathak.jpeg"
        ],
        title: `Living with the river`,
        writeup: `A Boy Cycling In Floods:\n A young boy plays with his bicycle in the paddy field which is completely submerged by the flood due to incessant monsoon rains at a village close to the banks of river brahmaputra on the outskirts of guwahati city.\n
        \nCatching A Fish:\nFishing is a major source of livelihood and income in assam with majority of the fishing happening in the river brahmaputra. Here a fisherman is seen showing off a freshly caught fish which is estimated to be around 4-5 kgs in weight.\n
        \nDaily Activities:\nA lot of daily activities and daily chores can be usually seen on the banks of the brahmaputra. It is evident from the scene here where people can be seen brushing teeth, bathing, swimming, applying oil on their bodies on a cold winter morning in guwahati.\n
        \nWashermen and Fishermen:\nThe river brahmaputra is a major source of livelihood for many people in assam. On a cold foggy morning, a washerman half submerged in the chilly water of the river is seen washing piles of clothes and in the background can be seen a boat with fishermen on it starting their day to catch fish in the river.\n
        \nWomen in a boat:\nA woman rowing her boat and making her way to a nearby roadhead to ferry people and essentials back to nearby villages which are mostly submerged by flood in the panikhaiti area of assam near guwahati city.`,
        bio: `I am a freelance street and documentary photographer based in Guwahati, Assam. My work focuses on various social, cultural, natural, and political issues from all over the country`,
        twitter: "",
        instagram: "@hirokjyotipathak",
        index: 17
    },
    {
        name: "Hrishikesh Chowdhury",
        photos: [
            "/Exhibition/Hrishikesh Chowdhury/1 - Hrishikesh Chowdhury.jpeg",
            "/Exhibition/Hrishikesh Chowdhury/2 - Hrishikesh Chowdhury.jpeg",
            "/Exhibition/Hrishikesh Chowdhury/3 - Hrishikesh Chowdhury.jpeg",
            "/Exhibition/Hrishikesh Chowdhury/4 - Hrishikesh Chowdhury.jpeg",
            "/Exhibition/Hrishikesh Chowdhury/5 - Hrishikesh Chowdhury.jpeg",
        ],
        title: `Walking the Brahmaputra`,
        writeup: `Expansive Brahmaputra is a pilgrimage of harmony, for years altogether this river continues to manifest the meaning of assimilation - Bhupen Hazarika \nRivers are still the carriers of most civilizations and growing up in the home of the Brahmaputra river basin, one has a lot to explore about the history of storytelling through the river. Rains and rivers are fundamental in the shaping of the psyche and are the carriers of a riverine culture. \nTo grow up in Assam is to grow up with the Brahmaputra. I cannot remember a time when I was not intrigued by the river and the myriad relationships it holds for the Assamese people. While the monsoon reminds of the raging flood waters devastating livelihoods, the same rains that add tranquility to the river shape the way the Mishings speak of their beautiful romances. \nWalking along the Brahmaputra, I am making an archive of mobile images, like a journal drifting through patters of current, looking at forms, colors, to the sound of the monsoon clouds and the birds and the leaves.`,
        bio: `Hrishikesh Chowdhury is a graduate from Jamia Milia Islamia, India. Presently he is an independent photographer based out of Assam and a member of the artist collective, Northeast Lightbox`,
        twitter: "",
        instagram: "@xinxira_jnr",
        index: 18
    },
    {
        name: "Jayshree Borgohain",
        photos: [
            "/Exhibition/Jayshree Borgohain/1 - Jayshree Gohain.jpg",
            "/Exhibition/Jayshree Borgohain/2 - Jayshree Gohain.jpg",
            "/Exhibition/Jayshree Borgohain/3 - Jayshree Gohain.jpg",
            "/Exhibition/Jayshree Borgohain/4 - Jayshree Gohain.jpg",
            "/Exhibition/Jayshree Borgohain/5 - Jayshree Gohain.jpg",
        ],
        title: `People living on the bank of Brahmaputra`,
        writeup: `Photograph 1 – “Pushing oneself harder for the peak” \nThe villagers’ returns home after their daily work in the markets. The land near the river bank is very fertile. They cultivate their vegetables and sell them in the markets in nearby town. We can see two villagers in the photograph returning home after their work in the market. \nLocation- Tezpur, Assam\n \nPhotograph 2- “Guarding” \nThis photograph is of Mr. Durgeshswor Borgohain who owns a buffalo shed in a Chapori. Half of the Chapori gets submerged during monsoon flood which leads to death of the cattle in multiple numbers every year. Flood kills the cattle along with the vegetation of the Chapori which the cattle feeds on. This causes death due to hunger. \nLocation- Tezpur, Assam\n \nPhotograph 3 - “River Kingdom” \nThis photograph is of little kids from the outskirt villages of Tezpur city. Most of the immigrants resides in the outskirt villages on the Brahmaputra river bank. During evening the village kids came to play, fish and have their evening bath. \n\nPhotograph 4 - “Infinite” \nThis photograph is of 10 year old Nikita Rajbongshi, belongs to a fisherman family who resides at the bank of river Brahmaputra in Tezpur, Assam. She studies in Kolibari School in class 5. In this photograph she stares at the vast river view from her home where the horizon over the river goes invisible. Photograph 5 – “Dusk choirs” \n\nThis photograph is of cattle herders returning with their herd during sunset in the bank of river Brahmaputra. The vast stretch of sand makes a spectacular sunset creating a surreal ambience.`,
        bio: `I am a freelance photographer and filmmaker. I am a people person with a knack for getting smiles and making others happy.my true passion lies in filming and taking photos of communities and wildlife. I have spent past two years working for wildlife conservation with Natural rehabilitation of snakes and birds in Kaziranga and documenting communities of north east. I worked with green hub after receiving their filmmaking fellowship.`,
        twitter: "",
        instagram: " @jayshree.__",
        index: 19
    },
    // ? Bande ne Bio nhi diya
    {
        name: "Junaid Ahmad Khan",
        photos: [
            "/Exhibition/Junaid Ahmad Khan/inbound3643764731884720376 - Junaid Ahmad Khan.jpg",
            "/Exhibition/Junaid Ahmad Khan/inbound4962524998170304225 - Junaid Ahmad Khan.jpg",
            "/Exhibition/Junaid Ahmad Khan/inbound5100816117554096206 - Junaid Ahmad Khan.jpg",
            "/Exhibition/Junaid Ahmad Khan/inbound5255716952760783315 - Junaid Ahmad Khan.jpg"
        ],
        title: `Everyday Brahmaputra`,
        writeup: `The Brahmaputra also known as the Yarlung Tsangpo in Tibet, the Siang/Dihang River inArunachal Pradesh, and Luit, Dilao in Assam, is a trans-boundary river which flows throughTibet, India, and Bangladesh.It is the 9th largest river in the world by discharge, and the 15thlongest.\nKameng River, Manas River, Beki River, Raidak River, Jaldhaka River, Teesta River, SubansiriRiver With its origin in the Manasarovar Lake region, near the Mount Kailash, located on thenorthern side of the Himalayas in Burang County of Tibet as the Yarlung Tsangpo River,it flowsalong southern Tibet to break through the Himalayas in great gorges (including the YarlungTsangpo Grand Canyon) and into Arunachal Pradesh.It flows southwest through the AssamValley as Brahmaputra and south through Bangladesh as the Jamuna (not to be mistaken withYamuna of India). In the vast Ganges Delta, it merges with the Padma, the popular name of theriver Ganges in Bangladesh, and finally, after merging with Padma, it becomes the Meghna andfrom here, it flows as Meghna river before emptying into the Bay of Bengal.\nAbout 3,848 km (2,391 mi) long, the Brahmaputra is an important river for irrigation andtransportation in the region. The average depth of the river is 30 m (98 ft) and its maximumdepth is 135 m (443 ft) (at Sadiya). The river is prone to catastrophic flooding in the spring whenthe Himalayan snow melts. The average discharge of the river is about 19,800 m3/s (700,000cu ft/s),and floods reach about 100,000 m3/s (3,500,000 cu ft/s).It is a classic example of abraided river and is highly susceptible to channel migration and avulsion. It is also one of thefew rivers in the world that exhibits a tidal bore. It is navigable for most of its length.The river drains the Himalayan east of the Indo-Nepal border, south-central portion of theTibetan plateau above the Ganga basin, south-eastern portion of Tibet, the Patkai-Bum hills, thenorthern slopes of the Meghalaya hills, the Assam plains, and the northern portion ofBangladesh. The basin, especially south of Tibet, is characterized by high levels of rainfall.Kangchenjunga (8,586 m) is the only peak above 8,000 m, hence is the highest point within theBrahmaputra basin.\nThe Brahmaputra's upper course was long unknown, and its identity with the Yarlung Tsangpowas only established by exploration in 1884–86. This river is often called theTsangpo-Brahmaputra river.\nThe lower reaches are sacred to Hindus. While most rivers on the Indian subcontinent havefemale names, this river has a rare male name. Brahmaputra means "son of Brahma" inSanskrit.\n\nThank you!\nJunaid Ahmad Khan`,
        bio: ``,
        twitter: "",
        instagram: "junaidKhan_jak",
        index: 20
    },
    {
        name: "Kasturika Saikia",
        photos: [
            "/Exhibition/Kastaurika Saikia/DSC_0149_Original - kastaurika saikia.JPG",
            "/Exhibition/Kastaurika Saikia/DSC_0126_Original - kastaurika saikia.JPG"
        ],
        title: `River Livelihoods`,
        writeup: `The two pictures were captured during the monsoon season when the river is swollen up and comes with a torrential force yet those communities dependent on the river must set out to seek a living; while being utmost careful in navigating safer and shallow spots.\nIn the first picture, fishermen lay out their nets standing knee deep in river-water which actually was a pocket of land until it started raining in the highlands and the river brought water and fishes along. Infact, the neatly eroded bank, revealing the red layers underneath the top soil is clearly visible on the background.\nIn the second picture a fisherman on his boat follows our tourist boat to sell his fresh catch from the river, bhangun maas; which we later relished upon on-board.`,
        bio: `A social researcher based in Assam with interest in human development, community centric practices and a passion for visual story-telling and photo-documentation`,
        twitter: "@KastaurikaS",
        instagram: "@with_wind_in_my_hair",
        index: 21
    },
    {
        name: "Leons Mathew Abraham",
        photos: [
            "/Exhibition/Leons Mathew Abraham/PSFix_20210601_152952 - Leons Mathew.jpeg",
            "/Exhibition/Leons Mathew Abraham/PSFix_20210610_142031 - Leons Mathew.jpeg",
            "/Exhibition/Leons Mathew Abraham/PSFix_20210611_034852 - Leons Mathew.jpeg",
            "/Exhibition/Leons Mathew Abraham/PSFix_20210611_040434 - Leons Mathew.jpeg"
        ],
        title: `Biodiversity of Brahmaputra`,
        writeup: `The Brahmaputra River is a biodiversity hotspot with a unique ecosystem that has received little attention. It is one of the few rivers in the world to have a riverine dolphin, the Gangetic River Dolphin and a very rare riverine shark, the Ganges Shark. Aside from the diverse range of fishes and mammals found in this river system, it is home to many endemic species of birds like the Swamp Grass Babbler, Marsh Babbler, Black-breasted Parrotbill and the Bengal Florican. Because of increased human pressure and unsustainable agricultural practises along river banks and "char-chaporis"(river islands), the populations of most of these bird species have become highly fragmented. Furthermore, during the winters, the same areas serve as non-breeding grounds for a large number of migratory birds, many of which are threatened species. \nEvery year, the dynamic changes that occur destroy and create new habitats. But, riverine grasslands play a critical role in slowing erosion. The river banks and char-chaporis are home to a variety of grasses and plants from the genus Saccharum, Typha, Tamarix, and others. \nMany of these grasses are used for nest making by grassland specialist birds. Unfortunately, these grasses are harvested in excess and sold as fodder. The grazing of livestock in these grasslands also degrades the grasslands' quality. They also aid in the propagation of weeds in these grasslands, speeding up the rate of succession. Similarly, sand mining is rampant in some areas, and it is only getting worse as time goes on. \nGrasslands are ploughed down or burned to make way for agriculture. While common birds adapt well, many grassland endemics flee to find suitable habitats away from agricultural patches. Because of these unsustainable agricultural practises, sometimes entire chars are eroded away in an year's flood. As a matter of fact, it is critical to thoroughly understand the biodiversity of the Brahmaputra, and initiatives for conservation and proper management of riverine grasslands should be undertaken before it is too late`,
        bio: `I work as a veterinary microbiologist in Guwahati. I've been there for three years. I completed my master's degree in Veterinary Microbiology at Khanapara College of Veterinary Science. I am a bird watcher who has been exploring the Brahmaputra char-chapori complexes. The movement of birds during the flood season, as well as the arrival of winter birds, has always piqued my interest.`,
        twitter: "",
        instagram: "@leonsmathew777",
        index: 22
    },
    // TODO: Iska Title sahi karna hai
    {
        name: "Minket Lepcha",
        photos: [
            "/Exhibition/Minket Lepcha/1 - minket lepcha.jpg",
            "/Exhibition/Minket Lepcha/5 - minket lepcha.jpg",
            "/Exhibition/Minket Lepcha/6 - minket lepcha.jpg",
            "/Exhibition/Minket Lepcha/7 - minket lepcha.jpg",
            "/Exhibition/Minket Lepcha/8 - minket lepcha.jpg"
        ],
        title: ``,
        writeup: `Explode \nTowards the banks of River Brahmaputra in Horipur in Gaibandha district of Bangladesh, many communities residing around the river banks are directly connected to their rivers for their livelihood. Fishing is one of the main occupation for the riverine communities. But with frequent flash flood, the communities living in char island around River Brahmaputra in Bangladesh lives a live of constant threat and displacement. This displacement and insecurity also costs their livelihood. \nFinding an alternative and fast income generating methods, seen in the picture are two men carrying a dynamite to kill fish so that those fishes can be sold for their survival. Old fisher folks around the river banks does not approve of the method. Elders show discomfort for such practices. The dynamite is exploded inside the river so that fish can be killed instantly. The practice not only harms the fish but disrupts the riverine health and surrounding ecosystem. This practice has also costed lives of fisher folks of the region.\n \nFerry to go home\n \nMishing is a largest river community of Assam dispersed around various tributaries of River Brahmaputra. They also live in one of the world's largest river island called Majuli. As a riverine tribe, Mising indicates blend of mi ‗man‘ and asi ‗water‘. The Mising consider themselves to be the descendent of the Sun and Moon. On all auspicious occasions, the Sun is referred to Ane Do:nyi- ‗Mother Sun‘ and the Moon who they call Abu Po:lo ‗Father Moon‘ are worshiped. \nPeople of Assam referred to Mishing as Miri. According to E. A. Gait, the word Miri means middle man in Assamese words. They acted as a channel of communication between the people of Assam and Abors of Arunachal Pradesh. \nFerries and boats are the only lifeline which connects people to the mainland. Women are rare travellers in the ferry as men dominates the passenger ratio. Women in the boat are seen either with a new born baby, visiting her family or to check ailments to nearby hospitals in mainland. With half the male population outside the island for work or better education, these women spends most of the time weaving, tending farms, cooking or battling flood during monsoon season. Climate related disasters with women in rural areas often go unrecorded while they are directly related to accessing natural resources like water and forest for their daily consumption. Looking at the vastness of the River Brahmaputra, a Mishing woman is seen looking at the river from the ferry as though the river is the only companion and her gold earring, the only wealth. The narratives around women and their relationship with river often goes through many layers.\n \nLove across the ‘Brohmaputra Nodi’\n Mishing is a marginalised riverine population of River Brahmaputra. They believe themselves to be the descendent of Donyi Polo – Mother Sun and Father Moon respectively. Mishing practices a patriarchal system. After the marriage a girl lives with her husband‘s family. Generally formal marriage called – Da : roMidang is a formal marriage where social norms are followed. Parents of both boys and girls negotiate for this union. Dugla la nam i.e marriage by elopement is a common practice form of marriage. Formal marriages are very expensive and if the Mishing community is unable to sustain the cost of formal marriage then Mishing village heads and society encourages this practice. Otherwise, the boys and girl choose such type of marriage system if family‘s oppose to the marriage. And Kumna sola La:nam i.e a marriage through a simple ceremony does not have a heavy cost. Usually the less affluent section of the people due to poverty or inconvenience practise such system of marriage. Marriage is celebrated by inviting elders and offering Apong (rice beer) to them. \nSoon to be Mishing bridegroom waits with his family for the boat with gifts for the bride's family to cross the River Brahmaputra and get his bride from Majuli island. They are crossing the river with Apong (local drink), Tamul (beetle nut) and fish for the bride's family. Dressed in traditional hand woven Mekhla Chador (pronounced Sador) which takes month to make the two-piece set and Gomcha (scarf for men), the bridegroom’s family wait for the boat eagerly. \nThe bride’s happiness is just across the River Brahmaputra.\n \nThe Confluence \nRiver Brahmaputra and River Teesta are two major transboundary rivers of South Asia which meets at Bangladesh in a place called Chilmari. Both of these rivers originates in Mighty Himalaya and meanders through the mountains of India to meet at Chilmari which lies in the northern part of Bangladesh bordering India. Chilmari has many river islands (chars). When huge dams and Barrage opens gates in the upstream rivers of India especially during the monsoon, places like Chilmari are the first to witness flash floods and soil erosion. Many communities living in this area are landless and experiences extreme poverty and displacement. \nSeen in the picture is a confluence of River Teesta with River Brahmaputra at the backdrop with a boat containing many such displaced communities of Chilmari. At the foreground, ‘belli phool’ also known as Jasmine flower was plucked freshly by the river bank to offer to the confluence. A large Indian banyan leaf was commonly found. Jasmine flowers were offered along with the Indian banyan leaf. These two entity of the river confluence symbolises the presence of similar ecosystem along these transboundary rivers. The flower and the leaf celebrates the interconnectedness of the riverine biodiversity.\n \nAdapting like a water \nPinky Pame was born between the confluence of Subansiri river and River Brahmaputra. She migrated from her village to further her college but married young. As a new daughter in law of the house, she sits by the hearth to prepare pork meat for guests which is offered with rice and Apong (rice beer). Rice is the staple food of the Mishing. Apong is a special drink served and offered in various ceremonial functions and in worshipping of spirits. \nThe flood is a norm for riverine people community like Mishing, especially during rainy season. She lives in a typical Mishing house called ‘Changhar‘ – a thatched house , raised about 4 -5 feet from the ground with a bamboo and wooden stilts. She lives with her husband and his family. Sometimes, while she is cooking, pigs run below the house as her new family breeds pigs. During the night, ‘fireflies’ called ‘Junaki’ is seen flying through the crevices of the floor. It is a platform house which is traditionally known as Taleng Okum. They serve the dual purpose of keeping floodwaters and wild animals at bay. \nThese kind of houses are easy to construct and elevation levels of the houses can be changed depending upon the floods of the previous year. Higher the water level than the previous year, more elevated are subsequent houses built. During the time of flood, as a child Pinky remembers her maternal house to have a boat to move about for their daily chores. But, with forest cover reducing, logging banned and wood becoming scarce, cheaper replacements like bamboo rafts, wood or banana stems are being used to navigate through floodwaters. \nNow, she is a proud mother of a boy.`,
        bio: `I am an independent researcher from Darjeeling conducting interactive experiential sessions across India, Nepal, and Bangladesh to connect children and youth with river. I use the medium of films, photographs in articles to represent narratives around water and river. A Young Green Filmmaker Awardee (2015) for directing ‘Voices of Teesta’ in Woodpecker’s International Film Festival, I have represented and facilitated myself in forums like River Dialogue, Women and Water Consultation Programme in Assam, story therapy sessions with Riverine Communities affected by flood in Assam and represented River Teesta in International Conference on Women with River’s Congress in Nepal. I was one of the mentors from upstream river communities to engage with youth in River Camp held in Bangladesh. I received Third Pole-Oxfam Shared Water Media Grants as part of the Transboundary Rivers of South Asia (TROSA) project to work with Women's relationship with Mahakali River and was a fellow researcher for Kathmandu Valley Urban History Project by Nepal Picture Library where I traced ancient water resources around World Heritage Site of Boudha Stupa in Kathmandu Valley. A virtual exhibition was successfully curated Visualizing Water Heritage through storytelling in North East India project funded by British Council Small Heritage Grants with Living Water Museum wherein 30 adolescent girls of North East documented river folklore during Covid19.`,
        twitter: "@LepchaMinket",
        instagram: "@minket_lepcha",
        index: 23
    },
    // TODO: no title, no description, no bio
    {
        name: "Moon Ridoy",
        photos: [
            "/Exhibition/Moon Ridoy/20210608114610__MG_2117 - moon ridoy photograhy.jpeg",
            "/Exhibition/Moon Ridoy/20210614115436__MG_2287-01 - moon ridoy photograhy.jpeg",
            "/Exhibition/Moon Ridoy/20210614133604__MG_3031_1-02 - moon ridoy photograhy.jpeg",
            "/Exhibition/Moon Ridoy/20210627094555__MG_4721-01 - moon ridoy photograhy.jpeg",
            "/Exhibition/Moon Ridoy/ridoy 01935738403 (2) - moon ridoy photograhy.jpeg"
        ],
        title: ``,
        writeup: ``,
        bio: ``,
        twitter: "",
        instagram: "@ridoymoon_wildlifephotographer",
        index: 24
    },
    {
        name: "Narayani Ganesh",
        photos: [
            "/Exhibition/Narayani Ganesh/2016 Brahmaputra rhino in hiding - narayaniganesh.jpg",
            "/Exhibition/Narayani Ganesh/2016 mother and child Brahmaputra - narayaniganesh.jpg",
            "/Exhibition/Narayani Ganesh/2016 watching boats sail past Brahmaputra - narayaniganesh.jpg"
        ],
        title: `Living in sync with the river`,
        writeup: `The Brahmaputra\n On a boat ride on the Brahmaputra in the year 2016, what struck me most was the colour theme all along the trip – different shades of grey. The sky, the waters, all a spectrum of grey but the banks were a riot of green hues and dotted with people wearing vibrant colours.\n The animal life, also. Is mostly shades of grey except for the colourful kingfisher and other birds and the golden hued deer.\n People had happy faces, living in settlements all along the river. They seem to have simple lifestyles, dependent on river biodiversity, taking only as much as is required for sustenance.\n Other species live peaceably, well camouflaged and perhaps instinctively staying away from poachers.\n The River has a vibrant ecosystem whose constitutents complement each other. \n--Narayani Ganesh`,
        bio: `Recently retired -- January 2021 -- from The Times of India Group as associate editor, after 34 years. She writes on environment, science, philosophy, travel, tourism, sustainability, heritage etc. She was editor of The Speaking Tree column and feature for 25 years. She is now a freelance writer.`,
        twitter: "",
        instagram: "",
        index: 25
    },
    {
        name: "Natasha Bora",
        photos: [
            "/Exhibition/Natasha Bora/B1. - Natasha Bora.jpg",
            "/Exhibition/Natasha Bora/B2. - Natasha Bora.jpg",
            "/Exhibition/Natasha Bora/B3. - Natasha Bora.jpg",
            "/Exhibition/Natasha Bora/B4. - Natasha Bora.jpg",
            "/Exhibition/Natasha Bora/B5. - Natasha Bora.jpg",
        ],
        title: `People of the River.`,
        writeup: `The people of Assam know that "Brahmaputra" is not only a name of one of the river, but it is so much more than that. \n"Brahmaputra" is a vital source of livelihood for many people. \nThey live because of the river. \nThey live for the river. \nThey live with the river. \n"Brahmaputra" is a transportation medium, connecting thousands of life, and helping people travel and carry out their different means of occupation and livelihood. \n"Brahmaputra" is worshipped by many people. It is worshipped because it is believed to be the Son of Lord Brahma and it is regarded as the One and Only male river in India. \nAnd last but not the least \n"Brahmaputra" is an emotion. \nIt gives each and every person of Assam a sense of feeling that "Yes, I am Assamese. And I am proud of it". \nAssam is a riverine state. And it's people live with the river. They are People of the River.`,
        bio: `I am Natasha Bora and I am from Guwahati, Assam. I am studying B.Tech. in Computer Science Engineering in Royal Global University`,
        twitter: "",
        instagram: " @_.n.a.t.a.s.h.a.____",
        index: 26
    },
    {
        name: "Nayan Moni Baishya",
        photos: [
            "/Exhibition/Nayan Moni Baishya/Infrastructure - Nayan Moni Baishya.jpg",
            "/Exhibition/Nayan Moni Baishya/Livelihood - Nayan Moni Baishya.jpg"
        ],
        title: `River as a source of livelihood, River infrastructure`,
        writeup: `“River as a source of livelihood”\n The Brahmaputra river has always provided resources and livelihoods to the people living on the banks of the river. In an Agri-centric state like Assam, agriculture and fishing are two of the main livelihoods for many people, especially in the villages and also an opportunity for entrepreneurship. Fish is a stable dietary element of the people in this region. For people who relies on fishing for their livelihood, Brahmaputra and its tributaries are the primary natural sources for fishing due to the abundance of aquatic animals in these water bodies. For some fishermen, the day starts at the dawn and sometimes even before the sunrise. They sail on the river on their boats, along with their fishing instruments, to certain pre-identified locations where the chances of catching fish are high. After the early morning fishing, they direct themselves to the markets to sell the fresh fish and generate the day’s income. Some may also choose to go door-to-door on their bicycle and asking with their unique tone to buy some fish. Others will fish during day time till afternoon, and then head to the nearest urban market in the evening. To another section of people, fishing can also be a daily secondary activity to generate some extra income. Fishing is a direct economic contribution of the river to people’s lives, both as a source of income and as a food. \n\n“River Infrastructure”\nThe Brahmaputra is the widest river in India as well in the Asian sub-continent and bridges are one of the most challenging and important infrastructures associated with this mighty river with major social and economic impact. The Saraighat bridge (old), Inaugurated in the year of 1962, is the first major rail-cum-road bridge over the river. This well-designed mega structure has faced the test of time and still stands strong as the prime symbol of achievement of infrastructural development on Brahmaputra. The bridge carries a significant economic importance as it connects the north bank of the river to the Guwahati city, which is also the economic gateway to the North-East India. An exotic view of the grandiosity of the river flowing downstream and the scenic beauty of the river will be absorbed by anyone’s eyes who crosses over the bridge. Sunset is one of the most beautiful experiences when, as if, the mighty river’s water meets the vastness of the sky at the horizon and the whole scene is painted with the flaming colors of the setting sun. This picture brings the beautiful Saraighat bridge also under the colors as a way to bring all the elements of nature and man-made miracles together. The Saraighat bridge brings an both emotion of appreciation and excellence to anyone who belongs to this land and has experienced the river. It was an attempt to fulfill a fascinati`,
        bio: `My name is Nayan Moni Baishya and I was born and brought up in Tezpur, which is one of the major towns on the north bank of Brahmaputra. Currently, I am a research scholar at the Department of Electronics and Electrical Engineering, IIT Guwahati, with a research focus on developing data-driven methods for Digital Image Forensics. Photography is my favorite hobby due to the freedom it gives to anyone to express their version of creativity. I own a Nikon D5300 model and primarily like capturing landscapes. I was part of the official photography teams associated with a few institute events at IIT Guwahati like Alcheringa and Research Conclave.`,
        twitter: "",
        instagram: "@resurgent_nmb",
        index: 27
    },
    {
        name: "Prabir Kumar Talukdar",
        photos: [
            "/Exhibition/Prabir Kumar Talukdar/Picure 1_Prabir - Prabir Talukdar.jpeg",
            "/Exhibition/Prabir Kumar Talukdar/Picture 2_Prabir - Prabir Talukdar.jpeg",
            "/Exhibition/Prabir Kumar Talukdar/Picture 3_Prabir - Prabir Talukdar.jpeg",
            "/Exhibition/Prabir Kumar Talukdar/Picture 4_Prabir - Prabir Talukdar.jpeg",
        ],
        title: `THE RIVER THAT CARRIES SOUL`,
        writeup: `The pictures I have submitted represent the crucial bonding of human beings with the river Brahmaputra. \nEmpires and civilizations have risen and fallen around many rivers: Euphrates, Tigris, Nile, Amazon, Mekong, Indus, and Yellow river. However, Brahmaputra remained shrouded in mystery until the mid-17th century when geographers started exploring the regions. The hypothesis that a great lake exists in the Tibetan plateau finally saw the light of the day with the publication of D’Anville’s map, but it was unclear whether the lake was the true source of the river Brahmaputra. With the coming of the British in the Northeastern region in the first quarter of 18th century, and hypothesis based on Rennell’s expeditions, they finally put the issue to rest that Yarlung-Tsangpo is indeed Brahamputra. \nIt wouldn’t be wrong if I say Brahmaputra River is a sort of trail marker for early human migration. Following the river, nomads met settlers, settlement became civilization, civilization gave birth to kingdoms and new cultures. Despite the devastating floods the river brings forth each year, humans continue to idolise it with divinity—a guardian-angel who looks after the fate of this majestic valley and its people. \nThe four pictures represent the two intangible characters of our daily lives with the river: our faith and livelihood. The very water we pray, drink, and bathe in reflects a far greater truth: the truth of flowing time that nothing is permanent in this world, neither happiness nor sorrow.`,
        bio: `Originally trained as a mechanical engineer, I now find solace in carrying a camera around my neck and write stories as I travel. Currently, I'm researching the theme of early human migration. 
        <ul>
        <li>2015 Trust Women Photo Award.</li> 
        <li>Asia-Africa Foundation (ASEF) Photo Exhibition: Luxembourg, Germany, France, and Finland. Exhibited on the theme of Sustainable Development Goals by the United Nations Centre, Tokyo, Japan. </li> 
        <li>Exhibited on the theme of Climate Change, organized by the Centre for Science and Environment, Delhi. </li> 
        <li>Awarded a scholarship to undergo mobile journalism in Albania</li> 
        </ul>`,
        twitter: "",
        instagram: " @prabir.talukdar",
        index: 28
    },
    {
        name: "Pritam Kumar Goswami",
        photos: [
            "/Exhibition/Pritam Kumar Goswami/1623262780691-01-02 - Pritam 01.jpeg",
            "/Exhibition/Pritam Kumar Goswami/1623479632508-01 - Pritam 01.jpeg"
        ],
        title: `Living with the river Brahmaputra`,
        writeup: `In Assam, the Brahmaputra River is also known by several other names  i.e. ‘Luit’, ‘Siri Luit’, ‘Bor Luit’ ‘Bor Noi’. For the people of Assam, the Brahmaputra is a symbol of great pride due to its ‘moving ocean’ size but this also ignites fear when it rises to its strength during floods.\nBut this river is also the source of strength for the people of Assam. Time and again, they have expressed their unity as ‘Luitporia’ or ‘people from the banks of Luit’.`,
        bio: `An Engineer who has a keen interest in exploring and capturing the beauty of Nature through his Mobile Clicks.`,
        twitter: "",
        instagram: "@the_hobbyistphotographer",
        index: 29
    },
    {
        name: "Rizowana Hussaini",
        photos: [
            "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.17 PM.jpeg",
            "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.29 PM.jpeg",
            "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.57 PM.jpeg",
            "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.40.14 PM.jpeg",
            "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.41.46 PM.jpeg",
        ],
        title: `In the time of Corona: Pulling Through`,
        writeup: `A series of photographs with accompanying lines of verse displaying the pull of depression the Speaker had through lockdown and steering their will to push on another day. \n\nPic 1: <em>As Winter ebbs away, a rush of nostalgia takes its place. \nA solitary figure wends the way right to the water's edge: \nThis is no Wanderer Above a Sea of Fog, \nThere isn't a cliff or curling fingers of obscurity \nJust a figure, some thoughts and the mighty river. \nCalm, in a pool of sunset, ruminations stray to the changes \nOf a year gone by.</em> \n\nPic 2: <em>A crumbling bank. A rivulet \nStreams down to join the bigger body. \nSuch is Time \nWearying down bodies, \nScratching age into contours.</em> \n\nPic 3: <em>In the distance, signs of life: \nLaughter, wind, and moving points \nOf light. Is this misery solely mine \nTo battle as if movement after a year of sleep \nIs nothing to rouse out of?</em> \n\nPic 4: <em>The face of upset is sometimes tranquil. \nThe serene belies \nthe depthless currents. \nAgony swirling \nUnseen. \nPerhaps this is Charon \nand this my Styx.</em> \n\nPic 5: <em>Or perhaps, this too, like the river, \nIs in motion. What prevents one from going under \nBut the promise of daybreak after twilight? \nAfter this year of stillness, I look \nFor another ruse to shelter this \nUnmoored mind. \nTie me up to the shores of winter: \nSpring tides in gently.</em>`,
        bio: `Rizowana Hussaini is a 1st year PhD student of English Literature at Tezpur University, Assam. She is an ardent lover of nature and pursues amateur photography through windows and walks. Her poetry has been published in the web magazine Vayavya and in the poet’s community blog, Daily Riyaaz. Her book reviews can be found on Instagram @giltedged_reads.`,
        twitter: "",
        instagram: "@giltedged_reads",
        index: 30
    },
    {
        name: "Ronit Rimon Sarmah",
        photos: [
            "/Exhibition/Ronit Rimon Sarmah/4BD24C4F-C546-4D3F-AC27-E2FB3EF11A6E - Tony Sarmah.jpeg",
            "/Exhibition/Ronit Rimon Sarmah/8D2516C1-0A8F-4C54-9DD2-3A96F1E7C206 - Tony Sarmah.jpeg",
            "/Exhibition/Ronit Rimon Sarmah/13A719F5-5CF4-44B8-8026-28FA254F18C8 - Tony Sarmah.jpeg",
            "/Exhibition/Ronit Rimon Sarmah/78BADF0F-38C6-45E1-B741-9E251898B821 - Tony Sarmah.jpeg",
            "/Exhibition/Ronit Rimon Sarmah/1049BD19-9DB8-4A58-8A3A-294F8257001B - Tony Sarmah.jpeg"
        ],
        title: `Fishermen of Assam`,
        writeup: `We get our proteins from fish. But we never really appreciate the hard work of the people who are behind it. A hot, sunny, afternoon these fishermen hunting for their livelihood content with what they have tell us stories of their daily occupation.`,
        bio: `I am a 19-year-old photographer hailing from Guwahati. Currently studying B.Tech. in Assam Engineering College. Travelling, meeting new people, capturing precious memories, telling unforgettable stories through my lens is my forte and I hope to continue doing so with God’s grace.`,
        twitter: "ronit.r.sarmah",
        instagram: "",
        index: 31
    },
    {
        name: "Rupam Bhaduri",
        photos: [
            "/Exhibition/Rupam Bhaduri/1 Char-Chaporis. Ecosystem within ecosystem - Rupam Bhaduri.jpg",
            "/Exhibition/Rupam Bhaduri/2 Livelihood opportunities for Char dwellers - Rupam Bhaduri.JPG",
            "/Exhibition/Rupam Bhaduri/3. Rampant clearance of grass - Rupam Bhaduri.jpg",
            "/Exhibition/Rupam Bhaduri/4. Negative impact of overdependence on resources - Rupam Bhaduri.jpg"
        ],
        title: ` Biodiversity of the river`,
        writeup: `The Brahmaputra basin which extends from the high elevated Tibet to the floodplains of Bangladesh, offers a biodiverse setup on which numerous natural habitats flourish. Meadows, rainforest, wetland, grassland, riverbank are some of the well-known habitats where the ecology thrives. Among these exists a lesser-known ecosystem which is often looked either in terms of engineering or human aspect; the flood-plain sediments or vernacularly called as Char-Chaporis. It is a highly dynamic landform present pre-dominantly in the floodplains. They undergo alterations every post monsoon flood, making the Char-Chapori ecosystem sensitive and fragile. However, little is known about the biodiversity of Char-Chaporis. \nFlood-plain sediments primarily hold several species of grasses such as Saccharum spontaneum, Saccharum ravennae, Phragmite sp. etc. These grasses play a vital role in holding the soil of the Char-Chapori which reduces the extent of erosion. In addition to protecting the soil, these grasses also provide suitable habitat for the growth of fauna. Many avian species find the grassland apt for nesting and breeding, such as Swamp Grass Babbler, Striated Grassbird, Graceful Prinia etc. Migratory bird species such as White-tailed Stonechat, Bristled Grassbird etc. too successfully breed in these habitats. \nHumans too have been seasonally inhabiting alongside the flora and fauna of Char-Chaporis for decades now. These floodplain-sediments provide excellent ecosystem services by creating a platform for cattle grazing during the non-monsoon seasons. The grass which grows are used as fodder for livestock. Seasonal agriculture is also practiced on the land which has become one of the primary sources of livelihood for the dwellers. However, a negative impact on the biodiversity can be observed with the accelerating rate of dependence on the ecosystem. Rampant clearing of the grasses is leading to faster erosion, followed by loss of habitat. Char-Chaporis outside protected area are usually overlooked by the Government bodies putting a threat to this unique biodiversity. On the other hand, dependence of Char dwellers on the land and biodiversity can only be reduced by providing them with sufficient livelihood opportunities. Additionally, research to investigate the diversity of species within the Char-Chapori is needed which can provide way forward for conservation.`,
        bio: `I am a doctoral candidate from Indian Institute of Technology Guwahati, pursuing research on analyzing the inclusion of future climate dynamics in the hydropower decision making process with a lens of Political Ecology. My study area has been Brahmaputra river basin with emphasis on Bhutan & India. In addition to my research, I take deep interest in observing and studying birds.`,
        twitter: "",
        instagram: "@chidiyawatchman",
        index: 32
    },
    {
        name: "Shivam Singh",
        photos: [
            "/Exhibition/Shivam Singh/AF419C25-272A-457E-A10B-5F39FB9FB3F2 - Shivam Singh.JPG",
            "/Exhibition/Shivam Singh/E4DAB573-FA7F-4B5A-9BB0-FEC2F80C8E91 - Shivam Singh.jpeg"
        ],
        title: `Living with the river`,
        writeup: `Umananda. The island is the adobe of Lord Shiva, who lies in the middle of the river Brahmaputra. It is a ten minutes of commute from the city of Guwahati. The ferry fetches people from both sides of the river to this small riverine island. A visit to the temple early in the morning can provide you with solace from the hustle bustle of the city. The joyous ride, over the course of river Brahmaputra is itself soothing. \nThe river is integral to the lives of the people of Guwahati. My college, the Indian Institute of Technology, Guwahati boasts its presence right beside the river to the north of the city of Guwahati. Out through the gates of the campus, and you are enchanted by the mighty Brahmaputra. Sitting by the banks of the river, watching the river turn golden, with the sun setting far in the west not only comforts the mind, but also enriches the soul. And if you spot a dolphin jumping through the gushing waters, the thrill is unparalleled. \nThe river has been witness to countless emotions and myriad stories of the people that it shares the path with. The sorrows of the floods and the hope that it brings, with the water that it carries, from far away mountains, holds within them the tales of lives, that it touches every day. Meandering its way through, the river is the essence of life, in its various distinct forms. Thinking of it, I go back to the evening, I saw her in full delight, the very first time.`,
        bio: `I am a student of MA Development Studies. I like to explore and sometimes write about it.`,
        twitter: "",
        instagram: "@shivamsingh13",
        index: 33
    },
    {
        name: "Sudeshna Gupta",
        photos: [
            "/Exhibition/Sudeshna Gupta/1 - Sudeshna Gupta.jpg",
            "/Exhibition/Sudeshna Gupta/2 - Sudeshna Gupta.jpg",
            "/Exhibition/Sudeshna Gupta/3 - Sudeshna Gupta.jpg",
            "/Exhibition/Sudeshna Gupta/4 - Sudeshna Gupta.jpg",
            "/Exhibition/Sudeshna Gupta/5 - Sudeshna Gupta.jpg",
        ],
        title: `As the river sees it`,
        writeup: `Walking by the ghat, like every proud Guwahatian, I have always admired the scenic beauty of the mighty Brahmaputra. As the sun sets, the parakeets fly back home, and the wind blowing on my face makes me believe in magic. \nBut how does the Brahmaputra see us? A field study gave me the opportunity to see the city through his eyes. The rituals might bring peace to the departed soul, but the river isn’t at peace. The Bharalu brings the entire cities waste to the Brahmaputra. A stark contrast of color where the untreated waste meets the river. A river has a natural capacity for rejuvenation. But how much is too much? \nThe view isn’t pretty from the other side.`,
        bio: `I am currently pursuing a PhD from the Centre for the Environment, IITG. The area of my interest in where the blue meets the green i.e. the wetlands. I believe in the power of storytelling to change perspectives and move mountains.`,
        twitter: "",
        instagram: "@neha_tintin_tina",
        index: 34
    },
    {
        name: "Sumit Baruah",
        photos: [
            "/Exhibition/Sumit Baruah/1 - Sumit Baruah.JPG",
            "/Exhibition/Sumit Baruah/2 - Sumit Baruah.JPG",
            "/Exhibition/Sumit Baruah/3 - Sumit Baruah.JPG",
            "/Exhibition/Sumit Baruah/4 - Sumit Baruah.JPG",
            "/Exhibition/Sumit Baruah/5 - Sumit Baruah.JPG",
        ],
        title: `Char dwellers and the river`,
        writeup: `The river Bhrhmaputra’s brute force and untimely nature has been the source of multiple personal as well as cultural losses, in a way, conditioning the native civilization to the lessons of acceptance and adaptability. The community that faces the most extreme conditions of the river are the char dwellers, as the very river that nourishes the fertile land of the region, unlashes its fury during the monsoon. Proving their adaptability for generations, they are the closest inhabitants along the river and have established themselves as skilled farmers by leveraging upon the fertile soil. \nThe photographs are part of a long term documentary project titled ‘The Thin Line’, by Sumit Baruah, where he explored the lives of the closest inhabitants of the river Brahmaputra along with inspecting the political and cultural dynamics of the region. The project explored the subtle nuances of cultural shift as we move closer pr away from the river, juxtaposing the political implications of the same`,
        bio: `Sumit Baruah is India based Engineer and Designer with a keen interest to explore topics that deal with human intervention and its effect, whether at societal, environmental, or personal level. Sumit has completed his master’s degree from National Institute of Design and his bachelor’s degree from Assam Engineering College. He started his entrepreneurial journey during his college days, and now he is exploring the possibilities in industrial design sector. 
        Apart from being an entrepreneur Sumit has also placed himself as a mixed media artist by practicing photography, generative art, experimental cinematography, and sound installations, and have also exhibited internationally. He believes in finding the subtle balance between art and technology through his personal practices and while doing so, he intends to address complex societal issues to create a meaningful impact`,
        twitter: "@Baruah_Da",
        instagram: "@extraterrestrial_farmer",
        index: 35
    },
    {
        name: "Tanmay Pisolkar",
        photos: [
            "/Exhibition/Tanmay Pisolkar/BRp 7 - tanmay pisolkar.jpeg",
            "/Exhibition/Tanmay Pisolkar/BRp1 - tanmay pisolkar.jpeg"
        ],
        title: `Living with the river`,
        writeup: `The lone rower\nIn the evening sun, I row on. Boat against the current. Waiting for the life to happen one more time. Hoping for the last light to show the uncertain path ahead. But I row on, I will row on. In the middle of the river, with head held strong and shoulders ready to take the next charge on.\n\nThe people beside the river\n Brahmaputra, through millions of years of cutting through eastern Himalaya and gathering all what it could on the way, finally settles down in the plains of Assam. And over the years, the river became braided around its islands, enriching the surrounding land. And that attracted the sapiens, they settled, started farming. Then came the greed. The hunger grew. And they started enchroching the very land which gave them life for centuries. In the frame, vast plains of Brahmaputra and the agriculture fields surrounding. And there, in the corner, we see the growing white spots, racing towards the river, to arrest its path eventually.`,
        bio: `A professional hydrogeologist had been working in Indian Himalayan Region on groundwater management and development. currently working in peninsular India on the community centric watershed development and groundwater management. I am a photography enthusiast with special interests in landscape and night sky. A passionate cricketer who found his second home in the Eastern Himalayas.`,
        twitter: "",
        instagram: "@the_north_eastern_anomaly",
        index: 36
    },
    {
        name: "Tanushree Baruah",
        photos: [
            "/Exhibition/Tanushree Baruah/River Women - Tanushree Baruah.jpg",
            "/Exhibition/Tanushree Baruah/Urban Flood - Tanushree Baruah.jpg"
        ],
        title: `River as a space for women, Rural and urban floods`,
        writeup: `River as a space for women\n The Brahmaputra river might reflect a gendered perspective from its very name, ‘Son of Lord Brahma’. The river is being regarded as ‘male’ for the incomparable, mighty-armed Brahmaputra has been rolling on down the ages, bearing witness to the struggles of the riparian communities. However, the infinite horizon of the Brahmaputra has embraced a thousand tales of brave and bold women of the land of Assam. The Brahmputra resides in every Assamese heart as the Luit (another name of Brahmaputra in Assam). The banks of the Luit still reverberates the voices of revolutionary women like Mula Gabharu, Sati Joymoti, Kanaklata Baruah, Chandraprabha Saikiani, and such other valiant figures who lived, fought, and died for the pride and sovereignty of the Luit. The rustling sound of the Luit waters inspires every woman of the land, far and wide, to dream, be bold, and be empowered to fight life’s odds. The ceaseless flows of the Brahmaputra are a reminder that dreams have no boundaries and this is what is rooted in every woman of today. In short, the Brahmaputra has sustained a land of equality where no gender biases exist, and together, every being strives to build up a new Assam. \n\nUrban Floods\n Being an unplanned city with sprawling urbanization, Guwahati, the biggest city on the south banks of the mighty Brahmaputra in Assam encounters a nightmare with a single heavy shower. With the surrounding green hills being deforested and flattened, the urban dwellers residing on the plains often experience havoc from flash floods. \n<em>“Oh what has man made of nature! \nFor today the Luit is furious and growling, \nMaking inroads into peaceful places of dwellings; \nDisturbing the tranquility of innocent hearts \nBestowing fears and tears of sorrow, \nBreaking dreams of a blissful tomorrow.”</em>`,
        bio: `Born and brought up and, currently residing by the south banks of the mighty Brahmaputra. As a child, grew up singing the famous song by Jyotiprasad Agarwala, "Luitore pani jabi o' boi.." as taught by my mother (who also bears the name of the river, "Luit") and coincidently, today I am researching on the Brahmaputra river as a PhD scholar from IIT Guwahati, India. The Brahmaputra has and will always reside in my heart.`,
        twitter: " @TanushreeBarua3",
        instagram: "",
        index: 37
    },
    {
        name: "Vijayeta Rajkumari",
        photos: [
            "/Exhibition/Vijayeta Rajkumari/20200101000211_IMG_0191~2 - Vijayeta Rajkumari.JPG",
            "/Exhibition/Vijayeta Rajkumari/20200101000402_IMG_0197~2 - Vijayeta Rajkumari.JPG",
            "/Exhibition/Vijayeta Rajkumari/20200101000511_IMG_0203~2 - Vijayeta Rajkumari.JPG",
            "/Exhibition/Vijayeta Rajkumari/IMG_20210625_060755 - Vijayeta Rajkumari.jpg",
            "/Exhibition/Vijayeta Rajkumari/IMG_20210625_061218~2 - Vijayeta Rajkumari.jpg"
        ],
        title: `Brahmaputra as a source of livelihood`,
        writeup: `Brahmaputra doesn’t just flow as a river in Assam. It flows through the myriad histories, cultures, and folklores of the people in the land. It is also a source of livelihood for many. People have always depended on the river to provide and support them for a living from time immemorial. Brahmaputra’s thriving social and economic exchanges have made the river a living lifeline in the State. The exchanges come in various activities- trade, transportation, farming, irrigation, fishery, etc. to name just a few. Brahmaputra has also played an important role in creating a bustling fish trade in Guwahati. One such example can be seen in Guwahati’s Maas Ghat (Fish Port) situated on the river bank in an old locality of Uzan Bazaar. This market comes to live in the wee hours of the day. The activities start with fisherman providing their fresh catch to the traders (whole sellers) who bid the fishes. A flock of individual buyers also crowd the place as the people of Assam are avid fish lovers. Then there are small sellers who buy fish at whole sale rate from Maas Ghat and goes on to different localities in Guwahati to sell their day’s stock of fish. They often can be seen carrying an aluminium drum tied into their bicycles selling fishes crying out loud Maas Lage (want fish) in the residential areas of Guwahati. The livelihoods of many are dependent on this river. From catching fish in Brahmaputra to making them reach into the Assamese kitchen there is an extensive network at play. The river has helped shaped not only the economic life of many in the land but also sustained cultures and livelihoods in ways that connect people in intricate ways.`,
        bio: `Vijayeta is a social development practitioner and a researcher who has worked in the thematic areas of gender, livelihoods, and governance. She is a graduate of TISS, Mumbai. She is currently residing in Guwahati, Assam`,
        twitter: "@Vijayeta_R",
        instagram: "@vjay_jay__",
        index: 38
    },
    {
        name: "Vivek Gunawat",
        photos: [
            "/Exhibition/Vivek Gunawat/Boat_Ghat_1 - Vivek Gunawat.jpg",
            "/Exhibition/Vivek Gunawat/Boat_Ghat_2 - Vivek Gunawat.jpg",
            "/Exhibition/Vivek Gunawat/Boat_Ghat_3 - Vivek Gunawat.jpg",
            "/Exhibition/Vivek Gunawat/Boat_Ghat_4 - Vivek Gunawat.jpg",
            "/Exhibition/Vivek Gunawat/Boat_Ghat_5 - Vivek Gunawat.jpg"
        ],
        title: `Boats Around Brahmaputra`,
        writeup: `As with every river, fishing has been one of the popular sources of income for the families that dwell along the river, but given the size and flow of the mighty Brahmaputra, it is not as extensive as other rivers. My time that I spent at IITG, I got an opportunity to interact with the locals as well as understand the economy of this rural portion of Kamrup District. And given the low opportunity in farming, people actually see river as part of their lives. Some large- and small-scale industries have come up in the last decade or two, but the region hasn’t transformed to put it simply.\nThese are some monochrome images that I clicked during my morning cycling ride over one weekend. I hope people like them!`,
        bio: `I am an IITG Alum, Class of 2014. During my stay on campus, the life around the mighty Brahmaputra was enticing. I tried to observe life around it over weekends, sometimes watching the sunrises and sunsets through numerous ferries that we used to take to the city. And as a Photography enthusiast, I tried to capture as much as I could`,
        twitter: "@iamgunti",
        instagram: "@_gunti",
        index: 39
    },
    {
        name: "Vivek Raj Singh",
        photos: [
            "/Exhibition/Vivek Raj Singh/7D6BF4CB-A6AB-431E-AE46-8C07F4B0D064 - Vivek Raj Singh.jpeg",
            "/Exhibition/Vivek Raj Singh/AABD486C-F378-45B9-BBC4-1A752B4585A5 - Vivek Raj Singh.jpeg",
            "/Exhibition/Vivek Raj Singh/F214A7D8-218F-440B-915D-8C7BF5212ABA - Vivek Raj Singh.jpeg",
            "/Exhibition/Vivek Raj Singh/FE1A7C13-899F-4318-89D8-CC48EBCB5524 - Vivek Raj Singh.jpeg",
            "/Exhibition/Vivek Raj Singh/FF5287C1-C7A9-4045-A2EA-01488BE9FACE - Vivek Raj Singh.jpeg"
        ],
        title: `The river - a lifeline.`,
        writeup: `This collection of images is a chronicle of visits to the river at various points, made over 10 years. In my travels across Assam and Arunachal Pradesh, I have always found myself never too far from its expansive landscapes or by a smaller tributary; often crossing paths with the waters - a privilege in itself. Growing up in Tinsukia, for instance, it was a thirty-minute drive to the Dibru- Saikhowa National Park which became our de-facto day out and also where my family would take their guests first. News of the gas blowout near the park last year was gut-wrenching to live with, since I personally knew many boat operators and guides whose families depended upon the river for their livelihoods. \nThese images speak to what the river means to me but more importantly for the people who arrive at it daily. Sustenance, transport, tourism and devotion each greatly direct the lives of many at its shores, this is an assortment of visuals in homage to the Brahmaputra and its people. The river is life itself.`,
        bio: `I grew up in Assam, India and moved to Bombay to study mass media - where I learned more about photography and visual practices while beginning to work on my own self-funded projects. In addition to a bachelor’s degree in Mass Media (BMM) from Jai Hind College, Mumbai University, I also have diplomas in filmmaking, photography, and sound production from NYFA, Udaan School of Photography and SRFTI respectively. My work revolves around observational and journalistic stories such as the documentation of disabled artists in India and an ongoing long-term project about mass migration in Uttarakhand. I am a visual artist working with photography and video mixed as conduits for my creative expression; with interest in further blurring the line between the two mediums - as far as is possible while each complements the other. I am continually looking to improve as a storyteller and delve deeper into the use of expressionist and abstract methods in that pursuit`,
        twitter: "",
        instagram: "@vivekr.singh",
        index: 40
    },
    {
        name: "Xiawei Liao",
        photos: [
            "/Exhibition/Xiawei Liao/Xiawei 1 - Arundhati Deka.jpg",
            "/Exhibition/Xiawei Liao/Xiawei 2 - Arundhati Deka.JPG"
        ],
        title: `Living with the river`,
        writeup: `I have spent a week during the last summer driving along the river, from the Yarlung Tsangpo Grand Canyon to the Lhasa city. I was not only awed by the magnificent nature along the river, the beautiful starry sky in the night, I was also touched by the different stories and believes that I heard along the way, from the people who have lived with such nourishing water, mountains, trees and animals for decades. I was taught about the different burial styles of the Tibetan people, including the celestial burial, water burial and so forth. The idea that touched me the most was that, I was told, Tibetans do not eat that much fish and birds because they believe that their ancestors live within them. I texted this to my friends and my friend replied: I wonder if that embeds any traditional thoughts for biodiversity conservation! Yes, I wonder too.`,
        bio: `Xiawei Liao is a water resource specialist based in World Bank Beijing Office. He has worked on a wide range of water-related issues, including water security, water supply and sanitation, flood management and so on in several South and East Asian countries. Xiawei holds a PhD in Geography and the Environment from the University of Oxford and has published more than 20 journal articles and a book on China’s water issues. He started working at the World Bank on the Brahmaputra Dialogue, a multi-track multi-country dialogue funded by the South Asia Water Initiative, a multi-donor Trust Fund managed by the World Bank.`,
        twitter: "",
        instagram: "",
        index: 41
    },
]
module.exports.populateDB = () => {
    newData.forEach((data, idx) => {
        var newProject = new  Project(data);

        newProject.save(err => {
            if(err) throw err;
            else {
                // console.log('Project saved')
                // console.log(newProject);
                console.log(idx);
            }
        });
    });
};

module.exports.clearDB = () => {
    Project.deleteMany({}, err => {
        if(err) throw err;
        else {
            console.log('Database cleared.')
        }
    });
};