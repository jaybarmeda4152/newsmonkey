import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';

function App() {
  return (
    <>
    <Navbar/>
    <News newsPerPage={5}/>
    </>
  );
}

export default App;
