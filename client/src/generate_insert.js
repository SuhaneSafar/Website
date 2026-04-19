import fs from 'fs';

// Inline the data to avoid module import issues.
const upcomingEvents = [
  {
    "id": 8,
    "title": "YULLA KANDA",
    "gform": "https://docs.google.com/forms/d/e/1FAIpQLSfviRIbQsHyOZwjX4Su8Fn8qOnpoQMCFDi4PRhX_FsokTG1Iw/viewform?usp=header",
    "subtitle": "World’s Highest Shri Krishna Temple",
    "mainImage": "/Images/YullaKandaHome.png",
    "gallery": [
      "/Images/YullaKanda.jpeg",
      "/Images/YullaKanda1.jpeg",
      "/Images/YullaKanda2.jpeg"
    ],
    "price": "4499",
    "reviews": [
      {
        "name": "Rahul",
        "rating": 5,
        "text": "Yulla Kanda trekking offers an enchanting view of Kinnaur mountains."
      },
      {
        "name": "Pooja",
        "rating": 4,
        "text": "The world's highest Lord Krishna temple located beside a sacred lake in Kinnaur, Himachal Pradesh."
      }
    ],
    "pickupDrop": "IIT Roorkee | IIT Delhi | Chandigarh",
    "duration": "3 Days / 2 Nights",
    "inclusions": [
      "1 Nights Camp Stay in Yulla Base Camp (comfortable, shared rooms)",
      "3 Delicious Meals - 1 Breakfasts + 1 Dinners + 1 Packed Lunch",
      "Round-trip Transportation from iit Delhi, Roorkee to Yulla Village by Tempo Traveller",
      "All Required Permits for trekking and travel",
      "Surprise Group Games & Gifts to make your experience even more memorable",
      "Basic First Aid Kit for safety during the trek",
      "Driver Allowance, Toll Tax & Parking Charges included in the package"
    ],
    "exclusions": [
      "Any personal expenses such as laundry, shopping, tips, or snacks",
      "Any adventure activities not specifically mentioned in the itinerary",
      "Entrance fees to temples, trek, parks, or sightseeing spots (if applicable)",
      "Travel insurance",
      "Anything else not clearly mentioned in the inclusions"
    ],
    "overview": "Experience the breathtaking trek to Yulla Kanda, home to the world’s highest Shri Krishna Temple, nestled beside a sacred alpine lake in the stunning Kinnaur Himalayas.",
    "itinerary": [
      {
        "day": 1,
        "title": "DEPARTURE TO YULLA VILLAGE",
        "description": "The group assembles at the pick-up point. Departure Location - IIT Roorkee | IIT Delhi | Chandigarh. Departure Time - 08:00 PM. Meet the team captain at Departure Location and get a TOUR briefing. After which, we'll head out on an overnight journey to Udaipur. Halt for dinner in between (not on us)."
      },
      {
        "day": 2,
        "title": "TREK TO BASE CAMP & TEMPLE VISIT",
        "description": "6:00 AM - Arrive at Yulla village. 6:20 AM - Start the scenic trek to base camp through pine forests and mountain views. 10:30 AM - Reach base camp, freshen up and relax. Afternoon visit to Shri Krishna Yulla Kanda Temple (just 500m from base camp). Evening - Return to base camp for a magical night: Bonfire under the stars, Stargazing sessions, Fun interactions, laughter, bonding games & soulful conversations. Make unforgettable memories & new friendships surrounded by the Himalayas. Meals Included: Breakfast & Dinner. Stay: Tent stay at base camp."
      },
      {
        "day": 3,
        "title": "DESCENT & RETURN",
        "description": "7:30 AM - Breakfast at base camp. 10:30 AM - Begin descent to road point near bus stop. 11:00 AM - Explore the Yulla Village and culture. 2:00 PM - Begin the return journey in the afternoon and reach the destination early the next morning. Trip ended, memories started. Back with stories and stronger bonds."
      }
    ],
    "lastDate": "April 2026"
  },
  {
    "id": 11,
    "title": "Kedarnath Yatra 2026",
    "gform": "https://docs.google.com/forms/d/e/1FAIpQLSeMpxnfYimnoOZfcm-evAcbvwN61fSCVWK-GR9sfRd9Q_TQJQ/viewform?usp=header",
    "subtitle": "Embark on a Divine Journey! ",
    "mainImage": "/Images/kedarnath/kedarnath-13may.jpeg",
    "gallery": [
      "/Images/KedarNath2026.jpeg",
      "/Images/KedarNath2026-1.jpeg"
    ],
    "price": "3999",
    "reviews": [
      {
        "name": "Rupesh",
        "rating": 5,
        "text": "A highly sacred and spiritual pilgrimage site."
      },
      {
        "name": "Ritu",
        "rating": 4,
        "text": "The temple is surrounded by the lofty, snow-capped Himalayan mountains, offering stunning views."
      }
    ],
    "pickupDrop": "IIT Roorkee | Delhi | BHU | IIT Bombay | IIT Hyderabad | IIT Kanpur | IIT Kgp & IIT Madras",
    "duration": "3 Days / 2 Nights",
    "inclusions": [
      "Accommodation – 2 Nights Stay (Tent & Hotel in Sitapur & Kedarnath)",
      "4 Meals – 2 Breakfasts + 2 Dinners",
      "Transportation by Traveller / Mini Bus",
      "Local Exploration as per Itinerary",
      "First Aid Kits",
      "Driver Allowance, Toll Tax & Parking Charges"
    ],
    "exclusions": [
      "Any personal expenses such as laundry, shopping, tips, or snacks",
      "Any adventure activities not specifically mentioned in the itinerary",
      "Entrance fees to temples, trek, parks, or sightseeing spots (if applicable)",
      "Travel insurance",
      "Anything else not clearly mentioned in the inclusions"
    ],
    "overview": "✨ Come with friends, create lifelong memories, and experience peace and a stress-free spiritual escape.",
    "itinerary": [
      {
        "day": 1,
        "title": "SPIRITUAL JOURNEY STARTS",
        "description": "Begin your spiritual journey with an early morning departure from Delhi and Roorkee. En route, witness the sacred confluence at Devprayag Sangam and seek blessings at the revered Dhari Devi Temple. By evening, reach Sitapur for dinner and rest, preparing your mind and body for the divine journey ahead."
      },
      {
        "day": 2,
        "title": "TREK TO KEDARNATH & DIVINE DARSHAN",
        "description": "Begin early morning with the 22 km trek from Sitapur towards the sacred Kedarnath Temple. Walk through breathtaking Himalayan landscapes and spiritual surroundings, reaching Kedarnath by evening. Attend the divine night aarti at the temple and experience the powerful spiritual atmosphere. Conclude the day with dinner and overnight stay at the camp near Kedarnath."
      },
      {
        "day": 3,
        "title": "DIVINE DARSHAN & JOURNEY BACK",
        "description": "Begin the day with sacred darshan at Kedarnath Temple, followed by visits to Bhairavnath Temple and the Shankaracharya Samadhi, embracing the spiritual energy of the Himalayas. After divine blessings, begin the descent trek to Sitapur at 12:00 PM. The return journey to Roorkee and Delhi continues overnight, with early morning arrival. The trip concludes with refreshed minds, strengthened faith, and unforgettable memories."
      }
    ],
    "lastDate": "10 May 2026"
  },
  {
    "id": 13,
    "title": "Harshil Valley",
    "gform": "https://forms.gle/DSaAYDd6haQ4aTyi6",
    "subtitle": "Harshil Valley - The Mini Switzerland of India",
    "mainImage": "/Images/harshil valley/harshil-10april.jpeg",
    "gallery": [
      "/Images/harshil-main.png",
      "/Images/harshil-1.jpg"
    ],
    "price": "4199",
    "reviews": [
      {
        "name": "Puneet",
        "rating": 4,
        "text": "Had so much fun! The place is beautiful and the activities were amazing."
      },
      {
        "name": "Neetu",
        "rating": 5,
        "text": "The place was absolutely beautiful. Felt like I was in Switzerland."
      }
    ],
    "pickupDrop": "IIT Roorkee | Delhi",
    "duration": "3 Days / 2 Nights",
    "inclusions": [
      "2 night camp stay.",
      "2 Breakfasts & 2 Dinner",
      "Tempo Traveller / Mini Bus",
      "Trip leader",
      "Logistics Covered: Driver allowance, toll charges, parking fees.",
      "Safety: First aid kits available throughout the trip.",
      "Note: If Registrations are less price may increase accordingly and Cab travel will be provided"
    ],
    "exclusions": [
      "Personal expenses",
      "Entry / jeep / cab charges",
      "Scooty / car rental for self-exploration",
      "Any food, drinks or services not mentioned in inclusions",
      "Entrance fees to temples, trek, parks, or sightseeing spots (if applicable)"
    ],
    "overview": "Explore the serene beauty of Harshil Valley, often called the Mini Switzerland of India. Surrounded by pine forests, snow-capped Himalayan peaks, and the Bhagirathi river, this trip blends scenic drives, peaceful villages, temple visits, and refreshing treks for a perfect mountain escape.",
    "itinerary": [
      {
        "day": 0,
        "description": "Departure from Delhi at 9–10 PM & Overnight Journey by Bus."
      },
      {
        "day": 1,
        "description": "Departure From Roorkee / Rishikesh. Arrival at Uttarkashi. Visit Kashivishwanath temple. Rest, acclimatization, and local exploration. Overnight stay at Harshil Village"
      },
      {
        "day": 2,
        "description": "Early morning departure. Drive to Gangotri. Visit Surya Kund. Explore Himalayan Art Gallery. Visit Mukhba Village and Harshil Valley Market Explore"
      },
      {
        "day": 3,
        "description": "Early morning trek to Lama Top. Drive to Bagoni Village. Enjoy panoramic views. Descend and begin return journey. Roorkee Arrival 10 PM"
      },
      {
        "day": 4,
        "description": "Arrival At Delhi In morning."
      }
    ],
    "lastDate": "26 March 2026"
  },
  {
    "id": 14,
    "title": "Kuari Pass",
    "gform": "https://docs.google.com/forms/d/e/1FAIpQLSevK0heTSeQ3avmpQnhsjrr_6K7y2FxpLcRoU94hhXpeXsUEQ/viewform?usp=header",
    "subtitle": "Trek through snow-covered trails to witness breathtaking views of Nanda Devi and the mighty Himalayan peaks.",
    "mainImage": "/Images/kuari pass/kuari pass-main-april.png",
    "gallery": [
      "/Images/kuari pass/kuari-pass1.png"
    ],
    "price": "4699",
    "reviews": [
      {
        "name": "Ankit",
        "rating": 4,
        "text": "Kuari pass trek was absolutely magical. One of the best trekking experiences I've ever had!"
      },
      {
        "name": "Sneha",
        "rating": 5,
        "text": "Perfect mix of adventure and scenic beauty. The place was breathtakingly beautiful."
      }
    ],
    "pickupDrop": "IIT Roorkee | Delhi NCR",
    "duration": "4 Days / 2 Nights",
    "inclusions": [
      "1 night hotel stay",
      "1 night camp stay",
      "Meals- 2 Breakfast, 2 lunch and 2 dinner",
      "Trek leaders,guide",
      "Transport",
      "Transportation tempo traveller from Dehradun to Pantwari Village",
      "Local Exploration as per the itinerary",
      "All Required Permits for trekking and travel",
      "Surprise Games & Gifts to make your experience even more memorable",
      "Basic First Aid Kit for safety during the trip",
      "Driver Allowance, Toll Tax & Parking Charges included in the package"
    ],
    "exclusions": [
      "Any personal expenses such as laundry, shopping, tips, or snacks",
      "Any adventure activities not specifically mentioned in the itinerary",
      "Entrance fees to temples, trek, parks, or sightseeing spots (if applicable)",
      "Travel insurance",
      "Anything else not clearly mentioned in the inclusions"
    ],
    "overview": "Experience the breathtaking trek to Kuari Pass, a hidden gem in the Garhwal Himalayas, offering stunning views of snow-capped peaks, lush valleys, and serene landscapes. This trek is perfect for adventure seekers and nature lovers looking to explore the beauty of Uttarakhand.",
    "itinerary": [
      {
        "day": 1,
        "title": "3 APRIL - DEPARTURE",
        "description": "Morning Depart From Roorkee To Joshimath Stay At Joshimath Hotel."
      },
      {
        "day": 2,
        "title": "4 APRIL",
        "description": "Trek from Joshimath to Gulling to Khullara. Stay at Khullara overnight"
      },
      {
        "day": 3,
        "title": "5 APRIL",
        "description": "Trek from Khullara to Kuari Pass (8 km) Return to Joshimath till Evening"
      },
      {
        "day": 4,
        "title": "6 APRIL",
        "description": "Early morning arrival at pickup location."
      }
    ],
    "lastDate": "26 March 2026"
  },
  {
    "id": 15,
    "title": "Ladakh",
    "gform": "https://docs.google.com/forms/d/e/1FAIpQLScE8qzKzVBD8uCyTR__rWW9ykx5LlAqP4Fp1dKKdBBIPaEzng/viewform?usp=header",
    "subtitle": "Ride through rugged mountain passes and explore the raw beauty of Ladakh, where every turn feels like a dream.",
    "mainImage": "/Images/Ladakh/Ladakh-main-may.png",
    "gallery": [
      "/Images/Ladakh/ladakh-beauty.jpeg",
      "/Images/Ladakh/ladakh-temple.jpeg",
      "/Images/Ladakh/ladakh-travel.jpeg",
      "/Images/Ladakh/ladakh-yaks.jpeg"
    ],
    "price": "19,000/22,000/25,000",
    "reviews": [
      {
        "name": "Aman",
        "rating": 5,
        "text": "Leh Ladakh was beyond anything I imagined. The landscapes, Pangong Lake, and the road journey were absolutely surreal."
      },
      {
        "name": "Karan",
        "rating": 4,
        "text": "Perfect mix of thrill and peace. The journey was challenging but the views made it completely worth it."
      }
    ],
    "pickupDrop": "IIT Roorkee | Delhi",
    "duration": "6 Days / 5 Nights",
    "inclusions": [
      "🏨 5 nights accommodation on sharing basis",
      "🍽 5 breakfasts & 5 dinners",
      "🚖 Airport pickup and drop in Leh",
      "🚌 Transportation for the complete trip",
      "📄 Inner Line Permit",
      "🏍 Himalayan bikes with fuel for touring",
      "🛠 Backup car with mechanic for 3 days",
      "🛡 Riding Safety Gear-Helmet, Elbow guard & Knee pad",
      "🫁 1 Oxygen cylinder support"
    ],
    "exclusions": [
      "🎫 Airfare / train fare",
      "✈ Delhi to Delhi flight",
      "💸 Personal expenses",
      "🎟 Entry fees and guide charges",
      "🍛 Lunch and any meals not mentioned",
      "➕ Extra sightseeing not mentioned in the itinerary"
    ],
    "overview": "Experience the ultimate Leh–Ladakh adventure with high-altitude passes, crystal-clear lakes like Pangong, serene monasteries, and breathtaking landscapes that make every moment unforgettable",
    "itinerary": [
      {
        "day": 1,
        "title": "ARRIVAL IN LEH & LOCAL SIGHTSEEING",
        "description": "Depart from Delhi Airport for your flight to Leh. Arrive in Leh and check in to the hotel. Take some rest and allow your body to adjust to the high altitude. In the evening, explore the beautiful local attractions of Leh including Shanti Stupa, Leh Palace, Central Asian Museum, Soma Gompa, and Leh Market. Return to the hotel for dinner and overnight stay."
      },
      {
        "day": 2,
        "title": " SHAM VALLEY EXCURSION",
        "description": "After breakfast, begin the Sham Valley tour. Visit Hall of Fame War Memorial, Spituk Temple, Pathar Sahib Gurudwara, Magnetic Hill, and Sangam, the meeting point of the Indus and Zanskar rivers. Later, return to Leh. Dinner and overnight stay at the hotel."
      },
      {
        "day": 3,
        "title": " LEH TO NUBRA VALLEY",
        "description": "After an early breakfast, drive towards Nubra Valley via the famous Khardung La Pass, one of the world’s highest motorable roads. On arrival, visit Diskit Monastery, Buddha Statue, and the sand dunes of Hunder. Enjoy the scenic beauty of the valley. Dinner and overnight stay at camp/resort in Nubra."
      },
      {
        "day": 4,
        "title": "NUBRA TO PANGONG LAKE",
        "description": "After breakfast, proceed towards the stunning Pangong Lake via the Shayok route. Enjoy the breathtaking journey through mountain landscapes and river views. On reaching Pangong, spend time near the lake and witness its magical beauty.Dinner and overnight stay near Pangong Lake."
      },
      {
        "day": 5,
        "title": "PANGONG TO LEH",
        "description": "After breakfast, drive back to Leh via Chang La Pass. On the way, visit Thiksey Monastery, Shey Palace, 3 Idiots School, and Sindhu Ghat. Reach Leh by evening. Dinner and overnight stay at the hotel."
      },
      {
        "day": 6,
        "title": "DEPARTURE FROM LEH",
        "description": "After breakfast, transfer to Leh Airport for your onward journey. Carry back unforgettable memories, lifelong friends, and the incredible experience of Ladakh’s breathtaking beauty. Return home with unforgettable memories, breathtaking views, and amazing experiences with Suhane Safar."
      }
    ],
    "lastDate": "13 May 2026"
  }
];

