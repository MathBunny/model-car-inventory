

function capitalizeFirstLetter(string) {
    if (string === undefined)
        return;
    return string.charAt(0).toUpperCase() + string.slice(1);
}
