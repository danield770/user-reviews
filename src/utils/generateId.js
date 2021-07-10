const generate = () => {
    let count = 0;
    const countUp = () => count++;

    return countUp;
}

export const generateId = generate();