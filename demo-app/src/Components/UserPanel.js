import React from 'react';

import SockJsClient from 'react-stomp';
import JournalTable from "./JournalTable";
import IncomingMessage from "./IncomingMessage";

class UserPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isRecieved: false,
            groups: [],
            selectedGroup: 1,
            recievedGroup: 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8080/group/show_all`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        groups: result
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleChange(event) {
        this.setState({selectedGroup: event.target.value});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.selectedGroup);
        event.preventDefault();
    }

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            message: this.state.selectedGroup
        }));
    };

    render() {
        const { isRecieved } = this.state;
        if (isRecieved) {
            return (
                <div>
                    <form>
                        <label>
                            Выберите вашу учебную группу:
                            <select onChange={this.handleChange}>
                                { this.state.groups.map((group) => (
                                    <option value={group.id}>{group.name}</option>
                                ))}
                            </select>
                        </label>
                    </form>
                    <SockJsClient url='http://localhost:8080/websocket-chat/'
                                  topics={['/topic/user']}
                                  onConnect={() => {
                                      console.log("connected");
                                  }}
                                  onDisconnect={() => {
                                      console.log("Disconnected");
                                  }}
                                  onMessage={(msg) => {
                                      console.log(msg);
                                      this.setState({recievedGroup: msg.message, isRecieved: true} )
                                  }}
                                  ref={(client) => {
                                      this.clientRef = client
                                  }}/>
                    <button onClick={this.sendMessage}>Разослать учебный план</button>
                    <IncomingMessage groupId={this.state.recievedGroup} />
                </div>
        ); } else {
            return (
                <div>
                    <form>
                        <label>
                            Выберите вашу учебную группу:
                            <select onChange={this.handleChange}>
                                { this.state.groups.map((group) => (
                                    <option value={group.id}>{group.name}</option>
                                ))}
                            </select>
                        </label>
                    </form>
                    <SockJsClient url='http://localhost:8080/websocket-chat/'
                                  topics={['/topic/user']}
                                  onConnect={() => {
                                      console.log("connected");
                                  }}
                                  onDisconnect={() => {
                                      console.log("Disconnected");
                                  }}
                                  onMessage={(msg) => {
                                      console.log(msg);
                                      this.setState({recievedGroup: msg.message, isRecieved: true} )
                                  }}
                                  ref={(client) => {
                                      this.clientRef = client
                                  }}/>
                    <button onClick={this.sendMessage}>Разослать учебный план</button>
                </div>
            )
        }
    }

}

export default UserPanel;