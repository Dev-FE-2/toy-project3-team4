import { colors } from './../../../styles/token/colors/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { padding, width } from '@/styles';

export const Feed = styled.article`
  max-width: ${width.feed};
`;

export const FeedHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${padding.sm};
  height: 6rem;
  width: 100%;
  max-width: 76.8rem;
`;

export const AuthorInfo = styled(Link)`
  display: flex;
  gap: ${padding.sm};
  align-items: center;
  font-weight: 500;
`;

export const FeedBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
  padding: 0 0 ${padding.md};

  .likes-info {
    font-weight: 600;
  }
`;

export const FeedInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${padding.sm};
  line-height: 2.4rem;

  .feed-title {
    font-weight: 600;
    height: 2.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .feed-des {
    font-weight: 400;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }

  .comments-info {
    color: ${colors.semantic.text.grayDark};
  }
`;
