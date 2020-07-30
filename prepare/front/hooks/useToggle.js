import { useState, useCallback } from "react";

export default (initValue = false) => {

    const [value, setter] = useState(initValue);
    const handler = useCallback((evt) => {
        //console.log('old value=', value);
        setter((prev) => !prev);
    }, []);

    return [value, handler];
};

