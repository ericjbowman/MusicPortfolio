import '../styles/ProdLib.css'
import {Link} from 'react-router-dom'
import Track from './Track.js'
import avatar from '../images/Avatar.png'

// Images
import gumshoe from '../images/Gumshoe.png'
import pumpkin from '../images/pumpkin_cropped.png'
import car from '../images/car.png'
import wheat from '../images/Wheat.png'

// tracks
import totTrack from '../tracks/ToT_150bpm_Dmin_Master_08_02_22_20_41.mp3'
import sumoCarsTrack from '../tracks/Sumo_Cars_04_14_22.mp3'
import gumshoeTrack from '../tracks/Gumshoe_110bpm_Emin_Master_07_28_22_12_34.mp3'
import elysiumTrack from '../tracks/Elysium_120bpm_Gmaj_Master_08_02_22_19_39.mp3'

// Waveform images
import totWave from '../waveforms/ToT_Waveform.png'
import sumoCarsWave from '../waveforms/SumoCars_Waveform.png'
import gumshoeWave from '../waveforms/Gumshoe_Waveform.png'
import elysiumWave from '../waveforms/Elysium_Waveform.png'

function ProdLib() {
  return (
    <div className="prodlib">
      <nav>
        <div className="nav-left-container">
          <Link to='/'>
            <img alt="" src={avatar} />
          </Link>
          <span>Eric Bowman Demos</span>
        </div>
        <span>ericjbowman@gmail.com</span>
      </nav>
      <main className='prodlib-main'>
        <div className="track-container" id="track-container">
          <Track
            name='Trick-or-Treat'
            id='1'
            image={pumpkin}
            source={totTrack}
            genre='Orchestral'
            keyCenter='Dmin'
            tempo='150'
            waveImg={totWave}
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
            source={sumoCarsTrack}
            genre='EDM'
            keyCenter='Cmaj'
            tempo='130'
            waveImg={sumoCarsWave}
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
            source={gumshoeTrack}
            genre='Jazz'
            keyCenter='Emin'
            tempo='110'
            waveImg={gumshoeWave}
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
            source={elysiumTrack}
            genre='Orchestral'
            keyCenter='Gmaj'
            tempo='120'
            waveImg={elysiumWave}
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
