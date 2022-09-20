import React from 'react'
import "./Skills.css"
const Skills = () => {
    return (
        <div className='skills'>
            <h1 className="skills__header">Tech Skills</h1>
            <div className="skills__items">
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/vscode.png" alt="VSCode logo" />
                    </div>
                    <div className='item__info'>VS Code</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/git.png" alt="Git logo" />
                    </div>
                    <div className='item__info'>Git</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/c++.png" alt="C++ logo" />
                    </div>
                    <div className='item__info'>C++</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/html.png" alt="HTML logo" />
                    </div>
                    <div className='item__info'>HTML</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/css.png" alt="CSS logo" />
                    </div>
                    <div className='item__info'>CSS</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/javascript.png" alt="Javascript logo" />
                    </div>
                    <div className='item__info'>Javascript</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/react.png" alt="React logo" />
                    </div>
                    <div className='item__info'>React</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/redux.png" alt="Redux logo" />
                    </div>
                    <div className='item__info'>Redux</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/materialui.png" alt="Material UI logo" />
                    </div>
                    <div className='item__info'>Material UI</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/styledcomponents.png" alt="Styled Components logo" />
                    </div>
                    <div className='item__info'>Styled Components</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/bootstrap.png" alt="Bootstrap logo" />
                    </div>
                    <div className='item__info'>Bootstrap</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/firebase.png" alt="firebase logo" />
                    </div>
                    <div className='item__info'>Firebase</div>
                </div>
                <div className='items__item'>
                    <div className='item__icon'>
                        <img src="/Assets/skills/wordpress.png" alt="Wordpress logo" />
                    </div>
                    <div className='item__info'>Wordpress</div>
                </div>

            </div>
        </div>
    )
}

export default Skills