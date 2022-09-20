import { SiLinkedin } from 'react-icons/si'

const Contact = () => {
  const linkToNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className="contact">
      <h1>Want to work together?</h1>
      <h2>Let's get in touch!</h2>
      <p>timothymei3270@gmail.com</p>
      <div className="contact-buttons">
        <button
          onClick={() =>
            linkToNewTab('https://www.linkedin.com/in/timothymei/')
          }
        >
          LinkedIn
        </button>
        <button
          onClick={() => linkToNewTab('https://github.com/timothymei327')}
        >
          Github
        </button>
        <button
          onClick={() =>
            linkToNewTab(
              'https://docs.google.com/document/d/16GBw6esMEYayoHW_PRgflrFVEtd1abrOdgAhBCxA-5I/edit?usp=sharing'
            )
          }
        >
          Resumé
        </button>
      </div>
    </div>
  )
}

export default Contact
