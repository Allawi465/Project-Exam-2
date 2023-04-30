import styled from 'styled-components';

export const LoginBtn = styled.button`
  background: transparent;
  padding: 6px 10px;
  color: #000000;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: .25rem;
  font-weight: 600;
  font-size: 14px;
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

export const ModelBtn = styled(SignUpBtn)`
  padding: .375rem .75rem;
  &:hover {
    background: #1C1C1D;
}
`;

export const ModelLoadingBtn = styled(ModelBtn)`
  background: ${(props) => props.theme.color.purple};
  &:hover {
    background: #413563;
}
`;

export const HeroBtn = styled(LoginBtn)`
  background: #FDFDFD;
  padding: .375rem .75rem;
  color: ${(props) => props.theme.color.purple};
  border-radius: 49px;
`;