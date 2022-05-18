export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`

    return document.getElementById(id);
}



export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    return document.getElementsByTagName(tag)
}



export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    return document.getElementsByClassName(cls);
}



export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    let tagArray = document.getElementsByTagName(tag);
    return tagArray[0];
}



export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    let classArray = document.getElementsByClassName(cls);
    return classArray[0];
}
