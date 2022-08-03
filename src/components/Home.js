import '../styles/App.css'
import eric from '../images/Eric.png'
import profPic from '../images/Profpic2.jpg'
import React, {Fragment, useEffect, useState} from 'react'

function Home() {
  const portfolioRef = React.createRef()
  const contactRef = React.createRef()
  const aboutRef = React.createRef()
  const headerRef = React.createRef()
  const [menu, setMenu] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [areLinks, setAreLinks] = useState(false)
  const hamburgerRef = React.createRef()
  const aboutMe = (
    <div className='about-me-div'>
      <p>
        I'm a composer and software engineer from Kalamazoo, MI with a Doctorate in Music from the University of Miami. My diverse musical experiences enable me to create bespoke scores that help deliver a creator's specific vision to their audience. I compose in a wide variety of styles and aim to produce memorable music that makes an emotional impact on its listeners.
      </p>
      <p>
        I’m looking for freelance opportunities to work with filmmakers and developers who want interactive or linear music for their project. I’m familiar with game audio middleware such as Fmod, and can provide music that responds to gameplay parameters. If you’re interested, please send me an email. I’m happy to create a short demo track for your project to see if my music is a good fit.
      </p>
    </div>
  )

  const onClickLink = (link) => {
    setMenu(false)
    if (link === 'portfolio') {
      const yOffset = 90
      const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset
      window.scrollTo({top: y, behavior: 'smooth'});
    } else if (link === 'about') {
      const yOffset = 90
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset
      window.scrollTo({top: y, behavior: 'smooth'});
    } else if (link === 'contact') {
      contactRef.current.scrollIntoView({behavior: 'smooth'})
    } else if (link === 'header') {
      headerRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  const middleLineClass = () => {
    // return isClicked ? (menu ? 'path' : 'path2') : 'default'
    return menu ? 'path' : 'path2'
  }

  useEffect(() => {
    if (isClicked && hamburgerRef) {
      setMenu(!menu)
    }
  }, [isClicked])

  console.log('middleLineClass', middleLineClass())

  const containerRef = React.createRef()

  const onClickHamburger = () => {
    setAreLinks(true)
    setMenu(!menu)
  }

  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src={eric} alt='Eric' />
          {/* <pre>Eric Bowman Music</pre> */}
        </div>
        <div className='links'>
          <span onClick={() => onClickLink('about')}>ABOUT</span>
          <span onClick={() => onClickLink('portfolio')}>PORTFOLIO</span>
          <span onClick={() => onClickLink('contact')}>CONTACT</span>
        </div>
        {areLinks &&
          <div className={menu ? 'hamburger-links slideDown' : 'hamburger-links slideUp'}>
            <span onClick={() => onClickLink('about')}>ABOUT</span>
            <span onClick={() => onClickLink('portfolio')}>PORTFOLIO</span>
            <span onClick={() => onClickLink('contact')}>CONTACT</span>
          </div>
        }
        <div class={menu ? 'container active' : "container"} onClick={onClickHamburger}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 200 200">
            <g stroke-width="6.5" stroke-linecap="round">
              <path
                d="M72 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                fill="none"
                stroke="#fff"
              />
              <path
                d="M72 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                fill="none"
                stroke="#fff"
              />
              <path
                d="M100.75 82.286h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
              <path
                d="M100.75 125.143h28.75"
                fill="#009100"
                fill-rule="evenodd"
                stroke="#fff"
              />
            </g>
          </svg>
        </div>
      </nav>
      <header onClick={() => onClickLink('header')} ref={headerRef}>
        <div className="demo-reel-container">
          <iframe className='demo-reel' src="https://www.youtube.com/embed/ET2VVDcmv0A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </header>
      <main>
      <section ref={portfolioRef} className='portfolio'>
          <h3>PORTFOLIO</h3>
          <div className='portfolio-div'>
            <div className='video-container'>
              <p>Like and Follow</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/jKkMItqnqQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Short Film Rescore</p>
            </div>
            <div className='video-container'>
              <p>The Witch Blade</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/5SPii3MJ4Ao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Fantasy Action Gameplay</p>
            </div>
            <div className='video-container'>
              <p>Sumo Cars</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/oBamG2vGd7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>EDM Title Music</p>
            </div>
            <div className='video-container'>
              <p>Die! This World</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/f_BXcahpL7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Quirky VR Gameplay</p>
            </div>
            <div className='video-container'>
              <p>Temple of Boom</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/tcOtMENPQg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Ambient Title Music</p>
            </div>
            <div className='video-container'>
              <p>Paintings Please</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/h3Se4dZv5K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Baroque Harpsichord Music</p>
            </div>
            <div className='video-container'>
              <p>Spring</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/NxQBMqcD2Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Short Film Rescore</p>
            </div>
            <div className='video-container'>
              <p>Mass Effect Andromeda</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/LfZEdAKCAM0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Scifi Cutscene Rescore</p>
            </div>
            <div className='video-container'>
              <p>Megaman 11</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/cpwQKn7ibaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Scifi Action Rescore</p>
            </div>
            <div className='video-container'>
              <p>Ghost Runner</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/VmiCRaUXejM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Scifi Gameplay Rescore</p>
            </div>
            <div className='video-container'>
              <p>Neon Abyss</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/zR4u8kMhS3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Boss Fight Rescore</p>
            </div>
            <div className='video-container'>
              <p>Fez</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/wyocXE-WYug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Chiptune Gameplay Rescore</p>
            </div>
          </div>
      </section>
        <section ref={aboutRef} className='about'>
          <h3>ABOUT</h3>
          <div className='about-me-container'>
            <img src={profPic} alt='photo' />
            {aboutMe}
          </div>
        </section>
        <section ref={contactRef} className='contact'>
          <h3>CONTACT</h3>
          <a href='mailto:ericjbowman@gmail.com' target='_blank'>ericjbowman@gmail.com</a>
        </section>
      </main>
    </div>
  )
}

export default Home