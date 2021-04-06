import './App.css'
import eric from './images/Eric.png'
import profPic from './images/Profpic2.jpg'
import React, {Fragment, useEffect, useState} from 'react'

function App() {
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
        Eric Bowman is a composer, producer, and software engineer from Kalamazoo, MI. In 2017, Eric earned
        a Doctorate of Musical Arts from University of Miami, where he made a living playing trombone and teaching.
        As a performer, Eric won two international solo competitions and shared the stage with a variety of notable musicians and composers including
        John Williams, Quincy Jones, Gloria Estefan, Steve Miller, various symphony orchestras, and various jazz ensembles.
      </p>
      <p>
        Following an overuse injury, Eric retired from his performing career to focus on composing, producing, and software
        engineering. As a life-long avid gamer, Eric naturally rekindled his love for music by composing for video games.
        Eric's eclectic performing experience and music education enable him to make memorable and fitting music that
        conveys a diverse range of emotions in a variety of genres.
      </p>
      <p>Eric currently lives in the Greater Boston area where he enjoys cooking, exercising, and playing with his dog, Bear
      </p>
    </div>
  )

  const onClickLink = (link) => {
    if (link === 'portfolio') {
      const yOffset = 90
      const y = portfolioRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset
      window.scrollTo({top: y, behavior: 'smooth'});
    } else if (link === 'about') {
      aboutRef.current.scrollIntoView({behavior: 'smooth'})
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
          <pre>Eric Bowman Music</pre>
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
          <iframe className='demo-reel' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </header>
      <main>
      <section ref={portfolioRef} className='portfolio'>
          <h3>PORTFOLIO</h3>
          <div className='portfolio-div'>
            <div className='video-container'>
              <p>Spring</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/NxQBMqcD2Q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore for chamber orchestra</p>
            </div>
            <div className='video-container'>
              <p>Megaman 11</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore</p>
            </div>
            <div className='video-container'>
              <p>Mass Effect</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore</p>
            </div>
            <div className='video-container'>
              <p>Ghost Runner</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore</p>
            </div>
            <div className='video-container'>
              <p>Neon Abyss</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore</p>
            </div>
            <div className='video-container'>
              <p>Fez</p>
              <iframe className='portfolio-vid' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p>Rescore</p>
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

export default App
