import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import "./App.css";

const categories = [
  {
    number: "01",
    title: "MUSIC",
    subtitle: "Rhythm • Beats • Live",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "DANCE",
    subtitle: "Movement • Expression",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "LITERARY",
    subtitle: "Words • Ideas • Stories",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "CREATIVE ARTS",
    subtitle: "Create • Experiment",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "DRAMATICS",
    subtitle: "Stage • Cinema • Theatre",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "FASHION",
    subtitle: "Style • Identity • Runway",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "07",
    title: "GAMING",
    subtitle: "Compete • Play • Win",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "08",
    title: "ASTROPHILIA",
    subtitle: "Space • Science • Wonder",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "09",
    title: "QUIZ",
    subtitle: "Think • Challenge • Win",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "10",
    title: "SELF DEFENCE",
    subtitle: "Strength • Discipline • Skill",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=85",
  },
];

const categoryDetails = {
  MUSIC: {
    tagline: "Rhythm · Beats · Live",
    description:
      "Where the campus turns into a stage. Experience the sound, energy and live performances of MILAN.",
    events: ["Battle of Bands", "Live Performances", "DJ Night"],
  },

  DANCE: {
    tagline: "Movement · Expression",
    description:
      "From classical expression to contemporary movement, dance takes over MILAN.",
    events: ["Classical Dance", "Western Dance", "Dance Battles"],
  },

  LITERARY: {
    tagline: "Words · Ideas · Stories",
    description:
      "A space for people who think, write, debate and turn ideas into stories.",
    events: ["Creative Writing", "Debate", "Poetry"],
  },

  "CREATIVE ARTS": {
    tagline: "Create · Experiment",
    description:
      "Art, imagination and experimentation come together across the MILAN campus.",
    events: ["Art", "Design", "Creative Challenges"],
  },

  DRAMATICS: {
    tagline: "Stage · Cinema · Theatre",
    description:
      "Stories come alive through theatre, performance and cinematic expression.",
    events: ["Street Play", "Theatre", "Short Films"],
  },

  FASHION: {
    tagline: "Style · Identity · Runway",
    description:
      "The runway becomes a stage. Fashion, attitude and identity meet at MILAN.",
    events: ["Fashion Show", "Style Challenges", "Runway"],
  },

  GAMING: {
    tagline: "Compete · Play · Win",
    description:
      "Competition gets serious. Step into the gaming arena and play to win.",
    events: ["Esports", "Gaming Battles", "Arcade"],
  },

  ASTROPHILIA: {
    tagline: "Space · Science · Wonder",
    description:
      "Look beyond the campus and explore the universe through science and curiosity.",
    events: ["Astronomy", "Space Quiz", "Science Events"],
  },

  QUIZ: {
    tagline: "Think · Challenge · Win",
    description:
      "Fast thinking, sharp minds and questions that push you further.",
    events: ["General Quiz", "Trivia", "Team Challenges"],
  },

  "SELF DEFENCE": {
    tagline: "Strength · Discipline · Skill",
    description:
      "Strength is built through discipline, awareness and confidence.",
    events: ["Self Defence", "Martial Arts", "Skill Challenges"],
  },
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const selectedDetails = selectedCategory
    ? categoryDetails[selectedCategory.title]
    : null;

  return (
    <main className="milan-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a href="#" className="brand">
          <img src="/assets/milan-logo.png" alt="MILAN" />
          <span>MILAN</span>
        </a>

        <nav>
          <a href="#events">EVENTS</a>
          <a href="#shows">PRO SHOWS</a>
          <a href="#schedule">SCHEDULE</a>
          <a href="#gallery">GALLERY</a>
        </nav>

        <button className="menu-button" aria-label="Open menu">
          <Menu size={21} />
        </button>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-noise" />

        <div className="red-glow red-glow-one" />
        <div className="red-glow red-glow-two" />

        <div className="background-type">27</div>

        <div className="hero-topline">
          <span>SRM INSTITUTE OF SCIENCE &amp; TECHNOLOGY</span>
          <span>NATIONAL LEVEL CULTURAL FEST</span>
        </div>

        <div className="hero-copy">

          <motion.div
            className="edition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span>19TH EDITION</span>
            <i />
            <span>2027</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            MILAN
            <span>27</span>
          </motion.h1>

          <motion.div
            className="hero-statement"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <strong>MORE THAN</strong>
            <em>A FEST.</em>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Four days of expression,
            <br />
            competition &amp; celebration.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#events" className="explore-button">
              EXPLORE MILAN
              <ArrowUpRight size={18} />
            </a>

            <span className="hash">#LiveTheChange</span>
          </motion.div>

        </div>

        {/* ================= POSTER ================= */}

        <motion.div
          className="poster-wrap"
          initial={{ opacity: 0, scale: 0.88, rotate: 6 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="poster-shadow" />

          <img
            src="/assets/milan-2027-poster.png"
            alt="MILAN 2027 poster"
          />

          <div className="poster-label">
            <span>18—21</span>
            <small>FEBRUARY 2027</small>
          </div>
        </motion.div>

        {/* ================= SIDE TEXT ================= */}

        <div className="vertical-text">
          <span>SRM · KTR</span>
          <span>CHENNAI · INDIA</span>
        </div>

        {/* ================= HERO FOOTER ================= */}

        <div className="hero-footer">

          <div>
            <strong>40+</strong>
            <span>EVENTS</span>
          </div>

          <div>
            <strong>04</strong>
            <span>DAYS</span>
          </div>

          <div>
            <strong>01</strong>
            <span>CAMPUS</span>
          </div>

          <div className="scroll">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={16} />
          </div>

        </div>

      </section>

      {/* ================= EVENTS ================= */}

      <section className="events-section" id="events">

        <div className="section-intro">

          <span className="section-number">01 / 06</span>

          <div>
            <p className="eyebrow">THE MILAN EXPERIENCE</p>

            <h2>
              FIND YOUR
              <br />
              <i>STAGE.</i>
            </h2>
          </div>

          <p className="intro-copy">
            Music. Dance. Literature. Art. Gaming.
            Dramatics. Whatever your language of
            expression, there is a place for you at MILAN.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((category, index) => (

            <motion.article
              key={category.number}
              className={
                index === 0
                  ? "category-card category-featured"
                  : "category-card"
              }
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCategory(category)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setSelectedCategory(category);
                }
              }}
            >

              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />

              <div className="category-overlay" />

              <div className="category-number">
                {category.number}
              </div>

              <div className="category-content">
                <p>{category.subtitle}</p>
                <h3>{category.title}</h3>
              </div>

              <div className="category-arrow">
                <ArrowUpRight size={20} />
              </div>

            </motion.article>

          ))}

        </div>

      </section>

      {/* ================= PRO SHOWS ================= */}

      <section className="shows-section" id="shows">

        <div className="shows-copy">

          <span className="eyebrow">02 / THE STAGE</span>

          <h2>
            THE
            <br />
            <i>STAGE</i>
            <br />
            AWAITS.
          </h2>

          <p className="shows-intro">
            Four nights. One campus.
            <br />
            The biggest moments are still to come.
          </p>

        </div>

        <div className="shows-card">

          <div className="shows-card-top">
            <span>MILAN 2027</span>
            <span>PRO SHOWS</span>
          </div>

          <div className="shows-card-center">

            <span>ARTIST LINEUP</span>

            <strong>
              COMING
              <br />
              SOON.
            </strong>

          </div>

          <div className="shows-card-bottom">
            <span>18—21 FEBRUARY 2027</span>
            <span>SRM KTR</span>
          </div>

        </div>

      </section>

      {/* ================= SCHEDULE ================= */}

      <section className="schedule-section" id="schedule">

        <div className="schedule-heading">

          <span className="section-number">03 / 06</span>

          <div>
            <p className="eyebrow">FOUR DAYS OF MILAN</p>

            <h2>
              PICK YOUR
              <br />
              <i>DAY.</i>
            </h2>
          </div>

          <p className="schedule-copy">
            The detailed 2027 event schedule will be
            announced soon. Check back here for
            timings, venues and event registrations.
          </p>

        </div>

        <div className="schedule-days">

          <article className="day-card active">
            <span>DAY 01</span>
            <strong>18</strong>
            <small>FEB</small>

            <div>
              <p>OPENING DAY</p>
              <span>EVENTS &amp; ACTIVITIES</span>
            </div>

            <ArrowUpRight size={20} />
          </article>

          <article className="day-card">
            <span>DAY 02</span>
            <strong>19</strong>
            <small>FEB</small>

            <div>
              <p>MILAN CONTINUES</p>
              <span>EVENTS &amp; ACTIVITIES</span>
            </div>

            <ArrowUpRight size={20} />
          </article>

          <article className="day-card">
            <span>DAY 03</span>
            <strong>20</strong>
            <small>FEB</small>

            <div>
              <p>THE BIG DAY</p>
              <span>EVENTS &amp; ACTIVITIES</span>
            </div>

            <ArrowUpRight size={20} />
          </article>

          <article className="day-card">
            <span>DAY 04</span>
            <strong>21</strong>
            <small>FEB</small>

            <div>
              <p>FINALE</p>
              <span>EVENTS &amp; CLOSING</span>
            </div>

            <ArrowUpRight size={20} />
          </article>

        </div>

        <div className="schedule-note">
          <span>VENUE</span>
          <strong>AUDI GROUND · SRM KTR</strong>
          <small>
            2026 venue reference · 2027 venue to be confirmed
          </small>
        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery-section" id="gallery">

        <div className="gallery-heading">

          <span className="section-number">04 / 06</span>

          <div>
            <p className="eyebrow">MOMENTS FROM MILAN</p>

            <h2>
              SEE THE
              <br />
              <i>ENERGY.</i>
            </h2>
          </div>

          <p className="gallery-copy">
            Four days. Hundreds of moments.
            <br />
            A campus transformed by culture,
            creativity and celebration.
          </p>

        </div>

        <div className="gallery-grid">

          <div
  className="gallery-item gallery-large"
  onClick={() =>
    setSelectedGalleryImage({
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=85",
      title: "THE CROWD",
    })
  }
