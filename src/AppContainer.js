import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { isOpen, isCloseTC } from './redux/buttonReducer';


class AppContainer extends React.Component {

    render() {
        return <App {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        buttons: state.reducer.buttons,
        modules: state.reducer.modules
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        isOpen: (message) => {
            dispatch(isOpen(message))
        },
        isClose: (moduleId) => {
            dispatch(isCloseTC(moduleId))
        }
    }
}
const ContainerApp = connect(mapStateToProps, mapDispatchToProps)(AppContainer)
export default ContainerApp;