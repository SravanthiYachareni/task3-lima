import React, { useState } from 'react'

function Task3() {
    const [employee, setEmployee] = useState({
        empId: '',
        firstname: '',
        lastname: '',
        email: '',
        role: ''
    })
    const [isVisible, setIsvisisble] = useState(false)
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: [e.target.value] })


    }
    console.log(employee)

    return (
        <div>
            <div className='table-wrapper'>
                <table className='table' >
                    <thead>
                        <tr>
                            <th>empId</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type='text' name='empId' value={employee.empId}
                                onChange={(handleChange)} />
                            </td>
                            <td><input type='text' name='firstname'
                                value={employee.firstname} onChange={(handleChange)} />
                            </td>
                            <td><input type='text' name='lastname'
                                value={employee.lastname} onChange={(handleChange)} />
                            </td>
                            <td><input type='text' name='email'
                                value={employee.email} onChange={(handleChange)} />
                            </td>
                            <td><input type='text' name='role'
                                value={employee.role} onChange={(handleChange)} />
                            </td>
                            <td><button onClick={() =>setIsvisisble(!isVisible)}>View</button></td>
                        </tr>
                    </tbody>
                </table>

                {isVisible && <div className='model-wrapper'>
                    <div className='form'>
                        <form>

                            <div>
                                <div> <label>Emp ID</label>
                                    <input value={employee.empId} />
                                </div>
                                <div> <label>First Name</label>
                                    <input type='' value={employee.firstname} />
                                </div>
                                <div> <label>Last Name</label>
                                    <input type='' value={employee.lastname} />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input type='' value={employee.email} />
                                </div>
                                <div>
                                    <label>Role</label>
                                    <input type='' value={employee.role} />
                                </div>
                                <div className='btn'>
                                    <button id='button'>close</button>
                            
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                }
            </div>
        </div>
    )
}

export default Task3
