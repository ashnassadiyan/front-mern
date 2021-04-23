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
        <div className="container">
            <h1>create</h1>


            <div className="container">
                <div className="row">
                    <div className="col"> <Input name="id" onChange={setChanages} holder={'id'} /></div>
                    <div className="col"><Input name="custno" onChange={setChanages} holder={'custno'} /></div>
                </div><br />
                <div className="row">
                    <div className="col"> <Input name="issueType" onChange={setChanages} holder={'issueType'} /></div>
                    <div className="col"><Input name="create" onChange={setChanages} holder={'create'} /></div>
                </div><br />
                <Button name="submit" onClick={submit} classname={"btn btn-primary"} />
            </div>


        </div >
    )
}

export default create
