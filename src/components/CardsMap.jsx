import Card from './Card.jsx'

function CardsMap () {
  const repos = [
    { name: "HP Searcher", stack: "react, CSS, JavaScript", photo: "/project1.png", description: "Searcher on HP API"},
    { name: "Bookstore API", stack: "react, CSS, JavaScript"} , 
    { name: "Project Board", stack: "react, CSS, JavaScript"},

    
    ]

  return (
    <>
      
      <div className='cards'>
        {repos.map((repo, index) => ( 
          <div key={index}>
            <Card repo={repo} />
          </div> 
        ))}

      </div>
    </>
  )
}

export default CardsMap;