function Screen(props) {
  const { activeItem } = props;
  return (
    <div className='screen-container'>
      <div className='menu-list'>
        <h2>Ipod js</h2>
        <ul>
          {activeItem === 'ControlFlow' ? (
            <li className='list-item select'>
              <p>Cover Flow</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          ) : (
            <li className='list-item'>
              <p>Cover Flow</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          )}

          {activeItem === 'Music' ? (
            <li className='list-item select'>
              <p>Music</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          ) : (
            <li className='list-item'>
              <p>Music</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          )}

          {activeItem === 'Games' ? (
            <li className='list-item select'>
              <p>Games</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          ) : (
            <li className='list-item'>
              <p>Games</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          )}

          {activeItem === 'Settings' ? (
            <li className='list-item select'>
              <p>Settings</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          ) : (
            <li className='list-item'>
              <p>Settings</p>
              <i className='fa-solid fa-angle-right'></i>
            </li>
          )}
        </ul>
      </div>
      <div className='walpaper'>
        <img
          className='wallpaper'
          src='https://images.hdqwalls.com/download/mask-boy-listening-music-neon-4k-gm-1125x2436.jpg'
          alt='wallpaper'
        />
      </div>
    </div>
  );
}

export default Screen;
