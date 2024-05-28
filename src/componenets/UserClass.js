import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name + " Constructor");
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    console.log(this.props.name + " Component Did Mount");

    const data = await fetch("https://api.github.com/users/MeetVekaria");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.count !== prevState.count) {
    //   //code
    // }
    if (this.state.count)
      console.log(this.props.name + " Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + " Component Unmount");
  }

  render() {
    console.log(this.props.name + " Render");

    // const { name, location } = this.props;
    // const { count } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @imeetvekaria</h4>
      </div>
    );
  }
}

export default UserClass;
