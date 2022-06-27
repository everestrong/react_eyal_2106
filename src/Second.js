import React from 'react'

let count1 = 0
const Second = () => {

  count1 ++;
  console.log(count1)
  return (
    <div>
      <button onClick={Second}>{count1}</button>

    </div>
  )
}

export default Second