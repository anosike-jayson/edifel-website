import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SelectedWorks = () => {
    const location = useLocation();
    const { image, description, title, relatedImages } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
                <h1 className="text-3xl font-bold mb-6">{title || 'Portfolio Details'}</h1>
                
                {/* Main content */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* Description on the left */}
                    <div className="md:w-1/2">
                        <h1 className="text-xl font-bold mb-6">{'Description'}</h1>
                        <p className="text-lg text-gray-700">{description}</p>
                    </div>
                    {/* Image on the right */}
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover rounded-lg shadow-md" // Use object-contain for normal size
                        />
                    </div>
                </div>
                
                {/* Related Images Section */}
                {relatedImages && relatedImages.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Related Images</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {relatedImages.map((relatedImage, index) => (
                                <div key={index} className="aspect-w-1 aspect-h-1">
                                    <img
                                        src={relatedImage}
                                        alt={`Related Image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SelectedWorks;
