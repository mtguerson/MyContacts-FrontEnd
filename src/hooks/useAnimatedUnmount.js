import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimatedEnd() {
      setShouldRender(false);
    }

    const elementRef = animatedElementRef.current;
    if (!visible && animatedElementRef.current) {
      elementRef.addEventListener('animationend', handleAnimatedEnd);
    }

    return () => {
      if (elementRef) {
        elementRef.removeEventListener('animationend', handleAnimatedEnd);
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
}
