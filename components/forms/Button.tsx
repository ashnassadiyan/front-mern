import React from 'react'

interface ButtonI {
    name?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>

}

const Button: React.FC<ButtonI> = ({ name, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button
