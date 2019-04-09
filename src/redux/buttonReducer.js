import { idGenerator } from "../support/counter";


const IS_OPEN = 'IS_OPEN';
const IS_CLOSE = 'IS_CLOSE';

const initialState = {
    isOpen: false,
    isClose: false,
    modules: [],
    buttons: [
        {
            id: 1,
            title: 'SUCCESS',
            btnClass: 'button-success'
        },
        {
            id: 2,
            title: 'WARNING',
            btnClass: 'button-warning'
        },
        {
            id: 3,
            title: 'ERROR',
            btnClass: 'button-error'
        }
    ],
}

const buttonReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_OPEN: {
            let newModule = {
                moduleId: idGenerator(),
                title: action.module.title,
                moduleClass: action.module.btnClass
            }
            return {
                ...state,
                modules: [...state.modules, newModule]
            }
        }
        case IS_CLOSE: {
            return {
                ...state,
                modules: [...state.modules.filter(m => m.moduleId !== action.moduleId)]
            }
        }
        default:
            return state
    }
}
export const isOpen = (module) => ({ type: IS_OPEN, module })
export const isClose = (moduleId) => ({ type: IS_CLOSE, moduleId })

export const isCloseTC = (moduleId) => (dispatch) => {
    setTimeout(() => dispatch(isClose(moduleId)), 3000)
}

export const buttonsSelector = (state) => {
    return state.reducer.buttons
}
export const modulesSelector = (state) => {
    return state.reducer.modules
}
export default buttonReducer;