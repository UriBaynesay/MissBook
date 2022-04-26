import { eventBusService } from "../services/event-bus.service.js";

export class UserMsg extends React.Component {
  state = {
    text: "",
    type: "",
  };

  removeListener;

  componentDidMount() {
    this.removeListener = eventBusService.on("show-msg", (details) => {
      this.setState(details);
    });
  }

  closeModal = () => {
      this.setState({text:'',type:''})
  };

  render() {
    const { text, type } = this.state;
    if (!text || !type) return <React.Fragment></React.Fragment>;
    return (
      <div className={`user-msg-modal flex ${type}`}>
        <h3>{text}</h3>
        <button onClick={this.closeModal}>x</button>
      </div>
    );
  }
}
