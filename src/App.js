import './App.css';
import logo from './logo.png';
import phone from './phone.png'

function App() {
  return (
    <div className="App">
      <div className="brand">
      <div className="phone">
        <img src={phone} alt='phone' className='phone-logo'></img>
        <span className='phone-no'>+022 319 821 967</span>
        </div>
        <div className="heading">
        <img src={logo} alt='logo' className='logo'></img>
        <h2><span className="headingbold">logo</span><span className='light-heading'>ipsum</span></h2>
        </div>
        <div className="user">
          <ul>
            <li>Fb</li>
            <li>Ug</li>
            <li>Lg</li>
            <li>Lt</li>
          </ul>
        </div>
      
      </div>
      
    </div>
    
  );
}

export default App;
