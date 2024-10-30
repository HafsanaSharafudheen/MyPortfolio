
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Footer from './components/footer';
import QuoteBox from './components/QuoteBox/QuoteBox';
import ConnectComponent from './components/connect/Connect';
// import ResumeSection from './components/ResumeSection/ResumeSection';
import CardFlip from './components/Project/CardFlip.jsx';
import Projects from './components/Project/Projects.jsx';
 


function App() {

  return (
    <>
    <Header/>
    <QuoteBox/>
<Projects/>   
 {/* <ResumeSection/> */}
    <ConnectComponent/>

    <Footer/>
    </>
 
  )
}

export default App
