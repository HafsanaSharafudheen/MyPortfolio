
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import Footer from './components/footer';
import QuoteBox from './components/QuoteBox/QuoteBox';
import ConnectComponent from './components/connect/Connect';
// import ResumeSection from './components/ResumeSection/ResumeSection';
 import Projects from './components/Project/Projects.jsx';
 
 const project = {
  title: 'My Amazing Project',
  shortDescription: 'A brief description of the project goes here.',
  liveDemo: 'https://example.com/live-demo',
  github: 'https://github.com/example/project',
  features: [
    'Feature 1: Brief description',
    'Feature 2: Brief description',
    'Feature 3: Brief description',
  ],
  skills: 'React, JavaScript, CSS, HTML',
};

function App() {

  return (
    <>
    <Header/>
    <QuoteBox/>
    <Projects project={project}/>
    {/* <ResumeSection/> */}
    <ConnectComponent/>

    <Footer/>
    </>
 
  )
}

export default App
