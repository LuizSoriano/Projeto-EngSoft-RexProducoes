import React from "react";
import Festival from '../../images/festival.png'
import Roles from '../../images/roles.png'
import Shows from '../../images/shows.png'
import Todos from '../../images/todos.png'
import {Link} from 'react-router-dom'

function Botao ({id}) {
    return(
        <ul className="homeUl">
            <li className="buttons">
                <button type="button" className="butao">
                    <Link to={`/festivais/${id}`}><img src={Festival} alt="Festivais" /></Link>
                </button>
                <p>FESTIVAIS</p>
            </li>
            <li className="buttons">
                <button type="button" className="butao">
                    <Link to={`/universitarios/${id}`}><img src={Roles} alt="Universitários" /></Link>
                </button>
                <p>UNIVERSITARIOS</p>
            </li>
            <li className="buttons" >
                <button type="button" className="butao">
                    <Link to={`/shows/${id}`}><img src={Shows} alt="Shows" /></Link>
                </button>
                <p>SHOWS</p>
            </li>
            <li className="buttons">
                <button type="button" className="butao">
                    <Link to={`/todos/${id}`}><img src={Todos} alt="Todos" /></Link>
                </button>
                <p>TODOS</p>
            </li>
        </ul>
    );
}

export default Botao;