import React, {useEffect} from "react";
import '../styles/portfolio.scss';
import Cell from '../components/Cell';
import { useApp } from "../app/App";

const Portfolio = () => {
    const {
        setTitle
    } = useApp();

    useEffect(() => {
        setTitle("My Portfolio");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    return (
        <main>
            <div class="section" id="grid">
                <div class="row">
                    <Cell name="FabFlix"/>
                    <Cell name="spidey"/>
                    <Cell name="astra"/>
                    <Cell name="mipsSudoku"/>
                </div>
                <div class="row">
                    <Cell name="cppPrograms" />
                    <Cell name="sortingAnimations" />
                    <Cell name="dynamite" />
                    <Cell name="shopSupreme" />
                </div>
                <div class="row">
                    <Cell name="todoList" />
                    <Cell name="mountieBot" />
                    <Cell name="wearableWeather" />
                    <Cell name="scheduler" />
                </div>
                <div class="row">
                    <Cell name="neighborBank" />
                    <Cell name="opbot" />
                    <Cell name="encrytion" />
                    <Cell name="paint" />
                </div>
            </div>
        </main>
    );
}

export default Portfolio;