const divide = (a: number, b: number): Promise<void> => {
    const p = new Promise<void>(
        //executor function (task)
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const e = new Error('divisor should not be zero')
                rejectFnRef(e)
            }
            else {
                console.log(res);
                resolveFnRef()
            }
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

const divPromise = divide(12, 0)
divPromise
    .catch(
        (error: Error) => console.log(error.message)
    ).finally(
        () => { console.log('releasing resources'); }
    )

add(12, 3)
    .then(
        (data) => { console.log(data) }
    )

