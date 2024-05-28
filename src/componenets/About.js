import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");

    // Api Call
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a Namste React webseries</h2>

        <UserClass name={"Meet Patel"} location={"Ahmedabad"} />
        {/* <UserClass name={"Elon Musk"} location={"US"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a Namste React webseries</h2>
//       {/* <User name={"Meet Patel(Function)"} /> */}

//       <UserClass name={"Meet Patel(Class)"} location={"Ahmedabad"} />
//     </div>
//   );
// };

export default About;
