import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <>
        <div className={this.props.className}>
          <div className="text-des">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img src={this.props.img1} alt="taal volcano" />
            <img src={this.props.img2} alt="taal volcano" />
          </div>
        </div>
      </>
    );
  }
}
export default DestinationData;
