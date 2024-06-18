import { useEffect, useState } from 'react';

function App() {
  
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    if (window?.username) {
      const user = window.username.getUser();
      setUsername(user);
    }
  }, []);

  const [count, setCount] = useState(0);
  document.title = `Welcome: ${username}`;

  function handleNotification() {
    const options = {
      title: 'Notification',
      body: `This is a notification ${count}`,
      silent: true,
    };
    console.log(window?.username);
    console.log(window?.notification);
    // window.notification?.NotifyUser(options);
    new window.Notification(options.title, {body:   options.body})
    .onclick = () => { setCount(100) };
  }

  return (
    <div className="App">
      Hello Je
      <br />
      My self {username}
      <br />
      <button className="bg-gray-900 text-white" onClick={(e) => {
        e.preventDefault();
        setCount(count + 1);
        handleNotification();
      }}>
        count: {count}
      </button>
    </div>
  );
}

export default App;
