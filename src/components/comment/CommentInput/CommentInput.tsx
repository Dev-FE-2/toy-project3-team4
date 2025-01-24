import React, { useState } from 'react';
import { usePostComment } from '@/hooks';
import * as S from './CommentInput.styles';
import { ICommentAPISchema } from '@/types';

const CommentInput = ({
  userSn,
  playlistSn,
  onAddComment,
}: {
  userSn: string;
  playlistSn: string;
  onAddComment: (newComment: ICommentAPISchema) => void;
}) => {
  const [content, setContent] = useState('');
  const { mutate: addComment } = usePostComment();

  const handleCommentSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const commentData = {
        commentSn: crypto.randomUUID(),
        userSn,
        content,
        date: new Date().toISOString(),
      };
      addComment(
        {
          playlistSn,
          commentData,
        },
        {
          onSuccess: () => {
            setContent('');
            onAddComment(commentData);
          },
        },
      );
    }
  };

  return (
    <S.CommentInput
      placeholder="댓글을 입력해주세요."
      $isBorder={true}
      value={content}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setContent(e.target.value)
      }
      onKeyUp={handleCommentSubmit}
    />
  );
};

export default CommentInput;
