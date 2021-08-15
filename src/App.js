import UserProfile from './components/UserProfile';
// import Statistics from './components';
import useDate from './userProfil.json';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* import user from './userProfil.json'; import user from
      './userProfil.json'; */}
      <UserProfile user={useDate} />
    </div>
  );
}

export default App;
