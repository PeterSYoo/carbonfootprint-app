import  { useState } from 'react';
import { NewItemComponent } from '../../components/NewItemComponent.component';

export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [fileInputState2, setFileInputState2] = useState("")
  const [fileInputState3, setFileInputState3] = useState("")
  const [previewSource, setPreviewSource] = useState("");
  const [previewSource2, setPreviewSource2] = useState("");
  const [previewSource3, setPreviewSource3] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFile2, setSelectedFile2] = useState("");
  const [selectedFile3, setSelectedFile3] = useState("");
  const [imgs, setImgs] = useState([])
  const [newItem, setNewItem] = useState({
    user: "6376ac9715b4440ede02092a",
    color: "",
    size: "",
    occasion: "",
    photos: [],
    article: "",
    available: true,
    price: "",
    description: "",
    name: ""
  })

  const handleChange = (e) => {
    const {name, value } = e.target;
    console.log(value, newItem.occasion)
    console.log(newItem.occasion, "here")
    setNewItem(prev => {
      return {
          ...prev,
          [name]: value
      }
    })
  }
  
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const handleFileInputChange2 = (e) => {
    const file = e.target.files[0];
    previewFile2(file);
    setSelectedFile2(file)
    setFileInputState2(e.target.value);

};

const handleFileInputChange3 = (e) => {
  const file = e.target.files[0];
  previewFile3(file);
  setSelectedFile3(file)
  setFileInputState3(e.target.value);

};

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setPreviewSource(reader.result);
    };
  };

  const previewFile2 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource2(reader.result);
    };
  };

  const previewFile3 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource3(reader.result);
    };
  };



  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile || !selectedFile2 || !selectedFile3) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
    };
    uploadImage(selectedFile);
    uploadImage(selectedFile2)
    uploadImage(selectedFile3)

    reader.onerror = () => {
        console.error('error');
    };
  };

  const uploadImage = async (file) => {
      const data = new FormData()
          console.log("image prop", file)
          data.append('file', file)
          data.append('upload_preset', 'eco-app')
      try {
        const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dkmbw4f6d/image/upload', {
          method: "POST",
          body: data
      })
      const parsedImg = await imageUpload.json()

      setImgs([...imgs, parsedImg.url])
      console.log(parsedImg)
          setFileInputState('');
          setFileInputState2('');
          setFileInputState3('');
          setPreviewSource('');
          setSelectedFile2('')
          setPreviewSource3('');
      } catch (err) {
          console.error(err);
      }
      
    console.log(imgs)

    
      
  };
  return (
      <div>
        <NewItemComponent
        handleChange={handleChange}
        handleSubmitFile={handleSubmitFile}
        handleFileInputChange={handleFileInputChange}
        fileInputState={fileInputState}
        handleFileInputChange2={handleFileInputChange2}
        fileInputState2={fileInputState2}
        handleFileInputChange3={handleFileInputChange3}
        fileInputState3={fileInputState3}
        newItem={newItem}
        />
          <h1 className="title">Upload an Image</h1>
          {previewSource && (
              <img
                  src={previewSource}
                  alt="chosen"
                  className='mb-8 mt-8 h-52'
              />
          )}

          {previewSource2 && (
              <img
                  src={previewSource2}
                  alt="chosen 2"
                  className='mt-8 h-52'
              />
          )}
          {previewSource3 && (
              <img
                  src={previewSource3}
                  alt="chosen 2"
                  className='mt-8 h-52'
              />
          )}
      </div>
  );
}