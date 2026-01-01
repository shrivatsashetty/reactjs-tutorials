/* this is custom hook which contains the logic to fetch data from a given URL */ 

import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        /* using async await along with IIFE */
        (async () => {
            const res = await fetch(url);
            const resData = await res.json();
            setData(resData);
        })();

        /* alternatively, we can use Promise.then() syntax */
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => setData(data));

    }, [url]);

    return data;
}

export default useFetch;
