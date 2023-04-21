import Skills from '../components/Skills'
import Experiences from '../components/Experiences'
const About = () => {
  return (
    <div>
      <div className="profile-banner">
        <img
          className="profile-image"
          src="https://avatars.githubusercontent.com/u/107935748?v=4"
          alt="profile"
        />
        <p className="profile-description">
          From self-taught software engineer to General Assembly graduate, I
          have found my calling in a fulfilling career where my problem-solving
          and creative thinking skills are utilized every day. My expertise lies
          in full-stack web development, with a focus on projects that drive
          positive change. My development philosophy prioritizes testing with a
          mobile-first approach for frontend applications, while personal
          projects keep me up-to-date and eager to learn.
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
