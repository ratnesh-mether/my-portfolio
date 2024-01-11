import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
function App() {
  const darkModeFlag = useSelector(state => state.slice.darkModeFlag)
  return (
    <div className={"app-container " + (darkModeFlag ? 'dark-mode' : '')}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
      <main className='app-component'>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </main>

    </div>
  );
}

export default App;
