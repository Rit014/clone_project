import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ setSearch }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className="nav mt-3">
                <div className="button btn btn-outline-warning mx-auto"
                    onClick={() => {
                        setSearch("Nature")
                        navigate('/')
                    }
                    }
                >Nature</div>
                <div className="button btn btn-outline-primary mx-auto"
                    onClick={() => {
                        setSearch("Travel")
                        navigate('/');
                    }}
                >Travel</div>
                <div className="button btn btn-outline-info mx-auto"
                    onClick={() => {
                        setSearch("City")
                        navigate('/')
                    }
                    }
                >City</div>
                <div className="button btn btn-outline-secondary mx-auto"
                    onClick={() => {
                        setSearch("Car")
                        navigate('/')
                    }
                    }
                >Car</div>
                <div className="button btn btn-outline-warning mx-auto"
                    onClick={() => {
                        setSearch("Fashion")
                        navigate('/')
                    }}
                >Fashion</div>
                <div className="button btn btn-outline-light mx-auto"
                    onClick={() => {
                        setSearch("Animals")
                        navigate('/')
                    }}
                >Animals</div>
                <div className="button btn btn-outline-dark text-light mx-auto"
                    onClick={() => {
                        setSearch("Technology")
                        navigate('/')
                    }}
                >Technology</div>
                <div className="button btn btn-outline-warning mx-auto"
                    onClick={() => {
                        setSearch("Business & Finance")
                        navigate('/')
                    }}
                >Business & Finance</div>
                <div className="button btn btn-outline-primary mx-auto"
                    onClick={() => {
                        setSearch("Tokyo")
                        navigate('/')
                    }}
                >Tokyo</div>
                <div className="button btn btn-outline-info mx-auto"
                    onClick={() => {
                        setSearch("Dubai")
                        navigate('/')
                    }}
                >Dubai</div>

                {location.pathname === '/' ? (
                    <div className="button btn btn-warning mx-auto"
                        onClick={() => navigate('/saved')}
                    >Saved</div>
                ) :
                    (
                        <div className="button btn btn-warning mx-auto"
                            onClick={() => navigate('/')}
                        >Home</div>
                    )}
            </div>

            <div className="container my-4" style={{ width: '780px' }}>
                {location.pathname === '/' && (
                    <div className="mb-3">
                        <input type="email"
                            className="form-control bg-dark text-light"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                )}
            </div>
        </>

    )
}

export default NavBar
