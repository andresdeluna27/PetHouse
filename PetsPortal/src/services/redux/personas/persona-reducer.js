let preferencesData = {
    persona:[],
    animals:[],
    correcto:true,
}

const personaState = (state = preferencesData, action) => {
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
        default:
            return state
    }
}

export default personaState
