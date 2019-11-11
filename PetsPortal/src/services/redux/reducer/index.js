import {combineReducers} from 'redux'
import animalReducer from '../animales/animal-reducer'
import personaReducer from '../personas/persona-reducer'

export default combineReducers({
    animalReducer,
    personaReducer
})