import {
  addDocument,
  getDocument,
  parseUserDoc,
  updateDocument,
} from '@/utils';
import { DB_COLLECTION } from '@/constant';
import type { IUserAPISchema } from '@/types';

/**
 * Firestore에서 사용자 정보 조회
 * @param {string} userSn - 사용자 고유 ID
 * @returns {Promise<IUserAPISchema | null>} - 사용자 데이터 또는 null
 */
const getUser = async (userSn: string): Promise<IUserAPISchema | null> =>
  getDocument<IUserAPISchema>(DB_COLLECTION.USER, userSn, parseUserDoc);

/**
 * Firestore에서 사용자 정보 조회
 * @param {string} userSn - 사용자 고유 ID
 * @returns {Promise<IUserAPISchema | null>} - 사용자 데이터 또는 null
 */
const getSearchUser = async (userSn: string): Promise<IUserAPISchema | null> =>
  getDocument<IUserAPISchema>(DB_COLLECTION.USER, userSn, parseUserDoc);

/**
 * Firestore에 신규 유저 등록
 * @param {IUserAPISchema} userData - 사용자 정보
 * @returns {Promise<void>}
 */
const addUser = async (userData: IUserAPISchema): Promise<void> =>
  addDocument(DB_COLLECTION.USER, userData.userSn, userData);

/**
 * Firestore에 유저 정보 업데이트
 * @param {string} userSn - 사용자 시리얼 넘버
 * @param {Partial<IUserAPISchema>} updates - 수정할 사용자 정보
 * @returns {Promise<void>}
 */
const updateUser = async (
  userSn: string,
  updates: Partial<IUserAPISchema>,
): Promise<void> =>
  updateDocument<IUserAPISchema>(DB_COLLECTION.USER, userSn, updates);

export { getUser, getSearchUser, addUser, updateUser };
