import  { useState } from 'react';
import { NewItemComponent } from '../../components/NewItemComponent.component';
export default function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  // const [fileInputState2, setFileInputState2] = useState("")
  // const [fileInputState3, setFileInputState3] = useState("")
  const [previewSource, setPreviewSource] = useState("");
  // const [previewSource2, setPreviewSource2] = useState("");
  // const [previewSource3, setPreviewSource3] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  // const [selectedFile2, setSelectedFile2] = useState("");
  // const [selectedFile3, setSelectedFile3] = useState("");
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
    setNewItem(prev => {
      return {
          ...prev,
          [name]: value
      }
    })
  }

  

  const newItempAPIcall = async () =>{
    try {

      const data = new FormData()
      data.append('file', selectedFile)
      data.append('upload_preset', 'eco-app')

      const imageUpload = await fetch('https://api.cloudinary.com/v1_1/dkmbw4f6d/image/upload', {
          method: "POST",
          body: data
      })
      const parsedImg = await imageUpload.json()
      newItem.photos = [parsedImg.url]

      const request = await fetch(`http://localhost:3000/api/clothes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
    })
    const res = await request.json()
    console.log(newItem, res)
    if (res.status !== 404){
        setFileInputState('');
        // setFileInputState2('');
        // setFileInputState3('');
        setPreviewSource('');
        // setSelectedFile2('')
        // setPreviewSource3('');
        setNewItem({
          user: "6376ac9715b4440ede02092a",
          color: "",
          size: "",
          occasion: "",
          photos: [],
          article: "",
          available: true,
          price: "",
          description: "",
          name: "",
          brand: ""
        })
    }
    console.log(res, "")
    } catch (error) {
      console.log(error)
      
    }
  }


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);

  };

//   const handleFileInputChange2 = (e) => {
//     const file = e.target.files[0];
//     previewFile2(file);
//     setSelectedFile2(file)
//     setFileInputState2(e.target.value);

// };

// const handleFileInputChange3 = (e) => {
//   const file = e.target.files[0];
//   previewFile3(file);
//   setSelectedFile3(file)
//   setFileInputState3(e.target.value);
  
// };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setPreviewSource(reader.result);
    };
  };

  // const previewFile2 = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource2(reader.result);
  //   };
  // };

  // const previewFile3 = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     setPreviewSource3(reader.result);
  //   };
  // };



  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
    };
    

   
    
    newItempAPIcall()

    reader.onerror = () => {
        console.error('error');
    };
  };

  
  return (
      <div className='flex flex-col w-5/6 mx-auto'>
        {!!previewSource ? <img
                  src={previewSource}
                  alt="chosen"
                  className=' bg-gray-300 w-80 h-80 my-8 mx-auto '
              />
           : 
           <div className='bg-gray-300 w-80 h-80  my-8 mx-auto'>

           </div>
            }
        <NewItemComponent
        handleChange={handleChange}
        handleSubmitFile={handleSubmitFile}
        handleFileInputChange={handleFileInputChange}
        fileInputState={fileInputState}
        // handleFileInputChange2={handleFileInputChange2}
        // fileInputState2={fileInputState2}
        // handleFileInputChange3={handleFileInputChange3}
        // fileInputState3={fileInputState3}
        newItem={newItem}
        />
      </div>
  );
}