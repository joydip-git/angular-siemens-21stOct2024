const divide = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity) {
        const e = new Error('divisor should not be zero')
        throw e //reject(e)
    }
    else
        return res //resolve(res)
}
const add = async (a: number, b: number) => {
    return a + b
}

async function invoke() {
    try {
        const divRes = await divide(12, 3)
        console.log('hello...');
        //...

        const addRes = await add(10, divRes)
        console.log(addRes);
    } catch (error: any) {
        console.log(error.message);
    }
}
invoke()

//console.log(global);

