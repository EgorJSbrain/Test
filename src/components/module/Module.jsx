import React from 'react';
import style from './Module.module.css'


class Module extends React.Component {

    componentDidMount() {
        this.props.isClose(this.props.module.moduleId)
    }
    render() {
        return <div className={style[this.props.module.moduleClass]}>
            <span>{this.props.module.title}</span>
        </div>
    }
}

export default Module;