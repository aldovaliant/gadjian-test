import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import MenuItemComponent from './MenuItemComponent';
import { FaBars, FaHome } from 'react-icons/fa';
import { BiCalendar } from 'react-icons/bi';
import { TiGroup } from 'react-icons/ti';

// CSS
const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        color: 'black',
        width: 255,
        paddingTop: 32,
        height: 'calc(100% - 32px)',
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        backgroundColor: 'white',
        position: 'absolute',
        width: 255,
        height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh',
        backgroundColor: 'white',
        color: 'black'

    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    },
    logo: {
        width: '50%'
    },
    bars: {
        position: 'absolute'
    }
});

class SidebarComponent extends React.Component {

    // state penanda sidebar sedang dibuka atau tidak (saat mobile view)
    state = { expanded: false };

    // fungsi untuk mengubah menu yang dipilih
    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    // penanda apakah layar mobile atau bukan
    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    // render bar/burger menu
    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <FaBars />
        </div>
    }

    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'absolute' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <Column className={css(styles.menuItemList)}>
                            <MenuItemComponent
                                title="Dashboard" icon={FaHome}
                                onClick={() => this.onItemClicked('Dashboard')}
                                active={this.props.selectedItem === 'Dashboard'}
                            />
                            <MenuItemComponent
                                title="Personnel List" icon={TiGroup}
                                onClick={() => this.onItemClicked('PersonnelList')}
                                active={this.props.selectedItem === 'PersonnelList'}
                            />
                            <MenuItemComponent
                                title="Daily Attendance" icon={BiCalendar}
                                onClick={() => this.onItemClicked('DailyAttendance')}
                                active={this.props.selectedItem === 'DailyAttendance'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent;
