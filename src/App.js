import React, { useState } from "react";
import Todolist from "./Todolist";

const App =() =>{

  const [inputList, setInputList] = useState("");
  const [items, setItems] =useState([]);
  
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }

  const listOfItems =() =>{
      setItems((oldItems) =>{
        return [...oldItems, inputList];
      });
      setInputList('');
  }

  const deleteItems = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElm, index) =>{
         return index !== id;
      })
    })
}

  //  main JSX part return for display
  return(
    <>
     <div className="main_div">
     <div className="center_div">
     <h1> Rambo </h1>

      <br />
      <h1> To DO List</h1>
      <br />
      <input type="text" placeholder="Add a Items"
        onChange={itemEvent}
        value= {inputList}
      />

      <button onClick={listOfItems}> + </button>

      <ol>

        {/* <li >{inputList}</li> */}
         {items.map((itemval, index) =>{
         return <>  
         <Todolist
          key={index}
           id={index}
            text={itemval}
            onSelect= {deleteItems}

            />
            </>

         })}

      </ol>

     </div>

     </div>
    </>
  )
}

export default App;