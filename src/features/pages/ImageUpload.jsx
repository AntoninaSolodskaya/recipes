import React from 'react';

class ImageUpload extends React.Component {
  state = {
    file: '',
    imagePreviewUrl: ''
  };
  

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('handle uploading-', this.state.file);
  // }

  handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let imagePreview = null;
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} alt="" />);
    } else {
      imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
       
        <input className="fileInput" 
          type="file" 
          onChange={(e)=>this.handleImageChange(e)} />
      
        <div className="imgPreview">
          {imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
  
