import React from 'react';
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCameraRetro,
  FaCompass,
  FaGift,
  FaGlobe,
  FaInstagram,
  FaMapMarkedAlt,
  FaMedal,
  FaMusic,
  FaPhoneAlt,
  FaRegStar,
  FaRoute,
  FaSun,
  FaTrophy,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MetaData from '../container/MetaData';

const registrationLink =
  'https://docs.google.com/forms/d/e/1FAIpQLSedGOM8on8fRSaySXT8q1WuIB0EDIueRa2rv0Y-NUXWQH4hDg/viewform?usp=publish-editor';

const eventHighlights = [
  { label: 'Dates', value: '15 to 19 May 2026', icon: <FaCalendarAlt /> },
  { label: 'Registration Deadline', value: '20 April', icon: <FaSun /> },
  { label: 'Starting Price', value: 'Rs. 6999', icon: <FaTrophy /> },
  { label: 'Audience', value: 'Students from IITs across India', icon: <FaUsers /> },
];

const destinations = [
  {
    title: 'Nainital',
    copy: 'Lake views, local walks, Naina Devi Temple, Snow View Point, Tiffin Top and Mall Road energy.',
  },
  {
    title: 'Ranikhet',
    copy: 'A scenic stop with Chaubatia Gardens and a quieter hill-station stretch in the middle of the route.',
  },
  {
    title: 'Mukteshwar',
    copy: 'Temple visit, Bhalu Gaad waterfall, Chauli Ki Jali and the main celebration segment of the carnival.',
  },
  {
    title: 'Rishikesh',
    copy: 'Adventure add-ons, Ganga Aarti, and the final high-energy leg before the return journey.',
  },
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrival at Nainital',
    items: [
      'Early morning departure from Delhi / Rishikesh',
      'Arrival at Nainital and hotel check-in',
      'Relax and explore local surroundings',
      'Evening open mic, singing, jamming, fun ice-breakers and overnight stay in Nainital',
    ],
  },
  {
    day: 'Day 2',
    title: 'Nainital sightseeing',
    items: [
      'Boating at Naini Lake',
      'Darshan at Naina Devi Temple',
      'Snow View Point sightseeing',
      'Trek to Tiffin Top',
      'Evening walk at Mall Road',
      'Games including Balloon Pyramid, Musical Chairs, Human Tic Tac Toe, Drawing and Sketching',
    ],
  },
  {
    day: 'Day 3',
    title: 'Nainital to Ranikhet to Mukteshwar',
    items: [
      'Drive to Ranikhet',
      'Visit Chaubatia Gardens',
      'Continue to Mukteshwar',
      'Visit Mukteshwar Temple',
      'Explore Bhalu Gaad Waterfall and Chauli Ki Jali',
      'Visit Kainchi Dham (Neem Karoli Baba Temple)',
      'Group dancing, medal distribution and closing ceremony',
    ],
  },
  {
    day: 'Day 4',
    title: 'Mukteshwar to Rishikesh',
    items: [
      'Drive to Rishikesh',
      'Optional adventure activities including river rafting and paragliding',
      'Attend Ganga Aarti in the evening',
      'Overnight journey to Delhi / Roorkee',
    ],
  },
  {
    day: 'Day 5',
    title: 'Arrival',
    items: ['Reach Delhi / Roorkee by morning'],
  },
];

const activities = [
  {
    title: 'Evening Activities',
    icon: <FaMusic />,
    items: ['Open Mic', 'Singing', 'Jamming', 'Group Dancing', 'Medal Distribution', 'Closing Ceremony'],
  },
  {
    title: 'Games & Activities',
    icon: <FaCompass />,
    items: ['Balloon Pyramid', 'Musical Chairs', 'Human Tic Tac Toe', 'Drawing & Sketching', 'Interactive group fun'],
  },
];

const prizes = [
  'Total cash prize pool of Rs. 30,000',
  'Surprise gifts and goodies',
  'Medals for top performers',
  'Exclusive Summer Carnival T-shirts',
  'Cash prizes for game winners',
  'Overall winner trophy for the champions',
  'Participation certificates for all participants',
];

const contacts = [
  { name: 'Prakhar', phone: '+91 89294 88460' },
  { name: 'Randhir', phone: '+91 97889 70763' },
  { name: 'Sutikshan', phone: '+91 93404 58478' },
  { name: 'Ronny', phone: '+91 77479 06173' },
];

const atmospherePoints = [
  'Travel, adventure and celebration in one itinerary',
  'Inter-IIT networking across campuses and backgrounds',
  'Sightseeing mixed with competitions and cultural sessions',
  'A more social, memory-driven format than a standard trip',
];

