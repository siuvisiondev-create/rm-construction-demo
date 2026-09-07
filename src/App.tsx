import "./styles.css";

const heroImage =
  "https://images.squarespace-cdn.com/content/v1/6823a97ff64223136b322469/0d891bd8-6baf-4679-9721-9516cf5e8102/Gazebo%2BConstruction%2BMeeting%2B-%2BOct.%2B02%2C%2B2025_Page_2.jpg";
const taosImage =
  "https://images.squarespace-cdn.com/content/v1/6823a97ff64223136b322469/1d624818-20d7-4831-9139-8ff7f3311c0f/IMG_2819.jpg";
const evImage =
  "https://www.losalamosnm.us/files/sharedassets/public/v/1/departments/county-manager/images/projects/munibuildingevchargers.png?w=1080";

const capabilities = [
  {
    number: "01",
    title: "General Contracting",
    copy: "Field leadership, trade coordination and accountable delivery from mobilization through closeout.",
  },
  {
    number: "02",
    title: "Facility Construction",
    copy: "Renovations and infrastructure improvements for public buildings that need to stay useful, safe and operational.",
  },
  {
    number: "03",
    title: "Design-Build + JOC",
    copy: "A practical path from scope and pricing to construction for on-call and competitively procured work.",
  },
  {
    number: "04",
    title: "Public Infrastructure",
    copy: "Site, concrete, electrical and safety coordination for civic spaces and emerging infrastructure.",
  },
] as const;

type StoryStep = {
  label: "Challenge" | "Scope" | "Execution" | "Result";
  copy: string;
};

