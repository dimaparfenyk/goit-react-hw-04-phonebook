import { Container, SearchInput } from "./SearchBox.styled"

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