import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from 'store/store';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
);
