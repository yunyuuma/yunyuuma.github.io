// カウンターアプリ
/*import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>

      <div style={styles.counter}>
        <button onClick={() => setCount(count - 1)} style={styles.button}>
          -1ボタン
        </button>

        <h2>count : {count}</h2>

        <button onClick={() => setCount(count + 1)} style={styles.button}>
          +1ボタン
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  counter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default App;
*/

//チェックボックス選択を表示

/*
import React, { useMemo, useState } from "react";

  const items = ["すし", "天ぷら", "焼肉"];

export default function App() {

  const [selected, setSelected] = useState(() => new Set());

  const toggle = (item) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const selectedText = useMemo(() => {
    const arr = items.filter((x) => selected.has(x));
    return arr.length ? arr.join(", ") : "なし";
  }, [selected]);

  return (
    <div style={styles.wrap}>
      <h2 style={{ marginBottom: 12 }}>食べたいものを選んでね</h2>

      <div style={styles.list}>
        {items.map((item) => (
          <label key={item} style={styles.item}>
            <input
              type="checkbox"
              checked={selected.has(item)}
              onChange={() => toggle(item)}
            />
            <span style={{ marginLeft: 10 }}>{item}</span>
          </label>
        ))}
      </div>

      <div style={styles.result}>
        <b>選択中：</b>
        <span>{selectedText}</span>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: 24,
    maxWidth: 420,
    margin: "40px auto",
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  list: {
    display: "grid",
    gap: 10,
    marginBottom: 18,
  },
  item: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
  },
  result: {
    paddingTop: 10,
    borderTop: "1px solid #eee",
    fontSize: 18,
  },
};
*/

//ラジオボタン選択を表示

/*import React, { useState } from "react";

const options = ["男性", "女性"];

export default function App() {
  
  const [selected, setSelected] = useState("男性");

  return (
    <div style={styles.wrap}>
      <h2>性別を選択</h2>

      <div style={styles.list}>
        {options.map((option) => (
          <label key={option} style={styles.item}>
            <input
              type="radio"
              name="gender"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span style={{ marginLeft: 8 }}>{option}</span>
          </label>
        ))}
      </div>

      <div style={styles.result}>
        <b>選択中：</b>
        {selected}
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: 24,
    maxWidth: 400,
    margin: "40px auto",
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  list: {
    display: "grid",
    gap: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
  },
  result: {
    fontSize: 18,
    paddingTop: 10,
    borderTop: "1px solid #eee",
  },
};*/

//トグルボタン

/*
import React, { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div style={styles.wrap}>
      <h2>パスワード入力</h2>

      <div style={styles.box}>
        <input
          type={show ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力"
          style={styles.input}
        />

        <button onClick={() => setShow(!show)} style={styles.button}>
          {show ? "非表示" : "表示"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: 30,
    maxWidth: 400,
    margin: "50px auto",
    textAlign: "center",
  },
  box: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    fontSize: 16,
    width: 200,
  },
  button: {
    padding: "10px 15px",
    fontSize: 14,
    cursor: "pointer",
  },
};
*/

//文字数プログレスバー
/*
import React, { useState } from "react";

export default function App() {
  const maxLength = 50;
  const [text, setText] = useState("");

  const length = text.length;
  const percent = (length / maxLength) * 100;

  return (
    <div style={styles.wrap}>
      <h2>文字数プログレスバー</h2>

      <textarea
        value={text}
        maxLength={maxLength}
        onChange={(e) => setText(e.target.value)}
        placeholder="最大50文字まで入力できます"
        style={styles.textarea}
      />

      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${percent}%`,
            backgroundColor:
              percent > 80 ? "#ff4d4f" : percent > 50 ? "#faad14" : "#4caf50",
          }}
        />
      </div>

      <div style={styles.counter}>
        {length}/{maxLength}文字
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: 30,
    maxWidth: 500,
    margin: "50px auto",
  },
  textarea: {
    width: "100%",
    height: 100,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  progressContainer: {
    width: "100%",
    height: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    transition: "width 0.3s ease",
  },
  counter: {
    marginTop: 10,
    textAlign: "right",
    fontSize: 14,
  },
};
*/

//スライダーで透明度調整

/*
import React, { useState } from "react";

export default function App() {
  const [opacity, setOpacity] = useState(1); // 初期値100%

  return (
    <div style={styles.wrap}>
      <h2>スライダーで透明度調整</h2>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={(e) => setOpacity(e.target.value)}
        style={{ width: "100%", marginBottom: 20 }}
      />

      <div style={styles.value}>
        透明度: {(opacity * 100).toFixed(0)}%
      </div>

      <div
        style={{
          ...styles.box,
          opacity: opacity,
        }}
      >
        FFLLAASSHH
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    padding: 30,
    maxWidth: 500,
    margin: "50px auto",
    textAlign: "center",
  },
  value: {
    marginBottom: 15,
    fontSize: 16,
  },
  box: {
    width: "100%",
    height: 150,
    backgroundColor: "#1890ff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    borderRadius: 10,
    transition: "opacity 0.2s ease",
  },
};
*/


//入力形式チェック
//import React, { useState } from "react";

