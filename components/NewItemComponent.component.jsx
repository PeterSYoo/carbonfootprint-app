export const NewItemComponent = ({handleSubmitFile, handleFileInputChange, fileInputState, handleFileInputChange2, fileInputState2, handleFileInputChange3, fileInputState3, handleChange, newItem}) => {
  return (
    <div>
    <form onSubmit={handleSubmitFile} className="form">
      <h3>Make sure you do not select the same image more than once otherwise you will not be able to upload the pictures</h3>
      <label htmlFor="image1"> front pick</label>               
        <input
        accept="image/png, image/jpeg"
        type="file"
        name="image"
        onChange={handleFileInputChange}
        value={fileInputState}
        />
        <br/> 
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
        />
        <br />
        <input type="text"
        name="color"
        value={newItem.color}
        placeholder="color"
        onChange={handleChange}/>
        <br />
        <input
        type="text"
        name="size"
        placeholder="size"
        value={newItem.size}
        onChange={handleChange}/>
        <br />
        <input
        type="text"
        name="occasion"
        placeholder="occasion"
        value={newItem.occasion}
        onChange={handleChange}/>
        <br />
        <input
        type="number"
        name="price"
        placeholder="price"
        value={newItem.price}
        onChange={handleChange}/>
        <br />
        <textarea name="description" id="" cols="30" rows="10"
        value={newItem.description}
        onChange={handleChange}
        placeholder="description"
        />
        <button type="submit">
            Submit
        </button>
    </form>
    </div>
  )
}
