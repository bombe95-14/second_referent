//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Gpt from './Components/GPT/Gpt';
import Feature from './Components/Feature/Feature';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Gpt />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
