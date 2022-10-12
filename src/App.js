import "./styles.css";
const name = "Adeleke";
const currentDate = new Date();
const year = currentDate.getFullYear();
export default function App() {
  return (
    <div className="App">
      <p>IT Support Specialist</p>
      <p>Web Developer</p>
      <p>Created by {name}</p>
      <p>Copyright {year}</p>
    </div>
  );
}
