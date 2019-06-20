import React from "react"

function ActivityCard(props) {
    return (
        <div>
            {/* <h3>{props.sports.LocationText}</h3> */}
            <ul>
                <li>
                    <p>Name:{props.sports.name}</p>
                </li>
                <li>
                    <p>Location:({props.sports.Lat},{props.city.Long}) </p>
                </li>
                <li>
                    <p>reviews:{props.city.reviews} </p>
                </li>
                <li>
                    {/* <p>Total Wages:{props.city.TotalWages} </p> */}
                </li>
            </ul>
        </div>
    )
}

export default ActivityCard