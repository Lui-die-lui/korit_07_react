import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = title;
    //    <title>1st react lesson</title> 을 의미 = title = props
  }, [title]);
}

export default useTitle;
