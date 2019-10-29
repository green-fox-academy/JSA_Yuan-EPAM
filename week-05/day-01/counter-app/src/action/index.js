const initState = {
    counter : 0,
    tags: []
}

const setCounter = amount => ({
    type: "SET",
    amount
})

const descreaseCounter = amount => ({
    type: "DESCREASE",
    amount
})

const increaseCounter = amount => ({
    type: "INCREASE",
    amount
})

const resetCounter = () => ({
    type: "RESET"
})



export {initState, setCounter, descreaseCounter, increaseCounter, resetCounter}
