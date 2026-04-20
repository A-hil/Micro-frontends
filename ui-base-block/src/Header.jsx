import React, { useState, useEffect, useRef } from 'react'; 
import styles from './Header.module.css'; 

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  // Закрытие меню при клике вне области шапки
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Функция переключения меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header} ref={menuRef}>
      <div className={styles.logo}>MyApp</div>

      <button 
        className={styles.burger} 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen} // для доступности
        aria-label="Меню"
      >
        {isMenuOpen ? '✕' : '☰'} {/* меняем иконку при открытии */}
      </button>

      <nav 
        className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          <li onClick={() => setIsMenuOpen(false)}>Главная</li> {/* закрываем меню при клике */}
          <li onClick={() => setIsMenuOpen(false)}>О нас</li>
          <li onClick={() => setIsMenuOpen(false)}>Контакты</li>
        </ul>
      </nav>
    </header>
  );
};