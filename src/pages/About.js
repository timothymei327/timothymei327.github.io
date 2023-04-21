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
  SiHeroku,
  SiNodedotjs,
  SiTailwindcss
} from 'react-icons/si'

import { FaVuejs, FaGithub } from 'react-icons/fa'
import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
const About = () => {
  const linkToNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      <div className="profile-banner">
        <img
          className="profile-image"
          src="https://avatars.githubusercontent.com/u/107935748?v=4"
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
        <Skills />
        <Experiences />
      </main>
    </div>
  )
}

export default About
