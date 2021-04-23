import React from 'react'
interface TableI {
    header: any[];
    data?: any[];

}

const Table: React.FC<TableI> = ({ header, data }) => {
    return (
        <>
            <table className="table" >
                <thead>
                    <tr >
                        {
                            header.map((d, index) => {
                                return (
                                    <th key={index} className="col"><b>{d}</b></th>
                                )
                            })
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((t: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{t.id}</td>
                                    <td>{t.custno}</td>
                                    <td>{t.issueType}</td>
                                    <td>{t.create}</td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>

        </>
    )
}

export default Table
