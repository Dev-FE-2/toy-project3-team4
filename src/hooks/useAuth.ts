import { FirebaseError } from 'firebase/app';
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { AUTH, addUser, getUser } from '@/api';
import { useUserActions } from '@/store';
import { defaultUserSchema } from '@/constant';
import { formatUserResponseToState } from '@/utils';
import type { IUserAPISchema } from '@/types';

const useAuth = () => {
  const { setUser, clearUser } = useUserActions();

  // Google 로그인
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userCloseErrorCode = 'auth/popup-closed-by-user';

    try {
      await setPersistence(AUTH, browserLocalPersistence); // 세션 유지 설정
      const result = await signInWithPopup(AUTH, provider);
      const { uid, email, displayName, photoURL } = result.user;

      // DB에서 유저 정보 조회
      let userData = await getUser(uid);

      if (!userData) {
        // DB에 유저 정보가 없으면 신규 유저 등록
        userData = {
          userSn: uid,
          ...defaultUserSchema,
          email: email || '',
          name: displayName || '',
          imgUrl: photoURL || '',
        };

        // DB에 신규 유저 등록
        await addUser(userData as IUserAPISchema);
      }
      // 전역 상태에 유저 정보 저장
      setUser(formatUserResponseToState({ ...userData, userSn: uid }));
    } catch (error) {
      console.error('로그인 실패:', error);

      // 사용자가 로그인 팝업창을 닫은 경우를 제외하고 오류 alert
      if (
        !(error instanceof FirebaseError && error.code === userCloseErrorCode)
      ) {
        alert('로그인에 실패하였습니다. 다시 시도해주세요.');
      }
    }
  };

  // 로그아웃
  const logout = async () => {
    await AUTH.signOut();
    clearUser();
    alert('로그아웃 되었습니다.');
  };

  return { loginWithGoogle, logout };
};

export default useAuth;
