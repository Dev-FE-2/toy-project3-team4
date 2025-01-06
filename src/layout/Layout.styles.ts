import styled from 'styled-components';
import { padding, font } from '../styles';

export const Layout = styled.div`
  display: flex;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow: auto;

    .page-container {
      width: 100%;
      max-width: 1500px;
      padding: 100px ${padding.md};
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: ${padding.xl};

      @media (max-width: 768px) {
      }
    }

    .page-title {
      font-size: ${font.size.heading};
      line-height: 1;
      font-weight: ${font.weight.heading};
      position: absolute;
      opacity: 0;
    }
  }
`;
