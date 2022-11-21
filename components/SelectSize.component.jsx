import React from 'react'

export const SelectSize = ({handleChange, newItem}) => {
  return (
    <select className="border border-black rounded-md p-1" name="size" value={newItem.size} onChange={(e)=> handleChange(e)}>
      <option value="" disabled> Size</option>
      <option value="XXS">XXS</option>
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
      <option value="XXXL">XXXL</option>
		</select>
  )
}
