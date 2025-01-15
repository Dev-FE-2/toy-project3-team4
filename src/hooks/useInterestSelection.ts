import { useState } from 'react';
import { IUser } from '@/types';

const useInterestSelection = (initialInterests: number[] = []) => {
  const [selectedInterests, setSelectedInterests] =
    useState<IUser['interests']>(initialInterests);

  const toggleInterest = (id: number) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const validateInterests = () => {
    if (selectedInterests.length === 0) {
      alert('관심사는 1개 이상 선택해주세요.');
      return false;
    }
    return true;
  };

  return {
    selectedInterests,
    toggleInterest,
    validateInterests,
  };
};

export default useInterestSelection;
