import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='md:grid grid-cols-2 gap-12 w-10/12 mx-auto my-12 space-y-8 md:space-y-0'>
            {/* Blog No: 1 */}
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='text-justify'>Access tokens and refresh tokens are fundamental elements of modern authentication systems.

                        An access token serves as a temporary credential that grants permission to access protected resources. It contains information about the user's identity and specific permissions, and it has a relatively short lifespan. Access tokens are typically sent in API requests to authenticate and authorize the user. <br />
                        Refresh tokens, on the other hand, are long-lived tokens used to obtain new access tokens. When the access token expires, the client can present the refresh token to the server to request a fresh
                        access token. This process helps to maintain user sessions without requiring frequent logins. <br />

                        The separation of access and refresh tokens adds an extra layer of security. Access tokens have shorter expiration times, reducing the risk of unauthorized access if compromised. Refresh tokens, being long-lived, are stored securely on the client-side and are used sparingly. <br />

                        Overall, access tokens and refresh tokens work together to provide secure and seamless authentication, ensuring users can access protected resources while maintaining the integrity of their sessions.

                    </p>
                    <div className="card-actions justify-end">
                        <Link target="_blank" to={`https://fusionauth.io/articles/oauth/oauth-token-storage#:~:text=At%20a%20high%20level%2C%20these,display%20information%20about%20the%20user.`}><button className="btn btn-warning btn-sm text-white mt-4">Read more</button></Link>
                    </div>
                </div>
            </div>
            {/* Blog No: 2 */}
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">Compare SQL and NoSQL databases?</h2>
                    <p className='text-justify'>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases differ in their data models, scalability, query language, and schema flexibility. <br />

                        SQL databases follow a rigid schema, using tables with rows and columns to store structured data. They are vertically scalable and rely on SQL for querying. SQL databases are ideal for applications with fixed schemas and complex queries. <br />

                        NoSQL databases offer a flexible data model, accommodating unstructured or semi-structured data. They scale horizontally, distributing data across multiple servers for increased performance. NoSQL databases use various data structures and may have their own query languages, but often lack the full range of features provided by SQL. They provide schema flexibility, allowing data structures to evolve without altering the schema. <br />

                        Choosing between SQL and NoSQL depends on factors such as data structure, scalability needs, query requirements, and the level of schema flexibility desired. SQL is suitable for applications with fixed schemas and complex queries, while NoSQL is preferred for flexible data models and scalable systems handling large volumes of data.

                    </p>
                    <div className="card-actions justify-end">
                        <Link target="_blank" to={`https://www.integrate.io/blog/the-sql-vs-nosql-difference/#:~:text=SQL%20databases%20are%20vertically%20scalable,data%20like%20documents%20or%20JSON.`}><button className="btn btn-warning btn-sm text-white mt-4">Read more</button></Link>
                    </div>
                </div>
            </div>
            {/* Blog NO: 3 */}
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">What is express js? What is Nest JS ?</h2>
                    <p className='text-justify'>
                        Express.js is a popular web application framework for Node.js. It provides a minimalist, flexible, and unopinionated approach to building web applications and APIs. With Express.js, developers can create server-side applications, define routes, handle HTTP requests and responses, and integrate middleware for additional functionality. Express.js is known for its simplicity, lightweight nature, and vast ecosystem of plugins and extensions. It is widely adopted for building scalable and robust web applications in JavaScript. <br />

                        NestJS, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It combines the power of TypeScript, Object-Oriented Programming (OOP), and the concepts of Angular to create a highly modular and structured framework. NestJS emphasizes the use of decorators, modules, and dependency injection to create organized and testable code. It provides built-in support for various features like routing, middleware, authentication, database integration, and more. NestJS follows a layered architecture, making it suitable for enterprise-grade applications with complex business logic and extensive scalability needs. <br />

                        In summary, Express.js is a lightweight and flexible web application framework for Node.js, while NestJS is a feature-rich, opinionated framework that follows a modular and structured approach for building scalable and maintainable server-side applications. Both frameworks have their strengths and are widely used in the Node.js ecosystem based on the specific requirements of the project at hand.

                    </p>
                    <div className="card-actions justify-end">
                        <Link target="_blank" to={`https://blog.logrocket.com/nestjs-vs-express-js/`}><button className="btn btn-warning btn-sm text-white mt-4">Read more</button></Link>
                    </div>
                </div>
            </div>
            {/* blog no : 4 */}
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-4">What is MongoDB aggregate and how does it work?</h2>
                    <p className='text-justify'>MongoDB's aggregation framework is a powerful feature that allows for advanced data processing and analysis within the database. It provides a flexible way to perform complex queries, transformations, and aggregations on collections of documents. <br />

                        The aggregation framework operates on a set of documents and returns computed results. It processes data in stages, where each stage performs a specific operation on the input documents and passes the transformed data to the next stage. This pipeline-based approach allows for the composition of multiple stages to perform sophisticated aggregations. <br /><br />

                        <span className='font-bold text-x mb-4'>Some commonly used stages in the aggregation pipeline include:</span> <br /><br />

                        <ul className='list-item  space-y-4 font-mono ps-4'>
                            <li>$match: Filters the documents based on specified criteria.</li>
                            <li>$group: Groups documents together based on a specified key and applies aggregation operations on each group.</li>
                            <li>$project: Reshapes the documents, allowing for the inclusion or exclusion of specific fields.</li>
                            <li>$sort: Sorts the documents based on specified fields.</li>
                            <li>$limit: Limits the number of documents returned by the aggregation pipeline.
                            </li>
                        </ul>

                        <br />
                        The aggregation framework can handle large volumes of data efficiently by leveraging indexes and parallel processing. It enables complex data manipulations, including joining multiple collections, transforming data structures, and performing statistical analyses.

                        Overall, MongoDB's aggregation framework provides a flexible and powerful toolset for performing data analysis and manipulation directly within the database, reducing the need for additional processing on the application side and improving performance and scalability.

                    </p>
                    <div className="card-actions justify-end">
                        <Link target="_blank" to={`https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/#:~:text=What%20is%20Aggregation%20in%20MongoDB,that%20pass%20through%20the%20pipeline.`}><button className="btn btn-warning btn-sm text-white mt-4">Read more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;