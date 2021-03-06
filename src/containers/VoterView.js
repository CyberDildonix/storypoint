import React from 'react';
import { connect } from 'react-redux';
import SendMessage from 'components/SendMessage';
import { sendMessage } from 'actions';

class VoterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messageText: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.updateMessage = this.updateMessage.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.state.messageText.trim()) {
            return;
        }
        this.props.sendMessage(this.state);
    }

    updateMessage(event) {
        this.setState({ messageText: event.target.value });
    }

    render() {
        return (
            <SendMessage onSubmit={this.onSubmit} updateMessage={this.updateMessage}/>
        );
    }
}

export default connect(null, { sendMessage })(VoterView);