import "../styles/Skills.css"
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
  SiTailwindcss,
  SiRender, 
  SiVercel,
  SiVisualstudiocode,
  SiInsomnia,
  SiGooglechrome,
  SiApple,
  SiNpm
} from 'react-icons/si'

import { FaVuejs, FaGithub } from 'react-icons/fa'
import { GiWalrusHead } from 'react-icons/gi'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-row">
        <div className="skills-column">
          <h3>Frontend</h3>
          <ul>
          <li>
              <SiHtml5 size={22} />
              HTML
            </li>
            <li>
              <SiCss3 size={22} />
              CSS
            </li>
            <li>
              <SiJavascript size={22} />
              Javascript
            </li>
            <li>
              <SiReact size={22} />
              React
            </li>
            <li>
              <FaVuejs size={22} />
              Vue
            </li>
            <li>
              <SiTailwindcss size={22} />
              TailwindCSS
            </li>
          </ul>
        </div>
        <div className="skills-column">
          <h3>Backend</h3>
          <ul>
            <li>
              <SiPython size={22} />
              Python
            </li>
            <li>
              <SiDjango size={22} />
              Django
            </li>
            <li>
              <SiNodedotjs size={22} />
              Node
            </li>
            <li>
              <SiExpress size={22} />
              Express
            </li>
            <li>
              <SiPostgresql size={22} />
              PostgreSQL
            </li>
            <li>
              <SiMongodb size={22} />
              MongoDB
            </li>
          </ul>
        </div>
        <div className="skills-column">
          <h3>Deployment</h3>
          <ul>
            <li><SiHeroku size={22} />Heroku</li>
            <li><SiRender size={22} />Render</li>
            <li><SiVercel size={22} />Vercel</li>
            <li><GiWalrusHead size={22} />Surge</li>
          </ul>
        </div>
        <div className="skills-column">
          <h3>Tools</h3>
          <ul>
            <li><FaGithub size={22} />Git/Github</li>
            <li><SiVisualstudiocode size={22} />Visual Studio Code</li>
            <li><SiInsomnia size={22} />Insomnia</li>
            <li><SiGooglechrome size={22} />Chrome Developer Tools</li>
            <li><SiApple size={22} />MacOS</li>
            <li><SiNpm size={22} />npm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
