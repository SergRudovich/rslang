import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';
import Textbook from '../Textbook/Textbook';
import Statistic from '../Statistic/Statistic';
import AudioCallGame from '../AudioCallGame/AudioCallGame';
import SprintGame from '../SprintGame/SprintGame';
import Authorization from '../Authorization/Authorization';
import Register from '../Authorization/Register';
import Learned from '../Textbook/Learned/Learned';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TeamAbout from '../TeamAbout/TeamAbout';

function App() {

  const isSpinner = useSelector(state => state.isSpinner);

  return (
    <BrowserRouter>
      {isSpinner && <LoadingSpinner />}
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/textbook" element={<Textbook />} />
        <Route path="/learned" element={<Learned />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/audiocall" element={<AudioCallGame />} />
        <Route path="/sprint" element={<SprintGame />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team-about" element={<TeamAbout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
