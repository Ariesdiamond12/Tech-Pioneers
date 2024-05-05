const blogPosts = [
    {
        title: "AI in Customer Service",
        imageUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1000.format-webp.webp",
        excerpt: "Artificial Intelligence (AI) is revolutionizing customer service by providing personalized experiences and efficient problem resolution through chatbots and virtual assistants.",
        blogURL:"https://www.salesforce.com/blog/customer-service-ai/",
        category: "business"
    },
    {
        title: "gemini should be a bit longer",
        imageUrl: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/final_keyword_header.width-1000.format-webp.webp",
        excerpt: "Blockchain technology ensures transparency, traceability, and security in the supply chain by recording transactions in an immutable ledger, reducing fraud and errors.",
        blogURL:"https://blog.google/technology/ai/",
        category: "technology"
    },
    {
        title: "Cloud Computing Adoption",
        imageUrl: "https://example.com/cloud_computing.jpg",
        excerpt: "Businesses are increasingly adopting cloud computing services to improve scalability, accessibility, and cost-effectiveness of their IT infrastructure, enabling remote work and efficient data management.",
        category: "business"
    },
    {
        title: "Internet of Things (IoT) in Smart Offices",
        imageUrl: "https://example.com/iot_smart_office.jpg",
        excerpt: "IoT devices in smart offices enhance productivity and efficiency by automating tasks, optimizing energy usage, and providing real-time data insights for informed decision-making.",
        category: "technology"
    },
    {
        title: "Cybersecurity Measures for Remote Workforce",
        imageUrl: "https://example.com/cybersecurity_remote_work.jpg",
        excerpt: "With the rise of remote work, businesses are implementing robust cybersecurity measures such as multi-factor authentication, VPNs, and endpoint security to protect sensitive data from cyber threats.",
        category: "business"
    },
    {
        title: "Embracing the Fourth Industrial Revolution",
        imageUrl: "https://example.com/4ir.jpg",
        excerpt: "The Fourth Industrial Revolution (4IR) is characterized by the fusion of technologies blurring the lines between physical, digital, and biological spheres.",
        category: "technology"
    },
    {
        title: "Innovative Marketing Strategies",
        imageUrl: "https://example.com/marketing.jpg",
        excerpt: "Businesses are adopting innovative marketing strategies leveraging social media, influencer partnerships, and personalized content to reach and engage with their target audience.",
        category: "business"
    },
    {
        title: "Future of Work: Remote Collaboration Tools",
        imageUrl: "https://example.com/remote_collaboration.jpg",
        excerpt: "Remote collaboration tools such as video conferencing, project management platforms, and virtual whiteboards facilitate seamless communication and productivity for distributed teams.",
        category: "technology"
    },
    {
        title: "Data-driven Decision Making",
        imageUrl: "https://plus.unsplash.com/premium_photo-1688678097506-6c12a0376238?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        excerpt: "Businesses are harnessing the power of data analytics to make informed decisions, identify trends, and optimize processes across various departments, driving growth and efficiency.",
        category: "business"
    },
    {
        title: "Augmented Reality in Retail",
        imageUrl: "/Tech-Pioneers/post_images/speaker.jpg",
        excerpt: "Augmented Reality (AR) technology is transforming the retail experience by allowing customers to visualize products in their physical space before making a purchase, enhancing engagement and reducing returns.",
        category: "technology"
    }
];


  
const searchInput = document.querySelector('.search-form-input')
const cards = document.getElementById('post-cards')

function setHomePagePosts(){
    // Clear the existing contents of the cards element
    cards.innerHTML = '';

    let posts = [];
    const lastIndex = blogPosts.length - 1;
    
    for (let i = lastIndex; i > lastIndex - 3; i--) {
        posts.push(blogPosts[i])
    }
    posts.map(post => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('post-card-item');

        blogItem.innerHTML = `
        <a href=${post.blogURL} >
            <img src=${post.imageUrl} class="post-image" />
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
        </a>
        `;

        cards.appendChild(blogItem);
    })
}
function setTechPosts(){
    // Clear the existing contents of the cards 
    cards.innerHTML = '';

    let posts = [];

    for(let i = 0 ; i < blogPosts.length ; i++){

        let filterPost = blogPosts[i]
        if (filterPost.category === 'technology' && posts.length < 3){

         posts.push(blogPosts[i])

        }
    }
    posts.map(post => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('post-card-item');

        blogItem.innerHTML = `
        <a href=${post.blogURL} >
            <img src=${post.imageUrl} class="post-image" />
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
        </a>
        `;

        cards.appendChild(blogItem);
    })
}
function setBusinessPosts(){
    // Clear the existing contents of the cards element
    cards.innerHTML = '';

    let posts = [];

    for(let i = 0 ; i < blogPosts.length ; i++){

        let filterPost = blogPosts[i]
        if (filterPost.category === 'business' && posts.length < 3){

         posts.push(blogPosts[i])

        }
    }
    posts.map(post => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('post-card-item');

        blogItem.innerHTML = `
        <a href=${post.blogURL} >
            <img src=${post.imageUrl} class="post-image" />
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
        </a>
        `;

        cards.appendChild(blogItem);
    })
}
function setPost( res){

        // Clear the existing contents of the cards element
        cards.innerHTML = '';

        if (res.length > 0){
            // set data to the div iis the results are not empty
            res.map(post => {
                const blogItem = document.createElement('div');
                blogItem.classList.add('search-card');

                blogItem.innerHTML = `
                <a href="">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                </a>
                `;

                cards.appendChild(blogItem);
            })
        }
        else{
            // show that nothing was found
            const blogItem = document.createElement('div');
            blogItem.classList.add('post-card-item');

            blogItem.innerHTML = `
                <p>nothing found</p>
            `;

            cards.appendChild(blogItem);
        }
}

function searchBlog(){
    //set value to the input value to be searched
    let value = searchInput.value

    if (value && value.trim().length > 0){

        value = value.trim().toLowerCase()

        let res = blogPosts.filter(post => {
            return post.title.toLowerCase().includes(value)
        })

        //set limit on how many results display
        const limit = 5; // Change this to your desired limit
        setPost(res.slice(0, limit));
        
    }
    else{
        //display the posts that where on the front page first
        //display only 3 or 6 
        setHomePagePosts()
        console.log("nothing")
    }
}

