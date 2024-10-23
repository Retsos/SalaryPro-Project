import React, { useState, useContext } from 'react';
import './Wraria.css';
import { EmployeeContext } from './EmployeeProvider';
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';
import { BsExclamationCircleFill } from "react-icons/bs";

export default function Wraria() {
    const { Ypalliloi } = useContext(EmployeeContext);
    const [selectedYpallilos, setSelectedYpallilos] = useState(null);
    const initialWraria = {
        Δευτέρα: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Τρίτη: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Τετάρτη: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Πέμπτη: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Παρασκευή: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Σάββατο: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
        Κυριακή: { Ergasia: "", Wrario: "", WresErgasias: "", WrarioApo1: "", WrarioEws1: "", WrarioApo2: "", WrarioEws2: "" },
    };
    const [wraria, setWraria] = useState(initialWraria);

    const handleYpallilosChange = (event) => {
        const selectedYpallilos = Ypalliloi.find(ypallilos => ypallilos.Ycode === event.target.value);
        setSelectedYpallilos(selectedYpallilos);
        setWraria(initialWraria);
    };

    const timeOptions = [];
    const startHour = 0;
    const endHour = 23;

    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute of ["00", "30"]) {
            const time = `${hour.toString().padStart(2, '0')}:${minute}`;
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

    const ResetTime = (day) => {
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
            if (updatedDay.Wrario === "Συνεχόμενο" && field === 'WrarioApo1') {
                const [startHour, startMinute] = value.split(':');
                let endHour = parseInt(startHour) + 8;
                if (endHour >= 24) endHour -= 24;
                const endTime = `${endHour.toString().padStart(2, '0')}:${startMinute}`;
                updatedDay.WrarioEws1 = endTime;
            }
            if (updatedDay.Wrario === "Σπαστό") {
                if (field === 'WrarioApo1') {
                    const [startHour, startMinute] = value.split(':');
                    let endHour1 = parseInt(startHour) + 4;
                    if (endHour1 >= 24) endHour1 -= 24;
                    const endTime1 = `${endHour1.toString().padStart(2, '0')}:${startMinute}`;
                    updatedDay.WrarioEws1 = endTime1;
                } else if (field === 'WrarioApo2') {
                    const [startHour, startMinute] = value.split(':');
                    let endHour2 = parseInt(startHour) + 4;
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

    const exportExcel = () => {
        const table = document.getElementById('my-table');
        const workbook = XLSX.utils.table_to_book(table, { sheet: 'Sheet1' });
        XLSX.writeFile(workbook, 'wraria.xlsx');
    };

    const pdfRef = React.createRef();

    const handlePdfExport = () => {
        const pdfElement = pdfRef.current;
    
        // Clone the element to manipulate without changing the original
        const clonedElement = pdfElement.cloneNode(true);
    
        // Replace inputs and selects with their values
        clonedElement.querySelectorAll('input, select').forEach(element => {
            const textValue = document.createTextNode(element.value || '-');
            element.replaceWith(textValue);
        });
    
        const opt = {
            margin: 0.5,
            filename: 'wraria.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from(clonedElement).set(opt).save();
    };
    

    return (
        <>
            <div className="content" style={{marginBottom: "2%"}}>
                <div className="container mt-3">
                    <h1 className="text-center" style={{ marginBottom: "5%" }}>Ωράρια Εργαζομένων</h1>
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
                    <div className="container mt-2" >
                        <h3 className='text-center' id='DisplayEmployee'>Πρόγραμμα του {selectedYpallilos.Yname} {selectedYpallilos.Yepitheto}</h3>
                    </div>
                )}


                {/* Γραμμή εργαλείων */}
                <div className="toolbar mb-3 text-center my-toolbar d-flex justify-content-between align-items-center" style={{ border: "2px solid grey", padding: "0.5%", width: "95%", marginBottom: "0", marginLeft: "2.5%" }}>
                    <div style={{ flex: 1 }}></div> {/* Empty div to push buttons to the center */}

                    <div>
                        <button type="button" className='btn btn-secondary' onClick={() => window.print()}>Εκτύπωση</button>
                        <button type="button" className="btn btn-success mx-2" onClick={exportExcel}>Εξαγωγή σε Excel</button>
                        <button type="button" className="btn btn-danger mx-2" onClick={handlePdfExport}>Εκτύπωση σε PDF</button>
                    </div>

                    <div style={{ flex: 1, textAlign: 'right', position: 'relative',marginRight: "1%" }}>
                        <BsExclamationCircleFill size={20} color='red' title='Τα προγραμματα αποθηκεύονται έως και 2 χρόνια' />
                    </div>
                </div>

                {/* Ο πίνακας */}

                <div ref={pdfRef} id="my-table" style={{ marginTop: "20px" }}>
                    <table id="my-table" className="table custome-table">
                        <thead>
                            <tr>
                                <th scope="col" className='thimerominia'>Ημερομηνία</th>
                                <th scope="col" className='thmera'>Ημέρα</th>
                                <th scope="col">Ανάλυση Τύπου Εργασίας</th>
                                <th scope="col" style={{ width: '150px' }}>Ωράριο Εργασίας</th>
                                <th scope="col" className='thwresErg' style={{ width: '130px' }}>Ώρες Εργασίας</th>
                                <th scope="col" className='time'>Εργασία1 από</th>
                                <th scope="col" className='time'>Εργασία1 έως</th>
                                <th scope="col" className='time'>Εργασία2 από</th>
                                <th scope="col" className='time'>Εργασία2 έως</th>
                            </tr>
                        </thead>
                        <tbody>
                            {daysOfWeek.map((day) => (
                                <tr key={day}>
                                    <th>
                                        <input type="date" className="form-control bg-white" placeholder="" required />
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
                                        <div className='wres'>
                                            <input type="number" className="form-control bg-white" />
                                        </div>
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
                <div className="text-center mt-4 mb-3" >
                    <button type="submit" className="btn btn-primary btn-lg">Αποθήκευση</button>
                </div>
            </div>
        </>
    );
}