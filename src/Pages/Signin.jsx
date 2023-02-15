import React from 'react';
import PageHeder from '../components/PageHeder';

const Signin = () => {
    return (
        <>
            <PageHeder title='Login'></PageHeder>

            <main class="wrapper">
                <section class="login-page ">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-8 offset-lg-2">
                                <div class="shipping_form">
                                    <h1 class="widget-title text-uppercase">Login <span class="title-line"></span></h1>
                                    <form action="" method="post">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="fname" value="" placeholder="Username or Email Address *" required />
                                        </div>

                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" value="" placeholder="Password *" required />
                                        </div>

                                        <div class="form-group d-flex align-items-center mb-4">
                                            <input type="checkbox" class="form-check-input me-2" name="checkbox1" value="" />
                                            <label class="form-label mb-0" for="checkbox1">Remember Passord</label>
                                        </div>

                                        <div class="btn_group mb-2">
                                            <button type="submit" class="btn white">Log In</button>
                                        </div>

                                        <div class="form-group mt-4">
                                            <label><a href="#">Forgot Password</a></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    );
};

export default Signin;