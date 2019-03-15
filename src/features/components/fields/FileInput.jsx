import React from 'react';
import styled from 'styled-components';
import cuid from 'cuid';
import firebase from '../../../app/config/firebase';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
  @media(max-width: 450px) {
    width: 100%;
    justify-content: center;
`;

const Label = styled.label`
  width: 30%;
  min-width: 110px;
  color: #ffffff;
  @media(max-width: 450px) {
    width: 100%;
    text-align: center;
  }
`;

 const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const Input = styled.input`
  min-height: 35px;
  width: 80%;
  margin: 6px 0 10px 0;
  padding: 0 15px;
  background-color: initial;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #ffffff;
`;

const SpanWrap = styled.div`
  width: 65%;
  border-top: 2px solid #F44336;
`;

const Span = styled.span`
  color: #F44336;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-family: Arial,sans-serif;
  letter-spacing: 1.2px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 25px;
`;

const storageService = firebase.storage();
const storageRef = storageService.ref();
let selectedFile;
let imageName = cuid();

export const uploadImage = (e) => {
  selectedFile = e.target.files[0];
  const image = storageRef.child(`images/${imageName}`);
  const uploadTask = image.put(selectedFile); 
    
  uploadTask.on('state_changed', (snapshot) => {
    let db = firebase.firestore();
    let dbRef = db.collection("images").doc(`${imageName}`);
    let setData = dbRef.set({
      id: imageName,
      downloadURL: uploadTask.snapshot.downloadURL
    })
    console.log(setData);
    let downloadURL = storageRef.child(`images/${imageName}`).getDownloadURL().then(function(url) {    
      console.log(url);
    })
    
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('success');
    });
  }

export const FileInput = ({ input, label, paragraph, meta: { touched, error }, ...inputProps }) => { 
  
    return (
      <Block>
      <Label>{label}</Label>
      <Section>
        <Paragraph>{paragraph}</Paragraph>
        <Input {...inputProps} type="file" onChange={uploadImage} />
        
        {touched && error && 
          <SpanWrap>
            <Span>{error}
              <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
            </Span>
          </SpanWrap>
        }
      </Section>
    </Block>	
    );
  }

