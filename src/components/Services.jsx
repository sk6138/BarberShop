import React from "react";
import "../css/Services.css";
import AnimatedLink from "./AnimatedLink";


const services = [
    {
      id: 1,
      title: "Classic Haircut",
      description: "Get the perfect haircut to suit your style and personality.",
      price: "₹500",
      img: 'https://i.postimg.cc/NG2P5Pgs/haircut.jpg',
    },
    {
      id: 2,
      title: "Beard Trim",
      description: "Precision trimming to keep your beard sharp and clean.",
      price: "₹300",
      img: 'https://i.postimg.cc/6qZHgTH2/beard.jpg',
    },
    {
      id: 3,
      title: "Royal Shave",
      description: "Luxurious shave for a smooth and refreshing experience.",
      price: "₹400",
      img: 'https://i.postimg.cc/3JgSZ44z/save.jpg',
    },
    {
      id: 4,
      title: "Facial Treatment",
      description: "Rejuvenating facials to keep your skin healthy and glowing.",
      price: "₹700",
      img:'https://i.postimg.cc/wTK4Jcvh/facial.jpg',
    },
    // {
    //   id: 5,
    //   title: "Head Massage",
    //   description: "Relaxing head massages to relieve stress and tension.",
    //   price: "₹350",
    //   img: "https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg",
    // },
    // {
    //   id: 6,
    //   title: "Hair Coloring",
    //   description: "Professional hair coloring to match your desired look.",
    //   price: "₹800",
    //   img: "https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg",
    // },
    // {
    //   id: 7,
    //   title: "Hair Wash & Style",
    //   description: "Complete hair wash and styling for a fresh appearance.",
    //   price: "₹300",
    //   img: "https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Full Grooming Package",
    //   description: "A full grooming session including haircut, shave, and facial.",
    //   price: "₹1500",
    //   img: "https://i.postimg.cc/sggzJR7f/28695080-onlinesupport-1.jpg",
    // },
  ];
const Services = () => {
  return (
   <>
   
      

      {/* Services Section */}
      <div className="custom-services-container ">
      <h1 className="title">Our Premium Services</h1>
      <div className="services-grid ">
        {services.map((service) => (
          <div key={service.id} className="custom-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="card-hover-overlay">
              <h2 >{service.title}</h2>
                <p>{service.description}</p>
                <span className="price">{service.price}</span>
                <button className="servicebook-btn" >
                    Book
                </button>
              </div>
              <h2 id="service-title">{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <section>
        <AnimatedLink/>
    </section>
    </div>
   
    </>
  );
};

export default Services;
