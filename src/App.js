import logo from './logo.svg';
import { ProfileCard } from './components/ProfileCard';
import { Details } from './components/Details';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="profile-section">
         <ProfileCard />
      </div>
      <Details />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
