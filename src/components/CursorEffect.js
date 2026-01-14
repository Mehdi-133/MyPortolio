import React, { useEffect } from 'react';
import './CursorEffect.css';

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    const addHoverEffect = () => {
      cursor.classList.add('cursor-hover');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('cursor-hover');
    };

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .clickable').forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);

  return null;
}
