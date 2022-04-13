import React from "react"

const Header_Nav = ({page_State, on_Page_State_Change}) => {
    const handle_Change = (new_State) =>
    {
        on_Page_State_Change(new_State);
    }
    
    if(page_State == 'HomePage')
    {
        return (
            
            <ul className="nav_Bar">
                <li className="active"><a href="#">Home</a></li>
                <li><a href='#' onClick={() => handle_Change('ExperiencePage')}>Experience</a></li>
                <li><a href="#" onClick={() => handle_Change('ProjectsPage')}>Projects</a></li>
            </ul>
        )
    }

    else if(page_State == 'ExperiencePage')
    {
        return (
            
            <ul className="nav_Bar">
                <li><a href='#' onClick={() => handle_Change('HomePage')}>Home</a></li>
                <li className="active"><a href='#'>Experience</a></li>
                <li><a href="#" onClick={() => handle_Change('ProjectsPage')}>Projects</a></li>
            </ul>
        )
    }

    else if(page_State == 'ProjectsPage')
    {
        return (
            
            <ul className="nav_Bar">
                <li><a href="#" onClick={() => handle_Change('HomePage')}>Home</a></li>
                <li><a href='#' onClick={() => handle_Change('ExperiencePage')}>Experience</a></li>
                <li className="active"><a href="#">Projects</a></li>
            </ul>
        )
    }

    else
    {
        return (
            
            <ul className="nav_Bar">
                <li><a href="#" onClick={() => handle_Change('HomePage')}>Home</a></li>
                <li><a href='#' onClick={() => handle_Change('ExperiencePage')}>Experience</a></li>
                <li className="active"><a href="#">Projects</a></li>
            </ul>
        )
    }
}

export default Header_Nav