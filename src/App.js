import './App.css'
import eric from './images/Eric.png'

function App() {
  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <img src={eric} alt='Eric' />
          <span>Eric Bowman Music</span>
        </div>
        <div className='links'>
          <span>About</span>
          <span>Portfolio</span>
          <span>Contact</span>
        </div>
      </nav>
      <header>
        <div className="demo-reel-container">
          <iframe className='demo-reel' src="https://www.youtube.com/embed/Tv06ja-HSIc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </header>
      <main>
      <section className='portfolio'>
          <h3>Portfolio</h3>
      </section>
        <section className='about'>
          <h3>About Me</h3>
          <p>Sentient bipedal creature</p>
        </section>
        <section className='contact'>
          <h3>Contact</h3>
        </section>
      </main>
    </div>
  )
}

export default App
