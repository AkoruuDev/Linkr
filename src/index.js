import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from './styles/globalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Global/>
        <App />
    </>
);