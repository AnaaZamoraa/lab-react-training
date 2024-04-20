import React from 'react';
import './CreditCard.css';
import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/mastercard.png'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const logo = (type === 'Visa') ? Visa : MasterCard;
    return (
        <div className='CreditCard' style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <img className='cardLogo' src={logo} alt='Bank logo'/>
            <p className='cardNumber'>•••• •••• •••• {number.slice(-4)}</p>
            <div className='cardInfo'>Expires {expirationMonth}/{expirationYear}{bank}</div>
            <div className='cardInfo'>{owner}</div>
        </div>
    )
}

export default CreditCard