import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onLogin(id, pass);
  };

  return (
    <div style={styles.wrap}>
      <h2>ログイン画面</h2>

      <form onSubmit={submit} style={styles.form}>
        <label style={styles.label}>ID</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={styles.input}
          placeholder="user1"
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={styles.input}
          placeholder="pass1"
        />

        <button type="submit" style={styles.button}>
          ログイン
        </button>
      </form>
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: 420,
    margin: "60px auto",
    padding: 24,
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  form: { display: "grid", gap: 10 },
  label: { fontWeight: "bold" },
  input: { padding: 10, fontSize: 16, borderRadius: 8, border: "1px solid #ccc" },
  button: { marginTop: 6, padding: 12, fontSize: 16, cursor: "pointer", borderRadius: 8 },
};
//ダイアログ