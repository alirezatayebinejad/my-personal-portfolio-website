import React from 'react'
import "./Skills.css"
import SkillsCard from './SkillsCard'

const Skills = () => {
    const skillsData = [
        { imgUrl: "/Assets/skills/vscode.png", title: "VS Code" },
        { imgUrl: "/Assets/skills/git.png", title: "Git" },
        { imgUrl: "/Assets/skills/c++.png", title: "C++" },
        { imgUrl: "/Assets/skills/html.png", title: "HTML" },
        { imgUrl: "/Assets/skills/css.png", title: "CSS" },
        { imgUrl: "/Assets/skills/javascript.png", title: "Javascript" },
        { imgUrl: "/Assets/skills/react.png", title: "React" },
        { imgUrl: "/Assets/skills/nextjs.png", title: "Next.js" },
        { imgUrl: "/Assets/skills/redux.png", title: "Redux" },
        { imgUrl: "/Assets/skills/mysql.png", title: "MySQL" },
        { imgUrl: "/Assets/skills/materialui.png", title: "Material UI" },
        { imgUrl: "/Assets/skills/styledcomponents.png", title: "Styled Components" },
        { imgUrl: "/Assets/skills/bootstrap.png", title: "Bootstrap" },
        { imgUrl: "/Assets/skills/firebase.png", title: "Firebase" },
        { imgUrl: "/Assets/skills/wordpress.png", title: "Wordpress" },
    ]
    const renderCards = () => {
        const cards = skillsData.map((skill) => <SkillsCard {...skill} key={skill.title} />);
        return cards;
    }
    return (
        <div className='skills' id='skills1'>
            <h1 className="skills__header">Tech Skills</h1>
            <div className="skills__items">

                {renderCards()}

            </div>
        </div>
    )
}

export default Skills