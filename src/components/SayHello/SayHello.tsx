import React from 'react';

type SayHelloProps = {
    name: string;
};

const SayHello = (props: SayHelloProps) => (
    <div
        style={
            props.name === null ? {color: '#fff', background: '#000'} : {}
        }
    >
        {`Hello ${props.name === null ? 'Nobody' : props.name}!`}
    </div>
);

export default SayHello;