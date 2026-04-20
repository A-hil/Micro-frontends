import { useState, useEffect } from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  // 1. Все хуки должны быть ВНУТРИ функции компонента
    const [list, setList] = useState([]); // Храним весь массив
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

useEffect(() => {
  fetch('/data.json')
    .then(res => res.json())
    .then(jsonData => {
      // 1. Используем setList, чтобы заполнить массив
      setList(jsonData); 
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);


  useEffect(() => {
    // 2. Если данные загружены, запускаем таймер
    if (list.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          // Если дошли до конца массива, возвращаемся к 0
          prevIndex === list.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Интервал 3 секунды

      // ВАЖНО: Чистим таймер, если компонент удалится, чтобы не было утечек памяти
      return () => clearInterval(timer);
    }
  }, [list]);

  // 3. Сначала проверяем загрузку и ошибки, потом рендерим данные
  if (loading) return <div className={styles.load}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  const currentPhilosopher = list[currentIndex];

 return (
    <div className={styles.pageWrapper}>
      <div className={styles.imagePlaceholder}>
        {/* Используем опциональную цепочку ?. чтобы не упасть, если данных нет */}
        <img 
          src={currentPhilosopher?.img} 
          alt={currentPhilosopher?.title} 
          key={currentPhilosopher?.id} // Ключ тут тоже нужен для анимации смены фото
          className={styles.philosopherPhoto}
        />
      </div>

      <div className={styles.card} key={currentPhilosopher?.id}>
        <h1 className={styles.titleCard}>{currentPhilosopher?.title}</h1>
        <p className={styles.bodyCard}>{currentPhilosopher?.body}</p>
        <small className={styles.badge}>
          {currentIndex + 1} / {list.length}
        </small>
      </div>
    </div>
  );
};

export default UserProfile;
