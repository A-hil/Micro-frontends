import React, { useState } from 'react';
import './App.css';

function AddComment({ onAdd }) {
  const [text, setText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  // Проверка: нужно ли показывать кнопки прямо сейчас?
  const showButtons = isExpanded || text.trim().length > 0;
  // Проверка: можно ли нажимать кнопку "Опубликовать"?
  const isButtonDisabled = text.trim().length === 0;

  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isButtonDisabled) return;

    onAdd({
      id: Date.now(),
      author: isAdmin ? "Администратор" : "Гость",
      text: text,
      isAdmin: isAdmin 
    });
    
    setText('');
    setIsExpanded(false); // Сворачиваем после отправки
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        onFocus={() => setIsExpanded(true)}
        placeholder="Оставьте комментарий..."
        className="comment-input"
      />

      <div style={{ display: showButtons ? 'flex' : 'none', gap: '10px', marginTop: '10px' }}>
        <label>
            <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
            Админ
        </label>
        <button 
          type="submit" 
          disabled={isButtonDisabled}
          className={isButtonDisabled ? "btn-disabled" : "btn-active"}
        >
          Опубликовать
        </button>
        <button type="button" onClick={() => { setText(''); setIsExpanded(false); }}>
          Отмена
        </button>
      </div>
    </form>
  );
}


export default AddComment;