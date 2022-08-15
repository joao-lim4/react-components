import React, { ReactNode } from "react";

type ITypePasswordValue = "password" | "text";

interface IStatePasswordToggle {
    typePassword: ITypePasswordValue;
}

interface IDefaultValueToggle {
    currentValue: ITypePasswordValue;
}

export type {  IDefaultValueToggle, IStatePasswordToggle,ITypePasswordValue }