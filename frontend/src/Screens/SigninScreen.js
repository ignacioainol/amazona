import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {

        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-in</h2>
                </li>
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </li>
                <li>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <button type="submit" className="button primary">Sigin</button>
                </li>
                <li>
                    New to amazona?
                </li>
                <li>
                    <Link to="/register" className="button secondary text-center"> Create your amazon account </Link>
                </li>

            </ul>
        </form>
    </div>
}

export default SigninScreen
