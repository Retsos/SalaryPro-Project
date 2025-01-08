import React, { useRef } from 'react';
import './Employee2.css';
import Sidebar from '../../Navbar/Sidebar';
import {  useNavigate } from 'react-router-dom';

export default function Employee2() {

    const navigate = useNavigate();

    const GoBack=()=>{
        navigate('/Employee');

    }
    const ref = useRef(null);

    return (
        <>
            <Sidebar/>
            <div className="content" ref={ref}>
                <div className="container mt-3">
                    <h1 className="text-center" style={{ marginBottom: "5%",marginTop: "3%" }}>Στοιχεία Νέου Εργαζομένου</h1>
                </div>
                <div className="container-fluid">
                    <form>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 p-3">
                                    <h3>Στοιχεία Διαμονής</h3>
                                    <div className="mb-3">
                                        <label htmlFor="Odos" className="form-label">Οδός Κατοικίας</label>
                                        <input type="text" className="form-control" id="Odos" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="TK" className="form-label">Τ.Κ.</label>
                                        <input type="text" className="form-control" id="TK" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Perifereia" className="form-label">Περιφέρεια</label>
                                        <input type="text" className="form-control" id="Perifereia" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="PerEnotita" className="form-label">Περιφερειακή Ενότητα</label>
                                        <input type="text" className="form-control" id="PerEnotita" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Dimos" className="form-label">Δήμος</label>
                                        <input type="text" className="form-control" id="Dimos" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="DimKoin" className="form-label">Δημοτική Κοινότητα</label>
                                        <input type="text" className="form-control" id="DimKoin" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Thl1" className="form-label">Τηλ.1</label>
                                        <input type="text" className="form-control" id="Thl1" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Thl2" className="form-label">Τηλ.2</label>
                                        <input type="text" className="form-control" id="Thl12" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="Email" placeholder="" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="DOY" className="form-label">Δ.Ο.Υ.</label>
                                        <input type="text" className="form-control" id="DOY" placeholder="" />
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 p-3">
                                    <h3>Λοιπά Στοιχεία Πρόσληψης</h3>
                                    <div className="mb-3">
                                        <label htmlFor="1hForaMisthos" className="form-label">1η Φορά ως Μισθωτός</label>
                                        <select className="form-select bg-white" id="1hForaMisthos">
                                            <option value="" disabled selected>--Επιλέξτε--</option>
                                            <option value="No">Όχι</option>
                                            <option value="Yes">Ναι</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Apasxolisi" className="form-label">Καθεστώς Απασχόλησης</label>
                                        <select className="form-select bg-white" id="Apasxolisi">
                                            <option value="" disabled selected>--Επιλέξτε--</option>
                                            <option value="Meriki">Μερική</option>
                                            <option value="Pliris">Πλήρης</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Ergasia" className="form-label">Σχέση Εργασίας</label>
                                        <input type="text" className="form-control bg-white" id="Ergasia" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Paramethwrio" className="form-label">Εργασία σε Παραμεθόριο</label>
                                        <input type="text" className="form-control" id="Paramethwrio" />
                                    </div>
                                    <div className="row" style={{marginTop: "-1rem"}}>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="JeniXwra" className="form-label">Ήρθε από Ξένη Χώρα</label>
                                            <select className="form-select bg-white" id="JeniXwra">
                                                <option value="" disabled selected>--Επιλέξτε--</option>
                                                <option value="Όχι">Όχι</option>
                                                <option value="Ναι">Ναι</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="JeniXwra-Poia" className="form-label">Ποιά</label>
                                            <input type="text" className="form-control" id="JeniXwra-Poia" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: "-1rem"}}>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="Prosonta" className="form-label">Πρόσθετα Προσόντα</label>
                                            <input type="text" className="form-control" id="Prosonta" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="Prosonta-Poia" className="form-label">Άλλο</label>
                                            <input type="text" className="form-control" id="Prosonta-Poia" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="row" style={{marginTop: "-1rem"}}>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="Programma?" className="form-label">Τοποθέτηση με Πρόγραμμα</label>
                                            <select className="form-select bg-white" id="Programma?">
                                                <option value="" disabled selected>--Επιλέξτε--</option>
                                                <option value="Όχι">Όχι</option>
                                                <option value="Ναι">Ναι</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="Programma?-Poio" className="form-label">Ποιό</label>
                                            <input type="text" className="form-control" id="Programma?-Poio" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="mb-3" style={{marginTop: "0.5rem"}}>
                                        <label htmlFor="EpidomAnergias" className="form-label">Παίρνει Επιδ. Ανεργ. ΟΑΕΔ</label>
                                        <select className="form-select bg-white" id="EpidomAnergias">
                                            <option value="" disabled selected>--Επιλέξτε--</option>
                                            <option value="Έγγαμος">Όχι</option>
                                            <option value="Άγαμος">Ναι</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 className='text-center' style={{ marginTop: "2%", marginBottom: "-1.5%", borderTop: "1px solid black", paddingTop: "2%" }}>Στοιχεία Καταγωγής</h3>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="Ithageneia" className="form-label">Ιθαγένεια</label>
                                    <input type="text" className="form-control" id="Ithageneia" placeholder="" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="Ypikoos" className="form-label">Υπήκοος</label>
                                    <input type="text" className="form-control" id="Ypikoos" placeholder="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="ToposGennisis" className="form-label">Τόπος Γέννησης</label>
                                    <input type="text" className="form-control" id="ToposGennisis" placeholder="" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="Dimotis" className="form-label">Δημότης (Πόλη)</label>
                                    <input type="text" className="form-control" id="Dimotis" placeholder="" />
                                </div>
                            </div>
                        </div>        
                        <div className="btngroup">
                            <button
                                type="button"
                                className="buttonleft btn  btn-md"
                                onClick={GoBack} 
                            >
                                Πίσω
                            </button>
                            <button
                                type="submit" 
                                className="buttonright btn btn-lg"
                            >
                                Δημιουργία
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}