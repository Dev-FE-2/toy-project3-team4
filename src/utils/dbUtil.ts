import { DB } from '@/api';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  DocumentData,
  WithFieldValue,
  deleteDoc,
} from 'firebase/firestore/lite';

/**
 * Firestore에서 문서 조회
 * @param collection - 컬렉션 이름
 * @param docId - 문서 ID
 * @param parser - 데이터 파싱 함수 (선택사항)
 */
export const getDocument = async <T>(
  collection: string,
  docId: string,
  parser?: (data: DocumentData) => T,
): Promise<T | null> => {
  try {
    const docRef = doc(DB, collection, docId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data();
    return parser ? parser(data) : (data as T);
  } catch (error) {
    console.error('문서 조회 실패:', error);
    return null;
  }
};

/**
 * Firestore에 새 문서 추가
 * @param collection - 컬렉션 이름
 * @param docId - 문서 ID
 * @param data - 저장할 데이터
 */
export const addDocument = async <T extends WithFieldValue<DocumentData>>(
  collection: string,
  docId: string,
  data: T,
): Promise<void> => {
  try {
    await setDoc(doc(DB, collection, docId), data);
  } catch (error) {
    console.error('문서 추가 실패:', error);
    throw error;
  }
};

/**
 * Firestore 문서 업데이트
 * @param collection - 컬렉션 이름
 * @param docId - 문서 ID
 * @param updates - 업데이트할 데이터
 */
export const updateDocument = async <T>(
  collection: string,
  docId: string,
  updates: Partial<T>,
): Promise<void> => {
  try {
    const docRef = doc(DB, collection, docId);
    await updateDoc(docRef, updates);
  } catch (error) {
    console.error('문서 업데이트 실패:', error);
    throw error;
  }
};

/**
 * Firestore 문서 삭제
 * @param collection - 컬렉션 이름
 * @param docId - 삭제할 문서 ID
 */
export const deleteDocument = async (
  collection: string,
  docId: string,
): Promise<void> => {
  try {
    const docRef = doc(DB, collection, docId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('문서 삭제 실패:', error);
    throw error;
  }
};
