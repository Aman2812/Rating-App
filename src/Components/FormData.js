import React, { useState } from 'react'
import './FormData.css'
import InputData from './InputData';

const FormData = (props) => {

  const [inputField, setInputField] = useState({
    type: "", 
    rating: "",
    effectiveDate: "",
    expirationDate: "",
    ratingSeason: "",
    secureMail: ""
  })

  const [store, setStore] = useState([]);

  const [idLelo, setIdLelo] = useState(0)



  const handleChange = (e) => {
    setInputField({...inputField, [e.target.name]:e.target.value})
  }


  const handleSubmit = () => {
      if(inputField.type !== "" && inputField.rating !== "" && inputField.effectiveDate !== "" && inputField.expirationDate !== "" && inputField.ratingSeason !== "" && inputField.secureMail !== ""){
        setStore([...store,{id:Math.random(), name:inputField}])
        setInputField({ type: "", rating: "", effectiveDate: "", expirationDate: "", ratingSeason: "", secureMail: ""})
      }
  }


  const handleClick = (id) => {
    store.map((data)=>{
        if(data.id === id){
            setInputField(data.name)
        }
        return '';
    })
    setIdLelo(id)
  }


  const handleDelete = () => {
    const temp = store.filter((j)=>{
        return j.id !== idLelo
    })
    setStore(temp);
    setIdLelo(0);
    setInputField({ type: "", rating: "", effectiveDate: "", expirationDate: "", ratingSeason: "", secureMail: ""})
  }


  const handleUpdate = () => {
    const temp = store.map((k)=>{
      if(k.id === idLelo){
        return {id:idLelo, name:inputField}
      }
      return k
    })
    setStore(temp)
    setIdLelo(0);
    setInputField({ type: "", rating: "", effectiveDate: "", expirationDate: "", ratingSeason: "", secureMail: ""})
  }


  
  const handleClear = () => {
      setStore([]);
  }


  return (
    <div className='main'>
        <h1>Quality Measurement/Rating</h1>
        <button className='btn-x' onClick={props.x}><strong>X</strong></button>

      {/* <-----------------------------------------------------------------------> */}
        <div className='box1'>
            <table>
                <thead>
                  <tr>
                  <th>Type</th>
                  <th>Rating</th>
                  <th>Effective Date</th>
                  <th>Expiration Date</th>
                  <th>Rating Reason</th>
                  <th>Secure Mail</th>
                  </tr>
                </thead>


                {
                    store.map((item)=>{
                        return (
                        <tbody key={item.id} onClick={()=>handleClick(item.id)} className={item.id === idLelo?'selected':''}>
                            <tr>
                            <td>{item.name.type}</td>
                            <td>{item.name.rating}</td>
                            <td>{item.name.effectiveDate}</td>
                            <td>{item.name.expirationDate}</td>
                            <td>{item.name.ratingSeason}</td>
                            <td>{item.name.secureMail}</td>
                            </tr>
                      </tbody>
                        )
                    })
                }

            </table>
        </div>
      {/* <-----------------------------------------------------------------------> */}




      {/* <-----------------------------------------------------------------------> */}
        <div className='box2'>

        {/* left side code ki jagah apan props use kiye hai */}
        <InputData pass1={inputField} pass2={handleChange}/>

        {/* <-----------------------------------------------------------------------> */}
            <div className='box2-btn'>
              <button onClick={handleSubmit} disabled={idLelo}>Add</button><br/>
              <button onClick={handleUpdate} disabled={!idLelo}>Update</button><br/>
              <button onClick={handleDelete} disabled={!idLelo}>Delete</button><br/>
              <button onClick={handleClear} disabled={idLelo}>Clear</button>
            </div>
        {/* <-----------------------------------------------------------------------> */}


        </div>
      {/* <-----------------------------------------------------------------------> */}

    </div>
  )
}

export default FormData;