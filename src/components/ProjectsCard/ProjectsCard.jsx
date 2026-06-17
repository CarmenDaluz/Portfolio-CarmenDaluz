import { useState } from 'react';
import './ProjectsCard.css'
import ButtonSmall from '../Button/ButtonSmall'

const ProjectsCard = ({title, desc1, desc2, photo, deploy, github}) => {
    const [close, setClose] = useState(false);


    return(
        <article className="pc-card" >
            <h2 >{title}</h2>
            <img src={photo} alt="project photo" className='projects-img'onClick={() => setClose(!close)}/>
            {close && <p>{desc1}</p>}
            {close && <div className='desc2'>{desc2}</div>}
            {close && <ButtonSmall href={deploy} title="Deploy"></ButtonSmall>}
            {close && <ButtonSmall href={github} title="Github"></ButtonSmall>}
            
        </article>


    )
} 

export default ProjectsCard;