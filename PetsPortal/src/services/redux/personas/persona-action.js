import {getJsonRequest,postJsonRequest} from '../../api/apiCall'

export const agreagarPersona = (body) =>{
    return async dispatch => {
        try {
            //console.log('porque ',JSON.stringify(body))
            let response = await postJsonRequest(`http://localhost:63479/api/adopcion/persona`,body)
            await dispatch({
                type: 'ADD_PERSONA',
                persona: response
            })
        } catch (error) {
            dispatch({
                type: 'ERR_POST',
                getError: {
                    status: true,
                }
            })
        }
    }
}

export const agreagarAnimal = (body) =>{
    return async dispatch => {
        try {
            console.log('porque ',JSON.stringify(body))
            let response = await postJsonRequest(`http://localhost:63479/api/animal`,body)
            await dispatch({
                type: 'ADD_ANIMAL',
                animal: response
            })
        } catch (error) {
            dispatch({
                type: 'ERR_POST',
                getError: {
                    status: true,
                }
            })
        }
    }
}