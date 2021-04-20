import React from 'react'

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
    return (
        <div>
            <h1>create</h1>
        </div>
    )
}

export default create
