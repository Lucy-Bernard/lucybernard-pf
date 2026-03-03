import { Link } from "react-router";

export default function About() {
  return (
    <>
      {/* HERO */}
      <header className="about-hero">
        <div>
          <div className="about-hero-eyebrow">
            <div className="about-eyebrow-line"></div>
            <div className="about-eyebrow-text">A bit about me</div>
          </div>
          <h1 className="about-hero-title">
            Lucy
            <br />
            <em>Bernard</em>
          </h1>
          <p className="about-hero-intro">
            I'm a Computer Science graduate from DePaul University, currently
            living in Chicago with my fiancé Alan and our orange cat Ollie, who
            pays no rent and has zero respect for us.
          </p>
          <div className="about-hero-chips">
            <span className="about-chip about-chip-pink">
              <i className="fa-solid fa-laptop"></i> Frontend Developer
            </span>
            <span className="about-chip about-chip-green">
              <i className="fa-solid fa-palette"></i> UI/UX Enthusiast
            </span>
            <span className="about-chip about-chip-warm">
              <i className="fa-brands fa-react"></i>React Appreciator
            </span>
            <span className="about-chip about-chip-pink">
              <i class="fa-solid fa-book-open-reader"></i> Always Learning
            </span>
          </div>
        </div>
        <div className="about-hero-image-wrap">
          <img
            src="src/assets/lucyOllieAlan-removebg.png"
            alt="Lucy Alan and Ollie Drawing"
            className="about-hero-img"
          />
          <div className="about-hero-img-caption">Chicago, IL</div>
        </div>
      </header>

      {/* STORY */}
      <section className="about-story-band">
        <div className="about-section">
          <div className="about-section-eyebrow">Where you'll find me</div>
          <h2 className="about-section-title">
            The Non- <em>Technical Stuff</em>
          </h2>
          <div className="about-story-grid">
            <div className="about-story-text">
              <p>
                Alan and I spend our time watching movies, traveling, doing
                puzzles, and bonding over our shared grievances about various
                situations. It's a good life.
              </p>
              <p>
                Outside of work, I dance — a lot. You'll find me at studios like
                The Puzzle Box, Hindie Media Studios, Dance Forever, and
                Visceral Dance Center on any given week. When I'm not dancing,
                I'm either spending an unreasonable number of hours tweaking CSS
                or playing video games with friends.
              </p>
            </div>
            <div className="about-story-img-block ">
              <img
                src="src/assets/danceFriends.jpg"
                alt="Working together"
                className="about-story-img"
              />
              <div className="about-img-caption">Dance Friends</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFE CARDS */}
      <section className="about-life-band">
        <div className="about-section">
          <div className="about-section-eyebrow">Other Things I Do</div>
          <h2 className="about-section-title">
            Hobbies <em></em>
          </h2>
          <div className="about-life-grid">
            <div className="about-life-card">
              <span className="about-life-icon">
                <i className="fa-solid fa-music"></i>
              </span>
              <h3 className="about-life-card-title">Dance</h3>
              <p className="about-life-card-body">
                I've been dancing for about 2 years now. I love everything about
                it and it also doubles as a way to get some physical activity
                in!
              </p>
              <div className="about-life-card-tags">
                <span className="about-life-tag">Open Style</span>
                <span className="about-life-tag">Hip Hop</span>
                <span className="about-life-tag">Jazz</span>
              </div>
            </div>
            <div className="about-life-card">
              <span className="about-life-icon">
                <i className="fa-solid fa-gamepad"></i>
              </span>
              <h3 className="about-life-card-title">Video Games</h3>
              <p className="about-life-card-body">
                I play all kinds of genres when it comes to video games. I've
                played shooters, rts games, mmos, farming, etc. I would say my
                favorite genre right now is action rpg.
              </p>
              <div className="about-life-card-tags">
                <span className="about-life-tag">FPS</span>
                <span className="about-life-tag">ActionRPGs</span>
                <span className="about-life-tag">Puzzles</span>
              </div>
            </div>
            <div className="about-life-card">
              <span className="about-life-icon">
                <i className="fa-solid fa-pen-nib"></i>
              </span>
              <h3 className="about-life-card-title">Stationery</h3>
              <p className="about-life-card-body">
                I have developed a concerning obsession with stationery. Planner
                and Journal stuff specifically. The amount of money I've spent
                on stickers should be studied.
              </p>
              <div className="about-life-card-tags">
                <span className="about-life-tag">Stickers</span>
                <span className="about-life-tag">Tombows</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OLLIE SECTION */}
      <section className="about-ollie-band">
        <div className="about-section">
          <div className="about-section-eyebrow">Dr. Wanfungle | Oliver Xu</div>
          <h2 className="about-section-title">
            Project <em>Manager</em>
          </h2>
          <div className="about-ollie-layout">
            <div className="about-ollie-img-wrap">
              <img
                src="src/assets/ollie.png"
                alt="Ollie the cat"
                className="about-ollie-img "
              />
              <div className="about-ollie-badge">
                CEO of the house <i className="text-xl fa-solid fa-cat"></i>
              </div>
            </div>
            <div className="about-ollie-content">
              <h3>
                This is <em>Ollie</em>
              </h3>
              <p>
                Ollie is my 5-year-old creamsicle long-hair cat and unofficial
                project manager. He provides moral support and spends 80% of his
                day on top of my keyboard. This is so he can get a better view
                of what I'm working on, so as to guide me and provide proper
                suggestions.
              </p>
              <p>
                He's taught me patience and the importance of work-life balance.
                Sleeping for 18 hours a day is not only a necessity, but can
                often result into more productivity and new interesting ideas.
              </p>
              <div className="about-ollie-stats">
                <div className="about-ollie-stat">
                  <div className="about-ollie-stat-val">5</div>
                  <div className="about-ollie-stat-label">Years Old</div>
                </div>
                <div className="about-ollie-stat">
                  <div className="about-ollie-stat-val">18</div>
                  <div className="about-ollie-stat-label">Hours Sleep</div>
                </div>
                <div className="about-ollie-stat">
                  <div className="about-ollie-stat-val">100%</div>
                  <div className="about-ollie-stat-label">Spoiled</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section className="about-games-band">
        <div className="about-section">
          <div className="about-section-eyebrow">Current favorites</div>
          <h2 className="about-section-title">
            Games I'm <em>playing</em>
          </h2>
          <div className="about-games-grid">
            <div className="about-game-card">
              <span className="about-game-icon">
                <i className="fa-solid fa-dragon"></i>
              </span>
              <div className="about-game-title">Monster Hunter Wilds</div>
              <div className="about-game-genre">Action RPG</div>
            </div>
            <div className="about-game-card">
              <span className="about-game-icon">
                <i class="fa-solid fa-wand-sparkles"></i>
              </span>
              <div className="about-game-title">FFXIV</div>
              <div className="about-game-genre">MMORPG</div>
            </div>
            <div className="about-game-card">
              <span className="about-game-icon">
                <i className="fa-solid fa-seedling"></i>
              </span>
              <div className="about-game-title">Coral Island</div>
              <div className="about-game-genre">Farming Game</div>
            </div>
            <div className="about-game-card">
              <span className="about-game-icon">
                <i class="fa-solid fa-dungeon"></i>
              </span>
              <div className="about-game-title">Elden Ring</div>
              <div className="about-game-genre">SoulsLike</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-label">Open to new grad opportunities</div>
        <h2 className="about-cta-title">
          Let's build something
          <br />
          <em>together</em>
        </h2>
        <p className="about-cta-sub">
          I'm actively seeking full-time opportunities where I can contribute my
          skills and continue growing as a developer.
        </p>
        <div className="about-cta-buttons">
          <Link to="/contact" className="about-btn about-btn-primary">
            Get in Touch
          </Link>
          <Link to="/resume" className="about-btn about-btn-outline">
            View Resume
          </Link>
        </div>
      </section>
    </>
  );
}
