import "./Projects.css";
import React from 'react'
import ProjectsCard from "./ProjectsCard";

const Projects = () => {

    const projectsData = [
        { imgUrl: "/Assets/projects/13.amazon.png", altText: "Amazon website", title: "Amazon website clone" },
        { imgUrl: "/Assets/projects/12.youtube.png", altText: "Youtube website", title: "Youtube website clone" },
        { imgUrl: "/Assets/projects/11.tesla.png", altText: "Tesla website", title: "Tesla website clone" },
        { imgUrl: "/Assets/projects/10.whatsappclone.png", altText: "Whatsapp web", title: "Whatsapp web clone" },
        { imgUrl: "/Assets/projects/9.moviefinder.png", altText: "Movie Finder", title: "Movie Finder" },
        { imgUrl: "/Assets/projects/8.drawingapp.png", altText: "Drawing App", title: "Drawing App" },
        { imgUrl: "/Assets/projects/7.weatherapp.png", altText: "Weather App", title: "Weather App" },
        { imgUrl: "/Assets/projects/6.tictactoe.png", altText: "Tic Tac Toe", title: "Tic Tac Toe" },
        { imgUrl: "/Assets/projects/5.makeortakeaquiz.png", altText: "Make Or Take a Quiz", title: "Make or Take a Quiz" },
        { imgUrl: "/Assets/projects/4.todo&notelist.png", altText: "todo & notes list", title: "todo & notes list" },
        { imgUrl: "/Assets/projects/3.calculator.png", altText: "calculator app", title: "calculator app" },
        { imgUrl: "/Assets/projects/2.passwordgenerator.png", altText: "Password Generator", title: "Password Generator" },
        { imgUrl: "/Assets/projects/1.ecommercefront.png", altText: "Ecommerce front design", title: "Ecommerce front design" },
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