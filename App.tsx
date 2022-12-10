import * as React from 'react';
import { FaLightbulb} from 'react-icons/fa';
import Data from './Students';
import './style.css';

function Header(props) {
  return (
    <div>
      <h1>Welcome {props.name}<FaLightbulb />!</h1>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header name="Thiha" />
      <Data />
    </div>
  );
}
