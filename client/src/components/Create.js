import React from "react";
import { useState } from "react";
/* Styles */
import '../styles/create.css'
/* Imgs */
import Sparky from '../assets/icons/sparky.png'

const Create = () => {
    /* Form state */
    const [state, setState] = useState({
        name: '',
        height: '',
        weight: '',
        lifeExp: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setState({ ...state, [name]: value })
        console.log('Hubo un cambio')
    }
    console.log(state)
    return (
        <div className='container' >
            <div className='imgContainer'>
                <img src={Sparky} alt="Viktor´'s Dog (Frankenwene)" />
            </div>
            <div className='form'>
                <h2>CREATE DOG</h2>
                <form >
                    {/* Name */}
                    <span>Name</span>
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
                    {/* Min/Max height */}
                    <span>Min/Max height</span><br />
                    <label>
                        <input
                            id='height'
                            type='text'
                            name='height'
                            placeholder='Min - Max '
                            value={state.minHeight}
                            onChange={handleChange}
                        />
                    </label><br />
                    {/* Min/Max Weight */}
                    <span>Min/Max weight</span><br />
                    <label>
                        <input
                            id='weight'
                            type='text'
                            name='weight'
                            placeholder='Min - Max'
                            value={state.minWeight}
                            onChange={handleChange}
                        />
                    </label><br />
                    {/* Life Expectancy */}
                    <span>Life Expectancy</span><br />
                    <label>
                        <input
                            id='lifeExp'
                            name='lifeExp'
                            type='text'
                            placeholder='Life Expectancy'
                            value={state.lifeExp}
                            onChange={handleChange} />
                    </label><br />
                    <button className='bttn' >
                        Create
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Create