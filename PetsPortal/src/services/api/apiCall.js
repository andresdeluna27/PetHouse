import fetch from 'node-fetch'

export const getJsonRequest = async (url) => {
    try {
        let response = await (
            fetch(
                url,
                {
                    method: 'GET'
                }
            )
        )

        if (response.ok) {
            response = await response.json()
            return response
        } else {
            throw response
        }

    } catch (error) {
        
    }
}

export const postJsonRequest = async (url, body) => {
    try {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
        'Content-Type': 'application/json'
            }
              
        })
        if (response.ok) return await response.json()
    } catch (error) {
    }
}

export const postJsonRequest2 = async (url) => {
    try {
        let response = await fetch(url, {
            method: 'POST'
              
        })
        if (response.ok) return await response.json()
    } catch (error) {
    }
}

export const patchJsonRequest2 = async (url) => {
    try {
        let response = await fetch(url, {
            method: 'PATCH'
              
        })
        if (response.ok) return await response.json()
    } catch (error) {
    }
}