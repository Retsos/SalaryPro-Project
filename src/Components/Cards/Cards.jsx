import logo from '../Navbar/logo.png';
import './Cards.css'
export default function Cards() {
    return (
        <>
            <div className="container-fluid" style={{ paddingTop: "20px",paddingBottom: "20px" }}>
                <div className='border-top border-bottom border-3 rounded border-black  ' style={{ padding: "20px" }}>
                    <p className='fs-1 text-center'>Πακέτα</p>

                    {/* Πρώτη Σειρά */}
                    <div className="d-flex justify-content-center flex-wrap" style={{ gap: '50px', padding: '0 15px' }}>
                        <div className="card text-center" style={{ width: "16rem" }}>
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-decoration-underline">SalaryPro Light</h5>
                                <p className="card-text">Για εταιρείες μέχρι 10 υπαλλήλων. Ένα απλό και εύχρηστο πακέτο.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card text-center" style={{ width: "16rem" }}>
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-decoration-underline">SalaryPro Basic</h5>
                                <p className="card-text">Για εταιρείες μέχρι 20 υπαλλήλων. Λίγο πιο επεκταμένο πακέτο, κατάλληλο για μικρές επιχειρήσεις.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card text-center" style={{ width: "16rem" }}>
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-decoration-underline">SalaryPro Plus</h5>
                                <p className="card-text">Για εταιρείες μέχρι 30 υπαλλήλων. Προσφέρει περισσότερες δυνατότητες και επιλογές.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/* Δεύτερη Σειρά */}
                    <div className="d-flex justify-content-center flex-wrap" style={{ gap: '50px', padding: '20px 15px' }}>
                        <div className="card text-center" style={{ width: "16rem" }}>
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-decoration-underline">SalaryPro Pro</h5>
                                <p className="card-text">Για εταιρείες μέχρι 50 υπαλλήλων. Επαγγελματικό πακέτο με επιπλέον χαρακτηριστικά.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card text-center" style={{ width: "16rem" }}>
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-decoration-underline">SalaryPro Enterprise</h5>
                                <p className="card-text">Για εταιρείες με περισσότερους από 50 υπαλλήλους. Το πιο πλήρες πακέτο, κατάλληλο για μεγάλες επιχειρήσεις.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}