const InterIITCarnival = () => {
  return (
    <div className="min-h-screen bg-[#fff8e8] text-slate-900">
      <MetaData
        title="Inter IIT Summer Carnival 2026 | Suhane Safar"
        description="Inter IIT Summer Carnival by Suhane Safar from 15 to 19 May 2026 across Nainital, Ranikhet, Mukteshwar, Kainchi Dham and Rishikesh. Starting at Rs. 6999."
        keywords="Inter IIT Summer Carnival, Suhane Safar, Nainital, Mukteshwar, Rishikesh, IIT students, summer carnival, May 2026"
        image="https://suhanesafar.com/Images/interiit.png"
        url="https://suhanesafar.com/inter-iit-carnival"
      />
      <Navbar />

      <main className="overflow-hidden pt-20">
        <section className="relative isolate bg-[radial-gradient(circle_at_top_left,_rgba(255,224,138,0.55),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(251,146,60,0.22),_transparent_28%),linear-gradient(180deg,_#fff4cf_0%,_#fff7e2_38%,_#fffdf8_100%)]">
          <div className="absolute inset-0 opacity-50">
            <div className="absolute left-[5%] top-24 h-32 w-32 rounded-full bg-orange-300/30 blur-3xl" />
            <div className="absolute right-[6%] top-40 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
            <div className="absolute bottom-16 left-[15%] h-28 w-28 rounded-full bg-yellow-200/60 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/80 bg-white/70 px-4 py-2 text-sm font-semibold text-orange-700 shadow-[0_10px_30px_rgba(251,146,60,0.12)] backdrop-blur">
                <FaSun className="text-orange-500" />
                Summer 2026 flagship experience
              </div>

              <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Inter IIT
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-sky-600 bg-clip-text text-transparent">
                  Summer Carnival
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                A high-energy inter-IIT summer getaway designed around travel, adventure, competitions, local culture,
                and campus connections across Nainital, Ranikhet, Mukteshwar, Kainchi Dham and Rishikesh.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-7 py-4 text-sm font-bold text-white shadow-[0_18px_50px_rgba(234,88,12,0.28)] transition-transform duration-300 hover:-translate-y-1"
                >
                  Register Now
                  <FaArrowRight />
                </a>
                <a
                  href="#itinerary"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-bold text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  Explore Itinerary
                  <FaRoute />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {eventHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_rgba(148,163,184,0.14)] backdrop-blur"
                  >
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-yellow-100 text-lg text-orange-600">
                      {item.icon}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border-2 border-dashed border-orange-300 lg:block" />
              <div className="absolute -right-4 bottom-10 hidden h-24 w-24 rounded-full bg-sky-200/40 blur-2xl lg:block" />

              <div className="relative rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(12,31,64,0.96),rgba(28,54,103,0.96))] p-4 shadow-[0_28px_90px_rgba(15,23,42,0.35)]">
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_34%),radial-gradient(circle_at_bottom,_rgba(96,165,250,0.18),_transparent_38%)]" />
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">Suhane Safar</p>
                      <p className="mt-2 text-2xl font-black uppercase leading-tight">Travel more. Worry less.</p>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
                      Summer 2026
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">Route</p>
                    <p className="mt-3 text-3xl font-black leading-tight text-white">
                      Nainital
                      <span className="text-orange-300"> • </span>
                      Mukteshwar
                      <span className="text-orange-300"> • </span>
                      Kainchi Dham
                      <span className="text-orange-300"> • </span>
                      Rishikesh
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">Deadline</p>
                      <p className="mt-2 text-2xl font-bold">20 April</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">Trip Window</p>
                      <p className="mt-2 text-2xl font-bold">15 to 19 May</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border border-orange-300/30 bg-gradient-to-r from-orange-500 to-amber-500 p-5 text-slate-950">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-950/75">Launch Offer</p>
                    <p className="mt-2 text-3xl font-black">Starting at Rs. 6999</p>
                    <p className="mt-2 text-sm font-medium text-orange-950/75">
                      Seats are limited. The registration link is live now.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Adventure</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Competitions</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Networking</span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Celebration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-[0_20px_70px_rgba(249,115,22,0.09)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                <FaRegStar />
                What this event is
              </div>
              <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
                A travel-first inter-IIT experience with real summer energy
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Inter IIT Summer Carnival is positioned as a flagship experiential event by Suhane Safar, built to bring
                students from IITs together for a mix of sightseeing, competitions, entertainment, and community. The
                format is designed to feel more memorable than a basic college trip, with a clearer blend of travel,
                bonding and on-ground activities.
              </p>
              <div className="mt-8 grid gap-4">
                {atmospherePoints.map((point) => (
                  <div key={point} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                    <p className="text-base font-medium text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-sky-100 bg-[linear-gradient(135deg,#fff7db_0%,#fff4e4_48%,#eef8ff_100%)] p-8 shadow-[0_20px_70px_rgba(56,189,248,0.09)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-sky-800">
                <FaMapMarkedAlt />
                Destinations
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {destinations.map((destination, index) => (
                  <div
                    key={destination.title}
                    className="rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Stop {index + 1}
                      </p>
                      <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-100 to-sky-100" />
                    </div>
                    <h3 className="mt-4 text-2xl font-black text-slate-900">{destination.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-700">{destination.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="itinerary" className="bg-[linear-gradient(180deg,#fffef9_0%,#fff7e4_100%)] py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-amber-700">
                <FaRoute />
                5 day flow
              </div>
              <h2 className="mt-5 text-4xl font-black text-slate-900 sm:text-5xl">Planned like a proper event, not a filler trip</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                The structure from your posters has been converted into a clearer itinerary layout so the page feels more
                premium and easier to scan on both desktop and mobile.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {itinerary.map((item, index) => (
                <div
                  key={item.day}
                  className={`rounded-[30px] border p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ${
                    index % 2 === 0
                      ? 'border-orange-100 bg-white'
                      : 'border-sky-100 bg-[linear-gradient(135deg,#ffffff_0%,#f2fbff_100%)]'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white">
                      {item.day}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Summer circuit
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-slate-900">{item.title}</h3>
                  <div className="mt-5 space-y-3">
                    {item.items.map((detail) => (
                      <div key={detail} className="flex gap-3">
                        <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
                        <p className="text-base leading-7 text-slate-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#1e3a5f_58%,#155e75_100%)] p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-100">
                <FaCameraRetro />
                What participants get
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {activities.map((group) => (
                  <div key={group.title} className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-orange-200">
                      {group.icon}
                    </div>
                    <h3 className="mt-4 text-2xl font-black">{group.title}</h3>
                    <div className="mt-4 space-y-3">
                      {group.items.map((activity) => (
                        <div key={activity} className="flex items-start gap-3">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-300" />
                          <p className="text-base leading-7 text-slate-100">{activity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-[0_20px_70px_rgba(249,115,22,0.1)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700">
                <FaGift />
                Rewards and recognition
              </div>
              <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">Exciting prizes, not token giveaways</h2>
              <div className="mt-8 space-y-4">
                {prizes.map((prize, index) => (
                  <div key={prize} className="flex items-center gap-4 rounded-2xl bg-[#fff8ec] p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-black text-white">
                      {index + 1}
                    </div>
                    <p className="text-base font-semibold text-slate-800">{prize}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <FaMedal className="text-2xl text-orange-500" />
                  <p className="text-lg font-bold text-slate-900">Designed to feel competitive and celebratory</p>
                </div>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  The event messaging clearly pushes competition, participation, campus pride and memorable on-ground
                  moments, so the page now reflects that instead of looking like a plain booking page.
                </p>
                <p className="mt-3 text-base font-bold text-orange-600">Total cash prize: Rs. 30,000</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#fff4d3_0%,#fff8ec_100%)] py-18">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-[0_22px_70px_rgba(14,116,144,0.1)] backdrop-blur">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
                  <FaGlobe />
                  Connect
                </div>
                <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">Registration and contact desk</h2>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  The page uses your provided live form as the primary CTA and keeps all contact details visible in one
                  place for a more professional conversion flow.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                  <a
                    href={registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    Open Registration Form
                    <FaArrowRight />
                  </a>
                  <a
                    href="https://www.instagram.com/suhane__safar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900"
                  >
                    <FaInstagram />
                    @suhane__safar
                  </a>
                </div>

                <div className="mt-8 rounded-[28px] bg-slate-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Website</p>
                  <a href="https://suhanesafar.com" className="mt-2 block text-xl font-black text-slate-900">
                    suhanesafar.com
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <a
                    key={contact.phone}
                    href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[30px] border border-white/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Coordinator</p>
                        <h3 className="mt-3 text-2xl font-black text-slate-900">{contact.name}</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 text-green-600">
                        <FaWhatsapp />
                      </div>
                    </div>
                    <p className="mt-5 flex items-center gap-3 text-base font-semibold text-slate-700">
                      <FaPhoneAlt className="text-orange-500" />
                      {contact.phone}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      Tap to open WhatsApp directly for queries, registrations or coordination.
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] border border-orange-200 bg-[linear-gradient(135deg,#ffedd5_0%,#fde68a_45%,#dbeafe_100%)] p-8 shadow-[0_30px_90px_rgba(249,115,22,0.16)] sm:p-10">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/30 blur-3xl" />
            <div className="absolute -bottom-10 left-8 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-800">Final CTA</p>
                <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                  Limited seats. Better visuals. Clearer info. Ready for registrations.
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  This page now matches the current posters and positions the carnival as a premium summer experience
                  instead of a generic trip listing.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white"
                >
                  Register for the Carnival
                  <FaArrowRight />
                </a>
                <a
                  href="https://www.instagram.com/suhane__safar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-sm font-bold text-slate-900"
                >
                  Follow Updates
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InterIITCarnival;
