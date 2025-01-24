import type { ICommentAPISchema } from '@/types';
import { CommentItem } from '../CommentItem';
import * as S from './CommentList.styles';

interface CommentListProps {
  playlistSn: string;
  comments: ICommentAPISchema[];
  onUpdateComment: (updatedComment: ICommentAPISchema) => void;
  onDeleteComment: (commentSn: string) => void;
}

const CommentList = ({
  playlistSn,
  comments,
  onUpdateComment,
  onDeleteComment,
}: CommentListProps) => {
  return (
    <S.CommentList>
      {comments.map((comment, i) => (
        <CommentItem
          key={i}
          comment={comment}
          playlistSn={playlistSn}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </S.CommentList>
  );
};

export default CommentList;
