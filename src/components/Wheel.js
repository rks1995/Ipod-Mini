function Wheel(props) {
  const { rotateWheel, changePage, homePage } = props;
  return (
    <div id='wheel' className='controls' onMouseOver={rotateWheel}>
      <div className='menu' onClick={homePage}>
        MENU
      </div>
      <div className='start' onClick={changePage}></div>
      <div className='back'>
        <i className='fa-solid fa-backward-fast'></i>
      </div>
      <div className='forward'>
        <i className='fa-solid fa-forward-fast'></i>
      </div>
      <div className='play-pause'>
        <i className='fa-solid fa-play'></i>
        <i className='fa-solid fa-pause'></i>
      </div>
    </div>
  );
}

export default Wheel;
