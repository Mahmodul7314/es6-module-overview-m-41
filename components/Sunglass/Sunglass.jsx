
import'./Sunglass.css'
import watch from './../Watch/Watch';
import { add, multiply } from '../Utilities/Calculator';
import Watch from './../Watch/Watch';
// import add from '../Utilities/Calculator';



const Sunglass = () => {
    const first =30;
    const second = 20;
    const sum = add(first,second)
    const mult =multiply
    return (
        <div>
           <Watch></Watch>
        </div>
    );
};

export default Sunglass;
