import * as React from 'react';
import ResourceView from './components/ResourceView';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { light, dark } from './components/utils/Themes';

function App() {
  const [resource, setResource] = React.useState('');
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [theme, setTheme] = React.useState(true);
  const appliedTheme = createMuiTheme(theme ? light : dark)

  return (
    <div className="MuiPaper-root" style={{minHeight: '100vh'}}>
      <ThemeProvider theme={appliedTheme}>
        <Navigation resource={resource} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} theme={theme} setTheme={setTheme} />
        <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setResource={setResource} />
        <div className="container">
          <ResourceView resource={resource} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
