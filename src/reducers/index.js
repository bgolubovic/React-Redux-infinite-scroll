const initialState = {
    blocks: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
		case 'LOAD_MORE':
			state = {...state, blocks: initialState.blocks + action.amount};
            break;
		default:
            break;
    }
    return state;
};

export default reducer;