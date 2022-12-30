import { useState } from 'react';

const useCountdown = (date) => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();

  const countdown = () => {
    const countDate = new Date(date).getTime();
    const todayDate = new Date().getTime();

    const dateSubtraction = countDate - todayDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayNumber = Math.floor(dateSubtraction / day);
    const hourNumber = Math.floor((dateSubtraction % day) / hour);
    const minuteNumber = Math.floor((dateSubtraction % hour) / minute);
    const secondNumber = Math.floor((dateSubtraction % minute) / second);

    setDay(dayNumber);
    setHour(hourNumber);
    setMinute(minuteNumber);
    setSecond(secondNumber);
  };

  setInterval(countdown, 1000);

  return [day, hour, minute, second];
};

export default useCountdown;