//export default function App() {
  //const [email, setEmail] = useState("");
  //const [phone, setPhone] = useState("");

  //const [emailError, setEmailError] = useState(false);
  //const [phoneError, setPhoneError] = useState(false);

  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //const phoneRegex = /^\d{2,4}-?\d{2,4}-?\d{3,4}$/;

  //const validateEmail = () => {
    //if (!emailRegex.test(email)) {
      //setEmailError("メールアドレス形式が不正です");
    //} else {
      //setEmailError("");
    //}
  //};

  //const validatePhone = () => {
    //if (!phoneRegex.test(phone)) {
      //setPhoneError("電話番号形式が不正です");
    //} else {
      //setPhoneError("");
    //}
  //};

  //return (
    //<div style={styles.wrap}>
      //<h2>形式チェック</h2>


      //{/* メール */}
      //<div style={styles.field}>
        //<input
          //type="text"
          //placeholder="メールアドレスを入力"
          //value={email}
          //onChange={(e) => setEmail(e.target.value)}
          //onBlur={validateEmail}
          //style={styles.input}
        ///>
        //{emailError && <div style={styles.error}>{emailError}</div>}
      //</div>

     // {/* 電話 */}
      //<div style={styles.field}>
        //<input
          //type="text"
          //placeholder="電話番号を入力"
          //value={phone}
          //onChange={(e) => setPhone(e.target.value)}
          //onBlur={validatePhone}
          //style={styles.input}
        ///>
        //{phoneError && <div style={styles.error}>{phoneError}</div>}
      //</div>
    //</div>
  //);
//}

/*const styles = {
  wrap: {
    fontFamily: "sans-serif",
    maxWidth: 520,
    margin: "50px auto",
    padding: 24,
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  field: {
    marginTop: 18,
  },
  label: {
    display: "block",
    marginBottom: 6,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: 16,
    borderRadius: 8,
    border: "1px solid #ccc",
    outline: "none",
  },
  error: {
    marginTop: 6,
    color: "#ff4d4f",
    fontSize: 14,
  },
};
*/

// BMI計算機
/*
import React, { useEffect, useState } from "react";

export default function App() {
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  const [bmi, setBmi] = useState("");
  const [judge, setJudge] = useState("");

  useEffect(() => {
    const h = Number(heightCm);
    const w = Number(weightKg);

    
    if (!h || !w || h <= 0 || w <= 0) {
      setBmi("");
      setJudge("");
      return;
    }

    const heightM = h / 100;
    const value = w / (heightM * heightM);
    const rounded = value.toFixed(2);

    setBmi(rounded);

    if (value < 18.5) setJudge("痩せ");
    else if (value < 25) setJudge("普通");
    else setJudge("肥満");
  }, [heightCm, weightKg]);

  return (
    <div style={styles.wrap}>
      <h2>BMI計算機</h2>

      <div style={styles.row}>
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(e.target.value)}
          placeholder="身長"
          style={styles.input}
        />
        <span>cm</span>
      </div>

      <div style={styles.row}>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(e.target.value)}
          placeholder="体重"
          style={styles.input}
        />
        <span>kg</span>
      </div>

      <div style={styles.result}>
        <div>BMI : {bmi || "-"}</div>
        <div>判定 : {judge || "-"}</div>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    maxWidth: 420,
    margin: "50px auto",
    padding: 24,
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  row: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    lineHeight: 1.8,
    paddingTop: 12,
    borderTop: "1px solid #eee",
  },
};
*/

//住所自動入力API
/*
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [zip, setZip] = useState("");
  const [pref, setPref] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const lastFetchedZipRef = useRef("");

  const normalizeZip = (value) => value.replace(/[^\d]/g, "");

  const fetchAddress = async (zip7) => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${encodeURIComponent(zip7)}`
      );

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (!data || data.status !== 200 || !data.results || data.results.length === 0) {
        setPref("");
        setCity("");
        setError(data?.message || "該当する住所が見つかりませんでした");
        return;
      }

      const r = data.results[0];
      setPref(r.address1 || ""); // 都道府県
      setCity(r.address2 || ""); // 市区町村
    } catch (e) {
      setPref("");
      setCity("");
      setError("住所の取得に失敗しました（通信状況を確認してください）");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const z = normalizeZip(zip);

    if (z.length < 7) {
      setLoading(false);
      setError("");
      lastFetchedZipRef.current = "";
      return;
    }

    const zip7 = z.slice(0, 7);

    if (lastFetchedZipRef.current === zip7) return;

    lastFetchedZipRef.current = zip7;
    fetchAddress(zip7);
  }, [zip]);

  return (
    <div style={styles.wrap}>
      <h2>住所自動入力（ZipCloud）</h2>
*/
//      {/* 郵便番号 */}
      /*<div style={styles.row}>
        <label style={styles.label}>郵便番号</label>
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="例）100-0001 / 1000001"
          inputMode="numeric"
          style={styles.input}
        />
        <div style={styles.sub}>{loading ? "検索中..." : "7桁入力で自動検索します"}</div>
      </div>

      {error && <div style={styles.error}>{error}</div>}*/

//      {/* 都道府県 */}
      /*<div style={styles.row}>
        <label style={styles.label}>都道府県</label>
        <input value={pref} onChange={(e) => setPref(e.target.value)} style={styles.input} />
      </div>*/

//      {/* 市区町村 */}
      /*<div style={styles.row}>
        <label style={styles.label}>市区町村</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} style={styles.input} />
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    fontFamily: "sans-serif",
    maxWidth: 560,
    margin: "50px auto",
    padding: 24,
    border: "1px solid #ddd",
    borderRadius: 12,
  },
  row: { marginBottom: 14 },
  label: { display: "block", fontWeight: "bold", marginBottom: 6 },
  input: {
    width: "100%",
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  sub: { marginTop: 6, fontSize: 12, color: "#666" },
  error: { color: "red", marginBottom: 14, fontSize: 14 },
};
*/

// ログイン画面（SPAで。別ファイルに定義）
import React, { useState } from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (id, pass) => {
    if (id === "user1" && pass === "pass1") {
      setIsLoggedIn(true);
    } else {
      alert("ログイン失敗");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}