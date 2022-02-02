import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import Textbook from '../Textbook/Textbook';
import Statistic from '../Statistic/Statistic';
import AudioCallGame from '../AudioCallGame/AudioCallGame';
import SprintGame from '../SprintGame/SprintGame';
import Authorization from '../Authorization/Authorization';
import Register from '../Authorization/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/textbook" element={<Textbook />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/audiocall" element={<AudioCallGame />} />
        <Route path="/sprint" element={<SprintGame />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
