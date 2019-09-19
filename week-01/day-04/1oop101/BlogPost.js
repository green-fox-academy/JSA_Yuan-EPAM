class BlogPost {
    constructor(authorName, title, text, publicationDate) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

postObjs = [
    ['John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet', '2000.05.04'],
    ['Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog \
    about almost everything', '2010.10.10'],
    ['Willian Turton', 'One Engineer', '2017.03.27', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.']
]

blogPosts = []

postObjs.map(post => {
    blogPosts.push(new BlogPost(post[0], post[1], post[2]));
});

console.log(blogPosts);