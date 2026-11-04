export function hasClass(elem, elemClass) {
    return elem.classList.contains(elemClass);
}

export function addClass(elem, elemClass) {
    return elem.classList.add(elemClass);
}

export function removeClass(elem, elemClass) {
    return elem.classList.remove(elemClass);
}

export function toggleClass(elem, elemClass) {
    return elem.classList.toggle(elemClass);
}
