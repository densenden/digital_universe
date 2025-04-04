import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}
declare const Button: React.FC<ButtonProps>;

interface LayoutProps {
    children: React.ReactNode;
}
declare const Layout: React.FC<LayoutProps>;

interface NavigationItem {
    label: string;
    href: string;
}
interface NavigationProps {
    items: NavigationItem[];
}
declare const Navigation: React.FC<NavigationProps>;

interface SectionProps {
    children: React.ReactNode;
    className?: string;
}
declare const Section: React.FC<SectionProps>;

export { Button, Layout, Navigation, Section };
