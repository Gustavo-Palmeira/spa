import React, { useContext, useState } from "react"
import Layout from "../layouts/Layouts"

import { useLazyQuery } from "@apollo/client"
import { GET_LOGIN } from "../graphql/login/query"
import { UserContext } from "../auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("gustavopalmeira")
  const [password, setPassword] = useState("123456")
  const { setCurrentUser } = useContext(UserContext)
  const [loadLogin] = useLazyQuery(GET_LOGIN)

  const handleLogin = async () => {
    const { data: { user } } = await loadLogin({ variables: { username } })
    if (user[0].password === btoa(password)) {
      const { id, name, username } = user[0]
      setCurrentUser({ id, name, username })
      navigate('/')
    }
  }

  return (
    <Layout title="Login">
      <div className="row">
        <div className="col-10 col-lg-5 d-none d-lg-flex justify-content-end align-itens-center">
          <img src="/img/iphone.png" alt="Iphone" />
        </div>
        <div className="col-10 col-lg-5 m-5 d-flex justify-content-center align-itens-center">
          <div className="m-2" style={{ maxWidth: 430, minWidth: 430 }}>
            <h2 style={{ fontSize: 70, fontFamily: "'Cookie', cursive" }}>
              Senacgram
            </h2>
            <input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              type="text"
              className="form-control mt-4"
              placeholder="Usuário"
            />
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              className="form-control mt-2"
              placeholder="Senha"
            />
            <button className="btn btn-primary w-100 mt-4" onClick={() => handleLogin()}>Logar</button>
            <hr className="my-5" />
            <div className="text-center">
              <p>Não tem uma conta? Cadastre-se</p>
            </div>
            <div className="text-center">
              <p>Obtenha o aplicativo</p>
              <div className="row justify-content-center">
                <img src="/img/apple.png" alt="Iphone" style={{ width: 140 }} />
                <img
                  src="/img/google.png"
                  alt="Google"
                  style={{ width: 140 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
