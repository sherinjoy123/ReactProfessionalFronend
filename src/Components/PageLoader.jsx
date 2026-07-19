import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const PageLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // show loader for 1.2 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return children;
};

export default PageLoader;