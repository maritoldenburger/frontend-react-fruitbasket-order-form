import './App.css'
import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import Button from "./components/Button.jsx";
import FormInputField from "./components/FormInputField.jsx";

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
                <h1>Fruitmand bezorgservice</h1>
                <article>
                    <h2>🍓 Aardbeien</h2>
                    <button type="button"
                            disabled={strawberries === 0}
                            onClick={() => setStrawberries(strawberries - 1)}>-
                    </button>
                    <p>{strawberries}</p>
                    <button type="button"
                            onClick={() => setStrawberries(strawberries + 1)}>+
                    </button>
                </article>
                <article>
                    <h2>🍌 Bananen</h2>
                    <button type="button"
                            disabled={bananas === 0}
                            onClick={() => setBananas(bananas - 1)}>-
                    </button>
                    <p>{bananas}</p>
                    <button type="button"
                            onClick={() => setBananas(bananas + 1)}>+
                    </button>
                </article>
                <article>
                    <h2>🍏 Appels</h2>
                    <button type="button"
                            disabled={apples === 0}
                            onClick={() => setApples(apples - 1)}>-
                    </button>
                    <p>{apples}</p>
                    <button type="button"
                            onClick={() => setApples(apples + 1)}>+
                    </button>
                </article>
                <article>
                    <h2>🥝 Kiwi's</h2>
                    <button type="button"
                            disabled={kiwis === 0}
                            onClick={() => setKiwis(kiwis - 1)}>-
                    </button>
                    <p>{kiwis}</p>
                    <button type="button"
                            onClick={() => setKiwis(kiwis + 1)}>+
                    </button>
                </article>
                <article>
                    <Button
                        type="button"
                        handleClick={() => resetButton()}
                    >Reset</Button>
                </article>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <FormInputField
                        inputId="first-name-field"
                        inputLabel="Voornaam"
                        inputType="text"
                        inputName="first-name"
                        register={register}
                    />
                    <FormInputField
                        inputId="last-name-field"
                        inputLabel="Achternaam"
                        inputType="text"
                        inputName="last-name"
                        register={register}
                    />
                    <FormInputField
                        inputId="age-field"
                        inputLabel="Leeftijd"
                        inputType="number"
                        inputName="age"
                        register={register}
                    />
                    <FormInputField
                        inputId="zipcode-field"
                        inputLabel="Postcode"
                        inputType="text"
                        inputName="zipcode"
                        register={register}
                    />
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
                    <div className="delivery-time-field">
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
                    </div>
                    <label htmlFor="message-field">
                        Opmerking
                        <textarea
                            id="message-field"
                            rows="4"
                            cols="40"
                            {...register("message")}
                        ></textarea>
                    </label>
                    <label htmlFor="terms-and-conditions-field">
                        <input
                            type="checkbox"
                            id="terms-and-conditions-field"
                            {...register("terms-and-conditions")}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <Button type="submit">
                        Verzend
                    </Button>
                </form>
            </main>
        </>
    )
}

export default App
