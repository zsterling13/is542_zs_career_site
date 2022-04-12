import Main_Slide_Rect from "./Main_Building_Blocks"

function ProjectsPage_Main_Info({page_State}) {
    return(
        <div>
            <Main_Slide_Rect page_Type={page_State} rect_Type='ProjectsPage_Title' comp_Text='Coding Projects'/>
            
            <Main_Slide_Rect page_Type={page_State} rect_Type='Project_Slide'
            comp_Text='SkimTac'
            comp_Job_Title='React'
            comp_Job_Desc="Created a prototype website that performs text analytics on a given website's terms and conditions"
            image_Link='https://github.com/jondeandrade/skimtac'
            comp_Image='./img/skimtac_prototype.png'
            image_ID='Skimtac_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='Project_Slide'
            comp_Text='Egyptologist Website Project'
            comp_Job_Title='ASP.NET, MSSQL, Bootstrap'
            comp_Job_Desc='Created an interface to interact with a database full of Academic observations on mummies'
            image_Link='https://github.com/zsterling13/INTEX2Mock'
            comp_Image='https://universe.byu.edu/wp-content/uploads/2021/05/egypt2-1-scaled.jpg'
            image_ID='Skimtac_pic'
            />

            <Main_Slide_Rect page_Type={page_State} rect_Type='Project_Slide'
            comp_Text='AR Unity Application'
            comp_Job_Title='Unity Editor, C# Unity Scripting, MRTK'
            comp_Job_Desc='Developed a Unity application to test human behavior while wearing a Microsoft Hololens device. Unfortunately, I am unable to share the code for the project due to confidentiality purposes with work'
            image_Link='#'
            comp_Image='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4P81F?ver=a732&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF'
            image_ID='Skimtac_pic'
            />

          </div>
    )
}

export default ProjectsPage_Main_Info