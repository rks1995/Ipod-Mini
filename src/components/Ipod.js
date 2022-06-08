import React from 'react';
import Screen from './Screen';
import Wheel from './Wheel';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'CoverFlow',
      page: 'Home',
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
      if (angle > 15) {
        angle = 0;
        if (self.state.activeItem === 'CoverFlow') {
          self.setState({ activeItem: 'Music' });
        } else if (self.state.activeItem === 'Music') {
          self.setState({ activeItem: 'Games' });
        } else if (self.state.activeItem === 'Games') {
          self.setState({ activeItem: 'Settings' });
        } else {
          self.setState({ activeItem: 'CoverFlow' });
        }
      } else {
        if (angle < -15) {
          angle = 0;
          if (self.state.activeItem === 'CoverFlow') {
            self.setState({ activeItem: 'Settings' });
          } else if (self.state.activeItem === 'Settings') {
            self.setState({ activeItem: 'Games' });
          } else if (self.state.activeItem === 'Games') {
            self.setState({ activeItem: 'Music' });
          } else {
            self.setState({ activeItem: 'CoverFlow' });
          }
        }
      }
    });
  };

  changePage = () => {
    this.setState({ page: this.state.activeItem });
  };

  homePage = () => {
    this.setState({ page: 'Home' });
  };

  render() {
    const { activeItem, page } = this.state;
    return (
      <div className='ipod-container'>
        <div className='screen-container'>
          <Screen activeItem={activeItem} page={page} />
        </div>
        <Wheel
          rotateWheel={this.handleWheelControls}
          changePage={this.changePage}
          homePage={this.homePage}
        />
      </div>
    );
  }
}

export default Ipod;
