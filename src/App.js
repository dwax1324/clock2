import React, {useRef} from "react";
import styled from "styled-components";

document.body.style.background = "black";
document.body.style.height = "100%";

const Hour = styled.div`
    width: 1px;
    height: 25px;
    background-color: red;
    border-radius: 50%;

    position: absolute;
    box-shadow: 0 0 5px 5px;
`;
const Minute = styled.div`
    width: 1px;
    height: 25px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 5px 5px;
`;
const Second = styled.div`
    width: 1px;
    height: 25px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 0 5px 5px;
`;

const Container = styled.div`
    height: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
`;

const Body = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: black;
`;
const SecondContainer = styled.div`
    position: absolute;
    width: 225px;
    display: flex;
    justify-content: flex-end;
    transform-origin: 0 100%;
    height: 25px;
`;

const HourContainer = styled.div`
    position: absolute;
    width: 275px;
    display: flex;
    justify-content: flex-end;
    transform-origin: 0 100%;
    height: 25px;
`;
const MinuteContainer = styled.div`
    position: absolute;
    width: 250px;
    display: flex;
    justify-content: flex-end;
    transform-origin: 0 100%;
    height: 25px;
`;

const Time = styled.div`
    position: absolute;
    color: white;
    font-size: 80px;
    right: -120px;
    font-weight: 60;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    opacity: 0.5;
`;

const Time2 = styled.div`
    position: absolute;
    color: white;
    font-size: 80px;
    right: -120px;
    font-weight: 60;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    animation: glowing 2s infinite;
    @keyframes glowing {
        from {
            opacity: 0.2;
        }
        to {
            opacity: 0;
        }
    }
`;

const TimeColon = styled.div`
    display: flex;
`;
function App() {
    const sec = useRef("");
    const sec2 = useRef("");
    const min = useRef("");
    const hour = useRef("");
    const time = useRef("");
    const time2 = useRef("");
    const colon = useRef("");
    setInterval(() => {
        let timer = new Date();
        let second = timer.getSeconds();

        let milsec = timer.getMilliseconds();
        let minutes = timer.getMinutes();
        let hours = timer.getHours();

        sec.current.style.transform = `rotate(${6 * second - 90 + milsec / 170}deg)`;
        min.current.style.transform = `rotate(${6 * minutes - 90 + second / 10}deg)`;
        hour.current.style.transform = `rotate(${30 * hours - 90 + minutes / 10}deg)`;
        time.current.innerText = `${hours > 10 ? `${hours}` : `0${hours}`}`;
        time2.current.innerText = ` ${minutes > 10 ? `${minutes}` : `0${minutes}`}`;
        colon.current.innerText = `:`;
    }, 1);

    return (
        <Body>
            <Container>
                <HourContainer ref={hour}>
                    <Hour></Hour>
                </HourContainer>
                <MinuteContainer ref={min}>
                    <Minute></Minute>
                </MinuteContainer>
                <SecondContainer ref={sec}>
                    <Second ref={sec2}></Second>
                </SecondContainer>
                <TimeColon>
                    <Time ref={time} style={{right: "40px", top: "-30px"}}></Time>
                    <Time2 ref={colon} style={{right: "0px", top: "-35px"}}></Time2>
                    <Time ref={time2} style={{right: "-105px", top: "-30px"}}></Time>
                </TimeColon>
            </Container>
        </Body>
    );
}

export default App;
