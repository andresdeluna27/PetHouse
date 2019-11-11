import {getJsonRequest,postJsonRequest,postJsonRequest2} from '../../api/apiCall'

export const agreagarPersona = (body) =>{
    return async dispatch => {
        try {
            //console.log('porque ',JSON.stringify(body))
            let parametro = `nombre=${body.Nombre}&apeP=${body.ApellidpP}&apeM=${body.ApellidpM}&edad=${body.Edad}&domicilio=${body.Domicilio}`
            let response = await postJsonRequest2(
                'http://localhost:63479/api/adopcion/persona?'+parametro)
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
            //console.log('porque ',JSON.stringify(body))
            let parametro = `nombre=${body.Nombre}&raza=${body.Raza}&edad=${body.Edad}`
            let response = await postJsonRequest2(
                'http://localhost:63479/api/animal?'+parametro)
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

export const agreagarPersonaold = (body) =>{
    return async dispatch => {
        try {
            console.log('porque ',JSON.stringify(body))
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

export const agreagarAnimalold = (body) =>{
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