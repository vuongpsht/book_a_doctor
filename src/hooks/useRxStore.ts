import {useEffect, useState} from 'react';
import {Subject} from 'rxjs';

type RxStore<T> = {
  init: T;
  subject: Subject<T>;
  callback?: (v: T) => void;
};

export function useStore<T>({init, subject}: RxStore<T>) {
  const [currState, setCurrState] = useState<T>(init);
  useEffect(() => {
    const sub = subject.subscribe(setCurrState);
    return () => {
      sub.unsubscribe();
    };
  }, [init, subject]);
  return currState;
}
