import React, { useState } from "react";

function Form1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [entry, setEntry] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const newEntry = { email: email, password: password };
    setEntry([...entry, newEntry]);
    console.log(entry);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="Form1_div">
        <form action="" onSubmit={submit}>
          <label htmlFor="email">👇E-mail👇</label>
          <input
            type="email"
            placeholder="Enter Your 📧 E-mail..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">👇Password👇</label>
          <input
            type="password"
            placeholder=" Enter your 🔑Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="btn btn-outline-primary" type="submit">
            Login
          </button>
        </form>
        <div>
          {entry.map((val,inx) => {
            return (
              <div className="show" key={inx}>
                <h1>
                 {inx}, {val.email}, {val.password}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Form1;
