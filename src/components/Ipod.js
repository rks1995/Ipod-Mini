import React from 'react';
import Screen from './Screen';
import Wheel from './Wheel';

class Ipod extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='ipod-container'>
        <Screen />
        <Wheel />
      </div>
    );
  }
}

export default Ipod;
