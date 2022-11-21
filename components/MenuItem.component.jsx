import React from 'react'

export const MenuItem =({text, property, handleSearch}) => {
  return (
    <div className={"bg-teal rounded-md  cursor-pointer"} onClick={()=>handleSearch(property, text)}>
      {text}
    </div>
  )
}
