import logo from './logo.svg';
import './App.css';
import useNotification from './ts-hooks/useNotification';

function App() {
  // custom hook - useNotification(position)
  const {NotificationComponent, triggerNotification} = useNotification('bottom-left');

  return (
    <div className="App">
      <span>Toast Component</span>
      <button onClick={() => triggerNotification({
        type: "success",
        message: "File sent successfully",
        duration: 5000,
        animation: "pop"
      })}>Trigger Success</button>
      <button onClick={() => triggerNotification({
        type: "error",
        message: "File sent failed",
        duration: 5000,
        animation: "pop"
      })}>Trigger Error</button>
      <button onClick={() => triggerNotification({
        type: "info",
        message: "File sent info",
        duration: 5000,
        animation: "pop"
      })}>Trigger Warning</button>
      {NotificationComponent}
    </div>
  );
}

export default App;
