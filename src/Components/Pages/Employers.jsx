import React, { useState,useContext } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import EidosDiagrafis  from '../Modals/EidosDiagrafis';
import './Employers.css'

export default function Employers() {
    const { Ypalliloi, setYpalliloi } = useContext(EmployeeContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleDeleteClick = (index) => {
        setSelectedIndex(index);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (selectedIndex !== null) {
            setYpalliloi(Ypalliloi.filter((_, i) => i !== selectedIndex));
            setSelectedIndex(null);
        }
    };
    return (
        <>
            <div className="content">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Κωδικός</th>
                            <th scope="col">Όνομα</th>
                            <th scope="col">Επίθετο</th>
                            <th scope="col">Διαγραφές</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ypalliloi.map((ypallilos, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{ypallilos.Ycode}</td>
                                <td>{ypallilos.Yname}</td>
                                <td>{ypallilos.Yepitheto}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDeleteClick(index)}
                                    >
                                        Διαγραφή
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <EidosDiagrafis
                showModal={showModal}
                setShowModal={setShowModal}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
}