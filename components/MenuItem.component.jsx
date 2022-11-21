import React from 'react'

export const MenuItem =({text, val, handleSearch}) => {
  return (
    <div className={"bg-teal rounded-md"} onClick={()=>handleSearch(text, val)}>
      {text}
    </div>
  )
}
