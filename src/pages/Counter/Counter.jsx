import { useState } from "react";
import { Button, Text, Wrapper } from "./Counter.styled";

export const Counter = () => {
    const [count, setCount] = useState(0);
    
    const onIncrementClick = () => {
        setCount(prevState => prevState + 1);
    };
     const onDecrementClick = () => {
        setCount(prevState => prevState-1);
    };

    return (
        <main>
            <Wrapper>
                <Button onClick={onIncrementClick}>Click Increment</Button>
                <Text>{count}</Text>
                <Button onClick={onDecrementClick}>Click Decrement</Button>
            </Wrapper>
      </main>
  )  
};