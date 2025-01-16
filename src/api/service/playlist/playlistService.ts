import {
  addDocument,
  getDocument,
  updateDocument,
  deleteDocument,
} from '@/utils';
import { DB_COLLECTION } from '@/constant';
import type { IPlaylistAPISchema } from '@/types';

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

export { getPlaylist, addPlaylist, updatePlaylist, deletePlaylist };
