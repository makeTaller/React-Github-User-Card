import React from 'react';
import FollowersCard from './FollowersCard';
import '../App.css';

export default function FollowersList(props){

    return(
    <div className='App-header'>
        {
            props.viewFollowers.map(follower =>(
                <FollowersCard
                    key={follower.id}
                    name={follower.login}
                    followers={follower.followers}
                    imgurl={follower.avatar_url}
                />
            ))
        }
    </div>
    )
}
