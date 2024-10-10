import Navbar from './../Navbar/navbar';
import './Contact.css';
import Footer from './../Navbar/Footer'

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="container contact-container">
                <div className="form-container"style={{maxHeight: "85%"}}>
                    <h2>Επικοινωνήστε μαζί μας</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="NameOfPerson" className="form-label">Όνομα</label>
                            <input type="text" className="form-control" id="NameOfPerson" placeholder="πχ. Γιωργος" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="πχ. george@yahoo.com" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Μήνυμα</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Το μήνυμα σας" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btnsent">Αποστολή</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}