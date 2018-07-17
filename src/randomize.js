export const randomize = (config) => {
    let min = 1;
    let max = 5;

    if (config != null) {
        min = config.min ? config.min : min;
        max = config.max ? config.max : max;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};