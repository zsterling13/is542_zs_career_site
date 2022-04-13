import HomePage_Main from './HomePage'
import ExperiencePage_Main from './Experience_Page'
import ProjectsPage_Main from './Projects_Page'

function Main_Slide_Rect({page_Type, rect_Type, comp_Text, comp_Image, comp_Job_Title, comp_Job_Desc, image_Link, image_ID}) {
    if (page_Type === 'HomePage')
    {
        return(
            <div className='Main_Slide_Rect panel'>
                <HomePage_Main rect_Type={rect_Type} comp_Text={comp_Text} comp_Image={comp_Image} image_ID={image_ID} />
            </div>
        )
    }
    else if(page_Type === 'ExperiencePage')
    {
        return(
            <div className='Main_Slide_Rect panel'>
                <ExperiencePage_Main rect_Type={rect_Type} comp_Text={comp_Text} comp_Image={comp_Image} comp_Job_Title={comp_Job_Title} comp_Job_Desc={comp_Job_Desc} image_ID={image_ID}/>
            </div>
        )
    }

    else if(page_Type === 'ProjectsPage')
    {
        return(
            <div className='Main_Slide_Rect panel'>
                <ProjectsPage_Main rect_Type={rect_Type} comp_Text={comp_Text} comp_Image={comp_Image} comp_Job_Title={comp_Job_Title} comp_Job_Desc={comp_Job_Desc} image_Link={image_Link} image_ID={image_ID}/>
            </div>
        )
    }

    
    
    // return(
    //   <div className="Main_Slide_Rect">
    //     < {page_Type}/>
    //   </div>
    // )
}

export default Main_Slide_Rect