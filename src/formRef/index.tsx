import React, { ChangeEvent, FormEvent, useRef } from "react";
import { IFormInputs, IRefFormValue } from "./types";

const Form: React.FC = (): JSX.Element => {
    const _formRefValue = useRef<IRefFormValue>({
        username: "",
        password: "",
    });

    const handleChangeInputValue = ({
        target: { value, name },
    }: ChangeEvent<HTMLInputElement>): void => {
        if (!name) return;
        _formRefValue.current[name as IFormInputs] = value;
    };

    const handleSubmit = ({
        preventDefault,
    }: FormEvent<HTMLFormElement>): void => {
        preventDefault();

        console.log("Username", _formRefValue.current.username);
        console.log("Password", _formRefValue.current.password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    onChange={handleChangeInputValue}
                    required
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleChangeInputValue}
                    required
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
};

export { Form };
