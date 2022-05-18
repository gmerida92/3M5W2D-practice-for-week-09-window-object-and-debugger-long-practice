export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    document.title = "George and Sam's Portfolio"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    // Your code here
    let headerDiv = document.body.children[0];
    let h1 = headerDiv.children[0];
    h1.innerText = "George and Sam"
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    let sectionDiv = document.body.children[1];
    let paragraph1 = sectionDiv.children[1];
    paragraph1.innerText = "George enjoy the intake of media which includes games, shows, comics, and movies. George also enjoy working on personal development. Samuel just wants to play video games."
}
