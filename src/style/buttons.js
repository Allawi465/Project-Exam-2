import styled from 'styled-components';

export const LoginBtn = styled.button`
  background: ${(props) => props.theme.color.purple};
  padding: 0.375rem 0.75rem;
  color: #ffffff;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  :hover {
    border: 1px solid ${(props) => props.theme.color.purple};
    background: transparent;
    color: #000000;
  }
`;

export const ModelBtn = styled(LoginBtn)`
  background: ${(props) => props.theme.color.lightBlack};
  :hover {
    border: 1px solid ${(props) => props.theme.color.lightBlack};
    background: #ffffff;
    color: #000000;
  }
`;

export const ModelLoadingBtn = styled(ModelBtn)`
  background: ${(props) => props.theme.color.purple};
  :hover {
    background: ${(props) => props.theme.color.purple};
    color: #ffffff;
  }
`;

export const HeroBtn = styled(LoginBtn)`
  background: #fdfdfd;
  color: ${(props) => props.theme.color.purple};
  border-radius: 49px;
  :hover {
    background: ${(props) => props.theme.color.purple};
    color: #ffffff;
    border: 1px solid transparent;
  }
`;

export const BookBtn = styled(LoginBtn)`
  background: ${(props) => props.theme.color.purple};
  color: #ffffff;
  max-width: 156px;
  width: 100%;
  border-radius: 72px;
  font-size: 20px;
  height: 48px;
`;
