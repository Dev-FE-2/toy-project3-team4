import {
  addDocument,
  getDocument,
  getAllDocument,
  updateDocument,
  deleteDocument,
} from '@/utils';
import { DB_COLLECTION } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from 'firebase/firestore/lite';
import { DB } from '@/api/firebase';
import { getUser } from '../user';

/**
 * Firestore에서 플레이리스트 정보 조회
 * @returns {Promise<IPlaylistAPISchema[] | null>} - 플레이리스트 데이터 또는 null
 */
const getAllPlaylist = async (): Promise<IPlaylistAPISchema[] | null> =>
  getAllDocument<IPlaylistAPISchema>(DB_COLLECTION.PLAYLIST);

/**
 * Firestore에서 플레이리스트 정보 조회
 * @param {string} playlistSn - 플레이리스트 고유 ID
 * @returns {Promise<IPlaylistAPISchema | null>} - 플레이리스트 데이터 또는 null
 */
const getPlaylist = async (
  playlistSn: string,
): Promise<IPlaylistAPISchema | null> =>
  getDocument<IPlaylistAPISchema>(DB_COLLECTION.PLAYLIST, playlistSn);

/**
 * Firestore에 신규 플레이리스트 등록
 * @param {IPlaylistAPISchema} playlistData - 플레이리스트 정보
 * @returns {Promise<void>}
 */
const addPlaylist = async (playlistData: IPlaylistAPISchema): Promise<void> =>
  addDocument(DB_COLLECTION.PLAYLIST, playlistData.playlistSn, playlistData);

/**
 * Firestore에 플레이리스트 정보 업데이트
 * @param {string} playlistSn - 플레이리스트 시리얼 넘버
 * @param {Partial<IPlaylistAPISchema>} updates - 수정할 플레이리스트 정보
 * @returns {Promise<void>}
 */
const updatePlaylist = async (
  playlistSn: string,
  updates: Partial<IPlaylistAPISchema>,
): Promise<void> =>
  updateDocument<IPlaylistAPISchema>(
    DB_COLLECTION.PLAYLIST,
    playlistSn,
    updates,
  );

/**
 * Firestore에서 플레이리스트 삭제
 * @param {string} playlistSn - 플레이리스트 고유 ID
 * @returns {Promise<void>}
 */
const deletePlaylist = async (playlistSn: string): Promise<void> => {
  if (!playlistSn) throw new Error('Invalid playlist ID');
  await deleteDocument(DB_COLLECTION.PLAYLIST, playlistSn);
};

const searchPlaylist = async (
  keyword: string,
  cursor?: string,
): Promise<IPlaylistAPISchema[]> => {
  try {
    const playlistsRef = collection(DB, DB_COLLECTION.PLAYLIST);
    let playlistQuery = query(
      playlistsRef,
      where('title', '>=', keyword),
      where('title', '<=', keyword + '\uf8ff'),
      limit(6), // 5개 요청에 1개 추가
    );

    if (cursor) {
      const cursorDoc = await getDoc(doc(DB, DB_COLLECTION.PLAYLIST, cursor));
      if (cursorDoc.exists()) {
        playlistQuery = query(playlistQuery, startAfter(cursorDoc));
      }
    }

    const playlistSnapshot = await getDocs(playlistQuery);
    const playlists: IPlaylistAPISchema[] = playlistSnapshot.docs
      .slice(0, 5)
      .map((doc) => ({
        id: doc.id,
        ...(doc.data() as IPlaylistAPISchema),
      }));
    return playlists;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};

const userPlaylist = async (userSn?: string): Promise<IPlaylistAPISchema[]> => {
  if (!userSn) throw new Error();
  try {
    const playlistsRef = collection(DB, DB_COLLECTION.PLAYLIST);
    const playlistQuery = query(playlistsRef, where('userSn', '==', userSn));

    const playlistSnapshot = await getDocs(playlistQuery);
    const playlists: IPlaylistAPISchema[] = playlistSnapshot.docs.map(
      (doc) => ({
        ...(doc.data() as IPlaylistAPISchema),
      }),
    );

    return playlists;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};

const bookmarkPlaylist = async (
  userSn?: string,
): Promise<IPlaylistAPISchema[]> => {
  if (!userSn) throw new Error();
  try {
    const userRef = await getUser(userSn);
    if (!userRef) throw new Error();

    const { bookmarks } = userRef;
    const playlistsRef = collection(DB, DB_COLLECTION.PLAYLIST);
    const playlistQuery = query(
      playlistsRef,
      where('playlistSn', 'in', bookmarks),
    );

    const playlistSnapshot = await getDocs(playlistQuery);
    const playlists: IPlaylistAPISchema[] = playlistSnapshot.docs.map(
      (doc) => ({
        ...(doc.data() as IPlaylistAPISchema),
      }),
    );

    return playlists;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};

export {
  getAllPlaylist,
  getPlaylist,
  addPlaylist,
  updatePlaylist,
  deletePlaylist,
  searchPlaylist,
  userPlaylist,
  bookmarkPlaylist,
};
