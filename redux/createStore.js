export const createStore = (reducer, initState, enhancer) => {
    if (enhancer) return enhancer(createStore)(reducer, initState)
    let state = initState
    const listeners = []
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(cb => cb())
    }
    const subscribe = (cb) => {
        listeners.push(cb)
        return listeners.filter(item => item !== cb)
    }
    dispatch({ action: 'INIT_REDUX' })

    return {
        getState,
        dispatch,
        subscribe
    }
}