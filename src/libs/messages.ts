type Message = {
  name: string;
  email: string;
  message: string;
  date: string;
};

const messages: Message[] = [];

export function saveMessage(newMsg: Message) {
  messages.push(newMsg);
}

export function getMessages() {
  return messages;
}