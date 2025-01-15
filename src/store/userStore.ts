import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { IUser } from '@/types';

interface IUserState {
  user: IUser | null;
}

interface IUserActions {
  actions: {
    setUser: (user: Partial<IUser> | null) => void;
    clearUser: () => void;
  };
}

type UserStore = IUserState & IUserActions;

// user 액션 이름
const USER_ACTION_PREFIX = 'user/';
const USER_ACTION_NAME = {
  SET_USER: `${USER_ACTION_PREFIX}setUser`,
  CLEAR_USER: `${USER_ACTION_PREFIX}clearUser`,
} as const;

// 초기 user 상태
const initialState: IUserState = { user: null };

// userStore 생성
export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        actions: {
          setUser: (userData) =>
            set(
              (state) => {
                if (userData === null) {
                  state.user = null;
                } else {
                  state.user = state.user
                    ? { ...state.user, ...userData }
                    : (userData as IUser);
                }
              },
              false,
              USER_ACTION_NAME.SET_USER,
            ),
          clearUser: () =>
            set(initialState, false, USER_ACTION_NAME.CLEAR_USER),
        },
      })),
      {
        name: 'user-storage',
        partialize: (state) => ({
          user: state.user
            ? {
                userSn: state.user.userSn,
                email: state.user.email,
                name: state.user.name,
                description: state.user.description,
                imgUrl: state.user.imgUrl,
                interests: state.user.interests,
              }
            : null,
        }),
      },
    ),
  ),
);

// 액션 selector
export const useUserActions = () => useUserStore((state) => state.actions);

export const useUser = () => useUserStore((state) => state.user); // user selector
export const useUserSn = () => useUserStore((state) => state.user?.userSn); // userSn selector
export const useUserImg = () => useUserStore((state) => state.user?.imgUrl); // imgUrl selector
