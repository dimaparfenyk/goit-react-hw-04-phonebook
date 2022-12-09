import { SearchBox } from "components/SearchBox/SearchBox"

export const FilterPage = () => {

    const filterChange = (e) => {
        console.log(e.target.value)
    };

    return (
        <main>
            <SearchBox
                onChange={filterChange} />
        </main>
    )
};