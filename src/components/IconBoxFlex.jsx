
const IconBoxFlex = (props) => {
    return (
        <div className="col-lg-6">
            <div className="icon_box_flex">
                <div className="icon_size">
                    <img src={props.img} alt="Icon" />
                </div>
                <h6>{props.text}</h6>
            </div>
        </div>
    );
};

export default IconBoxFlex;