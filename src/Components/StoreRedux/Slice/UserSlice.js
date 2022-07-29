import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState:{
        name:" Huy Nguyen",
        age:"26",
        about:"I'm a software engineer",
        avaUrl:"https://luctuyetkytuyetme.files.wordpress.com/2016/11/39f7c0fef312c912a3df83e524a843f2.jpg?w=500",
        themeColor:"#ff9051",
    }, 
    reducers:{
        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.about = action.payload.about;
            state.avaUrl = action.payload.avaUrl;
            state.themeColor = action.payload.themeColor;
        },
    },
})

export const {update} = UserSlice.actions;
export default UserSlice.reducer;