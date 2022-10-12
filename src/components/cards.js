import "./cards.css"
function Cards ({title,desc,image}){
  return(
    <div className="card ">
      <h5 className="text-white">{title}</h5>
      <img src={image} alt="image" />
      <div className="description">
        <p>{desc}</p>
      </div>
    </div>

  )
}

export default Cards