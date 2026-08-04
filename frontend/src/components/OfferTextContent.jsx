import { useEffect, useState } from "react";

function OfferTextContent() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdown = () => {
    const offerEnd = new Date("2026-08-20T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = offerEnd - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offer-text-content-div">
      <div className="offer-text-content">
        <h2>Flash Tech Mastery</h2>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-digit">{time.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">{time.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">{time.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-digit">{time.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
        <button className="btn view-details-btn">
          View Details
          <i className="fa-solid fa-arrow-right right-icon"></i>
        </button>
      </div>
    </div>
  );
}

export default OfferTextContent;
