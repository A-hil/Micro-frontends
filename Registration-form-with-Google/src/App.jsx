import React, { useReducer } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Notification from './Notification';
import styles from './Notification.module.css';
import ContactForm from './ContactForm';

const initialState = {
  // UI состояния
  isNotificationVisible: false,
  notificationConfig: { message: '', type: 'success' },
  
  // Форма
  isLoginMode: false,
  
  // Auth
  isLoggedIn: false,
  user: null,
  registeredUser: null, // Позже заменить харнение в стейте на backend
};

const ACTION_TYPES = {
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  HIDE_NOTIFICATION: 'HIDE_NOTIFICATION',
  TOGGLE_MODE: 'TOGGLE_MODE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  REGISTER_USER: 'REGISTER_USER',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SHOW_NOTIFICATION:
      return {
        ...state,
        isNotificationVisible: true,
        notificationConfig: action.payload, // { message, type }
      };
    
    case ACTION_TYPES.HIDE_NOTIFICATION:
      return {
        ...state,
        isNotificationVisible: false,
      };
    
    case ACTION_TYPES.TOGGLE_MODE:
      return {
        ...state,
        isLoginMode: !state.isLoginMode,
      };
    
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload, 
        isNotificationVisible: true,
        notificationConfig: {
          message: `Добро пожаловать, ${action.payload.name}!`,
          type: 'success',
        },
      };
    
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        registeredUser: null,
        isNotificationVisible: true,
        notificationConfig: { message: 'Вы вышли', type: 'success' },
      };
    
    case ACTION_TYPES.REGISTER_USER:
      return {
        ...state,
        registeredUser: action.payload,
        isLoginMode: true,
        isNotificationVisible: true,
        notificationConfig: { message: 'Регистрация успешна!', type: 'success' },
      };
    
    default:
      return state;
  }
};

function App() {
const [state, dispatch] = useReducer(appReducer, initialState);

  // Деструктуризация состояния
 const {
    isNotificationVisible,
    notificationConfig,
    isLoginMode,
    isLoggedIn,
    user,
    registeredUser,
  } = state;


  // ХЕЛПЕР
  const showNotification = (message, type = 'info', autoHide = true) => {
    dispatch({ 
      type: ACTION_TYPES.SHOW_NOTIFICATION, 
      payload: { message, type } 
    });
    
    if (autoHide) {
      setTimeout(() => {
        dispatch({ type: ACTION_TYPES.HIDE_NOTIFICATION });
      }, 3000);
    }
  };
  
  // ОБРАБОТЧИКИ dispatch'ат действия
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    if (decoded.exp < Date.now() / 1000) {
      showNotification('Токен истёк', 'error');
      return;
    }

    dispatch({ 
      type: ACTION_TYPES.LOGIN_SUCCESS, 
      payload: decoded 
    });
  };
  
  const handleGoogleError = () => {
  showNotification('Не удалось войти через Google', 'error');
};

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString().trim();
    const password = formData.get('password')?.toString().trim();
    const name = formData.get('name')?.toString().trim() || 'Пользователь';
    
    if (!email || !email.includes('@')) {
      showNotification('Ошибка в Email!', 'error');
    } else if (password.length < 8) {
      showNotification('Пароль слишком короткий!', 'error');
    } else {
      dispatch({ 
        type: ACTION_TYPES.REGISTER_USER, 
        payload: { name, email, password }
      });
    }
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const pass = data.get('password');
    
    if (registeredUser && email === registeredUser.email && pass === registeredUser.password) {
      dispatch({ 
        type: ACTION_TYPES.LOGIN_SUCCESS, 
        payload: { name: registeredUser.name, email: registeredUser.email }
      });
    } else {
      showNotification('Данные не совпадают!', 'error');
    }
  };
  
  const handleLogout = () => {
    dispatch({ type: ACTION_TYPES.LOGOUT });
  };
    //Блок зареганного пользователя
    if (isLoggedIn && user) { 
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        {user.picture && (  
          <img 
            src={user.picture} 
            alt="Profile" 
            style={{ borderRadius: '50%', width: '100px', height: '100px' }}
          />
        )}
        <h1>Добро пожаловать, {user.name || user.email}!</h1>  {/* ← user */}
        <p>Вы успешно вошли в систему.</p>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      {!isLoginMode ? (
        <div className={styles.regsheet}>
          <form onSubmit={handleRegister} noValidate>
            <h2>Регистрация</h2>
            <input type="text" name="name" placeholder="Имя" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Пароль" required />
            <button type="submit">Зарегистрироваться</button>
            <button type="button" onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_MODE })}>Уже есть аккаунт</button>
          </form>
          <hr style={{ margin: '20px 0', width: '100%' }} />

          <div style={{ textAlign: 'center' }}>
            <p>Или зарегистрируйтесь через</p>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="signup_with"
              shape="rectangular"
            />

          </div>
        </div>
      ) : (
        <div className={styles.regsheet}>
          <form onSubmit={handleLogin}>
            <h2>Вход в аккаунт</h2>
            <input type='text' name="email" placeholder="Email" required noValidate/>
            <input type="password" name="password" placeholder="Пароль" required />
            <button type="submit">Войти</button>
            <button type="button" onClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_MODE })}>Назад к регистрации</button>
          </form>
          

          <hr style={{ margin: '20px 0', width: '100%' }} />
          
          <div style={{ textAlign: 'center' }}>
            <p>Или войдите через</p>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              theme="outline"
              size="large"
              text="signin_with"
              shape="rectangular"
            />
          </div>
        </div>
      )}
      
      <Notification isOn={isNotificationVisible} config={notificationConfig} />
    </div>
  );
}

export default App;