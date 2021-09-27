import React from 'react';


const Register = () => {
    return (
        <div>
            <div className="tab-content">
                <form className="form-profile">
                    <fieldset>
                    <legend>S'enregistrer</legend>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="mail@mail.fr"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Login</label>
                        <input
                        type="login"
                        className="form-control"
                        id="login"
                        placeholder="Login"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Sauvegarder
                    </button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;