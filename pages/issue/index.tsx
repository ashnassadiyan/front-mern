import React, { useEffect } from 'react'
import Table from '../../components/Table'
import Link from 'next/link'
import Axios from '../api/Axios'

interface IssueI {
    id: number;
    custno: number;
    issueType: string;
    create: string;
}

const index = () => {
    const arra: any[] = ["Id", "custno", "issueType", "create"]
    useEffect(() => {
        getData()
    }, [])
    const [state, setstate] = React.useState<IssueI[]>([])
    const getData = () => {
        Axios.get('/issue').then(res => {
            setstate(res.data)
        })
    }
    return (
        <div>
            <h1>index</h1>
            <Link href='/issue/create'>
                <button className="btn btn-primary">Create</button>
            </Link>
            <Table header={arra} data={state} />
        </div>
    )
}

export default index
