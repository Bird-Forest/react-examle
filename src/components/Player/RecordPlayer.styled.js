import ReactPlayer from 'react-player';
import { styled } from 'styled-components';

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

export const StyledPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;
export const WrapLinkVideo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .link-url {
    font-size: 16px;
    color: black;
  }
`;