let sql = `INSERT INTO public.upcoming_adventures (title, subtitle, gform, "mainImage", gallery, price, "pickupDrop", duration, inclusions, exclusions, overview, itinerary, reviews, "lastDate") VALUES \n`;

const escapeString = (str) => {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
};

const evts = upcomingEvents.map(e => {
  const title = escapeString(e.title);
  const subtitle = escapeString(e.subtitle);
  const gform = escapeString(e.gform);
  const mainImage = escapeString(e.mainImage);
  const gallery = `ARRAY[${e.gallery ? e.gallery.map(g => escapeString(g)).join(',') : ''}]::text[]`;
  const price = escapeString(e.price);
  const pickupDrop = escapeString(e.pickupDrop);
  const duration = escapeString(e.duration);
  const inclusions = `ARRAY[${e.inclusions ? e.inclusions.map(inc => escapeString(inc)).join(',') : ''}]::text[]`;
  const exclusions = `ARRAY[${e.exclusions ? e.exclusions.map(exc => escapeString(exc)).join(',') : ''}]::text[]`;
  const overview = escapeString(e.overview);
  const itinerary = `'${JSON.stringify(e.itinerary).replace(/'/g, "''")}'::jsonb`;
  const reviews = `'${JSON.stringify(e.reviews).replace(/'/g, "''")}'::jsonb`;
  const lastDate = escapeString(e.lastDate);

  return `(${title}, ${subtitle}, ${gform}, ${mainImage}, ${gallery}, ${price}, ${pickupDrop}, ${duration}, ${inclusions}, ${exclusions}, ${overview}, ${itinerary}, ${reviews}, ${lastDate})`;
});

sql += evts.join(',\n') + ';';
fs.writeFileSync('insert_queries.sql', sql);
console.log("SQL successfully generated.");
