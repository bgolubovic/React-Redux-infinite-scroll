const initialState = {
    blocks: [1,2,3,4,5,6,7,8,9,10,11,12,13]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
		case 'LOAD_MORE':
			state = loadMoreBlocks(state, action);
            break;
		default:
            break;
    }
    return state;
};

const loadMoreBlocks = (state, action) => {
    return {
        ...state,
        blocks: [...Array(state.blocks.length + action.amount).keys()]
    }
};

export default reducer;