import React, {useState} from 'react'

export const usePersistingState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        return storageValue !== null
          ? JSON.parse(storageValue)
          : defaultValue;
      });

      React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
      return [value, setValue];

}
    
export default usePersistingState;