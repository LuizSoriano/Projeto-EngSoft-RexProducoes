import React from 'react'
import './styles.css'
import BuscaImagem from '../BuscaImagem';
import Usuario from '../Usuario';

function Header({id}) {
    return(
        <header>
            <nav>
                <BuscaImagem id={id}/>
                <Usuario id={id}/>
            </nav>
        </header>
    );
}

export default Header;