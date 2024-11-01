
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/footer';
import QuoteBox from './components/QuoteBox/QuoteBox';
import ConnectComponent from './components/connect/Connect';
import ResumeSection from './components/ResumeSection/ResumeSection';
import Projects from './components/Project/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';

 


function App() {

  return (
    <>
    <QuoteBox/>
    <ResumeSection/>

<Projects/>   
<Skills/>
    <ConnectComponent/>
    <Footer/>
    </>
 
  )
}

export default App
