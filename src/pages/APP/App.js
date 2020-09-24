import React from 'react';
import ReactLogo from '../../assets/logo.svg';
import Logo from '../../components/Logo/Logo';
import { Button, Card, Avatar, Row, Col, Timeline } from 'antd';
import { EditOutlined,CheckCircleOutlined, EllipsisOutlined,ExclamationCircleOutlined, SettingOutlined, ClockCircleOutlined } from '@ant-design/icons';
import EULA_Title from '../../EULA/EULA_Title/EULA_Title';
import './App.css';
const { Meta } = Card;

let input_title = 13233
let input_sub_title = 232323
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>
        

        <Timeline>
          <Timeline.Item dot={<ExclamationCircleOutlined className="timeline-icon" />} >  <EULA_Title /></Timeline.Item>
          <Timeline.Item dot={<CheckCircleOutlined className="timeline-icon" />} >   <EULA_Title /></Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
            <EULA_Title />    </Timeline.Item>
          <Timeline.Item dot={<CheckCircleOutlined className="timeline-icon" />} >   <EULA_Title /></Timeline.Item>
        </Timeline>,

        <img src={ReactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header >
    </div >
  );
}

export default App;
