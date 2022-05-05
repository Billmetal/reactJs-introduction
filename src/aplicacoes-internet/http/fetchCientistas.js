import { fetchCientistasError, fetchCientistasPending, fetchCientistasSuccess } from "../redux-rest/actions/cientistas";


function fetchCientistas(){
    return dispatch => {
        dispatch(fetchCientistasPending());
        fetch("https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras")
            .then(response => response.json())
            .then(res => {
                if(res.error){
                    throw (res.error);
                }
                dispatch(fetchCientistasSuccess(res));
            })
            .catch(error => {
                dispatch(fetchCientistasError(error));
            });
    };
}

export default fetchCientistas;