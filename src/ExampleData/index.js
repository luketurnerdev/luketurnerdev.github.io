// Example data that might come from an API to populate the cards

const genericLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad uis aute irure dolor in tate velit esse cillum dolore eu at nulla pariatur.";

const ipsumWithPageBreak = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. <br /> <br /> consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt.";


const exampleData = {
    hero: {
        "imgSrc": "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg",
        "imgAlt" : "A blue Ford Ranger on a dirt road in the mountains.",
        "headerText": "Welcome to G Automotive",
        "bodyText": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt consequuntur corporis nemo facilis eum labore illum! Doloribus odio velit, sequi accusamus laborum iusto deserunt voluptates obcaecati quisquam ex, ullam fugiat. Doloribus odio velit."
    },
    cards: [
        {
            imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            imgAlt: "A beautiful scene of San Francisco",
            headerText: "Heading 1",
            paragraphText: genericLoremIpsum,
            buttonText: "Button 1"
        },
        {
            imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            imgAlt: "A beautiful scene of San Francisco",
            headerText: "Heading 2",
            paragraphText: genericLoremIpsum,
            buttonText: "Button 2"
        },
        {
            imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
            imgAlt: "A beautiful scene of San Francisco",
            headerText: "Heading 3",
            paragraphText: ipsumWithPageBreak,
            buttonText: "Button 3"
        },
    ]
}

// const exampleData = [
//     {
//         imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
//         imgAlt: "A beautiful scene of San Francisco",
//         headerText: "Heading 1",
//         paragraphText: genericLoremIpsum,
//         buttonText: "Button 1"
//     },
//     {
//         imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
//         imgAlt: "A beautiful scene of San Francisco",
//         headerText: "Heading 2",
//         paragraphText: genericLoremIpsum,
//         buttonText: "Button 2"
//     },
//     {
//         imgSrc: "https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg",
//         imgAlt: "A beautiful scene of San Francisco",
//         headerText: "Heading 3",
//         paragraphText: ipsumWithPageBreak,
//         buttonText: "Button 3"
//     },
// ]

export default exampleData;