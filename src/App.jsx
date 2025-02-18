import './App.css'
import React, {useState} from "react";
import {useForm} from 'react-hook-form';

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

    function handleFormSubmit(data) {
        console.log(data);
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
                    <button type="button" onClick={() => resetButton()}>Reset</button>
                </article>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label htmlFor="first-name-field">
                        Voornaam
                        <input
                            type="text"
                            id="first-name-field"
                            {...register("first-name")}
                            // value={firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="last-name-field">
                        Achternaam
                        <input
                            type="text"
                            id="last-name-field"
                            {...register("last-name")}
                            // value={lastName}
                            // onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age-field">
                        Leeftijd
                        <input
                            type="number"
                            id="age-field"
                            {...register("age")}
                            // value={age}
                            // onChange={(e) => setAge(e.target.value)}
                        />
                    </label>
                    <label htmlFor="zipcode-field">
                        Postcode
                        <input
                            type="text"
                            id="zipcode-field"
                            {...register("zipcode")}
                            // value={zipcode}
                            // onChange={(e) => setZipcode(e.target.value)}
                        />
                    </label>
                    <label htmlFor="delivery-frequency-field">
                        Bezorgfrequentie
                        <select
                            id="delivery-frequency-field"
                            {...register("delivery-frequency")}
                            // value={zipcode}
                            // onChange={(e) => setZipcode(e.target.value)}
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
                                // value={zipcode}
                                // onChange={(e) => setZipcode(e.target.value)}
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
                                // value={zipcode}
                                // onChange={(e) => setZipcode(e.target.value)}
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
                            // value={zipcode}
                            // onChange={(e) => setZipcode(e.target.value)}
                        ></textarea>
                    </label>
                    <label htmlFor="terms-and-conditions-field">
                        <input
                            type="checkbox"
                            id="terms-and-conditions-field"
                            {...register("terms-and-conditions")}
                            // checked={termsAndConditions}
                            // onChange={() => toggleTermsAndConditions(!termsAndConditions)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button type="submit">
                        Verzend
                    </button>
                </form>
            </main>
        </>
    )
}

export default App
