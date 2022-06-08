import Home from './pages/Home';
import Music from './pages/Music';
import Settings from './pages/Settings';
import Games from './pages/Games';
import CoverFlow from './pages/CoverFlow';

function Screen(props) {
  const { activeItem, page } = props;
  if (page === 'Music') {
    return <Music />;
  } else if (page === 'Games') {
    return <Games />;
  } else if (page === 'Settings') {
    return <Settings />;
  } else if (page === 'CoverFlow') {
    return <CoverFlow />;
  }
  return <Home activeItem={activeItem} />;
}

export default Screen;
