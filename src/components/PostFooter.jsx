import React from 'react';

const PostFooter = () => {
    return (
        <div className="post-footer">
            <div className="post-share">
                <ul className="share-list">
                    <li>Share:</li>
                    <li className="facebook aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"><a href="#">Facebook</a></li>
                    <li className="twitter aos-init aos-animate" data-aos="fade-up" data-aos-duration="800"><a href="#">Twitter</a></li>
                    <li className="pinterest aos-init aos-animate" data-aos="fade-up" data-aos-duration="1100"><a href="#">Pinterest</a></li>
                    <li className="instagram aos-init aos-animate" data-aos="fade-up" data-aos-duration="1400"><a href="#">Instagram</a></li>
                    <li className="linkedin aos-init aos-animate" data-aos="fade-up" data-aos-duration="1400"><a href="#">Linkedin</a></li>
                </ul>
            </div>
        </div>
    );
};

export default PostFooter;