import React from 'react'
interface InputI {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    holder: string;

}

const Input: React.FC<InputI> = ({ name, onChange, holder }) => {
    return (
        <div>
            <input name={name} onChange={onChange} placeholder={holder} />
        </div>
    )
}

export default Input
