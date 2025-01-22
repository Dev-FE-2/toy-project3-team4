import { ICommentAPISchema } from '@/types';
import { CommentItem } from '../CommentItem';
import * as S from './CommentList.styles';

const CommentList = ({ comments }: { comments: ICommentAPISchema[] }) => {
  return (
    <S.CommentList>
      {comments.map((comment, i) => (
        <CommentItem key={i} comment={comment} />
      ))}
    </S.CommentList>
  );
};

export default CommentList;
