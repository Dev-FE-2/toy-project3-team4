import { DocumentData } from 'firebase/firestore/lite';
import { defaultUserSchema } from '@/constant';
import type { IUserAPISchema, IUserState } from '@/types';

/**
 * DB에서 조회한 user 스키마에서 필요한 정보만 전역 상태 스키마로 변환
 * @param {IUserAPISchema} user - DB의 user 스키마
 * @returns {IUserState} - 전역 상태에 저장할 user 스키마
 */
export const formatUserResponseToState = (
  user: IUserAPISchema,
): IUserState => ({
  userSn: user.userSn,
  email: user.email,
  name: user.name,
  description: user.description || '',
  imgUrl: user.imgUrl,
  interests: user.interests,
});

/**
 * DB에서 조회한 document 데이터를 DB의 user 스키마로 변환
 * @param {DocumentData} data - DB에서 조회한 document 데이터
 * @returns {IUserAPISchema} - DB의 user 스키마
 */
export const parseUserDoc = (data: DocumentData): IUserAPISchema => {
  if (!data || typeof data !== 'object') {
    throw new Error('document 데이터 포맷 오류');
  }

  return {
    userSn: data.userSn,
    ...defaultUserSchema,
    ...data,
  };
};
