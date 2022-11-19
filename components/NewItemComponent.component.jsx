import React from 'react'

export const NewItemComponent = ({handleSubmitFile,
  handleFileInputChange, fileInputState, handleFileInputChange2, fileInputState2, handleFileInputChange3, fileInputState3}) => {
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
              <button type="submit">
                  Submit
              </button>
          </form>
    </div>
  )
}
