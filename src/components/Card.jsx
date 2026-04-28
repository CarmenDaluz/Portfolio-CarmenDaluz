
function Card ({repo}) {

  return (
    <>
        <div className='card'>
            <h2> {repo.name} </h2>
            <img src= {repo.photo} alt={repo.name} className="photo"/>
            <p>Description {repo.description} </p>
            <p> {repo.stack} </p>
        </div>
    </>
  )
}

export default Card;