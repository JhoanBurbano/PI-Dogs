import React from "react";
import { useState } from "react";
/* Styles */
import '../styles/create.css'
/* Imgs */
import Sparky from '../assets/icons/sparky.png'

export default function Create(){
    return (
        <div className='container' >
        <div className='imgContainer'>
            <img src={Sparky} alt="Viktor´'s Dog (Frankenwene)"/>
        </div>
        <div className='form'>
            <h2>CREATE DOG</h2>
            <form >
                <label>
                Name<br/>
                    <input 
                    className='firstInput'
                    id='Name'
                    type='text'
                    name='Name'
                    placeholder='Name'
                    />
                </label>
                <label>
                Min/Max height<br/>
                    <input 
                    id='minHeight'
                    type='number'
                    name='minHeight'
                    min='0'
                    placeholder='Minimum height'
                    />
                </label>
                <label className='columninput'>
                    <input 
                    id='maxHeight'
                    type='number'
                    name='maxHeight'
                    min='0'
                    max='1000'
                    placeholder='Max Height'
                    />
                </label><br/>
                <label>
                Min/Max weight<br/>
                    <input 
                    id='minWeight'
                    type='Number'
                    name='minWeight'
                    min='0'
                    placeholder='Minimum weight'
                    />
                </label>
                <label className='columninput'>
                    <input 
                    id='maxWeight'
                    type='Number'
                    name='maxWeight'
                    min='0'
                    max='1000'
                    placeholder='Max Weight'
                    />
                </label><br/>
                <label>
                Life expectancy<br/>
                    <input 
                    id='LifeExpect'
                    type='number'
                    name='LifeExpect'
                    placeholder='LifeExpect'
                    min='0'
                    />
                </label><br/>
                <button className='bttn' >
                    Create 
                </button>
            </form>
        </div>
        </div>
    )
}
