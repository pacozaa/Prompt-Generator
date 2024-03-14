import React from 'react';

interface NavbarProps {
    brandName: string;
    links: {
        label: string;
        href: string;
    }[];
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
    return (
        <nav className="bg-black py-4 px-6 flex items-center justify-between w-full shadow-lg">
            <a href="#" className="text-white text-2xl font-bold">
                {brandName}
            </a>
            <div className="flex items-center">
                {links.map(({ label, href }, index) => (
                    <a
                        key={index}
                        href={href}
                        className="text-white mr-6"
                    >
                        {label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;