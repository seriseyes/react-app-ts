import React from "react";
import css from "./Form.module.css";

interface Props {
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search" | "date" | "time" | "datetime-local" | "month" | "week";
    description?: string;
    caption?: string;
    value?: string;
    onChange?: (e: any) => void;
    required?: boolean;
    name?: string;
    inline?: boolean;
    placeholder?: string;
}

export default function TextField(props: Props) {
    return <div style={props.inline ? {flexDirection: "row", alignItems: "center"} : undefined} className={css.tfWrap}>
        {props.caption || props.required ? <label
            className={`${css.tfCaption} ${props.required ? css.tfRequired : ""}`}>{props.caption || ""}</label> : null}
        <input name={props.name} onChange={props.onChange} value={props.value} className={css.tf}
               type={props.type || "text"} placeholder={props.placeholder}/>
        {props.description && <label className={css.tfDescription}>{props.description}</label>}
    </div>;
}
