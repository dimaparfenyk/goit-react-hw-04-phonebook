import { HeaderNav, StyledLink } from "./NavBar.styled";

const navItems = [
    { href: 'phonebook', text: 'Phonebook' },
    { href: 'colorpicker', text: 'ColorPicker' },
    { href: 'counter', text: 'Counter' },
    { href: 'pokemon', text: 'Pokemon' },
    { href: 'signup', text: 'Sign Up' },
];

export const NavBar = () => {
    return (
        <HeaderNav>
            {navItems.map(({ href, text }) =>
                <StyledLink
                    key={href}
                    to={href}>
                    {text}
                </StyledLink>)}
        </HeaderNav>
    );
};