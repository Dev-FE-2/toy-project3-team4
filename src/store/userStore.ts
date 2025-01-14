import { create } from 'zustand';
import { IUser } from '@/types';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IUserState {
  user: IUser | null;
  isUserFetching: boolean;
}

interface IUserActions {
  actions: {
    setUser: (user: Partial<IUser> | null) => void;
    clearUser: () => void;
    setUserFetching: (isUserFetching: boolean) => void;
  };
}

type UserStore = IUserState & IUserActions;

const USER_ACTION_PREFIX = 'user/';

const USER_ACTION_NAME = {
  SET_USER: `${USER_ACTION_PREFIX}setUser`,
  CLEAR_USER: `${USER_ACTION_PREFIX}clearUser`,
  SET_USER_FETCHING: `${USER_ACTION_PREFIX}setUserFetching`,
} as const;

const initialState: IUserState = {
  user: null,
  isUserFetching: true,
};

export const useUserStore = create<UserStore>()(
  devtools(
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
              state.isUserFetching = false;
            },
            false,
            USER_ACTION_NAME.SET_USER,
          ),
        clearUser: () => set(initialState, false, USER_ACTION_NAME.CLEAR_USER),
        setUserFetching: (isUserFetching) =>
          set(
            (state) => {
              state.isUserFetching = isUserFetching;
            },
            false,
            USER_ACTION_NAME.SET_USER_FETCHING,
          ),
      },
    })),
  ),
);

// 액션 selector
export const useUserActions = () => useUserStore((state) => state.actions);

export const useUser = () => useUserStore((state) => state.user); // user selector
export const useUserSn = () => useUserStore((state) => state.user?.userSn); // userSn selector
export const useUserImg = () => useUserStore((state) => state.user?.imgUrl); // imgUrl selector
export const useUserFetching = () =>
  useUserStore((state) => state.isUserFetching); // isUserFetching selector
