import React, { useEffect, useRef, useState } from 'react'


function lgin() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [succes, setSucces] = useState(false);


    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        setErrorMsg('');
    }, [user,pwd])

    const handleSubmit = async(e) =>{
        e.preventDefault();
    }

  return (
    <div>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
        <form>
            <input type="text" id="username" ref={userRef} onChange={(e)=>setUser(e.target.value)} value={user} required></input>
            <input type="password" id="password" onChange={(e)=>setUser(e.target.value)} value={pwd} required></input>
            <button>Sign</button>

        </form>
    </div>
  )
}

export default lgin