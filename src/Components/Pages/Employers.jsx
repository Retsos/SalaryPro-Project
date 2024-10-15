import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import EidosDiagrafis from '../Modals/EidosDiagrafis';
import DataChange from '../Modals/DataChange.jsx';
import './Employers.css';

export default function Employers() {
    const { Ypalliloi, setYpalliloi } = useContext(EmployeeContext);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);



    const getDate = () => {

        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Προσθέτει +1 γιατί οι μήνες ξεκινάνε από 0
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }

    const handleDeleteClick = (index) => {
        setSelectedIndex(index);
        setShowModal(true);
    };

    const handleChangeClick = (index) => {
        setSelectedIndex(index);
        setShowModal2(true);
    };
    const handleConfirmDelete = () => {
        if (selectedIndex !== null) {
            setYpalliloi(Ypalliloi.filter((_, i) => i !== selectedIndex));
            setSelectedIndex(null);
        }
    };

    const selectedYpallilos = selectedIndex !== null ? Ypalliloi[selectedIndex] : null;

    return (
        <>
            <div className="content">
                <table className="table custome-table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ημερομηνία Δημιουργίας</th>
                            <th scope="col">Κωδικός</th>
                            <th scope="col">Όνομα</th>
                            <th scope="col">Επίθετο</th>
                            <th scope="col">Διαγραφές</th>
                            <th scope="col">Επεξεργασία</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Ypalliloi.map((ypallilos, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{getDate()}</td>
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
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleChangeClick(index)}
                                    >
                                        Λεπτομέρειες
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
            <DataChange
                showModal2={showModal2}
                setShowModal2={setShowModal2}
                ypallilos={selectedYpallilos} // Πέρασμα του επιλεγμένου υπαλλήλου
            />
        </>
    );
}