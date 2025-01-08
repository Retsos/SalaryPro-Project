import React from 'react';
import Slider from 'react-slick';
import logo from '../Navbar/logo.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function SampleSlider() {
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="slick-arrow slick-prev"
            onClick={onClick}
            style={{ background: "transparent", border: "none", cursor: "pointer",marginLeft: "0.8rem" }}
        >
            <FaArrowLeft style={{ color: "#007bff", fontSize: "24px" }} />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            className="slick-arrow slick-next"
            onClick={onClick}
            style={{ background: "transparent", border: "none", cursor: "pointer",marginRight: "1rem" }}
        >
            <FaArrowRight style={{ color: "#007bff", fontSize: "24px" }} />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200, // Desktop
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const packages = [
        { title: 'SalaryPro Light', description: 'Για εταιρείες μέχρι 10 υπαλλήλων.' },
        { title: 'SalaryPro Basic', description: 'Για εταιρείες μέχρι 30 υπαλλήλων.' },
        { title: 'SalaryPro Plus', description: 'Για εταιρείες μέχρι 50 υπαλλήλων. ' },
        { title: 'SalaryPro Pro', description: 'Για εταιρείες μέχρι 70 υπαλλήλων. ' },
        { title: 'SalaryPro Enterprise', description: 'Για εταιρείες με περισσότερους από 100 υπαλλήλους.' },
    ];

    const renderPackage = (pkg, index) => (
        <div key={index} className="p-2">
            <div className="card text-center" style={{ width: '16rem', margin: 'auto' }}>
                <img src={logo} className="card-img-top" alt={pkg.title} />
                <div className="card-body">
                    <h5 className="card-title text-decoration-underline">{pkg.title}</h5>
                    <p className="card-text">{pkg.description}</p>
                    <button className="btn btn-custom-primary">Επιλογή</button>
                </div>
            </div>
        </div>
    );

    return (
        <Slider {...settings}>
            {packages.map(renderPackage)}
        </Slider>
    );
}