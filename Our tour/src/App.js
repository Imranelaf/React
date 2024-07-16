import './App.css';
import data from "./data";
import { useState } from 'react';

function App() {

  const [items, setItems] = useState(data);
  const [showAll, setShowAll] = useState(false);

 function removeItem(id){
  const updated = items.filter(item => item.id !== id);
  setItems(updated);     
 };

 function showMore(id) {
  setShowAll(prev => ({
    ...prev,
    [id]: !prev[id] 
  }));
}

  return (
    <div className='theTitle'>
      {items.length === 0 ? <button className='refrech' onClick={()=>setItems(data)}>REFRECH</button> : <h1>Our Tour</h1>}
      <div className='container'>
        
        {items.map((e) => {
          return (
            <div className='card' key={e.id}>
              <div className='img' style={{ backgroundImage: `url(${e.image})` }}><p>{e.price}</p></div>
              <h3>{e.title}</h3>
              <p>{showAll[e.id] ? e.para : e.para.slice(0, 199)} <h4 onClick={()=>showMore(e.id)}>{!showAll[e.id] ? "Show more": "Show less"}</h4></p>
              <button className="btn" onClick={() => removeItem(e.id)}>Not Interested</button>
            </div>)
             

        })}
       

      </div>


    </div>
  )
}



export default App;
