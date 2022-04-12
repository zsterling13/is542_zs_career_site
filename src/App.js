import './App.css';
import Header_Nav from './components/Header_Nav'
import HomePage_Main_Info from './components/HomePage_Main_Info'
import ExperiencePage_Main_Info from './components/ExperiencePage_Main_Info';
import ProjectsPage_Main_Info from './components/ProjectsPage_Main_Info';
import Footer from './components/Footer'
import { useState } from 'react'

function handle_State_Change2 (new_State)
{
  console.log(new_State);
  this.set_page_State(new_State);
}

function App() {
  const [page_State, set_page_State] = useState('HomePage');

  const handle_State_Change = (new_State) => {set_page_State(new_State)}

  if(page_State === 'HomePage')
  {
    return (
      <>
        <div className="App">
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>
          
          <HomePage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </>
    );
  }

  else if(page_State === 'ExperiencePage')
  {
    return (
      <>
        <div className="App">
          <Header_Nav page_State={page_State} on_Page_State_Change={handle_State_Change}/>

          <ExperiencePage_Main_Info page_State={page_State} />

          <Footer />
        </div>
      </>
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
