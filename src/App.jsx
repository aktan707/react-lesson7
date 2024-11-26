import { useState } from 'react';
import EyeIcon from "./assets/eye.svg";
import "./app.css";

const App = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [count, setCount] = useState(1);

    const decrement = () => {
        setCount(count - 1);
    }

    const [user, setUser] = useState({
        Login: "",
        Password: "",
    });

    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div>
            <span>Iphone 16 pro &nbsp; </span>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <span> {count} </span>
            <button onClick={decrement}>-</button>
            &nbsp;&nbsp; = {110000 * count}
            <hr />
            <h4>User</h4>
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>
            <input type="text" placeholder="Логин" onChange={(event) => {
                setUser({
                    ...user,
                    Login: event.target.value,
                });
            }} />
            <br /><br />
            <input type={showPassword ? "text" : "password"} placeholder="Пароль" onChange={(event) => {
                setUser({
                    ...user,
                    Password: event.target.value,
                });
            }} />
            <button onClick={() => setShowPassword(!showPassword)}>
                <img src={EyeIcon} alt="" />
            </button>
            <br /><br />
            <button>Войти</button>
            <br /><br /><br />
            <div className="reg container">
                 <div className="login container">
                <h2>Login</h2>
                <input className="login-input" type="text" placeholder="Email or username*" />
                <input className="login-input" type={showPassword ? "text" : "password"} placeholder="Password*" onChange={(event) => {
                    setUser({
                        ...user,
                        Password: event.target.value,
                    });
                }}/>
                <button className="login-btn2" onClick={() => setShowPassword(!showPassword)}>
                    <img src={EyeIcon} alt=""/>
                </button>
                <input className="login-input2" type="checkbox"/><span className="logins">Remember me</span>
                <button className="login-btn">Login</button>
                <p>Lost your password?</p>
            </div>
                 <div className="register container">
                <h2>Register</h2>
                <input className="register-input" type="text" placeholder="Email*" />
                <input className="register-input" type="text" placeholder="Username*" />
                <input className="register-input" type={showPassword ? "text" : "password"} placeholder="Password*" onChange={(event) => {
                    setUser({
                        ...user,
                        Password: event.target.value,
                    });
                }}/>
                <button className="register-btn2" onClick={() => setShowPassword(!showPassword)}>
                    <img src={EyeIcon} alt=""/>
                </button>
                     <input className="register-input" type={showPassword ? "text" : "password"} placeholder="Confirm Password**" onChange={(event) => {
                    setUser({
                        ...user,
                        Password: event.target.value,
                    });
                }}/>
                <button className="register-btn2" onClick={() => setShowPassword(!showPassword)}>
                    <img src={EyeIcon} alt=""/>
                </button>
                <button className="register-btn">Register</button>
            </div>
            </div>
        </div>
    );
};

export default App;