></div>

          <div
  className="gallery-item"
  onClick={() =>
    setSelectedGalleryImage({
      src: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
      title: "LIVE",
    })
  }
></div>

          <div
  className="gallery-item"
  onClick={() =>
    setSelectedGalleryImage({
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85",
      title: "NIGHTS",
    })
  }
>
            <img
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=85"
              alt="Festival lights"
            />
            <span>NIGHTS</span>
          </div>

          <div
  className="gallery-item gallery-wide"
  onClick={() =>
    setSelectedGalleryImage({
      src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85",
      title: "THE STAGE",
    })
  }
></div>

        </div>

        <div className="gallery-bottom">
          <span>SRM KTR · CHENNAI</span>
          <strong>#LiveTheChange</strong>
        </div>

      </section>

      {/* ================= REGISTRATION ================= */}

      <section className="register-section" id="register">

        <div className="register-bg">JOIN</div>

        <div className="register-top">
          <span className="section-number">05 / 06</span>
          <span className="eyebrow">YOUR TURN</span>
        </div>

        <div className="register-content">

          <p className="register-kicker">
            READY TO BE PART OF IT?
          </p>

          <h2>
            DON'T JUST
            <br />
            <i>WATCH.</i>
            <br />
            LIVE IT.
          </h2>

          <p className="register-copy">
            Registrations for MILAN 2027 will open soon.
            <br />
            Choose your event. Bring your people.
            <br />
            Make your moment count.
          </p>

          <button className="register-button">
            REGISTRATIONS OPENING SOON
            <ArrowUpRight size={18} />
          </button>

        </div>

        <div className="register-footer">
          <span>18—21 FEBRUARY 2027</span>
          <span>SRM KTR · CHENNAI</span>
          <strong>#LiveTheChange</strong>
        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="milan-footer">

        <div className="footer-main">

          <div className="footer-brand">

            <img
              src="/assets/milan-logo.png"
              alt="MILAN 2027"
            />

            <h2>
              SEE YOU
              <br />
              <i>AT MILAN.</i>
            </h2>

            <p>
              SRM Institute of Science &amp; Technology
              <br />
              Directorate of Student Affairs
            </p>

          </div>

          <div className="footer-links">

            <div>
              <span>EXPLORE</span>

              <a href="#events">Events</a>
              <a href="#shows">Pro Shows</a>
              <a href="#schedule">Schedule</a>
              <a href="#gallery">Gallery</a>
              <a href="#register">Register</a>
            </div>

            <div>
              <span>FOLLOW</span>

              <a
                href="https://www.instagram.com/srmist_milan/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.instagram.com/srmist_dsa/"
                target="_blank"
                rel="noreferrer"
              >
                SRM DSA
              </a>
            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <span>© 2027 MILAN · SRM KTR</span>

          <strong>#LiveTheChange</strong>

          <span>18—21 FEBRUARY 2027</span>

        </div>

      </footer>

      {/* ================= CATEGORY EXPERIENCE ================= */}
      {/* ================= GALLERY VIEWER ================= */}

