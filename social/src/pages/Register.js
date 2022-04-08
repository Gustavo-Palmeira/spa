import React, { useContext, useState } from "react";
import Layout from "../layouts/Layouts";
import { Link, useNavigate } from "react-router-dom";

import { REGISTER } from "../graphql/login/mutation";
import { UserContext } from "../auth";
import { useMutation } from "@apollo/client";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const [register] = useMutation(REGISTER);

  const handleRegister = async () => {
    const { data } = await register({
      variables: { name, username, password: btoa(password) },
    });
    setCurrentUser({ ...data.insert_user.returning[0] })
    navigate('/')
  };

  return (
    <Layout title="Register">
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
              value={name}
              onChange={({ target }) => setName(target.value)}
              type="text"
              className="form-control mt-4"
              placeholder="Nome"
            />
            <input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              type="text"
              className="form-control mt-2"
              placeholder="Usuário"
            />
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              className="form-control mt-2"
              placeholder="Senha"
            />
            <button
              className="btn btn-primary w-100 mt-4"
              onClick={() => handleRegister()}
            >
              Registrar
            </button>
            <hr className="my-5" />
            <div className="text-center">
              <p>Já possui conta? <Link to="/login">Entrar</Link></p>
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
  );
};

export default Register;
