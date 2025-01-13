import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { AUTH } from '@/api/firebase';
import { useUserActions } from '@/store';
import { addUser, getUser } from '@/api';
import type { IUserAPISchema } from '@/types';
import { useNavigate } from 'react-router-dom';
import { formatUserResponseToState } from '@/utils';
import { defaultUserSchema } from '@/constant';

const useAuth = () => {
  const { setUser, clearUser } = useUserActions();
  const navigate = useNavigate();

  // Google 로그인
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
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
      navigate('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('로그인 실패:', error);
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
