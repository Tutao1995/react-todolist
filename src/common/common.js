export const deepCloneObj = (state) => {
    return JSON.parse(JSON.stringify(state));
};