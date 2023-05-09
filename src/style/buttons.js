import styled from 'styled-components';

export const LoginBtn = styled.button`
  background: transparent;
  padding: 0.375rem 0.75rem;
  color: #000000;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  :hover {
    background: ${(props) => props.theme.color.lightpink};
    color: ${(props) => props.theme.color.darkPurple};
  }
`;

export const SignUpBtn = styled(LoginBtn)`
  background: ${(props) => props.theme.color.purple};
  color: #ffffff;
`;

export const ModelBtn = styled(SignUpBtn)`
  background: ${(props) => props.theme.color.lightBlack};
`;

export const ModelLoadingBtn = styled(ModelBtn)`
  background: ${(props) => props.theme.color.purple};
`;

export const HeroBtn = styled(SignUpBtn)`
  background: #fdfdfd;
  color: ${(props) => props.theme.color.purple};
  border-radius: 49px;
  :hover {
    background: ${(props) => props.theme.color.purple};
    color: #ffffff;
  }
`;

export const BookBtn = styled(SignUpBtn)`
  background: ${(props) => props.theme.color.purple};
  color: #ffffff;
  width: 156px;
  border-radius: 72px;
  font-size: 20px;
  height: 48px;
`;
