import { updateUserInfo } from '@/api';
import { useUserActions } from '@/store';
import { IUser } from '@/types';
import { useMutation } from '@tanstack/react-query';

interface IUpdateUserInfo {
  imgUrl: string;
  name: string;
  description: string;
  file: File | null;
}
/**
 *
 * @param {string} userSn 사용자 시리얼 넘버
 */
const useFetchUserInfo = (userSn: string) => {
  const { setUser } = useUserActions();
  /**
   * @param imgUrl 사용자 프로필 이미지 url
   * @param name 사용자 이름
   * @param description 사용자 자기소개
   * @param file 수정하고자 하는 사용자 프로필 이미지 File
   * @returns {Promise<Partial<IUser> | null>}
   */
  return useMutation({
    mutationFn: async ({
      imgUrl,
      name,
      description,
      file,
    }: IUpdateUserInfo) => {
      return updateUserInfo(userSn, { imgUrl, name, description }, file);
    },
    onSuccess: (data: Partial<IUser> | null) => {
      setUser(data);
    },
  });
};

export default useFetchUserInfo;
