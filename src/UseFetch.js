import { useState, useEffect } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        // fetch the data as soon as the component renders
        setTimeout(() => {

          fetch(url, { signal: abortController.signal})

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

              if (err.name === "AbortError") {
                console.log(err.name, err.message);

              } else { 
                setIsLoading(false);
                setError(err.message);
            }
            });
        }, 1000);
        // cleanUp function to cleanup incomplete use state
        return () => abortController.abort();
          // console.log('cleanup incomplete use state');
      }, [url]);

      return {data, isLoading, error}
}

export default UseFetch;
