import * as types from './actionTypes';



export function fetchServices() {
    console.log("hai")

    return dispatch => {
        console.log("hai")

        fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch({type:types.SERVICE_SUCCESS, payload:res.data});
        });
    }
}
export  function fetchProvider() {
    console.log("hai")

    return dispatch => {
        fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            filterData(res);
            dispatch({type:types.PROVIDER_SUCCESS,  payload:res.data});
        });
    }
}

function filterData(res){
    res.data.map((data) => {
        res.included.map( (service) => {
            if(service.id === data.relationships.schedules.data[0].id)
            data.service = service.attributes.service;
        });

    })
    return res;
}