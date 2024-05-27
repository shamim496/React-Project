import { useState } from 'react';
import Effect from '../Compontes/LearnEffect/Effect'

const App = () => {
    const [show, setShow] = useState(true);

  return (
    <div>
        { show &&
            <Effect/>
        }
        <p>
            <button type='button' onClick={() => setShow((preShow) => !preShow)}>
                {show ? 'Hide Post' : 'Show Post'}
            </button>
        </p>

    </div>
  )
}

export default App;