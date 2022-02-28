import React from 'react'

const InputData = (props) => {
  return (
    <div className='box2-form'>

    <table>
      <tbody>
      <tr>
        <td><label>Type</label></td>
        <td>
          <select value={props.pass1.type} name="type" onChange={props.pass2}>
             <option value="">Select a Type</option>
             <option value="Type1">Type-1</option>
             <option value="Type2">Type-2</option>
             <option value="Type3">Type-3</option>
          </select>
        </td>
      </tr>



     <tr>
      <td><label>Rating</label></td>
      <td>
        <input type="text" placeholder='1-5' value={props.pass1.rating} name="rating" onChange={props.pass2}/>
      </td>
    </tr>


    <tr>
      <td> <label>Effective Date</label></td>
      <td>
        <input type="date" value={props.pass1.effectiveDate} name="effectiveDate" onChange={props.pass2}/>
      </td>
    </tr>


    <tr>
      <td><label>Expiration Date</label></td>
      <td>
        <input type="date" value={props.pass1.expirationDate} name="expirationDate" onChange={props.pass2}/>
      </td>
    </tr>


    <tr>
      <td><label>Rating Reason</label></td>
      <td>
        <input type="text" placeholder='Rating Reason' value={props.pass1.ratingSeason} name="ratingSeason" onChange={props.pass2}/>
      </td>
    </tr>



    <tr>
      <td><label>Secure Mail</label></td>
      <td>
        <input type="text" placeholder='xxxx@accenture.com' value={props.pass1.secureMail} name="secureMail" onChange={props.pass2}/>
      </td>
    </tr>
      </tbody>
    </table>

  </div>

  )
}

export default InputData