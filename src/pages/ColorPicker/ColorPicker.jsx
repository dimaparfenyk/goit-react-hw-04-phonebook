import { useState } from "react";
import { ColorButton, Box, ColorWrapper, PageTitle, Text } from "./ColorPicker.styled";

export const ColorPicker = ({ colors }) => {
    const [activeIndex, setActiveIndex] = useState('');
   
    return (
        <main>
        <Box>
            <PageTitle>Color Picker</PageTitle>
            <Text>Выбран цвет: {activeIndex.label}</Text>
                <ColorWrapper>
            {colors.map(({ label, color }) => {
                return (<ColorButton
                    key={label}
                    background={color}
                    onClick={() => { setActiveIndex({ label }) }}>
                    {label}
                </ColorButton>)
            })}
        </ColorWrapper>
        </Box>
    </main>
    );
};