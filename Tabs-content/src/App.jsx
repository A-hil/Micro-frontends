import {useState} from 'react'
import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState('tab1')

  const tabs =[
    {id:"tab1", label:"Главная"},
    {id:"tab2", label:"О нас"},
    {id:"tab3", label:"Услуги"},
    {id:"tab4", label:"Контакты"},
    {id:"tab5", label:"Вопросы"}
  ];

  const tabContent = {
    tab1: (
      <div>
        <h2 className='mb-3 text-2xl font-bold text-black'>  
          Добро пожаловать
        </h2>
        <p className='mb-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam harum suscipit impedit maiores accusamus aut explicabo dolorem deleniti ratione! Fugiat voluptate itaque, sapiente nulla consectetur voluptatum quia rerum amet.
        </p>
      </div>
    ),
    tab2:(
      <div>
        <h2 className='mb-4 text-2xl font-bold text-black'>  
          О нас
        </h2>
        <p className='mb-4'>Узнайте больше о нашей компании и миссии</p>
        <span className='border-l-4 border-purple-500 pl-4 italic'>
          "Наша миссия - предоставлять инновационные решения для наших клиентов"
        </span>
        <p className='mt-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est voluptate impedit rem illo non quasi rerum animi assumenda excepturi? Quisquam recusandae quibusdam, nostrum sit dolores tempore autem voluptatum vel!
        </p>
      </div>
    ),
    tab3:(
      <div>
        <h2 className='mb-4 text-2xl font-bold text-black'>  
          Наши услуги
        </h2>
        <p className='mb-4'>Мы предлагаем широкий спектр услуг для удовлетворения ваших потребностей</p>
        <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-xl bg-purple-100 p-4 text-center'>
              <h3 className='font-bold'>Услуга 1</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio iste consequatur minima quisquam eveniet debitis corporis tempora odit magnam vel iusto corrupti eius animi adipisci eum totam commodi consectetur?
              </p>
            </div>

            <div className='rounded-xl bg-purple-100 p-4 text-center'>
              <h3 className='font-bold'>Услуга 2</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio iste consequatur minima quisquam eveniet debitis corporis tempora odit magnam vel iusto corrupti eius animi adipisci eum totam commodi consectetur?
              </p>
            </div>

            <div className='rounded-xl bg-purple-100 p-4 text-center'>
              <h3 className='font-bold'>Услуга 3</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio iste consequatur minima quisquam eveniet debitis corporis tempora odit magnam vel iusto corrupti eius animi adipisci eum totam commodi consectetur?
              </p>
            </div>

            <div className='rounded-xl bg-purple-100 p-4 text-center'>
              <h3 className='font-bold'>Услуга 4</h3>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, optio iste consequatur minima quisquam eveniet debitis corporis tempora odit magnam vel iusto corrupti eius animi adipisci eum totam commodi consectetur?
              </p>
            </div>
        </div>
      </div>
    ),
    tab4:(
      <div>
        <h2 className='mb-4 text-2xl font-bold text-black'>  
          Свяжитесь с нами
        </h2>
        <p className='mb-4'>Свяжитесь с нашей командой.</p>
        <form className='space-y-4'>
          <input type="text" placeholder='Имя' className='w-full rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400'/>
          <input type="email" placeholder='Email' className='w-full rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400'/>
          <textarea placeholder='Сообщение' className='w-full resize-none rounded-xl border p-2 outline-none ring-2 ring-transparent focus:ring-purple-400'></textarea>
          <button className='rounded-full bg-purple-500 px-4 py-2 text-white hover:bg-purple-600'>Отправить</button>
        </form>
      </div>
    ),
    tab5:(
      <div>
        <h2 className='mb-4 text-2xl font-bold text-black'>  
          Часто задаваемые вопросы
        </h2>
        
        <div className='space-y-4'>
          <div>
            <h3 className='font-bold'>В: Какова ваша политика возврата?</h3>
            <p>О: Наша политика возврата позволяет возвращать товары в течение 30 дней после покупки.</p>
          </div>

          <div>
            <h3 className='font-bold'>В: Предлагаете ли вы международную доставку?</h3>
            <p>О: Да, мы доставляем в большинство стран мира.</p>
          </div> 

          <div>
            <h3 className='font-bold'>В: Сколько времени обычно занимает доставка?</h3>
            <p>О: Внутренние заказы обычно прибывают в течение 3-5 рабочих дней, в то время как международные заказы могут занять 7-14 рабочих дней.</p>
          </div>

          <div>
            <h3 className='font-bold'>В: Ваши продукты экологичны?</h3>
            <p>О: Мы стремимся использовать устойчивые материалы и упаковку, когда это возможно, чтобы минимизировать наше воздействие на окружающую среду.</p>
          </div>       
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='min-h-screen w-full flex items-center justify-center bg-linear-to-r from-purple-400 via-purple-300 to-purple-200'>
        {/* Добавлен min-h-[500px] для фиксированной минимальной высоты карточки */}
        <div className='max-w-4xl w-full rounded-3xl border bg-white p-8 mx-10 shadow-xl space-y-5 min-h-550px flex flex-col'>
          
          <div className='flex flex-wrap border-b gap-2'>
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`px-4 py-2 font-semibold transition-all duration-200 rounded-t-lg ${
                  activeTab === tab.id 
                    ? "bg-purple-500 text-white shadow-md" 
                    : "text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* text-left для выравнивания по левому краю */}
          <div className="pt-4 animate-fadeIn text-left flex-1">
            {tabContent[activeTab]}
          </div>

        </div>
      </div>
    </>
  )
}

export default App