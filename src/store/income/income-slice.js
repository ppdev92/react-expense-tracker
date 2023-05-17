const { createSlice} = require("@reduxjs/toolkit")

export const incomeSlice = createSlice({
    name: 'incomeSlice',
    initialState: {
        income: 1000
    },
    reducers: {
        setIncome: (currentSlice, action) => {
            currentSlice.income = action.payload
        }
    }
})

export const { setIncome } = incomeSlice.actions