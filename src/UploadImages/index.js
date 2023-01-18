import React, { useState } from 'react';
import "./style.css";

function UploadImage() {
    const [previewImage, setPreviewImage] = useState(null);
    const [previewErrorImage, setPreviewErrorImage] = useState("");
 
    const [displayImage, setDisplayImage] = useState(null);

    const imgTypes = ["image/png", "image/jpeg"];
    const onImgChange = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile) {
            if(selectedFile&&imgTypes.includes(selectedFile.type)) {
                setPreviewImage(URL.createObjectURL(selectedFile));
                setPreviewErrorImage("");
            } else {
                setPreviewImage(null);
                setPreviewErrorImage("please choose valid image jpeg or png");
            }
        } else {
            console.log("Please select your file");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("file has been uploaded");
        setDisplayImage(previewImage);
        setPreviewErrorImage('');
    }
  return (
    <div className='wrapper'>
        <h1>UploadImage</h1>
        <form className='form-group form' onSubmit={handleSubmit}>
            <input type="file" className='form-control' onChange={onImgChange} />
            {/* <br /><br /> */}
            <button type="submit" className='btn btn-md btn-success'>Upload</button>
        </form>
        <br/>
        {previewErrorImage&&<div className='err-msg'>{previewErrorImage}</div>}
        <div className="display-and-preview-box">
            <div className='preview-box'>
                {previewImage && <img src={previewImage} alt='preview' />}
            </div>

            <div className="display-box">
                {displayImage && <img src={displayImage} alt='display' />}
            </div>
        </div>
    </div>
  )
}

export default UploadImage;