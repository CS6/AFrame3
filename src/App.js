import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import logo from './logo.svg';
import './App.css';
import AView from './pages/Aframe/AView.js' ;
import SumView from './pages/Aframe/SumView.js' ;
import ThreeView from './pages/Aframe/ThreeView.js' ;
import MMDView from './pages/Aframe/MMDView.js' ;



const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    // <div className="App">
    <Grommet theme={theme} themeMode="dark" full  >
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar >
              <Heading level='3' margin='none'>My App Hello Grommet!</Heading>
              <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box fill flex align='center' justify='center'>
                {/* app body */}
                {/* <AView/> */}
                <ThreeView/>
                {/* <MMDView/> */}
                {/* <SumView/> */}
            </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                 </Box>
                  </Layer>
                )}
            </Box>
          </Box>)}
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      </ResponsiveContext.Consumer>
    </Grommet>
    //  </div> 
  );
}
const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);
const theme = {
  global: {
    colors: {
      // brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
export default App;
