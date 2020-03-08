const middleware = async (ctx, next) => {
  // pre
  await next();
  // later
};
const middlewares = [middleware, middleware];

const ctx = 'CONTEXT'
const next = async (ctx) => {
    // 主流程
} 

const compose = (middlewares) => {
    // 入参处理省略
    
    return (ctx, next) => {
        const dispatch = (i) => {
            const fn = middlewares[i]
            if (i === middlewares.length) fn = next
            if (!fn) return Promise.resolve()
            return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)))
        }

        return dispatch(0)
    }
}

compose(middlewares)(ctx, next)
