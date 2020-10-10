import * as React from 'react';
import {IMessage, IStateMessages} from "../../../types/chat-types";
import {GiftedChat, Send} from 'react-native-gifted-chat'
import {styles} from "../../styles";
import {messages} from "../../../components/mock/messages";
import {RootStateType} from "../../../stores/redux";
import {connect} from "react-redux";
import {renderBubble, renderLoading, renderSystemMessage, renderTime} from "./GiftChatRender";
import {Avatar} from "react-native-paper";
import {chatStyle} from "./chatStyle";
import {SafeAreaView} from "react-native-safe-area-context";


class Chat extends React.Component<any> {

    state: IStateMessages = {
        loading: false,
        inputText: "",
        messages: messages,
        disabledBtn: false,
    }

    renderSend = (props) => {
        return (
            <Send
                {...props}
                disabled={this.state.disabledBtn}
                containerStyle={chatStyle.sendingContainer}
            >
                <Avatar.Icon icon='send' size={32}/>
            </Send>
        );
    };


    onSend = (messages: IMessage[] = []) => {
        const newMessage = GiftedChat.append(this.state.messages, messages);
        this.setState({messages: newMessage});
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{_id: this.props.loggedUserId}}
                    alwaysShowSend
                    renderSend={this.renderSend}
                    renderBubble={renderBubble}
                    renderTime={renderTime}
                    renderSystemMessage={renderSystemMessage}
                    renderLoading={renderLoading}
                    placeholder="Message"
                />
            </SafeAreaView>

        );
    }
}

const mapStateToProps = (state: RootStateType, ownProps) => {
    return ({
        loggedUserId: state.system!.loggedUserId,
        ...ownProps,
    })
}

export default connect(mapStateToProps)(Chat);
