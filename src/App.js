import './App.css';
import {question} from './api';
import Accordion from './Accordion';

function App() {

  const data = question ;

  return (
    <section id="accordion-area">
        <div className="accordion">
          <h1 className="heading">React Interview Questions</h1>
          <div className="accordion-items">
              {data.map((curElem) => {
                const {id} = curElem;
                return <Accordion key={id} {...curElem} />
              })}
          </div>
      </div>
    </section>
  );
}

export default App;
