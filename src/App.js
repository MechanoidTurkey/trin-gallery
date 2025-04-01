import React, { useState } from 'react';
import './App.css';

const images = [
  '/images/trinrakanghibli.png',
  '/images/41cafeda-0504-4885-825f-3b9b4d3060d4.png',
  '/images/170c8cda-1f47-4c4f-bef2-2dbefc5e5435.png',
  '/images/9492d476-614b-4361-9cc4-6c9d0cc67525.png',
  '/images/9fcb555f-515c-41fc-a994-743363894daf.png'
  
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [fade, setFade] = useState(false);

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
      setFade(false);
    }, 300);
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((i) => (i - 1 + images.length) % images.length);
      setFade(false);
    }, 300);
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const themeStyles = {
    background: darkMode
      ? 'linear-gradient(to bottom, #0f0f0f, #1c1c1c)'
      : 'linear-gradient(to bottom, #f9fafb, #e0e7ff)',
    color: darkMode ? '#f3f4f6' : '#111',
    minHeight: '100vh',
    padding: '2rem 1rem',
    transition: 'all 0.4s ease-in-out',
    fontFamily: `'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={themeStyles}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{
  fontSize: '3rem',
  fontWeight: '700',
  ...(darkMode
    ? { color: '#ffffff' }
    : {
        background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }),
}}>
  Trinity
</h1>
        <p style={{
          fontSize: '1.1rem',
          color: darkMode ? '#aaa' : '#555',
          marginTop: '0.3rem',
          letterSpacing: '0.5px',
        }}>
          your AI image gallery
        </p>
      </header>

      

      <div style={{
        width: '100%',
        maxWidth: '650px',
        aspectRatio: '4 / 5',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: darkMode
          ? '0 15px 40px rgba(255,255,255,0.06)'
          : '0 15px 35px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(12px)',
        backgroundColor: darkMode ? '#1f1f1f' : '#fff',
        position: 'relative',
      }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: fade ? 0 : 1,
            transition: 'opacity 0.4s ease-in-out',
            display: 'block',
          }}
        />
      </div>

      <div style={{
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={prev}
          style={buttonStyle(darkMode, false)}
        >
          ⬅️ Prev
        </button>

        <button
          onClick={next}
          style={buttonStyle(darkMode, true)}
        >
          Next ➡️
        </button>

        <button
          onClick={toggleDarkMode}
          style={{
            ...buttonStyle(darkMode, false),
            fontSize: '0.85rem',
            padding: '0.4rem 1rem',
            background: darkMode ? '#444' : '#ddd',
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <p style={{
        marginTop: '1rem',
        fontSize: '0.95rem',
        color: darkMode ? '#999' : '#444',
        letterSpacing: '0.3px',
      }}>
        Showing {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}

function buttonStyle(darkMode, primary = false) {
  return {
    background: primary
      ? darkMode
        ? '#3b82f6'
        : '#2563eb'
      : darkMode
        ? '#333'
        : '#f3f4f6',
    color: primary ? '#fff' : darkMode ? '#eee' : '#111',
    border: primary ? 'none' : '1px solid #ccc',
    padding: '0.6rem 1.2rem',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.2s ease-in-out',
    boxShadow: primary
      ? '0 4px 12px rgba(0,0,0,0.2)'
      : '0 2px 6px rgba(0,0,0,0.1)',
  };
}

export default App;
