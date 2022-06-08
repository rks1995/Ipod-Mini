import React from 'react';
import ZingTouch from 'zingtouch';

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: true,
    };
  }

  handleWheelControls = (e) => {
    const wheelContainer = document.getElementById('wheel');
    const region = ZingTouch.Region(wheelContainer);

    var angle = 0;
    region.bind(wheelContainer, 'rotate', function (e) {
      console.log('Wheel');
      var distance = e.detail.distanceFromLast;

      //   if (distance < 0) {
      //     angle++;
      //     console.log(angle);
      //   } else {
      //     angle--;
      //     console.log(angle);
      //   }
    });
  };

  render() {
    return (
      <div className='wheel-container'>
        <div
          id='wheel'
          className='controls'
          onMouseOver={this.handleWheelControls}
        >
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
      </div>
    );
  }
}

export default Wheel;
