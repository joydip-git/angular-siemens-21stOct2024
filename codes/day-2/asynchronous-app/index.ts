const divide = (a: number, b: number) => {
    const p = new Promise<number>(
        //executor function (task)
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const e = new Error('divisor should not be zero')
                rejectFnRef(e)
            }
            else
                resolveFnRef(res)
        }
    )
    return p
}
const add = (a: number, b: number) => {
    return new Promise<number>(
        (resolveFnRef, rejectFnRef) => {
            resolveFnRef(a + b)
        }
    )
}

const divPromise = divide(12, 3)
divPromise
    .then(
        //first call back is executed when promise is in fulfilled state
        (data) => { console.log(data) },
        //second call back is executed when promise is in rejected state
        (error) => { console.log(error) }
    )

add(12, 3)
    .then(
        (data) => { console.log(data) }
    )

