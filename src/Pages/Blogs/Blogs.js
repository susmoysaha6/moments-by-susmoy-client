import { Accordion } from 'flowbite-react';
import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='w-11/12 md:w-1/2 mx-auto'>
            <h1 className="text-3xl font-semibold my-5 text-center text-gray-700">Blogs</h1>
            <Accordion>
                <Accordion.Panel>
                    <Accordion.Title>
                        1. Difference between SQL and NoSQL?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            #  SQL is Relational Database Management System.
                            Whare As NoSQL is  Distributed Database Management System.
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            #  SQL is Vertically Scalable &
                            NoSQL is Horizontally Scalable
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            #  SQL is not suitable for hierarchical data storage & NoSQL is suitable for hierarchical data storage
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            #  SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            #  SQL databases  have fixed or static or predefined schema & NoSQL have dynamic schema
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        2.  What is JWT, and how does it work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='text-blue-600 underline font-bold mr-2'>JWT:</span>
                            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                        </p>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            <span className='text-blue-600 underline font-bold mr-2'>Working Procedure:</span>
                            To authenticate a user, a client application must send a JSON Web Token (JWT) in the authorization header of the HTTP request to your backend API. API Gateway validates the token on behalf of your API, so you don't have to add any code in your API to process the authentication.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        3. What is the difference between javascript and NodeJS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            # <span className='font-bold'>Javascript </span> is a programming language that is used for writing scripts on the website.
                            <span className='font-bold'>NodeJS </span> is a Javascript runtime environment.
                            <br />
                            # <span className='font-bold'>Javascript </span> can only be run in the browsers.
                            We can run Javascript outside the browser with the help of <span className='font-bold'>NodeJS </span>.
                            <br />
                            # <span className='font-bold'>Javascript </span> is basically used on the client-side.
                            <span className='font-bold'>NodeJS </span>
                            is mostly used on the server-side.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        4. How does NodeJS handle multiple requests at the same time?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-700 dark:text-gray-400">
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or <span className='font-bold text-blue-600'>worker_threads</span> module.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blogs;