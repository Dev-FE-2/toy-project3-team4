import styled from 'styled-components';
import { padding, font } from '@/styles';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .page-container {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
    overflow: auto;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: auto;

      .page-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: ${padding.md};

        @media (min-width: 768px) {
          max-width: 1500px;
          padding: 100px ${padding.md};
          height: 100vh;
          gap: ${padding.xl};
        }
      }

      .page-title {
        font-size: ${font.size.heading};
        line-height: 1;
        font-weight: ${font.weight.heading};
        position: absolute;
        opacity: 0;

        background-color: #fff;
      }
    }
  }
`;

export const Body = styled.body``;

export const CoreContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
