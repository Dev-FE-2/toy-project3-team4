import { useState } from 'react';
import { Input, ProfileImage } from '@/components';
import { useDeleteComment, useFetchAuthor, useUpdateComment } from '@/hooks';
import { formatDate } from '@/utils';
import type { ICommentAPISchema } from '@/types';
import defaultImage from '@/assets/avatar.svg';
import * as S from './CommentItem.styles';
import { useUserSn } from '@/store';

const CommentItem = ({
  playlistSn,
  comment,
  onUpdateComment,
  onDeleteComment,
}: {
  playlistSn: string;
  comment: ICommentAPISchema;
  onUpdateComment?: (updatedComment: ICommentAPISchema) => void;
  onDeleteComment?: (commentSn: string) => void;
}) => {
  const userSn = useUserSn();
  const { data: author } = useFetchAuthor(comment.userSn);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const { mutate: updateComment } = useUpdateComment();
  const { mutate: deleteComment, isPending: isDeleting } = useDeleteComment();

  const handleEdit = () => {
    if (isEditing) {
      updateComment(
        { commentSn: comment.commentSn, updates: { content: editedContent } },
        {
          onSuccess: () => {
            onUpdateComment?.({ ...comment, content: editedContent });
            setIsEditing(false);
          },
          onError: () => {
            alert('댓글 수정에 실패했습니다.');
          },
        },
      );
    } else {
      setIsEditing(true);
    }
  };

  const handleDelete = () => {
    if (confirm('이 댓글을 삭제하시겠습니까?')) {
      deleteComment(
        { playlistSn, commentSn: comment.commentSn },
        {
          onSuccess: () => {
            onDeleteComment?.(comment.commentSn);
          },
          onError: () => {
            alert('댓글 삭제에 실패했습니다.');
          },
        },
      );
    }
  };

  return (
    <S.CommentItem>
      <ProfileImage imageUrl={author?.imgUrl || defaultImage} size="3rem" />
      <S.CommentContent>
        {isEditing ? (
          <Input
            $isBorder={true}
            value={editedContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEditedContent(e.target.value)
            }
            autoFocus
          />
        ) : (
          <S.CommentTextBox>
            <S.CommentAuthor>{author?.name}</S.CommentAuthor>
            <S.CommentText>{comment.content}</S.CommentText>
          </S.CommentTextBox>
        )}
        <S.CommentActions>
          <span>{formatDate(comment.date)}</span>
          {author?.userSn === userSn && (
            <S.ActionButtons>
              <button onClick={handleEdit}>
                {isEditing ? '완료' : '수정'}
              </button>
              {playlistSn && (
                <button onClick={handleDelete} disabled={isDeleting}>
                  삭제
                </button>
              )}
            </S.ActionButtons>
          )}
        </S.CommentActions>
      </S.CommentContent>
    </S.CommentItem>
  );
};

export default CommentItem;
