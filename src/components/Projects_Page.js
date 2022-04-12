import { useState } from "react"

const ProjectsPage_Main = ({rect_Type, comp_Text, comp_Image, comp_Job_Title, comp_Job_Desc, image_Link, image_ID}) => {
    if(rect_Type === 'ProjectsPage_Title')
    {
        return(
            <ProjectsPage_Title slide_Text={comp_Text}/>
        )
    }
    else if(rect_Type === 'Project_Slide')
    {
        return(
            <Project_Slide slide_Text={comp_Text} slide_Image={comp_Image} slide_Tech={comp_Job_Title} slide_Desc={comp_Job_Desc} image_Link={image_Link} image_ID={image_ID} />
        )
    }
}

function ProjectsPage_Title(slide_Text) {
    return(
        <div className="experiencepage_Title_Background_Color">
            <div className="experiencepage_Title_Content">
                <h1>{slide_Text.slide_Text}</h1>
            </div>
        </div>
    )
}

function Project_Slide({slide_Text, slide_Image, slide_Desc, slide_Tech, image_Link, image_ID}) {
    if(image_Link === undefined)
    {
        image_Link = '#';
    }
    
    return(
            <div className="left_background_color">
                <div className="project_Title">
                    <h1>{slide_Text}</h1>
                </div>
                <div className="background_content">
                    <div className="right_background_image">
                        <a href={image_Link}>
                            <img id={image_ID} src={slide_Image} alt="ahsoka pic"/>
                        </a>
                    </div>
                    <div className="project_background_text">
                        

                        <h2>Description</h2>
                        <h5>{slide_Desc}</h5>
                        
                        <br/>

                        <h2>Tech Used</h2>
                        <h5>{slide_Tech}</h5>
                    </div>
                </div>
            </div>
        )
}

export default ProjectsPage_Main