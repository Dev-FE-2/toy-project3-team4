import { DocumentData } from 'firebase/firestore/lite';
import { defaultUserSchema } from '@/constant';
import type { IUserAPISchema, IUser } from '@/types';

/**
 * DB에서 조회한 user 스키마에서 필요한 정보만 전역 상태 스키마로 변환
 * @param {IUserAPISchema} user - DB의 user 스키마
 * @returns {IUser} - 전역 상태에 저장할 user 스키마
 */
export const formatUserResponseToState = (user: IUserAPISchema): IUser => ({
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

export const formatISODurationToHHMMSS = (isoDuration: string) => {
  // ISO 8601 패턴 분석
  const regex =
    /P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const matches = isoDuration.match(regex);

  if (!matches) {
    throw new Error('유효하지 않은 ISO 8601 기간 형식입니다.');
  }

  // 결과 매핑 (null 값은 0으로 변환)
  const [, , , , hours, minutes, seconds] = matches.map(
    (x) => parseInt(x, 10) || 0,
  );

  // 초 계산
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // HH:MM:SS 포맷 변환
  return formatSecondsToHHMMSS(totalSeconds);
};

export const formatSecondsToHHMMSS = (totalSeconds: number) => {
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');

  let durationString = `${m}:${s}`;

  const hours = Math.floor(totalSeconds / 3600);

  if (hours > 0) {
    const h = String(hours).padStart(2, '0');
    durationString = `${h}:${durationString}`;
  }

  return durationString;
};
