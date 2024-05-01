import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = "Perefect Fit | " + title;
  }, [title]);
};

export default useTitle;
