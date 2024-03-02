import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AOSPluginsComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  return <></>;
};
