import List from './components/List';
import Navigation from './components/Navigation';
import { RESOURCES } from './useConnection';

function App() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <List resource={RESOURCES.AVTOMOBIL} />
      </div>
    </div>
  );
}

export default App;
