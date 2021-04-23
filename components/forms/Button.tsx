import React from 'react'

interface ButtonI {
    name?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
    classname?: string;

}

const Button: React.FC<ButtonI> = ({ name, onClick, classname }) => {
    return (
        <div>
            <button onClick={onClick} className={classname}>{name}</button>
        </div>
    )
}

export default Button
