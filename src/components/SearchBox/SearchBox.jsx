import { Container, SearchInput } from "./SearchBar.styled"

export const SearchBox = ({onChange, value}) => {
    return (
        <Container>
            <SearchInput
                type="text" 
                placeholder="Type name"
                onChange={onChange}
                value={value}
            />
        </Container>
    )
}