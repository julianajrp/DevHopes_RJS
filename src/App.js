import "./App.css";
import DashboardPage from "./pages/dashboard/DashboardPage";
import GlobalStyle from "./styles/global";
import Header from "./components/pagesComponents/header/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <DashboardPage />
    </div>
  );
}

export default App;
