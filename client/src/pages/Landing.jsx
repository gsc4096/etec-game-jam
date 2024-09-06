
import '../App.css';
import Header from '../components/Header.jsx';
import Home from '../components/Home.jsx';
import Info from '../components/oq.jsx';
import Aprender from '../components/aprender.jsx';
import Step from '../components/steps.jsx';
import Footer from '../components/footer.jsx';

function HomePage() {
  return (
    <div className="landing" id='ba'>

     <Header />
     <Home />
     <Info />
    <Aprender />
    <Step />
    <Footer />

    </div>
  );
}

export default HomePage;
