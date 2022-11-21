export const SelectOccasion = ({handleChange, newItem}) => {
  return (
    <select className="border border-black rounded-md p-1" name="occasion" value={newItem.occasion} onChange={(e)=> handleChange(e)}>
      <option value="" disabled> Category</option>
      <option value="Activewear">Activewear</option>
      <option value="Blazer">Blazer</option>
      <option value="Jeans">Jeans</option>
      <option value="Dresses">Dresses</option>
      <option value="Pants">Pants</option>
      <option value="Tops">Tops</option>
      <option value="Shoes">Shoes</option>
      <option value="Rompers">Rompers</option>
      <option value="Jackets">Jackets</option>
      <option value="Sweaters">Sweaters</option>
      <option value="Shots">Shots</option>
      <option value="Suits">Suits</option>
		</select>
  )
}
