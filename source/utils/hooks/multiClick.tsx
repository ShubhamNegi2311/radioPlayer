import { useRef } from 'react';

const BOUNCE_RATE = 2000;

export const multiClick = () => {
  const busy = useRef(false);

  const multiClickHanlder = async (callback: Function) => {
    setTimeout(() => {
      busy.current = false;
    }, BOUNCE_RATE);

    if (!busy.current) {
      busy.current = true;
      callback();
    }
  };

  return { multiClickHanlder };
};
