import React from 'react'

const Member = props => {
    return (
        <div>
            {props.membersList.map(member => {
                return (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.phone} {member.role}</p>
                </div>
                );
            })}
        </div>
    );
};

export default Member;