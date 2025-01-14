import { useState, useEffect, useCallback } from 'react';

interface IUseVisibilityToggle<T extends HTMLElement> {
  initialState?: boolean;
  ref: React.RefObject<T> | null;
}

const useVisibilityToggle = <T extends HTMLElement>({
  initialState = false,
  ref,
}: IUseVisibilityToggle<T>) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const resetVisibility = () => setIsVisible(initialState);

  const toggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const currentRef = ref?.current;
      if (currentRef?.contains(event.target as Node)) return;

      setIsVisible(false);
    },
    [ref],
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
  };
};

export default useVisibilityToggle;
