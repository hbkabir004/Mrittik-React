import React from 'react';

const BlockGalleryItemCard = (props) => {

    return (
        <li class="blocks-gallery-item">
            <figure>
                <img src={props.img} alt="img" />
                {/* <div class="popup-btn"><a href={props.img} data-fancybox="images"><i class="bi bi-plus"></i></a></div> */}

            </figure>
        </li>
    );
};

export default BlockGalleryItemCard;