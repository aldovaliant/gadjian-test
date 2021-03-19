import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import GadjianLogo from '../../assets/gadjian-logo.png';
import UserPhoto from '../../assets/blank-profile-picture.png'

// CSS
const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        marginRight: 10,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 60,
        backgroundColor: 'white',
        marginTop: '-30px'
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        marginLeft: 10,
        '@media (max-width: 768px)': {
            marginLeft: 20
        },
        '@media (max-width: 468px)': {
            fontSize: 20,
        }
    },
    titleName: {
        color: '#23c7c6',
        cursor: 'pointer'
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    },
    logo:{
        width: '120px',
        position: 'absolute',
        left: '30px',
        '@media (max-width: 768px)': {
            left: '60px',
        }
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}></span>
            <img src={GadjianLogo} alt="logo" className={css(styles.logo)} />
            <Row vertical="center">
                <div className={css(styles.separator)}></div>
                <Row vertical="center">
                    <h3 className={css(styles.title)}>Hallo,</h3>
                    <h3 className={css(styles.titleName, styles.title)}>Gadjian User</h3>
                </Row>
                <Row vertical="center">
                    <img src={UserPhoto} alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                </Row>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;
