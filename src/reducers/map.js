// example data format 
const initialState = {
    "city-position": [{"1": ["낙양",285,176]}]
}


export default function mapReducer(state = initalState, action) {
    switch(action.type) {

        default:
            return state; 
    };
};