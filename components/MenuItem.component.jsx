import React from 'react'

export const MenuItem =({text, property, handleSearch}) => {
  return (
    <div className={"bg-teal rounded-md"} onClick={()=>handleSearch(property, text)}>
      {text}
    </div>
  )
}
