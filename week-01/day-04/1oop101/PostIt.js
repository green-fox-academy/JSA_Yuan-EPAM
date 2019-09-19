class PostIt {
    constructor(backgroundColor = undefined, text=undefined, textColor=undefined) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}


postItObjs = [
    ['orange', 'Idea 1', 'orange'],
    ['pink', 'Awesome', 'black'],
    ['yellow', 'Superb', 'green']
];

postIts = []

postItObjs.map(postItObj => {
    postIts.push(new PostIt(postItObj[0], postItObj[1], postItObj[2]));
});

console.table(postIts);