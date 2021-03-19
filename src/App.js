import './App.css';
import { useEffect, useState, useCallback } from 'react';
import PersonnelList from './pages/PersonnelList';
import HeaderComponent from './pages/components/header/HeaderComponent';
import SidebarComponent from './pages/components/sidebar/SidebarComponent';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Dashboard from './pages/Dashboard';
import DailyAttendance from './pages/DailyAttendance';


const styles = StyleSheet.create({
  container: {
    height: '100%',
    minHeight: '100vh'
  },
  content: {
    marginTop: 54,
    position: 'absolute',
    width: '80%',
    display: 'flex',
    right: '0',
    '@media screen and(max-width: 768px)': {
      width: '100%',
      color: 'red'
    }
  },
  contentMobile: {
    width: '100%',
    position: 'static'
  },
  mainBlock: {
    backgroundColor: '#F7F8FC',
    padding: 30
  }
});

function App() {
  const [selectedItem, setSelectedItem] = useState('PersonnelList');

  const resize = () => forceUpdate();
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(() => {
    window.addEventListener('resize', resize);
  })

  return (
    <Row className={css(styles.container)}>
      <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => setSelectedItem(selectedItem)} />
      <Column flexGrow={1} className={css(styles.mainBlock)}>
        <HeaderComponent title={selectedItem} />
        <div className={css(styles.content)} breakpoints={{ 768: css(styles.contentMobile) }}>
          {selectedItem === "Dashboard" ?
            <Dashboard /> :
            selectedItem === "DailyAttendance" ? <DailyAttendance /> : <PersonnelList />}
        </div>
      </Column>
    </Row>
  );
}

export default App;
