import * as React from 'react';
import './AuthPage.css';

export class AuthPage extends React.Component {
    render() {
        return (
            <form className="auth-page">
                <div>
                    <img className="logo" src="logo.png" alt="Puppeteer"/>
                </div>

                <h1 className="title">Puppeteer</h1>

                <label>
                    Логин:
                    <input type="text"/>
                </label>

                <label>
                    Пароль:
                    <input type="password"/>
                </label>

                <button type="submit">Войти</button>

            </form>
        );
    }
}
