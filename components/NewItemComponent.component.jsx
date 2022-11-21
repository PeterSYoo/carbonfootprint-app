import { SelectSize } from "./SelectSize.component"
export const NewItemComponent = ({handleSubmitFile, handleFileInputChange, fileInputState, handleChange, newItem}) => {
  return (
    <div>
    <form onSubmit={handleSubmitFile} className="grid gap-2">            
        <input
        accept="image/png, image/jpeg"
        type="file"
        name="image"
        onChange={handleFileInputChange}
        value={fileInputState}
        />
        {/* <br/> 
        <label htmlFor="image2"> back pick</label>               
        <input
          accept="image/png, image/jpeg"
          type="file"
          name="image2"
          onChange={handleFileInputChange2}
          value={fileInputState2}
        />
        <br/>
        <label htmlFor="image3"> side pick</label>               
        <input
          accept="image/png, image/jpeg"
          type="file"
          name="image3"
          onChange={handleFileInputChange3}
          value={fileInputState3}
        /> */}
        <input 
        className="border border-black rounded-md p-1"
        type="text"
        name="name"
        value={newItem.name}
        placeholder="Item Name"
        onChange={handleChange}/>
        <input
        className="border border-black rounded-md p-1"
        type="number"
        name="price"
        placeholder="Rental Price"
        value={newItem.price}
        onChange={handleChange}/>
        <textarea name="description" id="" cols="30" rows="3"
        className="border border-black rounded-md p-1"
        value={newItem.description}
        onChange={handleChange}
        placeholder="Description"
        />
        <input type="text"
        className="border border-black rounded-md p-1"
        name="color"
        value={newItem.color}
        placeholder="Color"
        onChange={handleChange}/>
        <SelectSize
        newItem={newItem}
        handleChange={handleChange}
        />
        {/* <input
        className="border border-black rounded-md p-1"
        type="text"
        name="size"
        placeholder="Size"
        value={newItem.size}
        onChange={handleChange}/> */}
        <input
        className="border border-black rounded-md p-1"
        type="text"
        name="occasion"
        placeholder="Category"
        value={newItem.occasion}
        onChange={handleChange}/>
        <input
        className="border border-black rounded-md p-1"
        type="text"
        name="Brand"
        placeholder="Brand"
        value={newItem.brand}
        onChange={handleChange}/>
        <button type="submit" className=" font-bold w-full border border-black rounded-md py-4 mb-32">
            Share Your Clothes
        </button>
    </form>
    </div>
  )
}
