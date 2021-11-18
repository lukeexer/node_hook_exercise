import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchUser } from '../../actions/user';
import { RootState } from '../../store';
// import HelloWorld from '../../components/HelloWorld';
// import SayHello from '../../components/SayHello'
// import Counter from '../../components/Counter'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <div>
            <h1>The is the Home Page.</h1>
            <div>
                {JSON.stringify(useSelector((state: RootState) => state.user.user))}
            </div>
        </div>
    );
};

// const names = ['world', null, 'air', 'water'];

// const Home = () => {
//     const [displayCounter, setDisplayCounter] = useState(true);

//     return (
//     <div>
//         <button onClick={() => {setDisplayCounter(true);}}>Show Counter</button>
//         <button onClick={() => {setDisplayCounter(false);}}>Remove Counter</button>
//         {displayCounter ? <Counter/> : null}

//         <HelloWorld />
//         <div>
//             <SayHello name='world' />
//             <SayHello name='sun' />
//             <SayHello name='air' />
//             <SayHello name='water' />
//         </div>
//         <div>
//             {
//                 names.map(name => <SayHello key={name} name={name} />)
//             }
//         </div>
//         <Counter />
//         <Counter />
//     </div>
//     );
// };

export default Home;