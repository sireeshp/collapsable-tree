import { useEffect, useRef } from 'react';
import './App.css';
import data from './data.json';
import TreeView from './Chart'
function App() {
  const treeRef = useRef(null);
  useEffect(() => {
    if (treeRef.current) {
      TreeView(treeRef.current, data);
    }
    return () => {
      treeRef.current = null;
    }
  }, []);

  return (
    <div className="App">
      <div ref={treeRef}>

      </div>
    </div>
  );
}

export default App;
