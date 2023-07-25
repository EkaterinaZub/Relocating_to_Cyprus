
import { HowItWorks } from './HowItWorks/HowItWorks'
import { Map } from './Map/Map'
import { Offer } from './Offer/Offer'
import { Paradise } from './Paradise/Paradise'
import { Services } from './Services/Services'
import { WhoWeAre } from './WhoWeAre/WhoWeAre'
import { Choice } from './Сhoice/Choice'


export const Main = ({ weather }) => {


    return (
        <div >
            <Offer weather={weather} />
            <Services />
            <Paradise />
            <Choice />
            <Map />
            <WhoWeAre />
            <HowItWorks />

        </div>
    )
}