import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {currentYear} Made with love by Sakib</p>
        </footer>
    );
};

export default Footer;
