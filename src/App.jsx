import './App.css'
import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import Button from "./components/Button.jsx";
import FormInputField from "./components/FormInputField.jsx";
import FruitCounter from "./components/FruitCounter.jsx";
import logo from "./assets/screenshot-logo.png";

function App() {

    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const {register, handleSubmit} = useForm({
        defaultValues: {
            age: 0,
            "delivery-time": "day"
        }
    });

    function handleFormSubmit(formData) {
        console.log({
            ...formData,
            strawberries,
            bananas,
            apples,
            kiwis
        })
    }

    function resetButton() {
        setStrawberries(0)
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    return (
        <>
            <main>
                <h1 className="gradient-text">Fruitmand Bezorgservice</h1>
                <section className="fruit-counter">
                    <FruitCounter
                        fruitName="🍓 Aardbeien"
                        fruit={strawberries}
                        setFruit={setStrawberries}
                    />
                    <FruitCounter
                        fruitName="🍌 Bananen"
                        fruit={bananas}
                        setFruit={setBananas}
                    />
                    <FruitCounter
                        fruitName="🍏 Appels"
                        fruit={apples}
                        setFruit={setApples}
                    />
                    <FruitCounter
                        fruitName="🥝 Kiwi's"
                        fruit={kiwis}
                        setFruit={setKiwis}
                    />
                    <Button
                        type="button"
                        handleClick={() => resetButton()}
                    >Reset</Button>
                </section>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <section className="order-form">
                        <FormInputField
                            inputId="first-name-field"
                            inputLabel="Voornaam"
                            inputType="text"
                            inputName="first-name"
                            register={register}
                        />
                    </section>
                    <section className="order-form">
                        <FormInputField
                            inputId="last-name-field"
                            inputLabel="Achternaam"
                            inputType="text"
                            inputName="last-name"
                            register={register}
                        />
                    </section>
                    <section className="order-form">
                        <FormInputField
                            inputId="age-field"
                            inputLabel="Leeftijd"
                            inputType="number"
                            inputName="age"
                            register={register}
                        />
                    </section>
                    <section className="order-form">
                        <FormInputField
                            inputId="zipcode-field"
                            inputLabel="Postcode"
                            inputType="text"
                            inputName="zipcode"
                            register={register}
                        /></section>
                    <section className="order-form">
                        <label htmlFor="delivery-frequency-field">
                            Bezorgfrequentie
                            <select
                                id="delivery-frequency-field"
                                {...register("delivery-frequency")}
                            >
                                <option value="weekly">Iedere week</option>
                                <option value="bi-weekly">Om de week</option>
                                <option value="monthly">Iedere maand</option>
                            </select>
                        </label>
                    </section>
                    <section className="order-form radio">
                        <label htmlFor="day">
                            <input
                                type="radio"
                                id="day"
                                value="day"
                                name="delivery-time"
                                {...register("delivery-time")}
                            />
                            Overdag
                        </label>
                        <label htmlFor="night">
                            <input
                                type="radio"
                                id="night"
                                value="night"
                                name="delivery-time"
                                {...register("delivery-time")}
                            />
                            's Avonds
                        </label>
                    </section>
                    <section className="order-form">
                        <label htmlFor="message-field">
                            Opmerking
                            <textarea
                                id="message-field"
                                rows="5"
                                cols="40"
                                {...register("message")}
                            ></textarea>
                        </label>
                    </section>
                    <section className="order-form">
                        <label htmlFor="terms-and-conditions-field">
                            <input
                                type="checkbox"
                                id="terms-and-conditions-field"
                                {...register("terms-and-conditions")}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                    </section>
                    <Button type="submit">
                        Verzend
                    </Button>
                </form>
            </main>
        </>
    )
}

export default App
