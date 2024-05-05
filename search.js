const blogPosts = [
    {
        title: "AI in Customer Service",
        imageUrl: "https://www.ibm.com/blog/wp-content/uploads/2023/09/Generative-AI-Meet-your-partner-in-customer-service.jpg",
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
        imageUrl: "https://assets-global.website-files.com/5fbc3fcb12d95f9606608540/64ff42d5367fb437b3caf823_Cloud%20Migration%20Case%20Study.png",
        excerpt: "Businesses are increasingly adopting cloud computing services to improve scalability, accessibility, and cost-effectiveness of their IT infrastructure, enabling remote work and efficient data management.",
        blogURL:"",
        category: "business"
    },
    {
        title: "Internet of Things (IoT) in Smart Offices",
        imageUrl: "https://imageio.forbes.com/specials-images/imageserve/61b6d5fd475a71fdc7dda795/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        excerpt: "IoT devices in smart offices enhance productivity and efficiency by automating tasks, optimizing energy usage, and providing real-time data insights for informed decision-making.",
        blogURL:"https://www.ibm.com/topics/internet-of-things",
        category: "technology"
    },
    {
        title: "Cybersecurity Measures for Remote Workforce",
        imageUrl: "https://www.dice.com/binaries/medium/content/gallery/dice/insights/2021/02/shutterstock_1794130912.jpg",
        excerpt: "With the rise of remote work, businesses are implementing robust cybersecurity measures such as multi-factor authentication, VPNs, and endpoint security to protect sensitive data from cyber threats.",
        blogURL: "",
        category: "business"
    },
    {
        title: "Embracing the Fourth Industrial Revolution",
        imageUrl: "https://peoplefactor.co.za/wp-content/uploads/2020/06/AI-banner.jpg",
        excerpt: "The Fourth Industrial Revolution (4IR) is characterized by the fusion of technologies blurring the lines between physical, digital, and biological spheres.",
        blogURL: "",
        category: "technology"
    },
    {
        title: "Innovative Marketing Strategies",
        imageUrl: "https://example.com/marketing.jpg",
        excerpt: "Businesses are adopting innovative marketing strategies leveraging social media, influencer partnerships, and personalized content to reach and engage with their target audience.",
        blogURL: "https://www.forbes.com/sites/forbesbusinesscouncil/2023/05/11/10-innovative-strategies-for-bootstrapped-startup-marketing-on-a-budget/?sh=31b3cf331f40",
        category: "business"
    },
    {
        title: "Future of Work: Remote Collaboration Tools",
        imageUrl: "https://image.cnbcfm.com/api/v1/image/107058698-1652188799963-gettyimages-1369568052-amv-bcn2021wfhoffice0753.jpeg?v=1712684150",
        excerpt: "Remote collaboration tools such as video conferencing, project management platforms, and virtual whiteboards facilitate seamless communication and productivity for distributed teams.",
        blogURL:"https://www.cognizant.com/us/en/glossary/remote-collaboration#:~:text=Remote%20collaboration%20is%20the%20process,even%20far%2Dflung%20employees%20together.",
        category: "technology"
    },
    {
        title: "Data-driven Decision Making",
        imageUrl: "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Data-Driven-Decision-Making.jpg&w=1200&h=630",
        excerpt: "Businesses are harnessing the power of data analytics to make informed decisions, identify trends, and optimize processes across various departments, driving growth and efficiency.",
        blogURL:"https://www.tableau.com/learn/articles/data-driven-decision-making#:~:text=What%20is%20data%2Ddriven%20decision,goals%2C%20objectives%2C%20and%20initiatives.",
        category: "business"
    },
    {
        title: "Augmented Reality in Retail",
        imageUrl: "https://cms.nsflow.com/wp-content/uploads/2023/06/magical-virtual-reality-games-using-hololens-generative-ai-2000x1121.jpg",
        excerpt: "Augmented Reality (AR) technology is transforming the retail experience by allowing customers to visualize products in their physical space before making a purchase, enhancing engagement and reducing returns.",
        blogURL:"https://www.fingent.com/blog/augmented-reality-in-retail-reimagining-the-future-of-shopping/#:~:text=AR%20offers%20an%20excellent%20opportunity,to%20narrow%20down%20their%20choices.",
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

