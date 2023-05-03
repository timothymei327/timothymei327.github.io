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
  SiImgur,
  SiNodedotjs,
  SiTailwindcss
} from 'react-icons/si'

import { FaNode } from 'react-icons/fa'

const Projects = () => {
  const linkToNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="projects-container">
      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/Uw68BKq.png"
          alt="windbnb-thumbnail"
        />
        <h3>Windbnb</h3>
        <div className="icons">
          <div class="icon">
            <SiMongodb size={20} />
            <span class="icontext">MongoDB</span>
          </div>
          <div class="icon">
            <SiExpress />
            <span class="icontext">ExpressJS</span>
          </div>
          <div class="icon">
            <SiReact size={20} />
            <span class="icontext">React</span>
          </div>
          <div class="icon">
            <SiNodedotjs size={20} />
            <span class="icontext">NodeJS</span>
          </div>
          <div class="icon">
            <SiTailwindcss size={20} />
            <span class="icontext">TailwindCSS</span>
          </div>
        </div>
        <p className="description">
          Discover Windbnb, the affordable and user-friendly Airbnb clone,
          offering a diverse range of unique accommodations around the world!
        </p>
        <button
          onClick={() =>
            linkToNewTab('https://github.com/timothymei327/windbnb')
          }
        >
          Github
        </button>
      </div>

      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/VMC9SqI.png"
          alt="unmrked-thumbnail"
        />
        <h3>unmrkd.</h3>
        <div className="icons">
          <div class="icon">
            <SiJavascript />
            <span class="icontext">Javascript</span>
          </div>
          <div class="icon">
            <SiPython />
            <span class="icontext">Python</span>
          </div>
          <div class="icon">
            <SiReact />
            <span class="icontext">React</span>
          </div>
          <div class="icon">
            <SiDjango />
            <span class="icontext">Django</span>
          </div>
          <div class="icon">
            <SiImgur />
            <span class="icontext">Imgur API</span>
          </div>
        </div>
        <p className="description">
          A network of communities where users are able to create forums for
          their topic of interest, post, and comment all while staying
          anonymous.
        </p>
        <button
          onClick={() =>
            linkToNewTab('https://github.com/timothymei327/unmrkd')
          }
        >
          Github
        </button>
      </div>

      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/XqPLkJc.png"
          alt="kelp-thumbnail"
        />
        <h3>Kelp</h3>
        <div className="icons">
          <div class="icon">
            <SiJavascript />
            <span class="icontext">Javascript</span>
          </div>
          <div class="icon">
            <SiReact size={19} />
            <span class="icontext">React</span>
          </div>
          <div class="icon">
            <SiPostgresql size={19} />
            <span class="icontext">PostgreSQL</span>
          </div>
          <div class="icon">
            <SiExpress size={20} />
            <span class="icontext">ExpressJS</span>
          </div>
          <div class="icon">
            <FaNode size={30} />
            <span class="icontext">NodeJS</span>
          </div>
        </div>
        <p className="description">
          Kelp is an online surf-spot review site in which surfers share their
          experiences, helping others make informed decisions about which
          surf-spots to shred!
        </p>
        <button
          onClick={() =>
            linkToNewTab('https://github.com/timothymei327/TextOne')
          }
        >
          Github
        </button>
      </div>

      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/2PtSDqR.png"
          alt="parentsarehuman-thumbnail"
        />
        <h3>Parents Are Human</h3>
        <div className="icons">
          <div class="icon">
            <SiJavascript />
            <span class="icontext">Javascript</span>
          </div>
          <div class="icon">
            <SiReact size={19} />
            <span class="icontext">React</span>
          </div>
          <div class="icon">
            <SiCss3 />
            <span class="icontext">CSS</span>
          </div>
        </div>
        <p className="description">
          A web application that turns the card game 'Parents Are Human' into a
          playable digital format!
        </p>
        <button
          onClick={() => linkToNewTab('https://parentsarehuman.surge.sh/')}
        >
          Demo
        </button>
        <button
          onClick={() =>
            linkToNewTab('https://github.com/timothymei327/parents_are_human')
          }
        >
          Github
        </button>
      </div>

      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/RVCd6yt.png"
          alt="tictactoe-thumbnail"
        />
        <h3>Tic-Tac-Toe</h3>
        <div className="icons">
          <div class="icon">
            <SiHtml5 />
            <span class="icontext">HTML</span>
          </div>
          <div class="icon">
            <SiCss3 />
            <span class="icontext">CSS</span>
          </div>
          <div class="icon">
            <SiJavascript />
            <span class="icontext">Javascript</span>
          </div>
        </div>
        <p className="description">
          A simple iteration of the classic game of tic-tac-toe which allows you
          to play against a friend on the same device or against the program
          itself!
        </p>
        <button
          onClick={() =>
            linkToNewTab('https://tictactoe-timothy.surge.sh/index.html')
          }
        >
          Demo
        </button>
        <button
          onClick={() =>
            linkToNewTab('https://github.com/timothymei327/Tic-Tac-Toe')
          }
        >
          Github
        </button>
      </div>

      <div className="projects-card">
        <img
          className="thumbnails"
          src="https://i.imgur.com/Le9LUEy.png"
          alt="firecobra-thumbnail"
        />
        <h3>FireCobra</h3>
        <div className="icons">
          <div class="icon">
            <SiHtml5 />
            <span class="icontext">HTML</span>
          </div>
          <div class="icon">
            <SiCss3 />
            <span class="icontext">CSS</span>
          </div>
          <div class="icon">
            <SiJavascript />
            <span class="icontext">Javascript</span>
          </div>{' '}
        </div>
        <p className="description">
          A rendition of the classic game of snake where the player is able to
          collect “dots” and grow the snake until the board is entirely filled.
        </p>
        <button
          onClick={() => linkToNewTab('https://fire-cobra.surge.sh/index.html')}
        >
          Demo
        </button>
        <button
          onClick={() =>
            linkToNewTab(
              'https://github.com/timothymei327/Browser-Based-Snake-Game'
            )
          }
        >
          Github
        </button>
      </div>
    </div>
  )
}

export default Projects
