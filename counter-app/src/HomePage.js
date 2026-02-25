import React from "react";

export default function HomePage({ onLogout }) {
  return (
    <div style={styles.wrap}>
      <h2>ホーム画面</h2>
      <p>ログイン成功！</p>

      <button onClick={onLogout} style={styles.button}>
        ログアウト
      </button>
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
    textAlign: "center",
  },
  button: { marginTop: 10, padding: 12, fontSize: 16, cursor: "pointer", borderRadius: 8 },
};