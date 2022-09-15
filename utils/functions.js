export const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}