import './App.css';
import { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PersonnelList from './pages/PersonnelList';
// import Dashboard from './pages/Dashboard';
import SideDrawer from './pages/components/SideDrawer';


function App() {
  const [selectedItem, setSelectedItem] = useState('Personnel List');

  useEffect(() => {
    window.addEventListener('resize', resize);
  })
  const resize = () => forceUpdate();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), [])
  return (
    <>
      <Router>
        <SideDrawer />
        {/* <Route path='/personnel' component={PersonnelList} />
        <Route path='/beranda' component={Dashboard} /> */}
      </Router>
    </>
  );
}

export default App;
