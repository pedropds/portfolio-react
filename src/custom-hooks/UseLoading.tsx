import { useState, useEffect } from "react";

const useLoading = (delay: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return isLoading;
};

export default useLoading;
