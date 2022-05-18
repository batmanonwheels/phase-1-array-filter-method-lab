//Return drivers that match the input name

function findMatching(array, str) {
    let match = array.filter(driverNames => driverNames.toLowerCase() === str.toLowerCase())
    return match;
}

function fuzzyMatch(array, str) {
    let match = array.filter(driverNames => driverNames.startsWith(str))
    return match;
}

function matchName(array, str) {
    let match = array.filter(driverNames => driverNames.name === str)
    return match;
}