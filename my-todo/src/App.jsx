import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

//TodoItemという名前の関数を定義
//引数としてpropsを受け取る
//props.textを使って<li>要素を返す
//AppコンポーネントでIodoiItemでTodoItemを使う
//AppコンポーネントでIodoiItemにtextというpropsを渡す
//AppコンポーネントでIodoiItemをmapで繰り返し表示する
//AppコンポーネントでIodoiItemにketを返す
//AppコンポーネントでIodoiItemにtextを渡す
//AppコンポーネントでIodoiItemを表示する

function TodoItem({ text }) { // 部品=htmlを返す関数
  return <li>{text}</li>;    // { }の中はJSを表示する
}

export default function App() {
  const [todos, setTodos] = useState([]); // 変化するデータ
  const [text, setText] = useState('');
  const add = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setTodos([...todos, { id: crypto.randomUUID(), text: trimmedText }]);
    setText('');
};
return (<div>
    <input value={text} onChange={e => setText(e.target.value)} />
    <button onClick={add}>追加</button>
    <ul>{todos.map((todo, i) => <li key={todo.id}>{todo.text}</li>)}</ul>
    <p>残り {todos.length} 件</p>
  </div>);
}
