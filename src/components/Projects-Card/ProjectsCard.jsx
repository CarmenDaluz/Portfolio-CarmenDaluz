import { useState } from 'react';
import './ProjectsCard.css'

const ProjectsCard = ({title, desc1, desc2}) => {
    const [close, setClose] = useState(false);


    return(
        <article className="am-card am-card--full" onClick={() => setClose(!close)}>
            <h2>{title}</h2>
            {close && <p>{desc1}</p>}
            {close && <div className='desc2'>{desc2}</div>}
        </article>


    )
} 

export default ProjectsCard;