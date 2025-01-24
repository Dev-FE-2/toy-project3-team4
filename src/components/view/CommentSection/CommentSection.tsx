import { useState } from 'react';
import { CommentInput, CommentList } from '@/components';
import type { ICommentAPISchema } from '@/types';
import * as S from '@/pages/PlaylistViewPage/PlaylistViewPage.styles';

interface CommentSectionProps {
  userSn?: string;
  playlistSn: string;
  comments: ICommentAPISchema[];
  isLoading: boolean;
  hasError: boolean;
}

const CommentSection = ({
  userSn,
  playlistSn,
  comments,
  isLoading,
  hasError,
}: CommentSectionProps) => {
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = (newComment: ICommentAPISchema) => {
    setCommentList((prev) => [...prev, newComment]);
  };

  const handleUpdateComment = (updatedComment: ICommentAPISchema) => {
    setCommentList((prev) =>
      prev.map((comment) =>
        comment.commentSn === updatedComment.commentSn
          ? updatedComment
          : comment,
      ),
    );
  };

  const handleDeleteComment = (deletedCommentSn: string) => {
    setCommentList((prev) =>
      prev.filter((comment) => comment.commentSn !== deletedCommentSn),
    );
  };

  return (
    <S.SectionWrapper>
      <S.SectionTitle>
        댓글 {new Intl.NumberFormat().format(commentList.length)}개
      </S.SectionTitle>

      {userSn && (
        <CommentInput
          userSn={userSn}
          playlistSn={playlistSn}
          onAddComment={handleAddComment}
        />
      )}

      {isLoading ? (
        <div>댓글을 불러오는 중입니다...</div>
      ) : hasError ? (
        <div>댓글 정보를 가져오는 중 오류가 발생했습니다.</div>
      ) : commentList.length > 0 ? (
        <CommentList
          playlistSn={playlistSn}
          comments={commentList}
          onUpdateComment={handleUpdateComment}
          onDeleteComment={handleDeleteComment}
        />
      ) : (
        <div>댓글이 없습니다.</div>
      )}
    </S.SectionWrapper>
  );
};

export default CommentSection;
