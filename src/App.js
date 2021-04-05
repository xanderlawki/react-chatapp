
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  const projectID = '1311ef63-296d-4e0a-a6c2-36895fac5ce9'
  return (
    <ChatEngine
    height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    // onNewMessage=""
  />
  );
}

export default App;
