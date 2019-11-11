import {getJsonRequest,postJsonRequest2} from '../../api/apiCall'

export const obtenerAnimales = () =>{
    return async dispatch => {
        try {
            console.log('si llego')
            let response = await getJsonRequest(`http://localhost:63479/api/animal`)
            await dispatch({
                type: 'GET_ANIMALS',
                animals: response
            })
            console.log('y salio')
        } catch (error) {
            dispatch({
                type: 'ERR_GET',
                getError: {
                    status: true,
                }
            })
        }
    }
}

export const obtenerAnimalesPorRaza = (raza) =>{
    return async dispatch => {
        try {
            console.log('si llego')
            let response = await getJsonRequest(`http://localhost:63479/api/animal/razas?raza=${raza}`)
            await dispatch({
                type: 'GET_ANIMALS',
                animals: response
            })
            console.log('y salio')
        } catch (error) {
            dispatch({
                type: 'ERR_GET',
                getError: {
                    status: true,
                }
            })
        }
    }
}

export const solicitudAdoptar = (body) =>{
    return async dispatch => {
        try {
            let params=`owner=${body.owner}&animal=${body.animal}`
            let response = await postJsonRequest2(`http://localhost:63479/api/adopcion/solicitud?`+params)
            await dispatch({
                type: 'ADD_SOLICITUD',
                correcto: response
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

export const elegirSolicitud = (body) =>{
    return async dispatch => {
        try{
            let params=`owner=${body.owner}&animal=${body.animal}`
            let response = await postJsonRequest2(`http://localhost:63479/api/adopcion/final?`+params)
            await dispatch({
                type: 'UPDATE_ANIMAL_OWNER',
                correcto: response
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

export const obtenerSolicitudes = (id) =>{
    return async dispatch => {
        try {
            let response = await getJsonRequest(`http://localhost:63479/api/adopcion/solicitudes?animalId=${id}`)
            await dispatch({
                type: 'GET_SOLICITUDES',
                solicitudes: response
            })
        } catch (error) {
            dispatch({
                type: 'ERR_GET',
                getError: {
                    status: true,
                }
            })
        }
    }
}