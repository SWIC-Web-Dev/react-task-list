import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(
    () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching tasks:", error));
    },

    // Dependency array is empty, so this effect runs once after the first render.
    [url],
  );

  return data;
}
