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

export const solicitudAdoptar = (body) =>{
    return async dispatch => {
        try {
            let params=`owner=${body.owner}&animal=${body.animal}`
            let response = await postJsonRequest2(`http://localhost:63479/api/adopcion/solicitud`)
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