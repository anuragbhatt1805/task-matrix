import { useEffect, useState } from "react";

const HomePage = () => {
  const [username, setUsername] = useState("");

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
      title: "Notification",
      body: `This is a notification ${count}`,
      silent: true,
    };
    console.log(window?.username);
    console.log(window?.notification);
    // window.notification?.NotifyUser(options);
    new window.Notification(options.title, { body: options.body }).onclick =
      () => {
        setCount(100);
      };
  }

  return (
    <div className=" bg-slate-500 p-5">

      <h1 className="text-center text-2xl">Hello</h1>
      <br />
      <h1 className="text-xl">
        My self <span className="text-xl font-bold">{username}</span>
      </h1>
      <br />
      <button
        className="bg-gray-900 text-white"
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
          handleNotification();
        }}
      >
        count: {count}
      </button>
    </div>
  );
};

export default HomePage;
