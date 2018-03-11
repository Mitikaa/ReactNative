export const selectedLibrary = (libraryId) => {
    return {
        type :'select_library',
        payload : libraryId
    };
};

// the function above is called the action creator
// whenever called, the actions is dispatched to all reducers
