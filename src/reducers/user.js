// example data format 
// 내정보, 개인기록, etc

const initialState = {
};


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return {user: action.payload};

        default:
            return state; 
    };
};