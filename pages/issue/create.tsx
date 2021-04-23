import React from 'react'
import Button from '../../components/forms/Button'
import Input from '../../components/forms/Input'
import Axios from '../api/Axios'

interface IssueI {
    id: number;
    custno: number;
    issueType: string;
    create: string;
}

const create = () => {
    const [state, setstate] = React.useState<IssueI>({
        id: 0,
        custno: 0,
        issueType: '',
        create: ''
    })
    const setChanages = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const submit = () => {
        console.log(state)
        Axios.post('/issue', state).then(res => { alert('success') }).catch(res => alert('failed'))
    }
    return (
        <div>
            <h1>create</h1>


            <div>
                <Input name="id" onChange={setChanages} holder={'id'} />
                <Input name="custno" onChange={setChanages} holder={'custno'} />
                <Input name="issueType" onChange={setChanages} holder={'issueType'} />
                <Input name="create" onChange={setChanages} holder={'create'} />
            </div>
            <Button name="submit" onClick={submit} />

        </div>
    )
}

export default create
