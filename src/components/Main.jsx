import './main.css'

function Main() {

    const blogs = [
        {
            "title": 'The Jitu',
            "content": 'The Jitu Produces world class software developers'
        }, {
            "title": 'Full-stack Development',
            "content": 'Software developers at The Jitu are well equiped and have good skills on full-stack development '
        }, {
            "title": 'Training',
            "content": 'The trainers at The Jitu are professionals and have a good conduct and interacting with the trainees'
        }, {
            "title": 'Application',
            "content": 'One can apply for a job or training through the Jitu website'
        }
        
    ]
    
    return (
        <div className='main'>
        <div className="main-content">
            {
                blogs.map((blog,index) => {
                    return(
                        <div className="blog" key={index}>
                            <h3>{blog.title}</h3>
                            <p>{blog.content}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="aside">
        {
                blogs.map((blog,index) => {
                    return(
                        <div className="blog-aside" key={index}>
                            <h3>{blog.title}</h3>
                        </div>
                    )
                })
            }
            </div>
        </div>
        
    )
    }

    export default Main