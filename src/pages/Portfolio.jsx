import React, {useEffect} from "react";
import '../styles/portfolio.scss';
import Cell from '../components/Cell';
import { useApp } from "../app/App";

const Portfolio = () => {
    const {
        setTitle
    } = useApp();

    useEffect(() => {
        setTitle("My Portfolio")
    } , []);

    return (
        <main>
            <div class="section" id="grid">
                <div class="row">
                    <Cell name="sortingAnimations" />
                    <Cell name="astra" />
                    <Cell name="wearableWeather" />
                    <Cell name="mipsSudoku" />
                </div>
                <div class="row">
                    <Cell name="cppPrograms" />
                    <Cell name="dynamite" />
                    <Cell name="shopSupreme" />
                    <Cell name="mountieBot" />
                </div>
                <div class="row">
                    <Cell name="todoList" />
                    <Cell name="scheduler" />
                    <Cell name="neighborBank" />
                    <Cell name="opbot" />
                </div>
                <div class="row">
                    <Cell name="encrytion" />
                    <Cell name="paint" />
                    <Cell dummy />
                    <Cell dummy />
                </div>
            </div>
        </main>
    );
}

export default Portfolio;