import { useReducer } from 'react'
import styles from './VisibilityToggle.module.css';

const initialState = { isOn: false };

function reducer(state, action) {
  switch (action.type) {
    case 'visible':
      return {
         isOn: true 
         };
    case 'hidden':
      return { isOn: false };
    default:
      return state;
  }
}

function VisibilityToggle(){
   const [state, dispatch] = useReducer(reducer, initialState);

 return (
    <div className={styles.container}>
      {/* 2. Используем условие для показа текста */}
      <div className={styles.text}>
        {state.isOn ? 'Текст показан' : 'Текст скрыт'}
      </div>

      <div className={styles.controls}>
        <button 
          className={`${styles.button} ${styles.showBtn}`} 
          onClick={() => dispatch({ type: 'visible' })}
        >
          Показать
        </button>
        <button 
          className={`${styles.button} ${styles.hideBtn}`} 
          onClick={() => dispatch({ type: 'hidden' })}
        >
          Скрыть
        </button>
      </div>
    </div>
  );
}

export default VisibilityToggle