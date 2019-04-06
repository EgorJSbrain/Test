import React from 'react';
import style from './Button.module.css'


class Button extends React.Component {
   constructor(props){
       super(props)
       this.addModule = this.addModule.bind(this)
    //    debugger
   }

  addModule(b) {
    this.props.isOpen(b)
  }
  render() {  
    return <div className={style[this.props.button.btnClass]} 
                onClick={ () => this.addModule(this.props.button)}>
          <span>{this.props.button.title}</span>  
      </div>
  }
}
export default Button;

  