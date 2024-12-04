import React from "react";

export const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.imageURL} className="card-img-top" alt={props.imageAlt}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: 'Jhon Doe',
    descripcion: "kdnclasdnbfcnoksaudbncasjnajndljandlaidnoaindlakdmalk",
    imageURL: 'https://randomuser.me/api/portraits/men/23.jpg',
    imageAlt: 'Photo Jhon Doe'
  }