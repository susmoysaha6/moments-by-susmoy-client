import { Footer } from 'flowbite-react';
import React from 'react';
import { FaFacebook, FaFlickr, FaGoogleDrive, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footers = () => {
    return (
        <div>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='flex items-center mb-3'>
                            {/* <Footer.Brand
                                to='/'
                                href='/'
                                src={logo}
                                alt="Flowbite Logo"
                                name="MOMENTS BY SUSMOY"
                            /> */}
                            <img width={50} src={logo} alt="" />
                            <Link to='/'>
                                <h3 className="text-xl text-sky-500 font-semibold ml-2">MOMENTS BY SUSMOY</h3>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Susmoy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Photography Career
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Facebook
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Flickr
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="MOMENTS BY SUSMOY™"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={FaFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaGoogleDrive}
                            />
                            <Footer.Icon
                                href="#"
                                icon={FaFlickr}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Footers;