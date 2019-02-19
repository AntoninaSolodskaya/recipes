// import React from 'react';
// import { Field } from 'redux-form';
// import styled from 'styled-components';
// import Dropzone from 'react-dropzone';

// const Block = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin-bottom: 20px;
//   min-width: 500px;
//   @media(max-width: 450px) {
//     width: 100%;
//     justify-content: center;
// `;

// const Item = styled.p`
//   display: flex;
//   justify-content: center;
// `;

// class FileInput extends React.Component {
//   render() {
//       return (
//         <Block>
//           <Field name="image" component={props =>
//             <Dropzone
//               {...props.input}
//               multiple={false}
//               onDrop = {() => props.input.onChange}
//               style={{width : '500px', height : '65px', border : '2px dashed rgb(102, 102, 102)', borderRadius: '5px' }}>
//             >
//               <Item style={{ color: '#fff'}}>Try dropping a file here, or click to select file to upload.</Item>
//             </Dropzone>
//             } type="file"
//           />
//         </Block>
//       );
//     }
//   }

// export default FileInput;






import React, {Component} from 'react';

class FileInput extends Component {

  state = {
    image: null,
    fileName: null
  };

  displayPicture = event => {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        fileName: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { label, input } = this.props;
    delete input.value;
    return (
      <div>
        <label>{label}</label>
        <input 
          type="file"
          {...input}
          onChange={event => {
            this.displayPicture(event);
          }}
        />
        <div>
          <img alt="" src={this.state.pictureUrl} />
          <button  
           
          ></button>
        </div>
      </div>
    );
  }
}

export default FileInput;
