export const SelectColor = ({handleChange, newItem}) => {
  return (
    <select className="border border-black rounded-md p-1" name="size" value={newItem.color} onChange={(e)=> handleChange(e)}>
      <option value="" disabled> Color</option>
      <option value="Black">Black</option>
      <option value="White">White</option>
      <option value="Gold">Gold</option>
      <option value="Silver">Silver</option>
      <option value="Brown">Brown</option>
      <option value="Red">Red</option>
      <option value="Orange">Orange</option>
      <option value="Yellow">Yellow</option>
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
      <option value="Purple">Purple</option>
      <option value="Pink">Pink</option>
		</select>
  )
}
