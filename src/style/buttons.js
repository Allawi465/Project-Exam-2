import styled from 'styled-components';

export const Login = styled.button`
  background: transparent;
  padding: 6px 20px;
  color: black;
  display: inline-block;
  border-style: none;
  border-width: 1px;
  border-radius: 5px;
  transition: color 300ms ease, background-color 300ms ease;
  text-decoration: none;
  font-weight: 500;
  :hover {
    background: ${(props) => props.theme.color.pink};
    color: black;
  }
`;


export const SignUp = styled(Login)`
background: ${(props) => props.theme.color.lightBlack};
color: white;
`;