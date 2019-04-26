import actions from "./actions"
//import Service from "../services"




const addToRoute = (location) => {
    return (dispatch) => {
        return dispatch(actions.addedToRoute(location))
    }
}

export default {
    addToRoute
}
