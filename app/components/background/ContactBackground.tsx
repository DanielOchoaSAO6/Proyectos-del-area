import React from "react";

const ContactBackground: React.FC = () => {
    return (
        <div 
            className="absolute inset-0 w-full h-full bg-black"
            style={{
                background: 'radial-gradient(ellipse at center, rgba(57, 211, 83, 0.2) 0%, rgba(0,0,0,0) 70%), rgba(14, 16, 22, 1)'
            }}
        />
    );
};

export default ContactBackground;
