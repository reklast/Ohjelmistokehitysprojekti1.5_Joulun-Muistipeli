import React from 'react';


interface LoginProps {
  getName: Function
  onLogin: Function
  playerName: string
}

const Login: React.FC<LoginProps> = ({ getName, onLogin, playerName }) => {
  const getPlayerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    getName(event.currentTarget.value);
  };

  const onLoginHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    try{
        await fetch('http://localhost:5000/createPlayer', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name: playerName}),
        });
      } catch(e) {
        console.log(e);
      }
    onLogin();
  };

  return (
    <div className='loginForm'>
      <form onSubmit={onLoginHandler}>
          <label>
            Enter your name
          </label>
          <input
            type="text"
            placeholder="Your name"
            onChange={getPlayerName}
          />
          <button
            className="sumbitBtn"
            type="submit"
          >
            Submit
          </button>
       
      </form>
    </div>
  );
};

export default Login;