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
              'https://docs.google.com/document/d/1jCovsmwwXTefPizRRYheQ8tiZ1O0q0VV/edit?usp=sharing&ouid=105188354125357967659&rtpof=true&sd=true'
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
