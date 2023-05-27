import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  height: 100vh;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #d7dfe9;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 28px;
  font-family: 'Open Sans';
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 6px;
`

export const InputElement = styled.input`
  font-size: 12px;
  color: #1e293b;
  border: 1px solid #5a7184;
  padding: 4px;
`
export const Select = styled.select`
  font-size: 12px;
  color: #1e293b;
  border: 1px solid #5a7184;
  padding: 4px;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 14px;
  padding: 20px;
  border: none;
  border-radius: 4px;
`

export const BgContainer = styled.div`
  margin: 15px;
  width: 55%;
  align-self: stretch;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Text = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  color: #ffffff;
  text-align: center;
`
