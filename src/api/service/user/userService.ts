import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore/lite';
import type { IUserAPISchema } from '@/types';
import { DB } from '@/api';
import { parseUserDoc } from '@/utils';
import { DBCollection } from '@/constant';

export const userService = {
  /**
   * Firestore에서 사용자 정보 조회
   * @param {string} userSn - 사용자 고유 ID
   * @returns {IUserAPISchema | null} - 사용자 데이터 또는 null
   */
  async getUser(userSn: string): Promise<IUserAPISchema | null> {
    try {
      const userDoc = await getDoc(doc(DB, DBCollection.USERS, userSn));
      if (userDoc.exists()) {
        return parseUserDoc(userDoc.data());
      }
      return null;
    } catch (error) {
      console.error('유저 정보 가져오기 실패:', error);
      return null;
    }
  },

  /**
   * Firestore에 신규 유저 등록
   * @param {IUserAPISchema} userData - 사용자 정보
   * @returns {void}
   */
  async addUser(userData: IUserAPISchema): Promise<void> {
    try {
      await setDoc(doc(DB, DBCollection.USERS, userData.userSn), userData);
    } catch (error) {
      console.error('유저 등록 실패:', error);
    }
  },

  async updateUser(
    userSn: string,
    updates: Partial<IUserAPISchema>,
  ): Promise<void> {
    try {
      const userRef = doc(DB, DBCollection.USERS, userSn);
      await updateDoc(userRef, updates);
    } catch (error) {
      console.error('유저 정보 업데이트 실패:', error);
    }
  },
};
