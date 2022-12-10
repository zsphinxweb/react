import * as React from 'react';
import { FaLightbulb} from 'react-icons/fa'
import './style.css';

function Header(props) {
  return (
    <div>
      <h1>Welcome {props.name}!</h1>
    </div>
  );
}

const Data = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      text: 'Hello world',
      bool: true,
    },
    {
      id: 2,
      text: "What' up",
      bool: false,
    },
    {
      id: 3,
      text: 'Good',
      bool: false,
    },
  ])


  return (

    <div>
      {data.map((i) => (
        <h5> {i.text} <FaLightbulb /></h5>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Header name="Thiha" />
      <Data />
    </div>
  );
}
