function Wheel(props) {
  const { rotateWheel } = props;
  return (
    <div id='wheel' className='controls' onMouseOver={rotateWheel}>
      <div className='menu'>MENU</div>
      <div className='start'></div>
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
