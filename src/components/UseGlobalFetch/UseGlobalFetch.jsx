import { useEffect, useState } from "react";

function UseGlobalFetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/staticAPI/baghiroff.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  return { data };
}

export default UseGlobalFetch;
