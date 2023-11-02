import { Card } from "../components/Card";
import { JavaScriptCard, getJavaScriptCards } from "../services/javascript";

export function CardPage() {
    const cardList = getJavaScriptCards()

    return (
        <Card {...cardList[0]}></Card> 
    )
}