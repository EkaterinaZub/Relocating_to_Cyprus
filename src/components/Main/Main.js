import { Contact } from './Contact/Contact'
import { HowItWorks } from './HowItWorks/HowItWorks'
import { Map } from './Map/Map'
import { Offer } from './Offer/Offer'
import { Paradise } from './Paradise/Paradise'
import { Partners } from './Partners/Partners'
import { QuestionCarousel } from './Questions/QuestionCarousel.js/QuestionCarousel'
import { Services } from './Services/Services'
import { WhoWeAre } from './WhoWeAre/WhoWeAre'
import { Choice } from './Сhoice/Choice'


export const Main = () => {
   

    return (
        <div >
        
         <Offer  />
            <Services />
            <Paradise />
            <Choice />
            <Map />
            <WhoWeAre />
            <HowItWorks />
             
            {/* <Contact /> */}
            {/* <Partners /> */}
            {/* <QuestionCarousel /> */}
           

        </div>
    )
}