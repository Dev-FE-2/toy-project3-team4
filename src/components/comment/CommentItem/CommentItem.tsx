import { ProfileImage } from '@/components';
import type { ICommentAPISchema } from '@/types';
import { useFetchAuthor } from '@/hooks';
import defaultImage from '@/assets/avatar.svg';
import * as S from './CommentItem.styles';
import { formatDate } from '../../../utils/formatDate';

const CommentItem = ({ comment }: { comment: ICommentAPISchema }) => {
  const { data: author } = useFetchAuthor(comment.userSn);

  return (
    <S.CommentItem>
      <ProfileImage imageUrl={author?.imgUrl || defaultImage} size="3rem" />
      <S.CommentContent>
        <S.CommentText>
          <S.CommentAuthor>{author?.name}</S.CommentAuthor>
          {comment.content}
        </S.CommentText>
        <S.CommentActions>
          <span>{formatDate(comment.date)}</span>
        </S.CommentActions>
      </S.CommentContent>
    </S.CommentItem>
  );
};

export default CommentItem;