{selectedGalleryImage && (
  <motion.div
    className="gallery-viewer"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={() => setSelectedGalleryImage(null)}
  >
    <button
      className="gallery-viewer-close"
      onClick={() => setSelectedGalleryImage(null)}
      aria-label="Close gallery"
    >
      <X size={26} />
    </button>

    <div
      className="gallery-viewer-content"
      onClick={(event) => event.stopPropagation()}
    >
      <img
        src={selectedGalleryImage.src}
        alt={selectedGalleryImage.title}
      />

      <div className="gallery-viewer-caption">
        <span>MILAN 2026 ARCHIVE</span>
        <strong>{selectedGalleryImage.title}</strong>
      </div>
    </div>
  </motion.div>
)}

      {selectedCategory && selectedDetails && (

        <motion.div
          className="category-experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <button
            className="experience-close"
            onClick={() => setSelectedCategory(null)}
            aria-label="Close category experience"
          >
            ×
            <span>BACK</span>
          </button>

          <div className="experience-number">
            MILAN / {selectedCategory.number}
          </div>

          <motion.div
            className="experience-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >

            <p className="experience-eyebrow">
              MILAN 2027 · EXPLORE
            </p>

            <h2>
              {selectedCategory.title}
            </h2>

            <p className="experience-tagline">
              {selectedDetails.tagline}
            </p>

            <p className="experience-description">
              {selectedDetails.description}
            </p>

            <div className="experience-events">

              <span>EVENTS</span>

              {selectedDetails.events.map((event, index) => (

                <div key={event}>

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  <strong>
                    {event}
                  </strong>

                </div>

              ))}

            </div>

          </motion.div>

          <motion.div
            className="experience-media"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >

            <img
              src={selectedCategory.image}
              alt={selectedCategory.title + " at MILAN"}
            />

            <div className="experience-media-overlay">
              <span>2026 ARCHIVE</span>
              <strong>MILAN</strong>
            </div>

          </motion.div>

        </motion.div>

      )}

    </main>
  );
}

export default App;