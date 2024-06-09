import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { ReactComponent as Logo } from '../logo.svg';
import { Avatar } from 'primereact/avatar';
// import { useContext } from 'react';
// import { ModeContext } from '../contexts/MainContext';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const [Buscador, setBuscador] = useState("")
    const navigate = useNavigate()

    const handleBuscador = async () => {
        if (Buscador.trim() !== '') {
          navigate(`/results?param=${Buscador}`); // Aca pasas el parametro que va a levantar via Searcparams
        }
      };

    const items = [
        {
            label: 'Ubicación',
            icon: 'pi pi-map-marker'
        },
        {
            label: 'Ofertas',
            icon: 'pi pi-tags'
        },
        {
            label: 'Supermercado',
            icon: 'pi pi-shop'
        },
        {
            label: 'Moda',
            icon: 'pi pi-shopping-bag'
        },
        {
            label: 'Categorías',
            icon: 'pi pi-th-large',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',                   
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',                 
                },
            ]
        },
        {
            label: 'Ayuda',
            icon: 'pi pi-envelope',
        },
        {
            label: 'Carrito',
            icon: 'pi pi-shopping-cart'
        },
    ];

    const end = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );
    
    return (
        <div>
            <div className='grid bg-orange-500'>
                <div className="col-2 ">
                    <div className="flex flex-row flex-wrap align-items-center justify-content-center text-center p-1 mt-3 text-white font-bold">
                       
                        <a href="/">
                        <Logo className="App-logo"></Logo>
                        </a>

                       
                        <div>
                            TiendaReact
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <div className="text-center p-1 mt-3">
                        {/* <InputText style={{ width: '400px' }} placeholder=" Search" type="text"/> */}
                        <InputText 
                            style={{ width: '400px' }} 
                            placeholder="Buscar productos, marcas y mas..." 
                            type="text" 
                            value={Buscador}
                            onChange={(e) => setBuscador(e.target.value)}
                            onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleBuscador();
                            }
                            }}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="text-center p-3 border-round-sm bg-primary-reverse font-bold ">3</div>
                </div>
            </div>
            <div className="card">
                <Menubar id='navbar' model={items} end={end} />
            </div>
        </div>
    )
}
        