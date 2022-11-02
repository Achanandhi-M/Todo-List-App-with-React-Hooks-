import './App.css';
import { useState } from 'react';

function App() {
// State hook-'useState'

const[newItem,setNewItem]=useState("");
 const[items,setItems]=useState([]);

// functions
function addItem() {

  if(!newItem){
    alert("Enter an item");
    return;
  }
  const item ={
    id:Math.floor(Math.random()*1000),
    value:newItem
  };

  setItems(oldList=>[...oldList,item]);
  setNewItem("");
}

function deleteItem(id){
const newArray=items.filter(item=>item.id !==id);
setItems(newArray);
}


  return (
    <div class="App">
      <h1>Todo List </h1>


    <input
    type="text" 
    placeholder="List your Idea's..."
    onChange={e=>setNewItem(e.target.value)}
  />

<button onClick={()=>addItem()}>Add</button>

<ul>
{items.map(item=>{
return(

  <li key={item.id}>{item.value}<button className='delete-btn' onClick={()=> deleteItem(item.id)}>❌</button></li>
)


})}




</ul>
    </div>
  )
}
export default App;
