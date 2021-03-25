import * as React from 'react';
import ResourceView from './components/ResourceView';
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';

function App() {
  const [resource, setResource] = React.useState('');
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div>
      <Navigation resource={resource} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setResource={setResource} />
      <div className="container">
        <ResourceView resource={resource} />
      </div>
    </div>
  );
}

export default App;
