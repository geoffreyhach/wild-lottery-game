import React, { useState, useEffect } from "react";

const Game = () => {
    const [playersChoice, setPlayersChoice] = useState("");
    const [lottery, setLottery] = useState("");
    const [message, setMessage] = useState("Try it !");
    const [minTry, setMinTry] = useState(0);
    const [maxTry, setMaxTry] = useState(100);
    const [win, setWin] = useState(false);
    const placeholder = `Write a number between ${minTry} and ${maxTry}`;

    useEffect(() => {
        setLottery(Math.floor(Math.random() * 100));
    }, []);

    useEffect(() => {
        document.querySelector(".min-value").style.width = `${minTry}%`;
    }, [minTry]);

    useEffect(() => {
        document.querySelector(".max-value").style.width = `${100 - maxTry}%`;
    }, [maxTry]);

    const handleChange = (e) => {
        setPlayersChoice(Number(e.target.value));
    };

    const play = (guessedNumber) => {
        document.querySelector(".number-input").value = "";
        console.log(lottery);

        if (guessedNumber > lottery) {
            setMaxValue(guessedNumber);
            setMessage(`It's less than ${guessedNumber}`);
        }
        if (guessedNumber < lottery) {
            setMinValue(guessedNumber);
            setMessage(`It's more than ${guessedNumber}`);
        }
        if (guessedNumber === lottery) {
            setWin(true);
            setMessage("Congratulation !");
        }
    };

    const setMinValue = (value) => {
        if (value > minTry) setMinTry(value);
        else return;
    };
    const setMaxValue = (value) => {
        if (value < maxTry) setMaxTry(value);
        else return;
    };

    return (
        <div className="card">
            <h1>Guess the number</h1>
            <p className="message">{message}</p>
            <div className="goal">
                <h2>{win ? lottery : "??"}</h2>
            </div>
            <div className="progression-wrapper">
                <div className="min-value"></div>
                <div></div>
                <div className="max-value"></div>
            </div>
            <div className="input-wrapper">
                <label></label>
                <input
                    className="number-input"
                    type="number"
                    placeholder={placeholder}
                    onChange={handleChange}
                ></input>
                <input
                    type="submit"
                    value="Go"
                    onClick={() => play(playersChoice)}
                ></input>
            </div>
        </div>
    );
};

export default Game;
