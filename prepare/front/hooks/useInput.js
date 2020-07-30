import { useState, useCallback } from "react";

export default (initValue = null) => {

    const [value, setter] = useState(initValue);
    const handler = useCallback((evt) => { setter(evt.target.value); }, []);

    return [value, handler];
};