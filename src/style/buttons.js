import styled from 'styled-components';

export const LoginBtn = styled.button`
  background: transparent;
  padding: 6px 10px;
  color: #000000;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: .25rem;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.01em;
  transition: all color 300ms ease, background-color 300ms ease;
  :hover {
    background: ${(props) => props.theme.color.purple};
    color: #ffffff;
  }
`;

export const SignUpBtn = styled(LoginBtn)`
  background: ${(props) => props.theme.color.lightBlack};
  color: #ffffff;
`;

export const ModelBtn = styled(LoginBtn)`
  color: #ffffff;
  background: ${(props) => props.theme.color.lightBlack};
  padding: .375rem .75rem;
  &:hover {
    color: #ffffff;
    background: #1C1C1D;
}
`;

export const ModelLoadingBtn = styled(ModelBtn)`
  background: ${(props) => props.theme.color.purple};
  color: #ffffff;
  &:hover {
    background: #413563;
    color: #ffffff;
}
`;

export const HeroBtn = styled(LoginBtn)`
  background: #FDFDFD;
  color: ${(props) => props.theme.color.purple};
  box-shadow: 0px 20px 117px rgba(12, 0, 69, 0.15);
  eight: 34px;
  font-weight: 700;
  border-radius: 49px;
  :hover {
  background: ${(props) => props.theme.color.purple};
  color: #ffffff;
}
`;