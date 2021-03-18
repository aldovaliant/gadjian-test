import './App.css';
import { useEffect, useState, useCallback } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PersonnelList from './pages/PersonnelList';
// import Dashboard from './pages/Dashboard';
import SideDrawer from './pages/components/SideDrawer';

function App() {
  const resize = () => forceUpdate();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(() => {
    window.addEventListener('resize', resize);
  })
  return (
    <>
      <SideDrawer />
    </>
  );
}

export default App;
