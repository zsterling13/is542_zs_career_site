import './App.css';
import Header_Nav from './components/Header_Nav'
import HomePage_Main_Info from './components/HomePage_Main_Info'
import ExperiencePage_Main_Info from './components/ExperiencePage_Main_Info';
import ProjectsPage_Main_Info from './components/ProjectsPage_Main_Info';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useRef, useEffect } from 'react'

// Add ScrollTrigger to the app's capabilities
gsap.registerPlugin(ScrollTrigger);

// Main App function
function App() {
  // Keep track of the state of the app, knowing which page to display
  const [page_State, set_page_State] = useState('HomePage');

  // Use effect that rerenders how scrolling animations should be made for each displayed page
  useEffect(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start:"top top",
        pin: true,
        pinSpacing: false
      });
    });

    ScrollTrigger.create({
      snap: 1/4
    })
  }
  )

  // Callback function to enable the navbar to change the state of the app
  const handle_State_Change = (new_State) => {
    set_page_State(new_State)
  }

  // Render this for the homepage
  if(page_State === 'HomePage')
  {
    return (
      <div className="App">
        <div key={page_State}>
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>
          
          <HomePage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </div>
    );
  }

  // Render this for the experience page
  else if(page_State === 'ExperiencePage')
  {
    return (
      <div className="App">
        <div key={page_State}>
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

          <ExperiencePage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </div>
    );
  }

  // Render this for the projects page
  else if(page_State === 'ProjectsPage')
  {
    return (
      <div className="App"> 
        <div key={page_State}>
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

          <ProjectsPage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;