import React from 'react';

class Wheel extends React.Component {
  render() {
    return (
      <div className='wheel-container'>
        <div className='controls'>
          <div className='menu'>MENU</div>
          <div className='start'></div>
          <div className='back'>
            <i class='fa-solid fa-backward-fast'></i>
          </div>
          <div className='forward'>
            <i class='fa-solid fa-forward-fast'></i>
          </div>
          <div className='play-pause'>
            <i class='fa-solid fa-play'></i>
            <i class='fa-solid fa-pause'></i>
            <i class='fa-solid fa-play-pause'></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheel;
