import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImgCard from "./components/ImgCard";
import pics from "./pics.json";
import Wrapper from "./components/Wrapper";


class App extends Component {
  // Set this.state
  state = {
    ImgCard,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  render() {
    return(
  <div>
    <Navbar 
     title="Nicktoons Clicky Game"
     score={this.state.currentScore}
     topScore={this.state.topScore}
     rightWrong={this.state.rightWrong}
    />
    <Header />
    <Wrapper>
    {
                    pics.map(pic => (
                        <ImgCard
                            id={pic.id}
                            image={pic.image}
                            name={pic.name}
                        />
                    ))
                }
                
    </Wrapper>
  </div>
  )};
}

export default App;
