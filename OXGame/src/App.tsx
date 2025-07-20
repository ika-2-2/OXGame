import './App.css'

function App() {
  //javascriptを書く場所
  const handleClick = () => {
    alert("ボタンがクリックされたゾ!")
  }
  return (
    //htmlなど画面の部分を書く場所
    <div>
      <h1>Hello OXGame!</h1>
      <br/>
      <button onClick={handleClick}>クリックしねて</button>
    </div>
  );
}

export default App
