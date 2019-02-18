import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { required } from '../validation/index';

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

const Hint = styled.p`
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #ffffff;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border: none;
  font: normal 14px/2 "varela-round", Helvetica, sans-serif;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  color: #ffffff;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  flex: 1;
  width: 100%;
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

const AddBtn = styled.button`
  border: none;
  background: inherit;
  padding: 20px 0;
  color: #B67D54;
  text-align: center;
`;

const DelBtn = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #ffffff;
  font-size: 30px;
  background: initial;
  color: #ffffff;
  margin-left: -75px;
  margin-bottom: 14px;
  line-height: 1px;
  @media(max-width: 450px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 40px;
  @media(max-width: 450px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const NumBlock = styled.div`
  width: 67%;
  @media(max-width: 450px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;


export const renderField = ({ input, label, type, hint, paragraph, className, meta: { touched, error } }) => (
  <Block>
    <Label>{label}</Label>
    <Section>
      <Paragraph>{paragraph}</Paragraph>
      <Input {...input} placeholder='' type={type} className={className} />
      {touched && error && 
        <SpanWrap>
          <Span>{error}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
          </Span>
        </SpanWrap>
      }
      <Hint>{hint}</Hint>
    </Section>
  </Block>
);

export const renderTextarea = ({ input, label, meta: { touched, error } }) => (
  <Block>
    <Label>{label}</Label>
    <textarea {...input} placeholder="" type="textarea" rows="10" colls="40" />
    {touched && error &&
      <SpanWrap>
        <Span>{error}
          <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
        </Span>
      </SpanWrap> 
    }
  </Block>
);

export const renderNumberField = ({ input, label, type, hint, paragraph, className, meta: { touched, error } }) => (
  <Block>
    <Label>{label}</Label>
    <Section>
      <Paragraph>{paragraph}</Paragraph>
      <NumBlock>
        <Input {...input} placeholder='' type={type} className={className} />
      </NumBlock>
      {touched && error && 
        <SpanWrap>
          <Span>{error}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
          </Span>
        </SpanWrap>
      }
      <Hint>{hint}</Hint>
    </Section>
  </Block>
);

export const customInput = ({ input, type, className, meta: { touched, error } }) => (
  <Wrapper>
    <Input {...input} placeholder='' type={type}  className={className} />
      {touched && error && 
        <SpanWrap>
          <Span>{error}
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
          </Span>
        </SpanWrap>
      }
  </Wrapper> 
);

export const step = ({ fields }) => (
  <TextBlock>
    {fields.map((name, index) => ( 
      <Wrap key={index}>
        <Paragraph>Steps:</Paragraph>
        <Container>
          <Field
          name={name}
          type="text"
          component={customInput}
          autoFocus
          validate={[required]}
        />
        <DelBtn type="button" onClick={() => fields.remove(index)}>
          &times;
        </DelBtn>
        </Container>
      </Wrap>
    ))}
    <AddBtn type="button" onClick={() => fields.push()}>
      AddBtn
    </AddBtn>
  </TextBlock>
);

export const ingredients = ({ fields, meta: { touched, error, submitFailed }}) => {
  return (
    <TextBlock className="block">
      {fields.map((name, index) => (
        <Wrap key={index}>
          <Container>
            <ColumnRight>
              <Paragraph>Ingredient:</Paragraph>
              <Field
                name={`${name}.title`}
                component={customInput}
                type="text"
                className="ingredient"
                validate={[required]}
              />
            </ColumnRight>
            <ColumnLeft>
              <Paragraph>Amount:</Paragraph>
              <Field
                name={`${name}.amount`}
                component={customInput}
                type="text"
                className="amount"
                validate={[required]}
              />
            </ColumnLeft>
          </Container>
          <DelBtn type="button" className="hide" onClick={() => fields.remove(index)}>
            &times;
          </DelBtn> 
        </Wrap>
      ))}
      <AddBtn type="button" onClick={() => fields.push()}>
        AddBtn
      </AddBtn>
    </TextBlock>
  );
}

export const SelectInput = ({ input, name, label, children, meta: { touched, error } }) => (
  <SelectWrapper>
    <select {...input} name={name} label={label}>
      {children}
    </select>
    {touched && error && 
      <SpanWrap>
        <Span>{error}
          <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAMKSURBVGhD7VrbahNRFM2zd/H2FyokM6ElEJzTSgV9UYtSxVfx8uA/1Ih/IVQLVT+i1Yd619f6A0at9DIT8UHace1xV0jcZzJncs4klFmwoEz22XutOfeklRIlShSHaHLseBT405HyWh3lPe8o/wX+fk/sBP4SPaPPwsC/HE6dPsbNRgPrzVOHIP4u+C5S/jbEx1lIsTD1mtpSDk5XPBIDyn+ItxxKQo0YeJvUU4UbQvEbGCrf/xM0IPFi2jA0w2Xc4VuzuQ8GnkgirBI1qBaXtYsoqJ/A2/ogFnZAmnPWFwRKiLf0WSqo5blG/Hthvov0TIzVc8WamdXx8f15euLnhTNxvLrWRXomxaaRVrb4fHUPy8kP9MS8VKAfbRkhwswcy8mHKKhdlxJnoU0jxNyr2UajcXiQJda+Eb+da5/5u9nJSbPQthFiFHgPWF42kPNBd2wXRjBCNox6hc4/YiIDOjEChqp2m2X2B4bVGymJCV0ZwfB6xTLTkRzFDU6xOroz4m+FzepRlqsHAqelBKZ0ZYQYqvollqsHrQxSY1O6NIIRc5/l6oHAZ70N89ClEaxeCyxXDyy7L8XGhnRsZInl6oE58klsbEiXRqDxI8vVg4KkxqYcupFdM7QQuDsmO47LLbGxIV0awdCaZbl6IGj0N8SJ2kWWqwdt/6N+RNlU3hGWmw66J0tJTOjQyDLL7A8E35GSGPHsWPzr3s0u0jMx1oCh8m6xzP5ILla4xEiJhsx14+uurcOjTWZarXrB192vUsJMtPMF3T/CxJcfU/4BlmcGTPprUtIstD3ZI1W7wrLyAUke9ybNQptGsB08Yjn5sT15cm+e5diWEapt5StTQvIltvJXeoukctS+xN4BJcSEeysUc0KqZd3EDujHF3T1nFTYJmlOWBtOaYCZGRRrSyIGIS2xUVC/ymWKAe0zMNSiHzIlUUbEKYI2u7WJ6kFOXzwSQzibgcvglihUIMVSGzo7DdWABLoC0F0BAmfxlp+itxbRa/wPA94iPaPPKCbzUbxEiRIWUKn8ASG94vUsQhJfAAAAAElFTkSuQmCC"></Img>
        </Span>
      </SpanWrap>
    }
  </SelectWrapper> 
);
