import React, { ChangeEvent, useRef, useState } from "react";
import { Container, ContainerGroup, PasswordInput } from "./styles";
import { EyeOutline, EyeOffOutline } from "react-ionicons";
import {
    IDefaultValueToggle,
    IStatePasswordToggle,
    ITypePasswordValue,
} from "./types/types";

const _defaultToggleValue: Record<ITypePasswordValue, IDefaultValueToggle> = {
    password: {
        currentValue: "text",
    },
    text: {
        currentValue: "password",
    },
};

const ToggleShowPassword: React.FC = (): JSX.Element => {
    const _refPasswordValue = useRef({ value: "" });

    const [typeInputPassword, setTypeInputPassword] =
        useState<IStatePasswordToggle>({
            typePassword: "password",
        });

    const handleTogglePasswordVisible = (): void => {
        setTypeInputPassword((oldValue: IStatePasswordToggle) => {
            return {
                typePassword:
                    _defaultToggleValue[oldValue.typePassword].currentValue,
            };
        });
    };

    const handleChangePassword = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        _refPasswordValue.current.value = value;
    };

    return (
        <Container>
            <ContainerGroup>
                <PasswordInput
                    onChange={handleChangePassword}
                    type={typeInputPassword.typePassword}
                    placeholder="Password"
                />

                <div
                    onClick={handleTogglePasswordVisible}
                    className="__container-icon"
                >
                    {typeInputPassword.typePassword === "password" && (
                        <EyeOutline color="#8b4ca9" />
                    )}
                    {typeInputPassword.typePassword === "text" && (
                        <EyeOffOutline color="#8b4ca9" />
                    )}
                </div>
            </ContainerGroup>
        </Container>
    );
};

export { ToggleShowPassword };
