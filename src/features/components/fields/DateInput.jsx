import React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Form = styled.div`

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

export const DateInput = ({input: {value, onChange, onBlur, ...restInput}, placeholder, meta: {touched, error}, ...rest}) => {
  if (value) {
    value = moment(value, 'X')
  }
  return (

    <Form error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={onChange}
        {...restInput}
      />
      {touched && error && <Span basic color='red'>{error}</Span>}
    </Form>
  )
}

