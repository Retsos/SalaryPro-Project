import Navbar from './../Navbar/navbar'
import Footer from './../Navbar/Footer'
import Modal from './../Modals/ModalForm'
import './LoginPage.css'
export default function LoginPage() {

    return (
        <>
            <Navbar/>
            <div className='page'>
                <Modal/>
            </div>
                <Footer/>
        </>
    )
}