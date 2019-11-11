let preferencesData = {
    animals:[],
    solicitudes:[]
}

const animalsState = (state = preferencesData, action) => {
    switch (action.type) {
        case 'GET_ANIMALS':{
            return {
                ...state,
                animals: action.animals
            }}
        case 'NOTIFICATION_DELETED':
        case 'ADD_SOLICITUD':{
            return {
                ...state,
                correcto: action.correcto
            }}
        case 'GET_SOLICITUDES':{
            return {
                ...state,
                solicitudes: action.solicitudes
            }
        }
        default:
            return state
    }
}

export default animalsState
