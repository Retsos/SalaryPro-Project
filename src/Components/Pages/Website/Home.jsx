import Cards from '../../Cards/Cards';
import Navbar from '../../Navbar/navbar'
import Footer from '../../Navbar/Footer'
export default function Home(){

    return(
        <>           
            <Navbar/>
            <div className='page'>
                <Cards/>
                <Footer/>
            </div>

        </>
    )
}