import React from 'react';

import "./Login.css";


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
        await fetch('https://express-server-memory-game-740e1bbada2c.herokuapp.com/createPlayer', {
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
            className="submitBtn"
            type="submit"
          >
            Submit
          </button>
       
      </form>
    </div>
  );
};

export default Login;