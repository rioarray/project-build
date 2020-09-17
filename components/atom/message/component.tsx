import React from "react";
import { Message, MessageProps } from "semantic-ui-react";

interface IProps {
  message: string;
  props: MessageProps;
  title: string;
}

export const MessageComponent: React.FC<IProps> = ({
  title,
  message,
  props,
}) => (
  <Message {...props}>
    <Message.Header>{title}</Message.Header>
    <p>{message}</p>
  </Message>
);

export default MessageComponent;
