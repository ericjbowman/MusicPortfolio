import './App.css'
import eric from './images/Eric.png'
import profPic from './images/Profpic2.jpg'
import React, {Fragment} from 'react'

function App() {
  const portfolioRef = React.createRef()
  const contactRef = React.createRef()
  const aboutRef = React.createRef()
  const headerRef = React.createRef()
  const aboutMe = (
    <div className='about-me-div'>
      <p>
        Eric Bowman is a composer, producer, and software engineer from Kalamazoo, MI. In 2017, Eric earned
        a Doctorate of Musical Arts from University of Miami where he made a living playing trombone and teaching.
        As a performer, Eric won 2 international solo competitions and shared the stage with a variety of notable musicians and composers including
        John Williams, Quincy Jones, Gloria Estefan, Steve Miller, various symphony orchestras, and various jazz ensembles.
      </p>
      <p>
        Following an overuse injury, Eric retired from his performing career to focus on composing, producing, and software
        engineering. As a life-long avid gamer, Eric naturally rekindled his love for music by composing for video games.
        Eric's eclectic performing experience and music education enable him to make memorable and fitting music that
        conveys a diverse range of emotions in a variety of genres.
      </p>
      <p>Eric currently lives in the greater Boston area where he enjoys cooking, exercising, and playing with his dog, Bear
      </p>
    </div>
  )

  const onClickLink = (link) => {
    if (link === 'portfolio') {
      portfolioRef.current.scrollIntoView({behavior: 'smooth'})
    } else if (link === 'about') {
      aboutRef.current.scrollIntoView({behavior: 'smooth'})
    } else if (link === 'contact') {
      contactRef.current.scrollIntoView({behavior: 'smooth'})
    } else if (link === 'header') {
      headerRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src={eric} alt='Eric' />
          <pre>Eric Bowman Music</pre>
        </div>
        <div className='links'>
          <span onClick={() => onClickLink('about')}>About</span>
          <span onClick={() => onClickLink('portfolio')}>Portfolio</span>
          <span onClick={() => onClickLink('contact')}>Contact</span>
        </div>
      </nav>
      <header onClick={() => onClickLink('header')} ref={headerRef}>
        <div className="demo-reel-container">
          <iframe className='demo-reel' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </header>
      <main>
      <section ref={portfolioRef} className='portfolio'>
          <h3>Portfolio</h3>
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
          <h3>About Me</h3>
          <div className='about-me-container'>
            <img src={profPic} alt='photo' />
            {aboutMe}
          </div>
        </section>
        <section ref={contactRef} className='contact'>
          <h3>Contact</h3>
          <p>ericjbowman@gmail.com</p>
        </section>
      </main>
    </div>
  )
}

export default App
