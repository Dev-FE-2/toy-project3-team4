import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { DB } from '@/api';
import { DB_COLLECTION } from '@/constant';
import type { ICommentAPISchema } from '@/types';

/**
 * Firestore에서 댓글 정보 조회
 * @returns {Promise<ICommentAPISchema[] | null>} - 댓글 데이터 또는 null
 */
export const getComments = async (
  commentSn: string,
): Promise<ICommentAPISchema[] | null> => {
  if (!commentSn) throw new Error();
  try {
    const commentsRef = collection(DB, DB_COLLECTION.COMMENT);
    const commentQuery = query(
      commentsRef,
      where('commentSn', '==', commentSn),
    );

    const commentsnapshot = await getDocs(commentQuery);
    const comments: ICommentAPISchema[] = commentsnapshot.docs.map((doc) => ({
      ...(doc.data() as ICommentAPISchema),
    }));

    return comments;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};
