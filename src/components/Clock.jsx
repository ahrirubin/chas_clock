import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const [time, setTime] = useState();
  const { city, timeZone } = props;

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString({ timeZone: timeZone });

      setTime(t);
    }, 1000);
  }, []);
  return (
    <div>
      {city} {time}
    </div>
  );
};

export default Clock;
