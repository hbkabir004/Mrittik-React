import React from 'react';
import { NavLink } from "react-router-dom";

const CuponCode = () => {
    return (
        <div className="couponcart">
            <div className="set_coupon">
                <div className="form-group">
                    <input type="text" className="form-control" name="coupon" placeholder="Coupon Code" />
                </div>
                <div className="btn_group">
                    <input className="btn olive" type="submit" value="Apply Coupon" name="submit" />
                </div>
            </div>
            <div className="cartupdate">
                <div className="btn_group">
                    <NavLink to='/shop-checkout'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    ><input className="btn white" type="submit" value="Update Cart" name="submit" /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default CuponCode;