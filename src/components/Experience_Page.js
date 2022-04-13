import { useState } from "react"

const ExperiencePage_Main = ({rect_Type, comp_Text, comp_Image, comp_Job_Title, comp_Job_Desc, image_ID}) => {
    if(rect_Type === 'ExperiencePage_Title')
    {
        return(
            <ExperiencePage_Title slide_Text={comp_Text}/>
        )
    }
    else if(rect_Type === 'Experience_Slide')
    {
        return(
            
            <Experience_Slide slide_Text={comp_Text} slide_Image={comp_Image} comp_Job_Title={comp_Job_Title} comp_Job_Desc={comp_Job_Desc} image_ID={image_ID} />
            
        )
    }
    else if(rect_Type === 'LinkedIn_Slide')
    {
        return(
            <LinkedIn_Slide slide_Image={comp_Image} image_ID={image_ID} />
        )
    }
    
}

function ExperiencePage_Title(slide_Text) {
    return(
        <div className="experiencepage_Title_Background_Color">
            <div className="experiencepage_Title_Content">
                <h1>{slide_Text.slide_Text}</h1>
            </div>
        </div>
    )
}

function Experience_Slide({slide_Text, slide_Image, comp_Job_Title, comp_Job_Desc, image_ID}) {
        return(
            <div className="experience_Background_Color">
                <div className="left_Background_Title_Exp">
                    <h1>{slide_Text}</h1>
                    <h3>{comp_Job_Title}</h3>
                </div>
                <div className="background_content">
                    <div className="left_background_text">
                        <h1>{comp_Job_Desc}</h1>
                    </div>
                    <div className="left_background_image">
                        <img id={image_ID} className="experience_Image" src={slide_Image} alt="ahsoka pic"/>
                    </div>
                </div>
            </div>
        )
}

function LinkedIn_Slide({slide_Image, image_ID}) {
    
    return(
        <div className="left_background_color">
            <div className="linkedIn_Text">
                <h1>LinkedIn Profile</h1>
            </div>
            <div className="background_content">
                <div className="right_background_image">
                    <a href="https://www.linkedin.com/in/zachary-sterling/">
                        <img className="experience_Image" id={image_ID} src={slide_Image} alt="ahsoka pic"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExperiencePage_Main