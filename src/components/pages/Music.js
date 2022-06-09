import Itunes from '../../assets/itunes.png';

function Music(props) {
  return (
    <div className='music-container'>
      <div className='song-details'>
        <div className='left-block'>
          <img src={Itunes} alt='music logo' width={50} />
        </div>
        <div className='right-block'>
          <h2>Mood Booster</h2>
        </div>
      </div>
      <div className='progress-bar'></div>
    </div>
  );
}

export default Music;
