import { onAuthStateChanged } from 'firebase/auth';
import { AUTH, getUser } from '@/api';
import { useUserActions } from '@/store';
import { formatUserResponseToState } from '@/utils';

const useAuthObserver = () => {
  const { setUser, clearUser, setUserFetching } = useUserActions();

  const subscribeToAuthChanges = () => {
    const unsubscribe = onAuthStateChanged(AUTH, async (user) => {
      setUserFetching(true); // 로딩 시작
      if (user) {
        const { uid } = user;
        try {
          const userData = await getUser(uid);

          if (userData) {
            setUser(formatUserResponseToState({ ...userData, userSn: uid }));
          } else {
            clearUser();
          }
        } catch (error) {
          console.error('유저 정보 가져오기 실패:', error);
          clearUser();
        }
      } else {
        clearUser();
      }
      setUserFetching(false); // 로딩 종료
    });

    return unsubscribe;
  };

  return { subscribeToAuthChanges };
};

export default useAuthObserver;
