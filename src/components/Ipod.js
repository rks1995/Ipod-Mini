import React from 'react';
import Screen from './Screen';
import Wheel from './Wheel';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'ControlFlow',
    };
  }

  handleWheelControls = (e) => {
    const wheelContainer = document.getElementById('wheel');
    const region = ZingTouch.Region(wheelContainer);

    var angle = 0;
    var self = this;

    region.bind(wheelContainer, 'rotate', function (e) {
      var distance = e.detail.distanceFromLast;
      angle += Math.floor(distance);
      console.log(angle);
      if (angle > 15) {
        console.log('clockwise');
        angle = 0;
        if (self.state.activeItem === 'ControlFlow') {
          self.setState({ activeItem: 'Music' });
        } else if (self.state.activeItem === 'Music') {
          self.setState({ activeItem: 'Games' });
        } else if (self.state.activeItem === 'Games') {
          self.setState({ activeItem: 'Settings' });
        } else {
          self.setState({ activeItem: 'ControlFlow' });
        }
      } else {
        if (angle < -15) {
          console.log('anticlockwise');
          angle = 0;
          if (self.state.activeItem === 'ControlFlow') {
            self.setState({ activeItem: 'Settings' });
          } else if (self.state.activeItem === 'Settings') {
            self.setState({ activeItem: 'Games' });
          } else if (self.state.activeItem === 'Games') {
            self.setState({ activeItem: 'Music' });
          } else {
            self.setState({ activeItem: 'ControlFlow' });
          }
        }
      }
    });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div className='ipod-container'>
        <Screen activeItem={activeItem} />
        <Wheel rotateWheel={this.handleWheelControls} />
      </div>
    );
  }
}

export default Ipod;
