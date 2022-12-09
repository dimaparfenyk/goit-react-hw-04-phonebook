import { HeaderNav, StyledLink } from "./NavBar.styled";

const navItems = [
    { href: 'phonebook', text: 'Phonebook' },
    { href: 'filter', text: 'Filter' },
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