import { useEffect, useState } from 'react';

export function useGet(url, defaultValue) {
  const [data, setData] = useState(defaultValue);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);
  return data;
}
