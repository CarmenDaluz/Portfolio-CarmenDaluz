import { useState } from 'react';
import './ProjectsCard.css'
import Button from '../Button/Button'

const ProjectsCard = ({title, desc1, desc2, photo}) => {
    const [close, setClose] = useState(false);


    return(
        <article className="pc-card" onClick={() => setClose(!close)}>
            <h2 >{title}</h2>
            <img src={photo} alt="project photo" className='projects-img'/>
            {close && <p>{desc1}</p>}
            {close && <div className='desc2'>{desc2}</div>}
            {close && <Button to='/aboutme' title="Deploy"></Button>}
            {close && <Button to='/aboutme' title="Github"></Button>}
            
        </article>


    )
} 

export default ProjectsCard;