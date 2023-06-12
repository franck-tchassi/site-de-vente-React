import React, { useRef, useState, useEffect } from "react"


const Login = () =>{
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        useRef.current.focus();
    }, []);

    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd]);



    return(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={submitData}>
                <label htmlFor="username">Username:</label>
                <input 
                    className=""
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e)=> setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input 
                    className=""
                    type="password"
                    id="password"
                    onChange={(e)=> setPwd(e.target.value)}
                    value={pwd}
                    required
                />

                <button type="submit">Sign ln</button>
            </form>
            <p>
                Pas encore de Compte? <br />
                <span className="line">
                    {/* inserer la route ici */}
                    <a href="#">Sign Up</a>
                </span>

            </p>


        </section>
    )


    const submitData = async (e) =>{
        e.preventDefault();
        console.log(user, pwd);
        setUser('');
        setPwd('');
        setSuccess(true)
    }

}

export default Login;