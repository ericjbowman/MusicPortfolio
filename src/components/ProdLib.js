import '../styles/ProdLib.css'
import {Link} from 'react-router-dom'
import Track from './Track.js'
import avatar from '../images/Avatar.png'
import gumshoe from '../images/Gumshoe.png'
import pumpkin from '../images/pumpkin_cropped.png'
import car from '../images/car.png'
import wheat from '../images/Wheat.png'

function ProdLib() {
  return (
    <div className="prodlib">
      <nav>
        <div className="nav-left-container">
          <Link to='/'>
            <img alt="" src={avatar} />
          </Link>
          <span>Eric Bowman Alibi Music Application</span>
        </div>
        <span>ericjbowman@gmail.com</span>
      </nav>
      <main className='prodlib-main'>
        <div className="track-container" id="track-container">
          <Track
            name='Trick-or-Treat'
            id='1'
            image={pumpkin}
            source={process.env.PUBLIC_URL + '/tracks/ToT_150bpm_Dmin_Master_08_02_22_20_41.mp3'}
            genre='Orchestral'
            keyCenter='Dmin'
            tempo='150'
            waveImg={process.env.PUBLIC_URL + '/waveforms/ToT_Waveform.png'}
            tags={[
              'Orchestral', 'Halloween', 'Holidays', 'Scary', 'Fun',
              'Cinematic', 'Kids', 'Quirky', 'Playful', 'Comical',
              'Theremin', '1980s', '1990s',
            ]}
          />
          <Track
            name='Sumo Cars'
            id='2'
            image={car}
            source={process.env.PUBLIC_URL + '/tracks/Sumo_Cars_04_14_22.mp3'}
            genre='EDM'
            keyCenter='Cmaj'
            tempo='130'
            waveImg={process.env.PUBLIC_URL + '/waveforms/SumoCars_Waveform.png'}
            tags={[
              'EDM', 'House', 'Chiptune', 'Pop', 'Confident', 'Fun',
              'Party', 'Cool', 'Sports', 'Advertising', 'Gaming',
              'E-Sports', 'Contemporary Music',
            ]}
          />
          <Track
            name='Gumshoe'
            id='3'
            image={gumshoe}
            source={process.env.PUBLIC_URL + '/tracks/Gumshoe_110bpm_Emin_Master_07_28_22_12_34.mp3'}
            genre='Jazz'
            keyCenter='Emin'
            tempo='110'
            waveImg={process.env.PUBLIC_URL + '/waveforms/Gumshoe_Waveform.png'}
            tags={[
              'Jazz', 'Swing', `1950s`, `1960s`, 'Cinematic',
              'Stealth', 'Sneaky', 'Crime', 'Detective', 'Mystery',
              'Vibraphone', 'Comical',
            ]}
          />
          <Track
            name='Elysium'
            id='4'
            image={wheat}
            source={process.env.PUBLIC_URL + '/tracks/Elysium_120bpm_Gmaj_Master_08_02_22_19_39.mp3'}
            genre='Orchestral'
            keyCenter='Gmaj'
            tempo='120'
            waveImg={process.env.PUBLIC_URL + '/waveforms/Elysium_Waveform.png'}
            tags={[
              'Orchestral', 'Harp', 'Strings', 'Peaceful', 'Hopeful',
              'Cinematic', 'Drama', 'Fantasy', 'Orchestral Fantasy',
              'Happy', 'Uplifting', 'Underscores',
            ]}
          />
        </div>
      </main>
    </div>
  )
}

export default ProdLib
