import React from 'react';
import { Link } from 'react-router-dom';

const portfolioData = [
    {
        image: '/Commercial/WestLoop/IMG_8932.jpg',
        description: `A three-story heavy timber- masonry structure in Wicker Park, IL. ediFel Designs was pleased to conduct an analysis of the existing conditions prior to providing MEP design drawings for permit. The major scope was to reroute existing ductwork around the new Architectural layout and demising walls.<br><br>
•Size: ~10,000 SF. <br><br>
•Architect: Lee Architecture. <br><br>
•Building Use: Commercial Office Space. <br><br>
•Location: Chicago, IL. 
`,
        title: 'The West Loop Office Renovation',
        link: '/selectedworks/details',
        relatedImages: [,
           '/Commercial/WestLoop/IMG_8929.jpg',
           '/Commercial/WestLoop/IMG_8932.jpg',
           '/Commercial/WestLoop/IMG_8933.jpg',
        ]
    },
    {
        image: '/Commercial/WoodShop/IMG_9033.jpg',
        description: `
Following the aftermath of the pandemic, and the slow down on the need for commercial spaces.  Live/work units are hybrid spaces that combine the elements of a residential living with a commercial office space. ediFel designs provide MEP design services with tankless water heaters, Rooftop unit, and exhaust system within the building. <br><br>
•Size: ~3000 SF. <br><br>
•Architect: Range Design & Architecture. <br><br>
•Building Use: Live/Work Unit. <br><br>
•Location: Chicago, IL. <br><br>
`,     
        title: "The Woodshop",
        link: '/selectedworks/details',
        relatedImages: [,
            '/Commercial/WoodShop/IMG_9023.jpg',
            '/Commercial/WoodShop/IMG_9024.jpg',
            '/Commercial/WoodShop/IMG_9030.jpg',
            '/Commercial/WoodShop/IMG_9033.jpg',
            '/Commercial/WoodShop/IMG_9037.jpg',
            '/Commercial/WoodShop/IMG_9039.jpg',
            '/Commercial/WoodShop/IMG_9043.jpg',
            '/Commercial/WoodShop/IMG_9048.jpg',
            '/Commercial/WoodShop/IMG_9049.jpg',
            '/Commercial/WoodShop/IMG_9061.jpg',
            '/Commercial/WoodShop/IMG_9063.jpg',
        ]
    },
    {
        image: '/Residential/Garfield/IMG_9157.jpg',
        description: `A multi-family residential building with one to two bedrooms. ediFel designs was tasked to provide Design-Build engineering services for this existing building renovation. The MEP systems were reviewed in compliance with the most recent building codes. <br><br>
•Size: ~16,000 SF. <br><br>
•Architect: Yu Collaborative. <br><br>
•Building Use: Multi-Family Residential. <br><br>
•Location: Chicago, IL. <br><br>
`   ,
        title: 'Garfield Multi-family ',
        link: '/selectedworks/details',
        relatedImages: [,
            '/Residential/Garfield/IMG_9167.jpg',
            '/Residential/Garfield/IMG_9157.jpg',
            '/Residential/Garfield/IMG_9168.jpg',
            '/Residential/Garfield/IMG_9172.jpg',
            '/Residential/Garfield/IMG_9173.jpg',
            '/Residential/Garfield/IMG_9175.jpg',
            '/Residential/Garfield/IMG_9176.jpg',
            '/Residential/Garfield/IMG_9217.jpg',
            '/Residential/Garfield/IMG_9225.jpg',
            '/Residential/Garfield/IMG_9227.jpg',
            '/Residential/Garfield/IMG_9229.jpg',
            '/Residential/Garfield/IMG_9235.jpg',
        ]
    },
    {
        image: '/Commercial/Boulevard/IMG_8921.jpg',
        description: `The Boulevard is a homeless shelter located in the Humboldt Park neighborhood of Chicago. Upon the fire that encompassed the existing structure, our team provided MEP design for the renovation of the burnt down portion office space of the structure. <br><br>
•Size: ~2800 SF. <br><br>
•Architect: MDT Architects. <br><br>
•Building Use: Commercial Office Space. <br><br>
•Location: Chicago, IL. <br><br>
`,
        title: 'The Boulevard ',
        link: '/selectedworks/details',
        relatedImages: [,
            '/Commercial/Boulevard/IMG_8913.jpg',
            '/Commercial/Boulevard/IMG_8915.jpg',
            '/Commercial/Boulevard/IMG_8921.jpg',
        ]
    },
    {
        image: '/Commercial/Managment/IMG_9086.jpg',
        description: `The M & M property management office located at 506 Wesley Ave, was a tenant fit-out renovation. ediFel designs was tasked to provide MEP services for the new building layout. <br><br>
•Size: ~2400 SF. <br><br>
•Architect: Laura Fehlberg Architects. <br><br>
•Building Use: Commercial Office Space. <br><br>
•Location: Oak Park, IL. <br><br>
`,    
        title: 'The Management Office ',
        link: '/selectedworks/details',
        relatedImages: [,
            '/Commercial/Managment/IMG_9066.jpg',
            '/Commercial/Managment/IMG_9082.jpg',
            '/Commercial/Managment/IMG_9086.jpg',
            '/Commercial/Managment/IMG_9090.jpg',
            '/Commercial/Managment/IMG_9112.jpg',
            '/Commercial/Managment/IMG_9116.jpg',
            '/Commercial/Managment/IMG_9254.jpg',
        ]
    },
    {
        image: '/Commercial/Bronzeville/IMG_9268.jpg',
        description: `Bronzeville winery is a neighborhood revitalization project that brings forth all the unique potentials of the Chicago south-side. This project was one of its kind, with the cheer support from the Mayor, the city and the community. ediFel designs was proud to provide MEP design drawings for this restaurant which is located on the ground floor of a 5 -story mixed use residential. <br><br>
•Size: ~2200 SF. <br><br>
•Architect: Future Firm. <br><br>
•Building Use: Restaurant. <br><br>
•Location: Chicago, IL. <br><br>
`,
        title: 'Bronzvile Winery',
        link: '/selectedworks/details',
        relatedImages: [,
            '/Commercial/Bronzeville/IMG_9268.jpg',
            '/Commercial/Bronzeville/IMG_9276.jpg',
            '/Commercial/Bronzeville/Picture2.jpg',
        ]
    },
    {
        image: '/Residential/Glenview/IMG_8982.jpg',
        description: `A luxury single family residence located in Glenview, IL. This residence is provided with a robust water heater system, VRF heat pump mechanical system for heating and cooling, backup generator, snow melt system, energy recovery ventilators and high end kitchen equipment. <br><br>
•Size: ~10,000 SF. <br><br>
•Architect: Jason Meyering Architecture. <br><br>
•Building Use: Single-Family Residential. <br><br>
•Location: Glenview, IL. <br><br>
`,
        title: 'Glenview Residence',
        link: '/selectedworks/details',
        relatedImages: [
            '/Residential/Glenview/IMG_8982.jpg',
            '/Residential/Glenview/IMG_8992.jpg',
            '/Residential/Glenview/IMG_8994.jpg',
        ] 
    },
    {
        image: '/Residential/Green/IMG_9148.jpg',
        description: `A multi-family residential building with one to two bedrooms. ediFel designs was tasked to provide Design-Build engineering services for this existing building renovation. The MEP systems were reviewed in compliance with the most recent building codes. <br><br>
•Size: ~16,000 SF. <br><br>
•Architect: Yu Collaborative. <br><br>
•Building Use: Multi-Family Residential. <br><br>
•Location: Chicago, IL.<br><br>
`,
        title: 'Green Street',
        link: '/selectedworks/details',
        relatedImages: [
            '/Residential/Green/IMG_9144.jpg',
            '/Residential/Green/IMG_9146.jpg',
            '/Residential/Green/IMG_9148.jpg',

        ]
    },
];

const SelectedWorks = () => {
    return (
        <section className="p-16" id="selectedWorks">
            <header className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">SELECTED WORKS</h2>
            </header>
            <div className="relative max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {portfolioData.map((item, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Static title that moves up on hover */}
                            <p className="absolute bottom-4 left-0 right-0 p-4 text-white text-lg transform translate-y-0 group-hover:translate-y-[-40px] transition-transform duration-300">
                                {item.title}
                            </p>

                            {/* Details link that animates upwards on hover */}
                            <div className="absolute bottom-4 left-0 right-0 p-4 flex items-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300">
                                <Link
                                    to={item.link}
                                    state={{
                                        image: item.image,
                                        description: item.description,
                                        title: item.title,
                                        relatedImages: item.relatedImages
                                    }}
                                    className="flex items-center text-white hover:text-green-700 text-lg"
                                >
                                    <span>Details</span>
                                    <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWorks;