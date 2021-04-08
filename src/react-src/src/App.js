import * as React from 'react';
import ResourceView from './components/ResourceView';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { light, dark } from './components/utils/Themes';
import { RESOURCES, VIEWS } from './constants';

function App() {
  const [resource, setResource] = React.useState(RESOURCES.SOBSTVENIK);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [theme, setTheme] = React.useState(false);
  const [view, setView] = React.useState(VIEWS.LIST);
  const appliedTheme = createMuiTheme(theme ? light : dark)

  document.getElementById('root').style.backgroundColor = theme ? '#fff' : '#212121';

  return (
    <div className="no-gutters" style={{minHeight: '100vh', paddingBottom: 20}} >
      <ThemeProvider theme={appliedTheme}>
        <Navigation resource={resource} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} theme={theme} setTheme={setTheme} />
        <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setResource={setResource} setView={setView} />
        <div className="container">
          <ResourceView resource={resource} view={view} setView={setView} />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
