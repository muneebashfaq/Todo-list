import React from 'react'

function Show(props) {
    return (
        <>
             <div className="col-sm-4 my-2">
    <div className="card" style={{width:"300px"}}>
      <div className="card-body">
        <h5 className="card-title">{props.name[0]}</h5>
        <h6 className="card-title">{props.name[1]}</h6>

        <a  className="btn btn-primary btn-sm" onClick={()=>{
            props.delet(props.id)
        }}>Delete</a>
      </div>
    </div>
  </div>


      </>
    )
}

export default Show
