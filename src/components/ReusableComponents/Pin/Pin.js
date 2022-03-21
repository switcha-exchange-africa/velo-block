/* eslint-disable no-empty-pattern */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Pin = ({ title, type, getPin, size, onChange, className }) => {
    const [state, setState] = useState({});

    const burrowInputField = useRef();

    const multifields = () => {
        const charLimit = 1;
        const multiFields = burrowInputField.current.querySelectorAll("input");
        multiFields.forEach((element) => {
            element.addEventListener("keydown", (e) => {
                element.classList.add("keyup");
                if (e.which === 8 && element.value.length === 0) {
                    if (element.previousSibling == null) {
                        element.focus();
                    } else {
                        element.previousSibling.focus();
                    }
                } else if (element.value.length >= charLimit) {
                    if (element.nextSibling == null) {
                        element.focus();
                    } else {
                        element.nextSibling.focus();
                    }
                    return false;
                }
            });
            element.addEventListener("keyup", () => {
                element.classList.add("keyup");
                if (element.value.length >= charLimit) {
                    if (element.nextSibling == null) {
                        element.focus();
                    } else {
                        element.nextSibling.focus();
                    }
                    return false;
                }
            });
        });
    };

    const multifieldPaste = () => {
        let inputs = [];
        inputs = burrowInputField.current.querySelectorAll("input");
        function paste(e) {
            // Prevent the real paste to change the input value.
            e.preventDefault();
            let pastedText;
            // Get text from paste event.
            if (window.clipboardData && window.clipboardData.getData) {
                pastedText = window.clipboardData.getData("Text");
            } else if (e.clipboardData && e.clipboardData.getData) {
                pastedText = e.clipboardData.getData("text/plain");
            }
            // Start to fill text from left to right.
            let i;
            let len;
            let str;
            let startPlace = false;
            let newObj = {};
            for (i = 0, len = inputs.length; i < len && pastedText.length > 0; ++i) {
                let index = i;
                // SKip input before selected one.
                if (this === inputs[i]) {
                    // The current focused input
                    startPlace = true;
                    const lengthRemain = 1 - this.value.length;
                    str = pastedText.slice(0, lengthRemain);
                    inputs[i].value += str;
                    pastedText = pastedText.slice(lengthRemain);
                    Object.assign(newObj, { [inputs[index].name]: inputs[index].value });
                } else if (startPlace) {
                    // Cut a string from pastedStr, at most 4 char.
                    str = pastedText.slice(0, 1);
                    inputs[i].value = str;
                    // Cut the from 4 char from pastedStr.
                    pastedText = pastedText.slice(1);
                    Object.assign(newObj, { [inputs[index].name]: inputs[index].value });
                }
            }
            inputs[inputs.length - 1].focus();
            setState(() => {
                return { ...newObj };
            });
            return false;
        }

        // Add EventListener, paste event will be a input param.
        let i;
        let len;
        for (i = 0, len = inputs.length; i < len; ++i) {
            inputs[i].addEventListener("paste", paste);
        }
    };

    const burrowInput = () => {
        const elements = burrowInputField.current.querySelectorAll("input");
        elements.forEach((element) => {
            element.addEventListener("click", () => {
                setTimeout(() => {
                    element.selectionStart = element.selectionEnd = 10000;
                }, 0);
            });
        });
    };

    useEffect(() => {
        multifields();
        multifieldPaste();
        burrowInput();
    }, []);

    const updatePin = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value.replace(/\D/g, ""),
        }));
    };

    useEffect(() => {
        const pin = Object.values(state).join("");
        onChange(pin);
    }, [onChange, state]);

    return (
        <PinView>
        <div
            className={` ${type === 1
                ? "transaction-pin--wrap transaction-pin no-margin"
                : "transaction-confirm-action"
                } ${typeof className !== "undefined" ? className : ""}`}
        >
            <div className="confirm-title text-center">
                {title && <p className="color-black">{title}</p>}
                <div className="pin-input color-black" ref={burrowInputField}>
                    {Array.from(Array(size).keys()).map((number, index) => (
                        <input
                            key={index}
                            placeholder="-"
                            type="tel"
                            autoComplete="new-password"
                            autoCapitalize="off"
                            name={`pin${number}`}
                            value={state[number]}
                            maxLength="1"
                            pattern="\d{1}"
                            onChange={updatePin}
                        />
                    ))}
                </div>
            </div>
        </div>
        </PinView>
    );
};
export default Pin;

const PinView = styled.div`
    .transaction-pin--wrap .pin-input {
        margin-top: 10px !important;
        margin-bottom: 5px !important;
        margin-left: unset !important;
        margin-right: unset !important;
    }
    .transaction-pin {
        width: auto;
        max-width: none !important;
    }

    .transaction-pin input {
        margin-right: 5px;
        color: #000000;
        font-weight: 400;
        width: auto !important;
    }
    .no-margin {
        margin: 0 !important;
    }

    .transaction-confirm-action {
        margin: 40px auto 47px;
        min-width: 289px;
    }
    .text-center {
        text-align: center;
    }
    .pin-input input {
        background: var(--offWhite);
        border-radius: 3px;
        border: 0;
        width: 41px;
        height: 41px;
        max-width: 56px;
        outline: none;
        text-align: center;
        font-size: 16px !important;
        border: 1px solid #E2E8F0;
        box-sizing: border-box;
        border-radius: 16px;
    }
    .pin-input {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }
    .pin-input input:not(:placeholder-shown) {
        font-family: "dotsfont";
    }
`;