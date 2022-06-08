function Music(props) {
  return (
    <div className='music-container'>
      <div className='song-details'>
        <div className='left-block'>
          <img
            src='https://cdn-icons.flaticon.com/png/512/2995/premium/2995101.png?token=exp=1654702183~hmac=2a60e07e2ffe97daa25cda8f39169257'
            alt='music logo'
            width={50}
          />
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
