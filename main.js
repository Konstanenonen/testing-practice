const capitalize = (string) => `${string[0].toUpperCase()}${string.slice(1)}`;

const reverseString = (string) => string.split("").reverse().join("");

export { capitalize, reverseString };
