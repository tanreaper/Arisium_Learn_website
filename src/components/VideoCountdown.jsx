import React, { useState, useEffect } from 'react';

const VideoCountdown = ({ videoSrc, targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div style={styles.container}>
      {/* Background Video */}
      <video style={styles.video} autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Countdown Timer Overlay */}
      <div style={styles.overlay}>
        <h1 style={styles.title}>Website Launching Soon </h1>
        <div style={styles.timerContainer}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} style={styles.timerBox}>
              <div style={styles.timerValue}>{value || '00'}</div>
              <div style={styles.timerLabel}>{unit.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: `'Orbitron', sans-serif`,
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '15px',
    padding: '30px 50px',
    color: '#fff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  timerContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  timerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    width: '80px',
    height: '100px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
  timerValue: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#FFDF00',
  },
  timerLabel: {
    fontSize: '0.8rem',
    marginTop: '5px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
};

export default VideoCountdown;