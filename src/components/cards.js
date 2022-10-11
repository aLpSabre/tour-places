import "./cards.css"
function Cards ({title,desc,image}){
  return(
    <div className="card col-12 col-lg-3 col-md-4 bg-dark p-2">
      <h5 className="text-white">{title}</h5>
      <img src={image} alt="image" />
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>

  )
}

export default Cards