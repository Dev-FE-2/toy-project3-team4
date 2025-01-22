import {
  addDocument,
  getDocument,
  parseUserDoc,
  updateDocument,
} from '@/utils';
import { DB_COLLECTION } from '@/constant';
import type { IUserAPISchema } from '@/types';
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

/**
 * Firestore에서 사용자 정보 조회
 * @param {string} userSn - 사용자 고유 ID
 * @returns {Promise<IUserAPISchema | null>} - 사용자 데이터 또는 null
 */
const getUser = async (userSn: string): Promise<IUserAPISchema | null> =>
  getDocument<IUserAPISchema>(DB_COLLECTION.USER, userSn, parseUserDoc);

const searchUser = async (
  keyword: string,
  count: number,
  cursor?: string,
): Promise<IUserAPISchema[]> => {
  const CONTENT_LIMIT = count + 1; // count 요청에 1개 추가
  try {
    const userRef = collection(DB, DB_COLLECTION.USER);
    let userQuery = query(
      userRef,
      where('name', '>=', keyword),
      where('name', '<=', keyword + '\uf8ff'),
      limit(CONTENT_LIMIT),
    );

    if (cursor) {
      const cursorDoc = await getDoc(doc(DB, DB_COLLECTION.USER, cursor));
      if (cursorDoc.exists()) {
        userQuery = query(userQuery, startAfter(cursorDoc));
      }
    }

    const userSnapshot = await getDocs(userQuery);
    const users: IUserAPISchema[] = userSnapshot.docs
      .slice(0, count)
      .map((doc) => ({
        id: doc.id,
        ...(doc.data() as IUserAPISchema),
      }));

    return users;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};

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

export { getUser, searchUser, addUser, updateUser };
