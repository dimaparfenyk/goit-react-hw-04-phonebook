import { useState, useEffect, useRef } from "react";
import { Button, Container, ClockFace } from "./Clock.styled";

export const Clock = () => {
    const [time, setTime] = useState(() => new Date());
    const intervalId = useRef(null);
    
    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            stop()
        }
    }, []);

    const stop = () => {
    clearInterval(intervalId.current);
  };

    return (
        <main>
            <Container>
            <ClockFace>Current time:{time.toLocaleTimeString()}</ClockFace>
            <Button type="button" onClick={stop}>
            Stop Time
            </Button>
            </Container>
        </main>)
};