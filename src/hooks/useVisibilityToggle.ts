import { useState, useEffect, useCallback, RefObject } from 'react';

interface UseVisibilityToggleProps {
  initialState?: boolean;
  ref: RefObject<HTMLElement>;
}

const useVisibilityToggle = ({
  initialState = false,
  ref,
}: UseVisibilityToggleProps) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const resetVisibility = () => setIsVisible(initialState);

  const toggleVisibility = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) return;

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

  return { isVisible, toggleVisibility, resetVisibility };
};

export default useVisibilityToggle;
