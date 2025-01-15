import { STORAGE } from '@/api/firebase';
import { DB_COLLECTION } from '@/constant';
import { IUser, IUserAPISchema } from '@/types';
import { updateDocument } from '@/utils';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

/**
 * Firestore에 유저 정보 업데이트
 * @param {string} userSn - 사용자 시리얼 넘버
 * @param {Partial<IUserAPISchema>} updates - 수정할 사용자 정보
 * @returns {Promise<Partial<IUser> | null>}
 */
const updateUserInfo = async (
  userSn: string,
  updates: Partial<IUserAPISchema>,
  file: File | null,
): Promise<Partial<IUser> | null> => {
  let imageUrl = updates.imgUrl;

  if (file) {
    const storageRef = ref(STORAGE, `user/${userSn}/${file.name}`);
    await uploadBytes(storageRef, file);
    imageUrl = await getDownloadURL(storageRef);
  }

  await updateDocument<IUserAPISchema>(DB_COLLECTION.USER, userSn, {
    ...updates,
    imgUrl: imageUrl,
  });

  return {
    imgUrl: imageUrl,
    name: updates.name,
    description: updates.description,
  };
};

export { updateUserInfo };
