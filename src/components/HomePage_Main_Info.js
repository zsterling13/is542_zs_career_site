import Main_Slide_Rect from "./Main_Building_Blocks"

function HomePage_Main_Info({page_State}) {
    return(
        <div>
            <Main_Slide_Rect page_Type={page_State} rect_Type='HomePage_Title'/>
            
            <Main_Slide_Rect page_Type={page_State} rect_Type='Left_Background_Slide' comp_Text='Studied Information Systems at BYU'
            comp_Image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Brigham_Young_University_medallion.svg/1200px-Brigham_Young_University_medallion.svg.png'
            image_ID='BYU_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='Right_Background_Slide'
            comp_Text='I Have Experience With...'
            comp_Image='./img/tech_experience.png'
            image_ID='Ahsoka_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='Left_Background_Slide'
            comp_Text="In BYU's Startup Incubator called Sandbox"
            comp_Image='https://uploads-ssl.webflow.com/60de579a5aae39e0c2a0c879/60fafc50b14c0097346ee3ee_creators%20landing%20illustration.png'
            image_ID='Ahsoka_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='HomePage_Projects'/>

            
          </div>
    )
}

export default HomePage_Main_Info