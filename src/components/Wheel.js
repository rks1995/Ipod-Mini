import React from 'react';
class Wheel extends React.Component {
  //   constructor() {
  //     super();
  //   }

  handleWheelControls = (e) => {
    console.log(e.clintY);
  };

  render() {
    return (
      <div className='wheel-container'>
        <div className='controls' onMouseMove={this.handleWheelControls}>
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
