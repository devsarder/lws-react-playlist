/* eslint-disable react/prop-types */
import React from "react";
// const date = new Date();
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "bn-BD",
    };
  }
  componentDidMount() {
    this.myTimer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.myTimer);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  handleClick = () => {
    console.log("button was clicked");

    this.setState({ locale: "en-US" });
  };
  render() {
    const { date, locale } = this.state;
    return (
      <>
        <h1>
          <span style={{ color: "steelblue" }}>
            Reactive clock:
            {date.toLocaleTimeString(locale)}
          </span>
          <br />
        </h1>
        <button onClick={this.handleClick}>Click Here</button>
      </>
    );
  }
}
export default Clock;
// this is where the component was reused
{
  /* <Clock locale="bn-BD">this is component children</Clock>; */
}

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   play(status) {
//     console.log(`${this.name} is playing ${status}`);
//   }
// }

// const person1 = new Person("falaque", 2);
// const person2 = new Person("sujon", 26);
// person1.play("well");
// person2.play("bad");