function ProjectStory({
  title,
  steps,
}: {
  title: string;
  steps: readonly StoryStep[];
}) {
  return (
    <div className="rm-project-story" aria-label={`${title} project delivery`}>
      {steps.map((step) => (
        <div key={step.label}>
          <strong>{step.label}</strong>
          <p>{step.copy}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <main className="rm-site">
      <div className="rm-concept-bar" role="note">
        <span>Private concept</span>
        <p>Prepared exclusively for R &amp; M Construction, LLC</p>
        <b>Based on publicly available project information.</b>
      </div>
      <header className="rm-nav">
        <a className="rm-mark" href="#top" aria-label="R and M Construction home">
          <span>R&amp;M</span>
          <small>Construction, LLC</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#services">Capabilities</a>
          <a href="#company">Company</a>
        </nav>
        <a className="rm-nav-cta" href="mailto:Robert@rmconstructionnm.com">
          Invite us to bid <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="rm-hero" id="top">
        <img
          className="rm-hero-image"
          src={heroImage}
          alt="Taos Plaza gazebo renovation in progress"
        />
        <div className="rm-hero-wash" />
        <div className="rm-coordinate" aria-hidden="true">
          36.4072° N&nbsp;&nbsp; 105.5734° W
        </div>
        <div className="rm-hero-copy">
          <p className="rm-eyebrow">
            <span>01</span> Northern New Mexico / Public + Commercial
          </p>
          <h1>
            Built for
            <br />
            <em>public purpose.</em>
          </h1>
          <div className="rm-hero-bottom">
            <p>
              General contracting, facility construction and complex renovations
              delivered with local knowledge and field-proven coordination.
            </p>
            <a href="#work">
              Explore selected work
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <aside className="rm-project-stamp" aria-label="Featured project details">
          <small>On site / 2025</small>
          <strong>Taos Plaza</strong>
          <span>Historic civic renovation</span>
          <dl>
            <div>
              <dt>Scope</dt>
              <dd>Structure + Access</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Public Record</dd>
            </div>
          </dl>
        </aside>
        <p className="rm-source-note">
          Concept preview · Public project imagery: Taos MainStreet
        </p>
      </section>

      <section className="rm-proof" aria-label="Company credentials">
        <p>Field notes / RMC-001</p>
        <dl>
          <div>
            <dt>Contractor license</dt>
            <dd>367912</dd>
          </div>
          <div>
            <dt>Primary region</dt>
            <dd>Northern New Mexico</dd>
          </div>
          <div>
            <dt>Project focus</dt>
            <dd>Public / Commercial</dd>
          </div>
          <div>
            <dt>Direct contact</dt>
            <dd>(505) 927-2027</dd>
          </div>
        </dl>
      </section>

      <section className="rm-manifesto" id="company">
        <div className="rm-section-index">
          <span>02</span>
          <p>Who we build for</p>
        </div>
        <div className="rm-manifesto-copy">
          <p className="rm-kicker">Built here. Accountable here.</p>
          <h2>
            Complex public work,
            <br />
            <em>made buildable.</em>
          </h2>
          <div className="rm-manifesto-detail">
            <p>
              R &amp; M Construction brings local field knowledge to civic facilities,
              renovations and infrastructure across Northern New Mexico.
            </p>
            <p>
              One team coordinates the people, materials and sequence required to
              move a public project from an approved scope to a reliable result.
            </p>
          </div>
        </div>
        <aside className="rm-record-card">
          <span>Verified public record</span>
          <strong>Excellent + timely service</strong>
          <p>
            Los Alamos County cited R &amp; M&apos;s performance on previous and
            ongoing construction projects when recommending the Municipal Building
            EV charging task order.
          </p>
          <a
            href="https://losalamos.legistar.com/LegislationDetail.aspx?FullText=1&GUID=AFC8BD2B-0BC8-4CFC-A145-85DB9D2E5183&ID=7454148&Options=&Search="
            target="_blank"
            rel="noreferrer"
          >
            View county record <b aria-hidden="true">↗</b>
          </a>
        </aside>
      </section>

      <section className="rm-value" aria-labelledby="rm-value-title">
        <header className="rm-value-head">
          <div className="rm-section-index">
            <span>03</span>
            <p>A company-controlled record</p>
          </div>
          <h2 id="rm-value-title">
            Your work already speaks for itself.
            <br />
            <em>Make it easier to see.</em>
          </h2>
          <p>
            One clear source of truth can carry R &amp; M&apos;s public record from a
            referral or bid invitation into a faster, more confident review.
          </p>
        </header>
        <div className="rm-value-list">
          <article>
            <span>01</span>
            <h3>Public track record</h3>
            <p>
              Bring project history now spread across county records, council
              packets and construction updates into one credible record owned and
              maintained by R &amp; M.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Bid readiness</h3>
            <p>
              Give agencies, architects and commercial partners one place to review
              capabilities, relevant work, service region and direct contact details
              after an RFQ, RFP, invite to bid or referral.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Professional verification</h3>
            <p>
              When someone encounters R &amp; M through procurement documents,
              project partners or search, they can verify the company through a
              formal source R &amp; M controls.
            </p>
          </article>
        </div>
      </section>

      <section className="rm-work" id="work">
        <header className="rm-section-head">
          <div className="rm-section-index light">
            <span>04</span>
            <p>Selected public work</p>
          </div>
          <h2>Proof is in the work.</h2>
          <p>
            A working portfolio assembled from public project records. Original
            company photography can replace the reference imagery at launch.
          </p>
        </header>

        <article className="rm-project rm-project-featured">
          <div className="rm-project-media">
            <img src={taosImage} alt="Construction underway at the Taos Plaza gazebo" />
            <span>Public project imagery / Taos MainStreet</span>
          </div>
          <div className="rm-project-copy">
            <p className="rm-project-number">01 / Civic renovation</p>
            <h3>Taos Plaza</h3>
            <p className="rm-project-lede">
              Modernizing a historic gathering place while improving access,
              safety and long-term public use.
            </p>
            <ProjectStory
              title="Taos Plaza"
              steps={[
                {
                  label: "Challenge",
                  copy: "Renovate a historic public gathering place while addressing access, grade transitions, work sequencing and site safety.",
                },
                {
                  label: "Scope",
                  copy: "Old-concrete removal, electrical tracing, drainage clearing, rebar and formwork, plus new ramps and improved standing areas.",
                },
                {
                  label: "Execution",
                  copy: "Public updates document demolition → drainage and electrical preparation → rebar and form-building → construction of access improvements.",
                },
                {
                  label: "Result",
                  copy: "Work advanced from demolition into build mode, with public updates reporting visible progress toward a safer and more inclusive Plaza.",
                },
              ]}
            />
            <dl>
              <div>
                <dt>Location</dt>
                <dd>Taos, New Mexico</dd>
              </div>
              <div>
                <dt>Work</dt>
                <dd>Concrete, electrical, ADA access + structure</dd>
              </div>
              <div>
                <dt>Phase</dt>
                <dd>II–III / 2025–2026</dd>
              </div>
            </dl>
            <a href="https://www.taosmainstreet.org/press" target="_blank" rel="noreferrer">
              Read construction updates <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <div className="rm-project-grid">
          <article className="rm-project rm-project-dark">
            <div className="rm-project-blueprint" aria-hidden="true">
              <span>20,000 LB</span>
              <i>275T</i>
              <b>CHILLER / LIFT PLAN</b>
            </div>
            <div className="rm-project-copy">
              <p className="rm-project-number">02 / Critical equipment</p>
              <h3>Ice Rink Chiller</h3>
              <p className="rm-project-lede">
                Design-build delivery of a long-term industrial refrigeration
                replacement and mechanical-room upgrades.
              </p>
              <ProjectStory
                title="Los Alamos Ice Rink Chiller"
                steps={[
                  {
                    label: "Challenge",
                    copy: "Replace a 21-year-old refrigeration plant affected by recurring failures, discontinued parts and seasonal reliability risk.",
                  },
                  {
                    label: "Scope",
                    copy: "Custom ammonia refrigeration system, mechanical-room code upgrades, labor, materials, equipment, testing, startup and one year of maintenance.",
                  },
                  {
                    label: "Execution",
                    copy: "County records define a staged path: design → long-lead procurement → production and quality control → delivery, installation and startup.",
                  },
                  {
                    label: "Result",
                    copy: "A responsive design-build agreement and delivery plan intended to restore dependable ice-making for the 2025–2026 season.",
                  },
                ]}
              />
              <dl>
                <div>
                  <dt>Location</dt>
                  <dd>Los Alamos, NM</dd>
                </div>
                <div>
                  <dt>Agreement ceiling</dt>
                  <dd>$2.708M NTE + GRT</dd>
                </div>
              </dl>
              <a
                href="https://losalamos.legistar.com/LegislationDetail.aspx?GUID=280D19B1-79DC-4CF3-B59C-E6380BE30C62&ID=6816896&Options=&Search="
                target="_blank"
                rel="noreferrer"
              >
                View public record <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="rm-project rm-project-ev">
            <div className="rm-project-media">
              <img src={evImage} alt="Municipal Building EV charging station site plan" />
              <span>Public project plan / Los Alamos County</span>
            </div>
            <div className="rm-project-copy">
              <p className="rm-project-number">03 / New infrastructure</p>
              <h3>Municipal EV</h3>
              <p className="rm-project-lede">
                Materials, labor and construction management for six municipal
                Level 2 charging stations.
              </p>
              <ProjectStory
                title="Municipal EV Charging Infrastructure"
                steps={[
                  {
                    label: "Challenge",
                    copy: "Add public and fleet charging at an active municipal site while addressing accessibility, vehicle protection and emergency shutoff requirements.",
                  },
                  {
                    label: "Scope",
                    copy: "R & M's approved task order covers the materials, labor and management required to construct six charging stations.",
                  },
                  {
                    label: "Execution",
                    copy: "County teams completed the site, concrete and power design; R & M's proposal was reviewed under the on-call agreement and selected for construction delivery.",
                  },
                  {
                    label: "Result",
                    copy: "Planned capacity is twelve charging spaces served by six dual-port chargers for public and County fleet use.",
                  },
                ]}
              />
              <dl>
                <div>
                  <dt>Capacity</dt>
                  <dd>12 charging spaces</dd>
                </div>
                <div>
                  <dt>Task order</dt>
                  <dd>$398,861 + GRT</dd>
                </div>
              </dl>
              <a
                href="https://losalamos.legistar.com/LegislationDetail.aspx?FullText=1&GUID=AFC8BD2B-0BC8-4CFC-A145-85DB9D2E5183&ID=7454148&Options=&Search="
                target="_blank"
                rel="noreferrer"
              >
                View public record <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="rm-capabilities" id="services">
        <header>
          <div className="rm-section-index">
            <span>05</span>
            <p>How we deliver</p>
          </div>
          <h2>One accountable path from scope to closeout.</h2>
        </header>
        <div className="rm-capability-list">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <b aria-hidden="true">+</b>
            </article>
          ))}
        </div>
        <div className="rm-delivery-line" aria-label="Project delivery process">
          <span>Plan</span>
          <i />
          <span>Coordinate</span>
          <i />
          <span>Build</span>
          <i />
          <span>Deliver</span>
        </div>
      </section>

      <section className="rm-region">
        <div className="rm-region-field" aria-hidden="true">
          <div className="rm-route route-a"><i /><span>Alcalde / HQ</span></div>
          <div className="rm-route route-b"><i /><span>Los Alamos</span></div>
          <div className="rm-route route-c"><i /><span>Taos</span></div>
          <div className="rm-route route-d"><i /><span>Santa Fe</span></div>
          <b>NM / 01</b>
        </div>
        <div className="rm-region-copy">
          <p className="rm-kicker">Local knowledge / public-scale capability</p>
          <h2>Northern New Mexico is not just a service area. It&apos;s home ground.</h2>
          <p>
            R &amp; M works across rural communities and public facilities where
            local coordination, dependable trade relationships and responsive
            field leadership matter.
          </p>
          <ul>
            <li>Rio Arriba County</li>
            <li>Los Alamos County</li>
            <li>Taos County</li>
            <li>Santa Fe region</li>
          </ul>
        </div>
      </section>

      <section className="rm-contact">
        <p>Have a scope, solicitation or facility challenge?</p>
        <h2>Bring us in early.</h2>
        <div className="rm-contact-actions">
          <a href="mailto:Robert@rmconstructionnm.com">
            <span>01</span>
            <strong>Invite R&amp;M to bid</strong>
            <b aria-hidden="true">↗</b>
          </a>
          <a href="tel:+15059272027">
            <span>02</span>
            <strong>(505) 927-2027</strong>
            <b aria-hidden="true">↗</b>
          </a>
        </div>
        <footer>
          <div className="rm-mark">
            <span>R&amp;M</span>
            <small>Construction, LLC</small>
          </div>
          <p>PO Box 1026 · Alcalde, New Mexico 87511</p>
          <p>Not an official company website · Not affiliated with or endorsed by R &amp; M Construction, LLC.</p>
        </footer>
      </section>

      <aside className="rm-concept-next" aria-label="Private concept next step">
        <div>
          <p>Private concept / prepared for Robert</p>
          <h2>Like this direction?</h2>
        </div>
        <p>
          This private concept was created using publicly available R &amp; M project
          information. It can become an official, company-controlled website using
          R &amp; M&apos;s original project photography, logo, certifications and current
          company details.
        </p>
        <a href="mailto:Robert@rmconstructionnm.com?subject=Continue%20the%20R%20%26%20M%20website%20concept">
          Continue this concept <span aria-hidden="true">↗</span>
        </a>
        <small>Not an official company website.</small>
      </aside>
    </main>
  );
}

