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

  console.log(window?.username);

  return (
    <div className="App">
      Hello Je
      <br />
      My self {username}
      <br />
      <button className="bg-gray-900 text-white" onClick={() => setCount(count + 1)}>
        count: {count}
      </button>
    </div>
  );
}

export default App;
