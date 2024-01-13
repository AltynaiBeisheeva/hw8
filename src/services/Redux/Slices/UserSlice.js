import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const signUp = createAsyncThunk(
    'userSlice/signUp',
    function (data, { rejectWithValue }) {
        try {
            const response = await axios
        } catch (error) {

        }
    }
)

const initialState = {
    user
}

const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})


export default UserSlice.reducer
