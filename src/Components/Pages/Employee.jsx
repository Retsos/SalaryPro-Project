import React, { useState, useContext,useRef } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import './Employee.css';
import AfterSubmit from '../Modals/AfterSubmit';

export default function Employee() {

    const [showModal2, setShowModal2] = useState(false);
    const { setYpalliloi } = useContext(EmployeeContext);
    const [name, setName] = useState("");
    const [epitheto, setEpitheto] = useState("");
    const [code, setCode] = useState("");
    const [isMarried, setIsMarried] = useState(false);
    const [OnomaSizigoy, setOnomaSizigoy] = useState("");
    const [EpithetoSizigoy, setEpithetoSizigoy] = useState("");

    const ref =useRef(null);

    function handleAddYpallilos() {
        const NewYpallilos = {
            Yname: name,
            Yepitheto: epitheto,
            Ycode: code
        };
        setYpalliloi(prevYpalliloi => [...prevYpalliloi, NewYpallilos]);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEpithetoChange(event) {
        setEpitheto(event.target.value);
    }

    function handleCodeChange(event) {
        setCode(event.target.value);
    }
    function handleOnomaSizigoyChange(event) {
        setOnomaSizigoy(event.target.value);
    }
    function handleEpithetoSizigoyChange(event) {
        setEpithetoSizigoy(event.target.value);
    }
    function handleMarriedChange(event) {
        setIsMarried(event.target.value === 'Έγγαμος');
        if(isMarried!="Έγγαμος"){
            setEpithetoSizigoy("");
            setOnomaSizigoy("");
        }
    }
    const getDisabledClass = (isEnabled) => (isEnabled ? '' : 'disabled-field');


    function handleSubmit(event) {
        event.preventDefault();
        if (name && epitheto && code) {
            handleAddYpallilos();
            setName("");
            setEpitheto("");
            setCode("");
            setShowModal2(true);
            ref.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        } else {
            console.log("ERROR");
        }
    }
    return (
        <>
            <div className="content" ref={ref}>
                <div className="container mt-3">
                    <h1 className="text-center">Στοιχεία Εργαζομένου</h1>
                </div>
                <div className="container-fluid">
                    <form onSubmit={handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-6 p-3">
                                <h3>Προσωπικά Στοιχεία</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeName" className="form-label">Όνομα</label>
                                    <input type="text" className="form-control" id="formEmployeeName" placeholder="" required value={name} onChange={handleNameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeSurName" className="form-label">Επίθετο</label>
                                    <input type="text" className="form-control" id="formEmployeeSurName" placeholder="" required value={epitheto} onChange={handleEpithetoChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathername" className="form-label">Όνομα Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathername" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathersurname" className="form-label">Επίθετο Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathersurname" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothername" className="form-label">Όνομα Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothername" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothersurname" className="form-label">Επίθετο Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothersurname" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeGender" className="form-label">Φύλο</label>
                                    <select className="form-select" id="formEmployeeGender">
                                        <option value=""></option>
                                        <option value="male">Άνδρας</option>
                                        <option value="female">Γυναίκα</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAFM" className="form-label">Α.Φ.Μ.</label>
                                    <input type="number" className="form-control" id="formEmployeeAFM" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAMA" className="form-label">A.M.A</label>
                                    <input type="number" className="form-control" id="formEmployeeAMA" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAnapiros" className="form-label">Ανάπηρος</label>
                                    <select className="form-select" id="formEmployeeAnapiros">
                                        <option value=""></option>
                                        <option value="yes">Ναι</option>
                                        <option value="no">Όχι</option>
                                    </select>
                                </div>
                                <h3>Έξτρα Στοιχεία</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeCode" className="form-label">Κωδικός Εργαζομένου</label>
                                    <input type="number" className="form-control" id="formEmployeeCode" required value={code} onChange={handleCodeChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeDateBorn" className="form-label">Ημερομηνία Γέννησης</label>
                                    <input type="date" className="form-control" id="formEmployeeDateBorn" placeholder="" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <h3>Οικογενειακά Στοιχεία</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFAMILY" className="form-label">Οικογενειακή κατάσταση</label>
                                    <select className="form-select" id="formEmployeeFAMILY" value={isMarried} onChange={handleMarriedChange}>
                                        <option value=""></option>
                                        <option value="Έγγαμος">Έγγαμος</option>
                                        <option value="Άγαμος">Άγαμος</option>
                                    </select>
                                </div>
                                <div className={`mb-3 ${getDisabledClass(isMarried)}`}>
                                    <label htmlFor="formEmployeeHUSBANDNAME" className="form-label">Όνομα Συζύγου</label>
                                    <input type="text" className="form-control" id="formEmployeeHUSBANDNAME" value={OnomaSizigoy} onChange={handleOnomaSizigoyChange} placeholder="" disabled={!isMarried} required={isMarried}/>
                                </div>
                                <div className={`mb-3 ${getDisabledClass(isMarried)}`}>
                                    <label htmlFor="formEmployeeHusbandSurname" className="form-label">Επίθετο Συζύγου</label>
                                    <input type="text" className="form-control" id="formEmployeeHusbandSurname" value={EpithetoSizigoy} onChange={handleEpithetoSizigoyChange} placeholder="" disabled={!isMarried} required={isMarried}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChild" className="form-label">Αριθμός παιδιών</label>
                                    <input type="number" className="form-control" id="formEmployeeChild" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildFMY" className="form-label">Αριθμός παιδιών για Φ.Μ.Υ.</label>
                                    <input type="number" className="form-control" id="formEmployeeChildFMY" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildSSE" className="form-label">Αριθμός παιδιών για Σ.Σ.Ε</label>
                                    <input type="number" className="form-control" id="formEmployeeChildSSE" placeholder="" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildAnapira" className="form-label">Αριθμός ανάπηρων παιδιών</label>
                                    <input type="text" className="form-control" id="formEmployeeChildAnapira" placeholder="" />
                                </div>
                                <h3 style={{ marginTop: "60px" }}>Τυπικά Προσόντα</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeEducation" className="form-label">Εκπαίδευση</label>
                                    <select className="form-select" id="formEmployeeEducation">
                                        <option value=""></option>
                                        <option value="Πανεπιστήμιο">Πανεπιστήμιο</option>
                                        <option value="Λύκειο">Λύκειο</option>
                                        <option value="Γυμνάσιο">Γυμνάσιο</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeJob" className="form-label">Ειδικότητα Εργαζομένου</label>
                                    <input type="text" className="form-control" id="formEmployeeJob" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-4 mb-3">
                            <button type="submit" className="btn btn-primary btn-lg">Προσθήκη Νέου Υπαλλήλου</button>
                        </div>
                    </form>
                </div>
            </div>
            <AfterSubmit
                showModal={showModal2}
                setShowModal={setShowModal2}
            />
        </>
    );
}