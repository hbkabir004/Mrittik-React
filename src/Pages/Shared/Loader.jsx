import React from 'react';

const Loader = () => {
    return (
        <div>
            <div id="preloader">
                <div className="preloader-inner">
                    <div className="spinner"></div>
                    <div className="loading-text">
                        <span data-preloader-text="M" className="characters">M</span>

                        <span data-preloader-text="R" className="characters">R</span>

                        <span data-preloader-text="I" className="characters">I</span>

                        <span data-preloader-text="T" className="characters">T</span>

                        <span data-preloader-text="T" className="characters">T</span>

                        <span data-preloader-text="I" className="characters">I</span>

                        <span data-preloader-text="K" className="characters">K</span>
                    </div>
                </div>
            </div>

            {/* <!-- Cursor Effect --> */}
            <div className="pointer bnz-pointer" id="bnz-pointer"></div>
        </div>
    );
};

export default Loader;