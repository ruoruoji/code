import { compose } from './compose';

export const applyMiddleware = (middlewares) => (createStore) => (reducer, initState) => {
    const store = createStore(reducer, initState)
    let dispatch = store.dispatch

    const middlewareApi = {
        getState: store.getState,
        dispatch
    }
    const enhancer = middlewares.map(i => i(middlewareApi))
    dispatch = compose(enhancer)(dispatch)

    return {
        ...store,
        dispatch
    }
}

