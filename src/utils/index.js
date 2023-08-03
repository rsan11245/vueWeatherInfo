const capitalizeFirstLetter = (str) => {
    let result = ''
    if (str) {
        result = str.charAt(0).toUpperCase() + str.slice(1)
    }
    return result
}

const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'})
}

export {capitalizeFirstLetter, getTime}