// example data format 
const initialState = {
    "city-position": [{"1": ["낙양",285,176]}]
}


export default function mapReducer(state = initialState, action) {
    switch(action.type) {

        case 'ADD_MAP':
            return {"city-position": action.payload};

        default:
            return state; 
    };
};