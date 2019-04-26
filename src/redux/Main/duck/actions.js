import types from "./types"


const addedToRoute = (location) => ({
    type: types.ADDED_TO_ROUTE,
    status: "success",
    payload: {
        location
    }
})

export default {
    addedToRoute
}
