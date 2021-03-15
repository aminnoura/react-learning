let INITIAL_STATE = 'fa';

export default function language(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CHANGE_LANGUAGE":
            return  ( (state = "en" ) ? "fa" : "en" );
        default:
            return state;
    }
}