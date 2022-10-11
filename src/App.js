import Header from "./components/header.js"
import data from "./data.js"
import Cards from "./components/cards.js"


function App() {
  return (
    <div >
      <Header/>
      <h2 className="text-center p-3 text-secondary">Popular Tour Places</h2>
      <div className="container-fluid row justify-content-center align-items-center mx-auto gap-5 p-4">
       {data.map(data =>{
        return(<Cards key={data.id} title={data.title} desc={data.desc} image={data.image} />)
       }) }

      </div>
    </div>
  );
}

export default App;
