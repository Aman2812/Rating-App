import React,{useState} from 'react'
import FormData from './FormData'

const Main = () => {

  const [isClicked, setIsClicked] = useState(0)


  const handleDialog = () => {
    setIsClicked(1)
  }


  const closeCross = () => {
    setIsClicked(0);
  }


  const getData = () => {
    if(isClicked === 1){
      return <FormData x={closeCross}/>
    }
  }



  return (
    <div>
      <button onClick={handleDialog}>Open Dialog</button>
      {
        getData()
      }
    </div>
  )
}

export default Main;