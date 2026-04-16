import React from 'react';

// Componente do ícone do YouTube
export const YouTubeIcon = ({ size = 20, color = '#ffffff', className = '', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={`icon icon-youtube ${className}`}
        {...props}
    >
        <path d="M19.615 3.184c-3.604-.246-11.626-.246-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
    </svg>
);

// Componente do ícone do Instagram
export const InstagramIcon = ({ size = 20, color = '#ffffff', className = '', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-instagram ${className}`}
        {...props}
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

// Componente do ícone do Facebook
export const FacebookIcon = ({ size = 20, color = '#ffffff', className = '', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={`icon icon-facebook ${className}`}
        {...props}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

// Componente do ícone do LinkedIn
export const LinkedInIcon = ({ size = 20, color = '#ffffff', className = '', ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        className={`icon icon-linkedin ${className}`}
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);