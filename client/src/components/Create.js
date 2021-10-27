import React from "react";
import { useState, useEffect } from "react";
/* Styles */
import '../styles/create.css'
/* Imgs */
import Sparky from '../assets/icons/sparky.png'
/* React Redux */
import { connect } from 'react-redux'
import { bringTemperaments, createDog } from "../redux/actions";

const Create = ({ temperaments, bringTemperaments }) => {
    /* Form state */
    const [state, setState] = useState({
        name: '',
        img: 'https://fondosmil.com/fondo/17538.jpg',
        minHeight: '',
        maxHeight: '',
        minWeight: '',
        maxWeight: '',
        lifeExp: '',
        temperament: []
    })
    /* bring Temps */
    useEffect(() => {
        async function bringTemps() {
            const allTemps = await bringTemperaments()
            return allTemps
        };
        bringTemps()
    }, [bringTemperaments])
    /* Change the state */
    const handleChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
    }
    const pushValues = ({ target: { value } }) => {
        if (!state.temperament.includes(value)) {
            setState({
                ...state,
                temperament: [...state.temperament, value]
            })
        }
    }
    const cleanTemps = ({ target: { name } }) => {
        let newTemps = state.temperament.filter(temp => temp !== name)
        setState({
            ...state,
            temperament: newTemps
        })
    }
    const submitDog = () => {
        if (!state.name || !state.minHeight || !state.maxHeight || !state.minWeight || !state.maxWeight || !state.lifeExp || state.temperament.length < 1) {
            return alert('There are empty fields required')
        }
        createDog(state)
    }
    return (
        <div className='container' >
            <div className='imgContainer'>
                <img src={Sparky} alt="Viktor´'s Dog (Frankenwene)" />
            </div>
            <div className='form'>
                <h2>CREATE DOG</h2>
                <div className='boxContainer' >
                    <div className='box1' >
                        {/* Name */}
                        <span>Name</span>
                        {!state.name ? (<span className='info' >Name is required</span>) 
                            : !state.name.match(/^[A-Za-z ]+$/) ? (<span className='info' >Name can not contains Numbers</span>)
                            : null}
                        <label>
                            <input
                                className='firstInput'
                                id='name'
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={state.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                id='img'
                                type='text'
                                name='img'
                                placeholder='Url imagen'
                                value={state.img}
                                onChange={handleChange}
                            />
                        </label>
                        {/* Min/Max height */}
                        <span>Min/Max height</span>
                        {!state.minHeight && !state.maxHeight ? (<span className='info' >Min and Max Height is required</span>) 
                            : !state.minHeight ? (<span className='info' >Min Height is required</span>)
                            : !state.maxHeight ? (<span className='info' >Max Height is required</span>)
                            : state.minHeight > state.maxHeight ? (<span className='advise' >Max height should be greater than Min height</span>)
                            : <span className='info2' >{state.minHeight} - {state.maxHeight}</span>}
                        <label>
                            <input
                                id='minH'
                                type='number'
                                name='minHeight'
                                min='0'
                                placeholder='Min Height'
                                value={state.minH}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                id='maxH'
                                type='number'
                                name='maxHeight'
                                min='0'
                                placeholder='Max Height'
                                value={state.maxH}
                                onChange={handleChange}
                            />
                        </label>
                        {/* Min/Max Weight */}
                        <span>Min/Max weight</span>
                        {!state.minWeight && !state.maxWeight ? (<span className='info' >Min and Max Weight is required</span>) 
                            : !state.minWeight ? (<span className='info' >Min Weight is required</span>)
                            : !state.maxWeight ? (<span className='info' >Max Weight is required</span>)
                            : state.minWeight > state.maxWeight ? (<span className='advise' >Max Weight should be greater than Min Weight</span>)
                            : <span className='info2' >{state.minWeight} - {state.maxWeight}</span>}
                        <label>
                            <input
                                id='minW'
                                type='number'
                                name='minWeight'
                                min='0'
                                placeholder='Min Weight'
                                value={state.minW}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                id='maxW'
                                name='maxWeight'
                                type='number'
                                placeholder='Max Weight'
                                min='0'
                                value={state.maxW}
                                onChange={handleChange}
                            />
                        </label>
                        {/* Life Expectancy */}
                        <span>Life Expectancy</span>
                        {!state.lifeExp ? (<span className='info' >LifeExp is required</span>) 
                            : <br />}
                        <label>
                            <input
                                id='lifeExp'
                                name='lifeExp'
                                type='number'
                                min='0'
                                placeholder='Life Expectancy'
                                value={state.lifeExp}
                                onChange={handleChange} />
                        </label><br />
                        <span>Add Temperament</span>
                        {state.temperament.lenght ? (<span></span>)
                            : (<span className='info' >Should have at least one temperament</span>)}
                        <select onChange={pushValues} defaultValue='addTemp' name='temperament' placeholder='Add Temperament'>
                            <option value='addTemp' disabled>Add Temperament</option>
                            {temperaments.map(temp => (<option value={temp.name} name={temp.name} key={temp.id} >{temp.name}</option>))}
                        </select>
                        <button className='bttn' onClick={submitDog} >
                            Create
                        </button>
                    </div>
                    <div className='box2' >
                        <div className='boxTemps'>
                            {state.temperament.map(temp => (<div className='divPerTemp'>
                                <button onClick={cleanTemps} name={temp}>X</button>
                                <span>{temp}</span>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ temperaments }) => ({
    temperaments
})

export default connect(mapStateToProps, { bringTemperaments })(Create)