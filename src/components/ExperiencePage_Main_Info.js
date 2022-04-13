import Main_Slide_Rect from "./Main_Building_Blocks"

function ExperiencePage_Main_Info({page_State}) {
    return(
        <div>
            <Main_Slide_Rect page_Type={page_State} rect_Type='ExperiencePage_Title' comp_Text='My Work Experience'/>
            
            <Main_Slide_Rect page_Type={page_State} rect_Type='Experience_Slide'
            comp_Text='BYU'
            comp_Job_Title='Research Assistant'
            comp_Job_Desc='Developed Augmented Reality Unity Application'
            comp_Image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/1200px-Brigham_Young_University_medallion.svg.png'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='Experience_Slide'
            comp_Text='Intra'
            comp_Job_Title='Market Research Intern'
            comp_Job_Desc='Conducted market research on demand for intermurral software'
            comp_Image='./img/Intra_Logo.png'
            image_ID='Intra_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='LinkedIn_Slide'
            comp_Image='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png'
            />
          </div>
    )
}

export default ExperiencePage_Main_Info