import React from 'react';
import style from './App.module.css';
import Button from './components/button/Button';
import Module from './components/module/Module';



const App = (props) => {
  // debugger  
  return (
      <div className={style.wrapper}>
          <div className={style.buttons_block}>
              {
                props.buttons.map( b => <Button button={b} key={b.id} isOpen={props.isOpen}/>)
              }
          
          </div>
          <div className={style.modals_block}> 
              {
                props.modules.map( (m) => <Module module={m} isClose={props.isClose} />)
              }
          </div>
      </div>
    )
}

export default App;
