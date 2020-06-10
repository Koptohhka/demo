import React from 'react';

class StartScreen extends React.Component {
  test() {
    console.log(this.props);
  }
  ///

  async getUserWords() {

  }

  startScrenBtnEventFunc() {
    console.log(true);
  }

  render() {
    this.test()
    return (
      <div className="start-screen">
        <div className="wrapper">
          <div className="start-screen__wrapper">
            <h1 className="start-screen__main-title">English puzzle</h1>
            <p className="start-screen__main-description">Click on the words, collect the phrases
              Words can be drag and drop. Select tooltips in the menu
            </p>
            <button onClick={this.startScrennBtnEventFunc} className="start-screen__button">Start</button>
          </div>
        </div>
      </div>
    )
  }
}

export default StartScreen;
