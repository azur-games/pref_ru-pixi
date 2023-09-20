import {createRoot} from 'react-dom/client';
import App from "./src/components/App";
import 'styles/index.scss'


let root = createRoot(document.getElementById('app'));
root.render(<App/>);