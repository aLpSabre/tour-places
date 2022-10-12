import Header from "./components/header.js"
import data from "./data.js"
import Cards from "./components/cards.js"


function App() {
  return (
    <div >
      <Header/>
      <h2 className="text-center p-3 ">Popular Tour Places</h2>
      <div className="container-fluid row justify-content-evenly align-items-center mx-auto gap-4 p-4 flex-wrap">
       {data.map(data =>{
        return(<Cards key={data.id} title={data.title} desc={data.desc} image={data.image} />)
       }) }

      </div>
    </div>
  );
}

export default App;
