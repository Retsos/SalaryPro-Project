import React, { useState, useContext, useRef } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import './Employee.css';
import AfterSubmit from '../Modals/AfterSubmit';

export default function Employee() {

    const [showModal2, setShowModal2] = useState(false);
    const { setYpalliloi } = useContext(EmployeeContext);
    const [name, setName] = useState("");
    const [epitheto, setEpitheto] = useState("");
    const [code, setCode] = useState("");
    const [fathername, setfathername] = useState("");
    const [mothername, setmothername] = useState("");
    const [surfathername, setsurfathername] = useState("");
    const [surmothername, setsurmothername] = useState("");
    const [gender, setgender] = useState("");
    const [AFM, setAFM] = useState("");
    const [AMA, setAMA] = useState("");
    const [anapiros, setanapiros] = useState("");
    const [dateborn, setdateborn] = useState("");
    const [children, setchildren] = useState("");
    const [childrenFMY, setchildrenFMY] = useState("");
    const [childrenSSE, setchildrenSSE] = useState("");
    const [Education, setEducation] = useState("");
    const [Job, setJob] = useState("");
    const [IdType, setIdType] = useState("");
    const [IdNumber, setIdNumber] = useState("");
    const [IdDate, setIdDate] = useState("");
    const [IdPlace, setIdPlace] = useState("");
    const [childrenANAPIRA, setchildrenANAPIRA] = useState("");
    const [isMarried, setIsMarried] = useState("");
    const [OnomaSizigoy, setOnomaSizigoy] = useState("");
    const [EpithetoSizigoy, setEpithetoSizigoy] = useState("");

    const ref = useRef(null);

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
    function handleFathernameChange(event) {
        setfathername(event.target.value);
    }
    function handleFatherSurnameChange(event) {
        setfathername(event.target.value);
    }
    function handleMothernameChange(event) {
        setmothername(event.target.value);
    }
    function handleMotherSurnameChange(event) {
        setmothername(event.target.value);
    }
    function handleGenderChange(event) {
        setgender(event.target.value);
    }
    function handleAFMChange(event) {
        setAFM(event.target.value);
    }
    function handleAMAChange(event) {
        setAMA(event.target.value);
    }
    function handleAnapirosChange(event) {
        setanapiros(event.target.value);
    }
    function handleDateBornChange(event) {
        setdateborn(event.target.value);
    }
    function handleChildrenChange(event) {
        setchildren(event.target.value);
    }
    function handleChildrenFMYChange(event) {
        setchildrenFMY(event.target.value);
    }
    function handleChildrenSSEChange(event) {
        setchildrenSSE(event.target.value);
    }
    function handleChildrenANAPIRAChange(event) {
        setchildrenANAPIRA(event.target.value);
    }
    function handleEducationChange(event) {
        setEducation(event.target.value);
    }
    function handleJobChange(event) {
        setJob(event.target.value);
    }
    function handleIdTypeChange(event) {
        setIdType(event.target.value);
    }
    function handleIdNumberChange(event) {
        setIdNumber(event.target.value);
    }
    function handleIdDateChange(event) {
        setIdDate(event.target.value);
    }
    function handleIdPlaceChange(event) {
        setIdPlace(event.target.value);
    }
    function handleMarriedChange(event) {
        const value = event.target.value;
        setIsMarried(value);
        if (value === "Άγαμος") {
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
                    <h1 className="text-center" style={{ marginBottom: "5%",marginTop: "3%" }}>Στοιχεία Νέου Εργαζομένου</h1>
                </div>
                <div className="container-fluid">
                    <form onSubmit={handleSubmit}>
                        <div className="row justify-content-center">

                            <div className="col-12">
                                <div className="row mb-4">
                                    <div className="col-12 col-md-4 ">
                                        <label htmlFor="formEmployeeName" className="form-label">Όνομα Υπαλλήλου</label>
                                        <input type="text" className="form-control bg-white" id="formEmployeeName" placeholder="" required value={name} onChange={handleNameChange} />
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label htmlFor="formEmployeeSurName" className="form-label">Επίθετο Υπαλλήλου</label>
                                        <input type="text" className="form-control bg-white" id="formEmployeeSurName" placeholder="" required value={epitheto} onChange={handleEpithetoChange} />
                                    </div>
                                    <div className="col-12 col-md-4 code">
                                        <label htmlFor="formEmployeeCode" className="form-label">Κωδικός Υπαλλήλου</label>
                                        <input type="number" className="form-control bg-white" id="formEmployeeCode" required value={code} onChange={handleCodeChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 p-3">
                                <h3>Προσωπικά Στοιχεία</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathername" className="form-label">Όνομα Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathername" placeholder="" value={fathername} onChange={handleFathernameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFathersurname" className="form-label">Επίθετο Πατέρα</label>
                                    <input type="text" className="form-control" id="formEmployeeFathersurname" placeholder="" value={surfathername} onChange={handleFatherSurnameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothername" className="form-label">Όνομα Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothername" placeholder="" value={mothername} onChange={handleMothernameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeMothersurname" className="form-label">Επίθετο Μητέρας</label>
                                    <input type="text" className="form-control" id="formEmployeeMothersurname" placeholder="" value={surmothername} onChange={handleMotherSurnameChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeGender" className="form-label">Φύλο</label>
                                    <select className="form-select bg-white" id="formEmployeeGender" value={gender} onChange={handleGenderChange}>
                                        <option value="" disabled selected>--Επιλέξτε--</option>
                                        <option value="male">Άνδρας</option>
                                        <option value="female">Γυναίκα</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAFM" className="form-label">Α.Φ.Μ.</label>
                                    <input type="number" className="form-control" id="formEmployeeAFM" value={AFM} onChange={handleAFMChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAMA" className="form-label">A.M.A</label>
                                    <input type="number" className="form-control" id="formEmployeeAMA" value={AMA} onChange={handleAMAChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeAnapiros" className="form-label">Ανάπηρος</label>
                                    <select className="form-select bg-white" id="formEmployeeAnapiros" value={anapiros} onChange={handleAnapirosChange}>
                                        <option value="" disabled selected>--Επιλέξτε--</option>
                                        <option value="yes">Ναι</option>
                                        <option value="no">Όχι</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeDateBorn" className="form-label">Ημερομηνία Γέννησης</label>
                                    <input type="date" className="form-control" id="formEmployeeDateBorn" placeholder="" value={dateborn} onChange={handleDateBornChange} />
                                </div>
                            </div>

                            <div className="col-12 col-md-6 p-3">
                                <h3>Οικογενειακά Στοιχεία</h3>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeFAMILYstatus" className="form-label">Οικογενειακή κατάσταση</label>
                                    <select className="form-select bg-white" id="formEmployeeFAMILYstatus" value={isMarried} onChange={handleMarriedChange}>
                                        <option value="" disabled selected>--Επιλέξτε--</option>
                                        <option value="Έγγαμος">Έγγαμος</option>
                                        <option value="Άγαμος">Άγαμος</option>
                                    </select>
                                </div>
                                <div className={`mb-3 ${getDisabledClass(isMarried === "Έγγαμος")}`}>
                                    <label htmlFor="formEmployeeHUSBANDNAME" className="form-label">Όνομα Συζύγου</label>
                                    <input type="text" className="form-control bg-white" id="formEmployeeHUSBANDNAME" value={OnomaSizigoy} onChange={handleOnomaSizigoyChange} placeholder="" disabled={isMarried !== "Έγγαμος"} required={isMarried === "Έγγαμος"} />
                                </div>
                                <div className={`mb-3 ${getDisabledClass(isMarried === "Έγγαμος")}`}>
                                    <label htmlFor="formEmployeeHusbandSurname" className="form-label">Επίθετο Συζύγου</label>
                                    <input type="text" className="form-control bg-white" id="formEmployeeHusbandSurname" value={EpithetoSizigoy} onChange={handleEpithetoSizigoyChange} placeholder="" disabled={isMarried !== "Έγγαμος"} required={isMarried === "Έγγαμος"} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChild" className="form-label">Αριθμός παιδιών</label>
                                    <input type="number" className="form-control" id="formEmployeeChild" value={children} onChange={handleChildrenChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildFMY" className="form-label">Αριθμός παιδιών για Φ.Μ.Υ.</label>
                                    <input type="number" className="form-control" id="formEmployeeChildFMY" value={childrenFMY} onChange={handleChildrenFMYChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildSSE" className="form-label">Αριθμός παιδιών για Σ.Σ.Ε</label>
                                    <input type="number" className="form-control" id="formEmployeeChildSSE" placeholder="" value={childrenSSE} onChange={handleChildrenSSEChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formEmployeeChildAnapira" className="form-label">Αριθμός ανάπηρων παιδιών</label>
                                    <input type="text" className="form-control" id="formEmployeeChildAnapira" placeholder="" value={childrenANAPIRA} onChange={handleChildrenANAPIRAChange} />
                                </div>
                            </div>

                            <div className="col-12">
                                <h3 className='text-center' style={{ marginTop: "2%", marginBottom: "-1.5%", borderTop: "1px solid black", paddingTop: "2%" }}>Στοιχεία Μόρφωσης</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeEducation" className="form-label">Εκπαίδευση</label>
                                        <select className="form-select bg-white" id="formEmployeeEducation" value={Education} onChange={handleEducationChange}>
                                            <option value="" disabled selected>--Επιλέξτε--</option>
                                            <option value="Πανεπιστήμιο">Πανεπιστημιακή</option>
                                            <option value="Λύκειο">Λυκείου</option>
                                            <option value="Γυμνάσιο">Γυμνασίου</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeJob" className="form-label">Ειδικότητα Εργαζομένου</label>
                                        <input type="text" className="form-control" id="formEmployeeJob" placeholder="" value={Job} onChange={handleJobChange} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <h3 className='text-center' style={{ marginTop: "5%", marginBottom: "-1.5%", borderTop: "1px solid black", paddingTop: "2%" }}>Στοιχεία Ταυτότητας</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeId" className="form-label">Είδος Ταυτότητας</label>
                                        <select className="form-select bg-white" id="formEmployeeId" value={IdType} onChange={handleIdTypeChange}>
                                            <option value="" disabled selected>--Επιλέξτε--</option>
                                            <option value="Αστυνομική">Αστυνομική</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeIdNumber" className="form-label">Αριθμός Ταυτότητας</label>
                                        <input type="text" className="form-control" id="formEmployeeIdNumber" placeholder="" value={IdNumber} onChange={handleIdNumberChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeIdDate" className="form-label">Ημερομηνία Έκδοσης</label>
                                        <input type="date" className="form-control" id="formEmployeeIdDate" placeholder="" value={IdDate} onChange={handleIdDateChange} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="formEmployeeIdPlace" className="form-label">Αρχή Έκδοσης</label>
                                        <input type="text" className="form-control" id="formEmployeeIdPlace" placeholder="" value={IdPlace} onChange={handleIdPlaceChange} />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-4 mb-3">
                            <button type="submit" className="btn btn-primary btn-lg">Δημιουργία</button>
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