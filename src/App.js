import './App.css';
import Header_Nav from './components/Header_Nav'
import HomePage_Main_Info from './components/HomePage_Main_Info'
import ExperiencePage_Main_Info from './components/ExperiencePage_Main_Info';
import ProjectsPage_Main_Info from './components/ProjectsPage_Main_Info';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useState, useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);


function handle_State_Change2 (new_State)
{
  console.log(new_State);
  this.set_page_State(new_State);
 
}

function wumbo ()
{
  console.log('Got to use effect');

    console.log(gsap.utils.toArray(".panel"));
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


function App() {
  //const [page_State, set_page_State] = useState('HomePage');
  const [page_State, set_page_State] = useState('ExperiencePage');

  

  useEffect(() => {
    console.log('Got to use effect');

    console.log(gsap.utils.toArray(".panel"));
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

  const handle_State_Change = (new_State) => {
    set_page_State(new_State)
    console.log('got to state change');
    
  }

  if(page_State === 'HomePage')
  {
    // return (
    //   <div className="App">
    //     <div>
    //       <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

    //       <ExperiencePage_Main_Info page_State='ExperiencePage' />

    //       <Footer />
    //     </div>
    //   </div>
    // );

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

  else if(page_State === 'ExperiencePage')
  {
    return (
      <div className="App">
        <div>
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

          <ExperiencePage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </div>
    );
  }

  else if(page_State === 'ProjectsPage')
  {
    return (
      <>
        <div className="App">
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

          <ProjectsPage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </>
    );
  }

  else
  {

    return (
      <div className='App'>

        <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>
        
        <div className="panel blue Main_Slide_Rect">
          <div><h1>Layered pinning</h1>
          </div>
        </div>
        


        <section className="panel red Main_Slide_Rect">
          ONE
        </section>
        <section className="panel orange Main_Slide_Rect">
          TWO
        </section>
        <section className="panel purple Main_Slide_Rect">
          THREE
        </section>
        <section className="panel green Main_Slide_Rect">
          FOUR, yup
        </section>

        <Footer />
      </div>
    )
    
  }

  // return (
  //   <>
  //     <div className="App">
  //       <Header_Nav/>

  //       <div>
  //       <Main_Slide_Rect page_Type='HomePage' rect_Type='Left_Background_Slide'/>
  //     </div>
  //     </div>

      
  //   </>
  // );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
