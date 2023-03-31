import React from 'react'
import FORM from './components/FORM/FORM'
import Child from './components/STATE_LIFTING/Child'

export default function App() {
  const data = "I am from parent (app)"

  const handleChildData = (childData) => {
    console.log(childData);
  }

  return (
    <div>
       <Child data2={data} onChildData={handleChildData}/>
    </div>
  )
}
