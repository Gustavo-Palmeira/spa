import React, { useState } from "react"

const Header = ({ username, setUsername }) => {
    const [user, setUser] = useState(null)

    const handleChangeUser = ({ target }) => {
        setUser(target.value)
    }

    const handleClickLogin = () => {
        setUsername(user)
        setUser(null)
    }

    const handleClickLogout = () => {
        setUsername(null)
    }

    return (
        <div>
            {!username && (
                <>
                    <h1>Login</h1>
                    <input type="text" placeholder="Digite o usuário" onChange={handleChangeUser} />
                    <button onClick={handleClickLogin}>Login</button>
                </>
            )}
            {username && (
                <>
                    <h1>Bem vindo, {username}</h1>
                    <button onClick={handleClickLogout}>Logout</button>
                </>
            )}
        </div>
    )
}

export default Header