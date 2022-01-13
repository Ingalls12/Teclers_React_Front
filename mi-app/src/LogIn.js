import Header from "./components/LogIn/Header";
import LogInMain from "./components/LogIn/LogInMain";
import  "./styles/login_styles.css"
import logo from  "./img/tecla.jpg"
function App() {
  return (
    <div className="App">
       <Header logo={logo}/>
       <LogInMain />
    </div>
  );
}

export default App;
