import './App.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <main className='app-component'>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </main>
  );
}

export default App;
