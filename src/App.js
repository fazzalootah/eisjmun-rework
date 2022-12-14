import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/homepage/main/main';
import Countdown from './components/homepage/countdown/countdown';
import Footer from './components/footer/footer';
import SG from './components/homepage/messagefromsg/sgmessage';
import What from './components/homepage/whatismun/what';
import Igposts from './components/homepage/instaposts/igposts';
import Why from './components/homepage/why/why';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Main />
        <Countdown />
        <SG />
        <What />
        <Igposts />
        <Why />
        <Footer />
    </div>
  );
}

export default App;
