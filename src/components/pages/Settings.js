import SettingImg from '../../assets/setting.png';

function Settings(props) {
  return (
    <div className='page-container'>
      <img src={SettingImg} alt='setting' width={100} />
      <h2>Settings</h2>
    </div>
  );
}

export default Settings;
