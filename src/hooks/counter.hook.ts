import { useState } from "react";

export const useCounter = (defaultValue = 0) => {
  const [counter, setCounter] = useState(defaultValue);
  return { counter, setCounter };
};

export const useCounterRefresh = () => {
  const { counter, setCounter } = useCounter(0);

  const onRefresh = async (): Promise<any> => {
    setCounter((c) => c + 1);
    return null;
  };

  return { counter, onRefresh };
};
