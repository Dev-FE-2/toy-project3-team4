import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { DB, getPlaylist, updatePlaylist } from '@/api';
import { DB_COLLECTION } from '@/constant';
import type { ICommentAPISchema } from '@/types';
import { addDocument, deleteDocument, updateDocument } from '@/utils';

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

/**
 * Firestore에 신규 댓글 등록
 * @param {ICommentAPISchema} commentData - 댓글 정보
 * @returns {Promise<void>}
 */
export const addComment = async (
  playlistSn: string,
  commentData: ICommentAPISchema,
): Promise<void> => {
  const playlistData = await getPlaylist(playlistSn);

  if (!playlistData) throw new Error('Playlist not found');

  updatePlaylist(playlistSn, {
    comments: [...playlistData.comments, commentData.commentSn],
  });
  await addDocument(DB_COLLECTION.COMMENT, commentData.commentSn, commentData);
};

/**
 * Firestore에 댓글 정보 업데이트
 * @param {string} commentSn - 댓글 시리얼 넘버
 * @param {Partial<ICommentAPISchema>} updates - 수정할 댓글 정보
 * @returns {Promise<void>}
 */
export const updateComment = async (
  commentSn: string,
  updates: Partial<ICommentAPISchema>,
): Promise<void> =>
  await updateDocument<ICommentAPISchema>(
    DB_COLLECTION.COMMENT,
    commentSn,
    updates,
  );

/**
 * Firestore에서 댓글 삭제
 * @param {string} playlistSn - 플레이리스트 시리얼 넘버
 * @param {string} commentSn - 댓글 시리얼 넘버
 * @returns {Promise<void>}
 */
export const deleteComment = async (
  playlistSn: string,
  commentSn: string,
): Promise<void> => {
  if (!commentSn) throw new Error('Invalid Comment ID');

  const playlistData = await getPlaylist(playlistSn);

  if (!playlistData) throw new Error('Playlist not found');

  updatePlaylist(playlistSn, {
    comments: playlistData.comments.filter((comment) => comment !== commentSn),
  });

  await deleteDocument(DB_COLLECTION.COMMENT, commentSn);
};
