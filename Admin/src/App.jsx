import './App.css';
import Comments from './Comments';



function UserInfo({ isAdmin }) {
  return (
    <p>Статус: {isAdmin ? "Администратор" : "Обычный пользователь"}</p>
  );
}

export function UserBadge({ isAdmin }) {
  if (!isAdmin) return null;
  return (
    <span style={{ 
      fontSize: '10px', 
      backgroundColor: '#ffffff', // Белый фон
      color: '#000000',           // Черный текст
      padding: '2px 6px', 
      borderRadius: '4px', 
      marginLeft: '8px',
      border: '1px solid #ccc'    // Добавим рамку, чтобы он не сливался с фоном
    }}>
      ADMIN
    </span>
  );
}

const CommentItem = ({ author, text, isAdmin }) => {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        {/* Контейнер имени: если админ - красим фон и текст */}
        <span style={{ 
          fontWeight: '500', 
          fontSize: '13px',
          padding: isAdmin ? '2px 8px' : '0',
          backgroundColor: isAdmin ? '#888888' : 'transparent', 
          color: isAdmin ? 'white' : 'black',                  
          borderRadius: '12px',                                
          display: 'inline-block'
        }}>
          {author}
        </span>
      </div>

      <p style={{ margin: '0 0 0 0', fontSize: '14px', color: '#0f0f0f' }}>
        {text}
      </p>
    </div>
  );
};

function App() {
  return (
    <div>

      <Comments />
    </div>
  );
}

export default App;