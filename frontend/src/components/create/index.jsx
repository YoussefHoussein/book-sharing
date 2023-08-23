import React, { useRef, useState } from 'react'
import './style.css'
import axios from 'axios'
const Create = () => {
    const [data ,setData] = useState({
        name : "",
        author : "",
        review : "",
    })
    const [error ,SetError] = useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const imageContainerRef = useRef(null);

    const handleImageClick = () =>{
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setSelectedImage(e.target.result);
            
            if (imageContainerRef.current) {
              imageContainerRef.current.style.backgroundImage = `url(${e.target.result})`;
            }
          };
          reader.readAsDataURL(file);
        }
      };
    const checkData = () => {
        const name = data.name
        const author = data.author
        const review = data.review
        if(!name || !author || !review || ! selectedImage){
            SetError("Please fill all fields")
            setData({
                name:"",
                author: "",
                review: ""
            })
        }
        else{
            handleInsert()
        }
    }
    const handleInsert = async () => {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        };
        const dataToInsert = {
            name: data.name,
            author: data.author,
            review: data.review,
            picture: selectedImage
        }
        try{
            const response = await axios.post("http://127.0.0.1:8000/books/insertbook",dataToInsert,config)
            setData({
                name:"",
                author: "",
                review: ""
            })
            setSelectedImage(null)
            if (imageContainerRef.current) {
                imageContainerRef.current.style.backgroundImage = `url(${null})`;
              }
        }
        catch(err){
            SetError(err)
        }
        
    }
  return (
    <div className='create-container flex column spaceEvenly'>
        {error ? <h2 className='create-warning'>{error}</h2> : <h2 className='create-title'>Share new Book</h2>}
        
        <div className="image-input-container flex center">
            <input type="file" name="" className='input-image' ref={fileInputRef} onChange={handleImageChange}/>
            <div className="image flex center pointer" ref={imageContainerRef} onClick={handleImageClick}>
                {selectedImage ?  "" : "Upload Image"}
                
            </div>
        </div>
        <div className="create-input-container flex column spaceBetween">
            <input type="text" name='name' value={data.name} className="create-input create-input-text" placeholder='Name' onChange={handleChange}/>
            <input type="text" name='author' value={data.author} className="create-input create-input-text" placeholder='Author' onChange={handleChange}/>
            <input type="text" name='review' value={data.review} className="create-input create-input-text" placeholder='Short Review' onChange={handleChange}/>
            <button className='create-input create-button' onClick={checkData}>Share</button>
        </div>
    </div>
  )
}

export default Create