import React from 'react';
import MainView from './MainView.js';
import { useSearchParams } from "react-router-dom";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levelAPI: 0,
      numberLevel: 5,
      numberAnswers: 5,
      isStart: false,
      from: "menu",
    };
  }

  handleChooseLevel = (e) => {
    const levelAPI = e.target.value;
    this.setState({ levelAPI: +levelAPI });
  }

  setNumberLevel = (e) => {
    const amountQuestions = e.target.value || e.target.defaultValue;
    this.setState({ numberLevel: +amountQuestions });
  }

  setNumberAnswers = (e) => {
    const numberAnswers = e.target.value || e.target.defaultValue;
    this.setState({ numberAnswers: +numberAnswers });
  }

  handleSubmitForm = () => {
    this.setState({ isStart: true });
  }

  setFrom = () => {
    const [searchParams] = useSearchParams();
    const from = searchParams.get('from');
    this.setState({ from: +from });

  }

  handleClickNewGame = () => {
    this.setState({ isStart: false });
  }

  render() {
    const {
      levelAPI,
      numberAnswers,
      isStart,
      from,
      numberLevel,
    } = this.state;
    return (
      <MainView
        handleChooseLevel={this.handleChooseLevel}
        handleClickNewGame={this.handleClickNewGame}
        setNumberLevel={this.setNumberLevel}
        setNumberAnswers={this.setNumberAnswers}
        handleSubmitForm={this.handleSubmitForm}
        setFrom={this.setFrom}
        levelAPI={levelAPI}
        numberAnswers={numberAnswers}
        isStart={isStart}
        from={from}
        numberLevel={numberLevel}
      />
    );
  }
}

export default Main;
