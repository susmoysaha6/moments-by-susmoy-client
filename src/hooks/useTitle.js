import { useEffect } from "react";


const useTitle = title => {
    return (
        useEffect(() => {
            document.title = `${title} - MOMENTS BY SUSMOY`
        }, [title])
    );
};

export default useTitle;