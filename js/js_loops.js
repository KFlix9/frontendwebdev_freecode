// LOOPS

const blogPosts = [
    { 
        title: 'Hello World', 
        author: 'Felix B.',
        publishDate: '2023-04-19', 
        content: 'some stuff' 
    },
    { 
        title: 'This is some nice title', 
        author: 'Felix B.',
        publishDate: '2023-04-19', 
        content: 'this is some nice content' 
    },
    { 
        title: 'I have not yet mastered vim', 
        author: 'Felix B.',
        publishDate: '2023-04-19', 
        content: 'this stuff needs some high key accuracy' 
    }
]

for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}