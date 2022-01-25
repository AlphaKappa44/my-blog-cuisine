import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // fetch the data as soon as the component renders
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              if (!res.ok) {
                console.log(res);
                throw new Error("Couldn't fetch data from server");
              }
              return res.json();
            })
            .then((data) => {
              console.log(data);
              setData(data);
              setIsLoading(false);
              setError(null);
            })
            .catch((err) => {
              console.log(err.message);
              setIsLoading(false);
              setError(err.message);
            });
        }, 1000);
      }, [url]);

      return {data, isLoading, error}
}

export default useFetch;
