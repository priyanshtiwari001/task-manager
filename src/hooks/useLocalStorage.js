
import { useState } from 'react';

function getKeyFromLocalStorage(key,initialValue) {
    try{
        const item = window.localStorage.getItem(key);
        if(item === null){
            return initialValue
        }
        return JSON.parse(item);
    }catch(errr){
        return initialValue;
    }
}
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() =>getKeyFromLocalStorage(key,initialValue));

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key:', key, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
