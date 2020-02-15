const inRange = (min, max) => {
    return value => {
        return value >= min && value <= max;
    }
}
arr.filter(inRange(min, max));