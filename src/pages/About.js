import {
  SiJavascript,
  SiPython,
  SiReact,
  SiDjango,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiHeroku
} from 'react-icons/si'

import { FaNode, FaVuejs, FaGithub } from 'react-icons/fa'
const About = () => {
  const linkToNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      <div className="profile-banner">
        <img
          className="profile-image"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQF5w7lEeeKGfw/profile-displayphoto-shrink_800_800/0/1661888129695?e=1669248000&v=beta&t=h2z9EagncNXQUb5-AqxnN2V70MmfVhzw2U8jxwEJBa0"
          alt="profile-image"
        />
        <p className="profile-description">
          Hey there! I am a <b>Software Engineer</b> with a diverse background
          ranging from developing interactive browser-based programs to
          pioneering efforts within the niche community of NYC / four-wall
          handball. A natural leader with a passionate inclination towards
          critical thinking, I strive to learn and build creative but effective
          applications to bridge the gap between functionality and innovation.
        </p>
      </div>
      <main>
        <div className="icons skills">
          {/* <h2>Skills</h2>
          <br /> */}
          <div class="icon">
            <SiHtml5 size={19} />
            <span class="icontext">HTML</span>
          </div>
          <div class="icon">
            <SiCss3 size={19} />
            <span class="icontext">CSS</span>
          </div>
          <div class="icon">
            <SiJavascript size={19} />
            <span class="icontext">Javascript</span>
          </div>
          <div class="icon">
            <SiPython size={19} />
            <span class="icontext">Python</span>
          </div>
          <div class="icon">
            <SiReact size={22} />
            <span class="icontext">React</span>
          </div>
          <div class="icon">
            <FaVuejs size={25} />
            <span class="icontext">Vue</span>
          </div>
          <div class="icon">
            <SiMongodb size={25} />
            <span class="icontext">MongoDB</span>
          </div>
          <div class="icon">
            <SiPostgresql size={22} />
            <span class="icontext">PostgreSQL</span>
          </div>
          <div class="icon">
            <SiExpress size={25} />
            <span class="icontext">ExpressJS</span>
          </div>
          <div class="icon">
            <FaNode size={35} />
            <span class="icontext">NodeJS</span>
          </div>
          <div class="icon">
            <SiDjango size={19} />
            <span class="icontext">Django</span>
          </div>
          <div class="icon">
            <SiHeroku size={19} />
            <span class="icontext">Heroku</span>
          </div>
          <div class="icon">
            <FaGithub size={19} />
            <span class="icontext">Git, Github, Version Control</span>
          </div>
        </div>
        <div className="bottom-banner">
          <div className="current">
            <h3>Currently Searching For:</h3>
            <ul>
              <li>
                Software Engineer roles that challenge me to learn and grow as a
                developer!
              </li>
            </ul>
          </div>
          <div className="resources">
            <h3>Resources I've Used:</h3>
            <ul>
              <li
                className="reference"
                onClick={() => linkToNewTab('https://www.freecodecamp.org/')}
              >
                freeCodeCamp
              </li>
              <li
                className="reference"
                onClick={() => linkToNewTab('https://www.theodinproject.com/')}
              >
                The Odin Project
              </li>
              <li
                className="reference"
                onClick={() => linkToNewTab('https://teachyourselfcs.com/')}
              >
                Teach Yourself Computer Science
              </li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="coding"
            />
          </div>
          <div className="interests">
            <h3>Interests!</h3>
            <h4>Handball:</h4>
            <ul>
              <li
                className="reference"
                onClick={() =>
                  linkToNewTab('https://www.youtube.com/watch?v=rtGRUO0VdcA')
                }
              >
                Four-Wall
              </li>
              <li
                className="reference"
                onClick={() =>
                  linkToNewTab('https://www.youtube.com/watch?v=0Ak0ew52hM0')
                }
              >
                NYC One-Wall
              </li>
            </ul>
            <h4>Gaming:</h4>
            <ul>
              <li
                className="reference"
                onClick={() =>
                  linkToNewTab('https://www.ea.com/games/apex-legends')
                }
              >
                Apex Legends
              </li>
              <li
                className="reference"
                onClick={() => linkToNewTab('https://www.riskofrain.com/')}
              >
                Risk of Rain 2
              </li>
              <li
                className="reference"
                onClick={() =>
                  linkToNewTab(
                    'https://www.google.com/logos/fnbx/solitaire/standalone.html'
                  )
                }
              >
                Solitaire
              </li>
            </ul>
            <h4>Cars:</h4>
            <ul>
              <li>Electric Vehicles</li>
              <li>Manual / Stick Shift</li>
            </ul>
            <img
              src="https://static01.nyt.com/images/2008/06/28/nyregion/28handball02_650.jpg?quality=75&auto=webp&disable=upscale"
              alt="handball"
            />
            <img
              src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg"
              alt="apex-legends"
            />
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD"
              alt="electric-car"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
