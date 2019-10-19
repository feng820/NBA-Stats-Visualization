import React from 'react';
import {ShotChart} from './ShortChart'

export class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <ShotChart playerId={201939}/>
            </div>
        )
    }
}