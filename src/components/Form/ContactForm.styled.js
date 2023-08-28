import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;
export const Input = styled(Field)`
  padding: 14px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: #04273a;
  font-size: 20px;
`;
export const Button = styled.button`
  width: 200px;
  padding: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 20px;
  cursor: pointer;
  background-color: #136393;
  color: #fff; 
}
`;
export const ErrMessage = styled(ErrorMessage)`
  color: red;
  font-size: 20px;
`;
export const Title = styled.h2`
  color: #04273b;
  font-size: 40px;
  margin-bottom: 10px;
`;
