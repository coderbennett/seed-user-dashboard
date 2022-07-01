import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="card w-96 bg-base-100 shadow-xl my-6 mx-auto">
                <figure><img src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Rocket launching from launchpad" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Space Flight News</h2>
                    <p>View the latest headlines on spaceflight news.</p>
                    <div className="card-actions justify-end">
                    <Link to="/space-flight-news">
                        <button className="btn btn-primary">View News</button>
                    </Link>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl my-6 mx-auto">
                <figure><img src="https://images.unsplash.com/photo-1630148180214-417337ce9652?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="The sun as seen from space" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Coronal Mass Ejections</h2>
                    <p>Placeholder CME text here</p>
                    <div className="card-actions justify-end">
                    <Link to="/coronal-mass-ejections">
                        <button className="btn btn-primary">View CME Data</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;