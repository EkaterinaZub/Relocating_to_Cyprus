import family_relocation from '../../assets/images/family_relocation.png';
import business_relocation from '../../assets/images/business_relocation.png';
import investment_schemes from '../../assets/images/investment_schemes.png';



export const services = [
    {
        id: 1,
        url: "family",
        images: {
            src: family_relocation,
            alt: 'family_relocation'
        },
        header: 'Family Relocation',
        text: 'With strategic planning, we simplify the moving process so you and your family can feel safe and confident.'
    },

    {
        id: 2,
        url: "business",
        images: {
            src: business_relocation,
            alt: 'business_relocation'
        },
        header: 'Business Relocation',
        text: 'We handle the responsibility of moving your business to Cyprus, so you can focus on your business goals.'
    },

    {
        id: 3,
        url: "investments",
        images: {
            src: investment_schemes,
            alt: 'investment_schemes'
        },
        header: 'Investment  plans',
        text: 'Discover the opportunity to further enhance your business ambitions, by choosing the optimal investment plan.'
    }
]