import React from 'react'
import { useState, useEffect } from 'react'
import '../index.css'
import Show from './Show'
function Body() {
  var mybio = [
    
  ]
  const [state, setstate] = useState({ name: "", number: "" })
  const [store, setstore] = useState(mybio)
  const [input, setinput] = useState(0)

  const onchange = (e) => {
    setstate({ ...state, [e.target.name]: [e.target.value] })
 
  }
  const sumbit_val = (e) => {
    e.preventDefault()
    mybio = [state.name, state.number ]


    
    setstore((preval) => {
      return [...preval, mybio]
    })

    setstate({ name: "", number: "" })
    setinput(input+1)
  
  }
  const delet = (id) => {
    console.log(id)
    setstore((olditem) => {

      return olditem.filter((aryElm, index) => {
        if(id !== index){
          console.log(index)
        }
        return id !== index
      })

    })

  }

  //this is use for sorting an 2-D array
  // useEffect(() => {
  // store.sort((a,b) => a[1] - b[1]);
  // }, [input])
  return (
    <div>
      <div className="text-center form_class">
        <form onSubmit={sumbit_val}>
          <div className="mb-3 my-3">
            <label htmlFor="name_user" className="form-label">Enter Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Muneeb" onChange={onchange} value={state.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="number_user" className="form-label" >Enter Phone Number</label>
            <input type="text" className="form-control" id="number" placeholder="03248406920" name="number" onChange={onchange} value={state.number} />
          </div>

          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>

      <div className="container">

        <div className="row my-4">
          {store !== "" ?
            store.map((val, index) => {
              return <Show name={val} key={index} id={index} delet={delet} />
            }) : "Not Record To Show You"}

        </div>
      </div>




    </div>
  )
}

export default Body
