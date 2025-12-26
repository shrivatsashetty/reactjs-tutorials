/* we intialize an empty array of length 29_999_999
 * then we fill it with all Zeroes
 * then convert each zero to an object */

export const initialItems = new Array(29_999_999).fill(0).map(
    (item, index) => {
        return {
            id: index,
            isSelected: index === 29_999_998,
        }
    }
);