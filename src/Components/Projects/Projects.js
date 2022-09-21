import "./Projects.css";
import React from 'react'
import ProjectsCard from "./ProjectsCard";

const Projects = () => {

    const projectsData = [
        {
            imgUrl: "/Assets/projects/13.amazon.png", altText: "Amazon website", title: "Amazon website clone", information: {
                tools: "Css - React - React Router - firebase - MUI icons", info: "signup singin Authentication, add to basket functionality", githubUrl: "https://github.com/vibracode/amazon-clone", demoUrl: "https://amazon-clone-ruddy-three.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/12.youtube.png", altText: "Youtube website", title: "Youtube website clone", information: {
                tools: "css(with css grids) - React - MUI icons", info: "this is a home page frontend of youtube", githubUrl: "https://github.com/vibracode/youtube-clone", demoUrl: "https://youtube-clone-one-topaz.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/11.tesla.png", altText: "Tesla website", title: "Tesla website clone", information: {
                tools: "css(Styled Components) - React - MUI icons", info: "this is a home page frontend of Tesla website", githubUrl: "https://github.com/vibracode/Tesla-website-clone", demoUrl: "https://tesla-website-clone-ten.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/10.whatsappclone.png", altText: "Whatsapp web", title: "Whatsapp web clone", information: {
                tools: "css(Styeld Components) - React - Next.js(with serverside rendering) - firebase - MUI icons", info: "firebase Google autentication sign in and 1-1 messaging with other peoples signed in with gmail. Note:use VPN if firebase not working in your country", githubUrl: "https://github.com/vibracode/whatsapp-clone", demoUrl: "https://whatsapp-clone-lovat.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/9.moviefinder.png", altText: "Movie Finder", title: "Movie Finder", information: {
                tools: "HTML - CSS - Javascript", info: "this website using an API to fetch data about inserted keyword", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/8.%20movie%20finder", demoUrl: "https://mellow-florentine-523604.netlify.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/8.drawingapp.png", altText: "Drawing App", title: "Drawing App", information: {
                tools: "HTML - CSS - Javascript", info: "I used html canvas and javacript to create this drawing functionality.", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/7.%20drawing%20app", demoUrl: "https://delightful-cheesecake-8d72b0.netlify.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/7.weatherapp.png", altText: "Weather App", title: "Weather App", information: {
                tools: "HTML - CSS - Javascript", info: "this app is using an API to fetch a inserted location's data", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/6.%20weather%20app", demoUrl: "https://startling-muffin-170aee.netlify.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/6.tictactoe.png", altText: "Tic Tac Toe", title: "Tic Tac Toe", information: {
                tools: "HTML - CSS - Javascript", info: "I wrote tic tac toe game logic with vanilla javascript", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/5.%20tic%20tac%20toe", demoUrl: "https://celadon-baklava-962171.netlify.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/5.makeortakeaquiz.png", altText: "Make Or Take a Quiz", title: "Make or Take a Quiz", information: {
                tools: "HTML - CSS - Javascript", info: "you can create a quiz and add it to quizes and also take a time limited quiz and see your grade, it uses localstorage because no backend available.", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/4.%20quiz%20maker%20(OOP)", demoUrl: "https://quizmaker-mu.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/4.todo&notelist.png", altText: "todo & notes list", title: "todo & notes list", information: {
                tools: "HTML - CSS - Javascript", info: "I'm using localstorage to store users todos and notes to prevent from data lost.", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/3.%20todo%20list%20-%20notes", demoUrl: "https://stirring-naiad-1dfa26.netlify.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/3.calculator.png", altText: "calculator app", title: "calculator app", information: {
                tools: "HTML - CSS - Javascript", info: "this calculater works with multiple operations in a row and keyboard functionality is available.", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/2.%20calculator", demoUrl: "https://calculator-tau-nine.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/2.passwordgenerator.png", altText: "Password Generator", title: "Password Generator", information: {
                tools: "HTML - CSS - Javascript", info: "I wrote a vanilla javascript algorithm to generate optional password.", githubUrl: "https://github.com/vibracode/8-vanilla-javascript-projects/tree/master/1.%20password%20generator", demoUrl: "https://password-generator-ten-dun.vercel.app/"
            }
        },
        {
            imgUrl: "/Assets/projects/1.ecommercefront.png", altText: "Ecommerce front design", title: "Ecommerce front design", information: {
                tools: "HTML - CSS", info: "I designed a nice front page of an E-commerce website", githubUrl: "https://github.com/vibracode/ecommerce-website-html-css", demoUrl: "https://rainbow-monstera-721c0e.netlify.app/"
            }
        },
    ]
    return (
        <div className="projects">
            <h1 className="projects__header">Projects</h1>
            <div className="projects__items">

                {projectsData.map((project) => <ProjectsCard {...project} key={project.title} />)}

            </div>
        </div>
    )
}

export default Projects