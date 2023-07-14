import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name : "CountSlice",
    initialState : {num : 5},
    reducers: {
        inc : (state) => { 
            console.log("inc...")
        },
        dec: (state) => {
            console.log("dec...")
        }
    }
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer