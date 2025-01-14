import { useState, useEffect, useCallback, useRef } from 'react';

interface IUseVisibilityToggle<T extends HTMLElement> {
  initialState?: boolean;
  ref: React.RefObject<T> | ((instance: T | null) => void) | null;
}

const useVisibilityToggle = <T extends HTMLElement>({
  initialState = false,
  ref,
}: IUseVisibilityToggle<T>) => {
  const localRef = useRef<T | null>(null);

  // ref를 로컬 ref와 통합 처리
  const resolvedRef = useCallback(() => {
    if (typeof ref === 'function') {
      return localRef;
    }
    if (ref && 'current' in ref) {
      return ref;
    }
    return localRef;
  }, [ref]);

  const [isVisible, setIsVisible] = useState(initialState);

  const resetVisibility = () => setIsVisible(initialState);

  const toggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const currentRef = resolvedRef().current;
      if (currentRef?.contains(event.target as Node)) return;

      setIsVisible(false);
    },
    [resolvedRef],
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return {
    isVisible,
    toggleVisibility,
    resetVisibility,
    ref: resolvedRef(), // 로컬 ref 반환
  };
};

export default useVisibilityToggle;
