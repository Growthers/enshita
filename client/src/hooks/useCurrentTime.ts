import { useEffect, useState } from "react";
import dayjs from "dayjs";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
  }, []);

  return currentTime;
};

export default useCurrentTime;
