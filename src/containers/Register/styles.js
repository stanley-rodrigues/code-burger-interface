import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: 70%;
`
export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 65%;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;

    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`
export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  margin-bottom: 5px;
  margin-top: ${props => (props.error ? '12px' : '28px')};
`
export const Input = styled.input`
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  width: 391.42px;
  height: 38.32px;
  border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
  padding-left: 10px;
`

export const SignUpLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  justify-content: flex-end;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
  color: #cc1717;
`
