import Card from './Card.jsx'

import AboutMeCard from './AboutMeCard/AboutMeCard.jsx'
import ProjectsCard from './ProjectsCard/ProjectsCard.jsx'

import './AboutMe.css'
import './ProjectsCard/ProjectsCard.css'



function CardsMap () {
  const repos = [
    { name: "HP Searcher", stack: "react, CSS, JavaScript", photo: "/project1.png", description: "Searcher on HP API"},
    { name: "Bookstore API", stack: "react, CSS, JavaScript", photo:"/project2.png", description: "Searcher on HP API"} , 
    { name: "My Portfolio", stack: "react, CSS, JavaScript", photo:"/project3.png", description: "Searcher on HP API"},

    
    ]

  return (
    
    <section className="pc-page">
      <h1 className="am-title">My projects :)</h1>

      <div className='cards'>
        {repos.map((repo, index) => ( 
          <div key={index}>
            
            <ProjectsCard 
              title={repo.name}
              desc1={`Stack: ${repo.stack}`}
              desc2={repo.description}
              photo={repo.photo}
              
             />
          </div> 
        ))}

      </div>

    </section>
  )
}

export default CardsMap;