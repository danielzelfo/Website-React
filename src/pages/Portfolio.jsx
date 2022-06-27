import React, {useEffect} from "react";
import '../styles/portfolio.scss';
import Cell from '../components/Cell';
import { useApp } from "../app/App";

const Portfolio = () => {
    const {
        setTitle
    } = useApp();

    useEffect(() => {
        window.scrollTo(0, 0);
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
                    <Cell name="auctionServer" />
                    <Cell name="sortingAnimations" />
                    <Cell name="dynamite" />
                </div>
                <div class="row">
                    <Cell name="shopSupreme" />
                    <Cell name="todoList" />
                    <Cell name="mountieBot" />
                    <Cell name="wearableWeather" />
                </div>
                <div class="row">
                    <Cell name="scheduler" />
                    <Cell name="neighborBank" />
                    <Cell name="opbot" />
                    <Cell name="encrytion" />
                </div>
                <div class="row">
                    <Cell name="paint" />
                    <Cell dummy />
                    <Cell dummy />
                    <Cell dummy />
                </div>
            </div>
        </main>
    );
}

export default Portfolio;