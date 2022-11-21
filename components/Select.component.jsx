import React from 'react'

export const SelectSize = ({handleChange, newItem}) => {
  return (
    <select name="size" value={sortValue} onChange={(e)=> handleChange(e)}>
      <option value="XXS">XXS</option>
      <option value="XS">xs</option>
      <option value="S">Category</option>
      <option value="M">Price</option>
      <option value="L">Color</option>
      <option value="XL">Color</option>
      <option value="XXL">Color</option>
      <option value="XXXL">Color</option>
		</select>
  )
}
