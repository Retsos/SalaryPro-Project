import React, { useState, useContext } from 'react';
import './Wraria.css';
import { EmployeeContext } from './EmployeeProvider';

export default function Wraria() {
    const { Ypalliloi } = useContext(EmployeeContext); // Λήψη των υπαλλήλων από το context
    const [selectedYpallilos, setSelectedYpallilos] = useState(null); // State για την παρακολούθηση του επιλεγμένου υπαλλήλου
    const [wraria, setWraria] = useState({
        Δευτέρα: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Τρίτη: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Τετάρτη: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Πέμπτη: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Παρασκευή: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Σάββατο: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Κυριακή: { Ergasia: "", Wrario: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
    });

    const handleYpallilosChange = (event) => {
        const selectedYpallilos = Ypalliloi.find(ypallilos => ypallilos.Ycode === event.target.value);
        setSelectedYpallilos(selectedYpallilos); // Ενημέρωση του επιλεγμένου υπαλλήλου με όλο το αντικείμενο
    };

    // Δημιουργία επιλογών χρόνου
    const timeOptions = [];
    const startHour = 0; // Ώρα εκκίνησης
    const endHour = 23; // Ώρα λήξης

    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute of ["00", "30"]) {
            const time = `${hour.toString().padStart(2, '0')}:${minute}`; // Διαμόρφωση του χρόνου σε μορφή 00:00
            timeOptions.push(
                <option key={time} value={time}>{time}</option>
            );
        }
    }

    const daysOfWeek = ["Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "Κυριακή"];
    const handleErgasiaChange = (day, value) => {
        setWraria(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                Ergasia: value,
                Wrario: value === "Ρεπό/Ανάπαυση" ? "Ρεπό" : prevState[day].Wrario
            }
        }));
    };

    const handleWrarioChange = (day, value) => {
        ResetTime(day);
    
        setWraria(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                Wrario: value
            }
        }));
    };
    
    
    const ResetTime=(day)=>{
        setWraria(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                WrarioApo1: "", 
                WrarioEws1: "", 
                WrarioApo2: "", 
                WrarioEws2: "", 
            }
        }));
    }

    const handleTimeChange = (day, field, value) => {
        setWraria(prevState => {
            const updatedDay = {
                ...prevState[day],
                [field]: value,
            };
    
            // Αν το ωράριο είναι "Συνεχόμενο", τότε υπολογίζουμε το τέλος της εργασίας (8 ώρες διαφορά)
            if (updatedDay.Wrario === "Συνεχόμενο" && field === 'WrarioApo1') {
                const [startHour, startMinute] = value.split(':');
                let endHour = parseInt(startHour) + 8; // Προσθέτουμε 8 ώρες
                if (endHour >= 24) endHour -= 24; // Αν ξεπεράσει τις 24 ώρες, επιστρέφουμε στην αρχή
                const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute}`;
                updatedDay.WrarioEws1 = endTime;
            }
    
            // Αν το ωράριο είναι "Σπαστό", τότε υπολογίζουμε την ώρα για τα πεδία με 4 ώρες διαφορά
            if (updatedDay.Wrario === "Σπαστό") {
                if (field === 'WrarioApo1') {
                    const [startHour, startMinute] = value.split(':');
                    let endHour1 = parseInt(startHour) + 4; // Προσθέτουμε 4 ώρες για το πρώτο διάστημα
                    if (endHour1 >= 24) endHour1 -= 24;
                    const endTime1 = `${endHour1.toString().padStart(2, '0')}:${startMinute}`;
                    updatedDay.WrarioEws1 = endTime1;
                } else if (field === 'WrarioApo2') {
                    const [startHour, startMinute] = value.split(':');
                    let endHour2 = parseInt(startHour) + 4; // Προσθέτουμε 4 ώρες για το δεύτερο διάστημα
                    if (endHour2 >= 24) endHour2 -= 24;
                    const endTime2 = `${endHour2.toString().padStart(2, '0')}:${startMinute}`;
                    updatedDay.WrarioEws2 = endTime2;
                }
            }
            
    
            return {
                ...prevState,
                [day]: updatedDay,
            };
        });
    };
    

    return (
        <>
            <div className="content">
                <div className="container mt-3">
                    <h1 className="text-center" style={{ marginBottom: "5%", marginTop: "3%" }}>Ωράρια Εργαζομένων</h1>
                </div>

                <div className="container mt-3">
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="employee" className="col-form-label">Επιλογή Εργαζομένου</label>
                        </div>
                        <div className="col-auto">
                            <select
                                className="form-select bg-white"
                                id="employee"
                                value={selectedYpallilos ? selectedYpallilos.Ycode : ""}
                                onChange={handleYpallilosChange}
                            >
                                <option value="" disabled>--Επιλέξτε Υπάλληλο--</option>
                                {Ypalliloi.map((ypallilos, index) => (
                                    <option key={index} value={ypallilos.Ycode}>
                                        {ypallilos.Yname} {ypallilos.Yepitheto}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Προβολή του επιλεγμένου υπαλλήλου */}
                {selectedYpallilos && (
                    <div className="container mt-4">
                        <h3 className='text-center'>Πρόγραμμα του {selectedYpallilos.Yname} {selectedYpallilos.Yepitheto}</h3>
                    </div>
                )}

                <table className="table custome-table">
                    <thead>
                        <tr>
                            <th scope="col">Ημερομηνία</th>
                            <th scope="col">Ημέρα</th>
                            <th scope="col">Ανάλυση Τύπου Εργασίας</th>
                            <th scope="col">Ωράριο Εργασίας</th>
                            <th scope="col">Εργασία1 από</th>
                            <th scope="col">Εργασία1 έως</th>
                            <th scope="col">Εργασία2 από</th>
                            <th scope="col">Εργασία2 έως</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {daysOfWeek.map((day) => (
                            <tr key={day}>
                                <th>
                                    <input type="text" className="form-control bg-white" placeholder="" required />
                                </th>
                                <td>{day}</td>
                                <td>
                                    <select className="form-select bg-white" value={wraria[day].Ergasia} onChange={(e) => handleErgasiaChange(day, e.target.value)}>
                                        <option value="" disabled>--Επιλέξτε--</option>
                                        <option value="Εργασία">Εργασία</option>
                                        <option value="Ρεπό/Ανάπαυση">Ρεπό/Ανάπαυση</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select bg-white" value={wraria[day].Wrario} onChange={(e) => handleWrarioChange(day, e.target.value)}>
                                        <option value="" disabled>--Επιλέξτε--</option>
                                        <option value="Ρεπό" disabled={wraria[day].Ergasia !== "Ρεπό/Ανάπαυση"}>Ρεπό</option>
                                        <option value="Συνεχόμενο" disabled={wraria[day].Ergasia !== "Εργασία"}>Συνεχόμενο</option>
                                        <option value="Σπαστό" disabled={wraria[day].Ergasia !== "Εργασία"}>Σπαστό</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select bg-white" value={wraria[day].WrarioApo1} onChange={(e) => handleTimeChange(day, 'WrarioApo1', e.target.value)} disabled={wraria[day].Ergasia !== "Εργασία"}>
                                        {timeOptions}
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select bg-white" value={wraria[day].WrarioEws1} onChange={(e) => handleTimeChange(day, 'WrarioEws1', e.target.value)} disabled={wraria[day].Ergasia !== "Εργασία"}>
                                        {timeOptions}
                                    </select>
                                </td>
                                <td>
                                    <select className={`form-select bg-white ${wraria[day].Wrario === "Συνεχόμενο" ? 'disabled-fields' : ''}`} value={wraria[day].WrarioApo2} onChange={(e) => handleTimeChange(day, 'WrarioApo2', e.target.value)} disabled={wraria[day].Ergasia !== "Εργασία" || wraria[day].Wrario === "Συνεχόμενο"}>
                                        {timeOptions}
                                    </select>
                                </td>
                                <td>
                                    <select className={`form-select bg-white ${wraria[day].Wrario === "Συνεχόμενο" ? 'disabled-fields' : ''}`} value={wraria[day].WrarioEws2} onChange={(e) => handleTimeChange(day, 'WrarioEws2', e.target.value)} disabled={wraria[day].Ergasia !== "Εργασία" || wraria[day].Wrario === "Συνεχόμενο"}>
                                        {timeOptions}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
