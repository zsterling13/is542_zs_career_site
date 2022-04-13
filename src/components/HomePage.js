import { useState, useRef, useEffect } from "react"
import * as PIXI from "pixi.js";

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
    const ref = useRef(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width:window.innerWidth,
            height:900,
            transparent: false,
            antialias: true
        });
        //app.renderer.view.style.position = 'absolute';
        
        //document.getElementsByClassName('homepage_Title').appendChild(app.view);
        ref.current.appendChild(app.view);
        
        // Get the texture for rope.
        const starTexture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/star.png');
        
        const starAmount = 1000;
        let cameraZ = 0;
        const fov = 20;
        const baseSpeed = 0.025;
        let speed = 0;
        let warpSpeed = 0;
        const starStretch = 5;
        const starBaseSize = 0.05;
        
        
        // Create the stars
        const stars = [];
        for (let i = 0; i < starAmount; i++) {
            const star = {
                sprite: new PIXI.Sprite(starTexture),
                z: 0,
                x: 0,
                y: 0,
            };
            star.sprite.anchor.x = 0.5;
            star.sprite.anchor.y = 0.7;
            randomizeStar(star, true);
            app.stage.addChild(star.sprite);
            stars.push(star);
        }

        const text_Style = new PIXI.TextStyle({
            stroke: '#ffffff',
            fontSize: 72,
            fontFamily: 'Segoe UI',
            fill: 'white',
            strokeThickness: 4
        })

        const skill_Text_Style = new PIXI.TextStyle({
            stroke: '#ffffff',
            fontSize: 42,
            fontFamily: 'Segoe UI',
            fill: 'white',
            strokeThickness: 4
        })

        const my_Name_Text = new PIXI.Text('Zachary Sterling', text_Style);
        my_Name_Text.x = (window.innerWidth/2) - 250;
        my_Name_Text.y = 200;

        app.stage.addChild(my_Name_Text);

        const my_Skill_Text = new PIXI.Text('Skilled Software Developer', skill_Text_Style);
        my_Skill_Text.x = (window.innerWidth/2) - 250;
        my_Skill_Text.y = 300;

        app.stage.addChild(my_Skill_Text);
        
        function randomizeStar(star, initial) {
            star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;
        
            // Calculate star positions with radial random coordinate so no star hits the camera.
            const deg = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 1;
            star.x = Math.cos(deg) * distance;
            star.y = Math.sin(deg) * distance;
        }
        
        // Change flight speed every 5 seconds
        setInterval(() => {
            warpSpeed = warpSpeed > 0 ? 0 : 1;
        }, 5000);
        
        // Listen for animate update
        app.ticker.add((delta) => {
            // Simple easing. This should be changed to proper easing function when used for real.
            speed += (warpSpeed - speed) / 20;
            cameraZ += delta * 10 * (speed + baseSpeed);
            for (let i = 0; i < starAmount; i++) {
                const star = stars[i];
                if (star.z < cameraZ) randomizeStar(star);
        
                // Map star 3d position to 2d with really simple projection
                const z = star.z - cameraZ;
                star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
                star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;
        
                // Calculate star scale & rotation.
                const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
                const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
                const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const distanceScale = Math.max(0, (2000 - z) / 2000);
                star.sprite.scale.x = distanceScale * starBaseSize;
                // Star is looking towards center so that y axis is towards center.
                // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
                star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
                star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
            }
        });

        app.start();
    })
    
    return(    
        <div className="homepage_Title">
            <div ref={ref} />
            {/* <h1>Zachary Sterling</h1>
            <h3>Skilled Software Engineer</h3> */}
            
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
                        <img className="project_image" id={image_ID} src={slide_Image} alt="ahsoka pic"/>
                    </div>
                </div>
            </div>
        )
    }
}

function Right_Background_Slide({slide_Text, slide_Image, image_ID}) {
    return(
        <div className="right_background_color">
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
        <div className="right_background_color">
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