import { useState } from "react"

const HomePage_Main = ({rect_Type, comp_Text, comp_Image, image_ID}) => {
    
    if(rect_Type === 'HomePage_Title')
    {
        return(
            <HomePage_Title />
        )
    }
    else if(rect_Type === 'Left_Background_Slide')
    {
        return(
            <>
                <Left_Background_Slide slide_Text={comp_Text} slide_Image={comp_Image} image_ID={image_ID}/>
            </>
        )
    }
    else if(rect_Type === 'Right_Background_Slide')
    {
        return(
            <Right_Background_Slide slide_Text={comp_Text} slide_Image={comp_Image} image_ID={image_ID} />
        )
    }
    else if(rect_Type === 'HomePage_Projects')
    {
        return(
            <HomePage_Projects />
        )
    }
}

function HomePage_Title() {
    return(    
        <div className="homepage_Title">
            <h1>Zachary Sterling</h1>
            <h3>Skilled Software Engineer</h3>
        </div>
    )
}

function Left_Background_Slide({slide_Text, slide_Image, image_ID}) {
    if(slide_Text == undefined && slide_Image == undefined)
    {
        return(
            <h1>Left_Background_Slide no slide text or image</h1>
        )
    }
    else if(slide_Text == undefined && slide_Image != undefined)
    {
        return(
            <h1>Left_Background_Slide with image</h1>
        )
    }
    else if(slide_Text != undefined && slide_Image == undefined)
    {
        return(
            <h1>Left_Background_Slide with slide text but no image</h1>
        )
    }
    else
    {   
        return(
            <div className="left_background_color">
                <div className="left_Background_Title">
                    <h1>Background</h1>
                </div>
                <div className="background_content">
                    <div className="left_background_text">
                        <h1>{slide_Text}</h1>
                    </div>
                    <div className="left_background_image">
                        <img id={image_ID} src={slide_Image} alt="ahsoka pic"/>
                    </div>
                </div>
            </div>
        )
    }
}

function Right_Background_Slide({slide_Text, slide_Image, image_ID}) {
    return(
        <div className="left_background_color">
            <div className="left_Background_Title">
            <h1>Background</h1>
            </div>
            <div className="background_content">
                <div className="right_background_image">
                    <img id={image_ID} src={slide_Image} alt="ahsoka pic"/>
                </div>
                <div className="right_background_text">
                    <h1>{slide_Text}</h1>
                </div>
            </div>
        </div>
    )
}

function HomePage_Projects() {
    return(
        <div className="left_background_color">
            <div className="left_Background_Title">
                <h1>Current Projects</h1>
            </div>
            <div className="homepage_Project_Container">
                <div className="homepage_Indiv_Proj" id="HomePage_Proj1">
                    <h1>SkimTac</h1>
                </div>
                <div className="homepage_Indiv_Proj" id="HomePage_Proj2">
                    <h1>Egyptologist Website</h1>
                </div>
                <div className="homepage_Indiv_Proj" id="HomePage_Proj3">
                    <h1>Unity AR</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage_Main