import { createSlice } from '@reduxjs/toolkit'

interface UserState {
    value: {
        name: string,
        age: number,
    }
}

const initialState: UserState = {
    value: {
        name: '',
        age: 0,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.value = action.payload
        },
        logout(state) {
            state.value = initialState.value;
        },
        addAge(state) {
            state.value.age++;
        }
    }
});

export const { login, logout, addAge } = userSlice.actions;
export default userSlice.reducer;