import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); 
    return (
        <footer className="bg-gray-400 text-white py-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <p className="text-sm">
                    &copy; {currentYear} ediFel Designs. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
