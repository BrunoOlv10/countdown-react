import PropTypes from 'prop-types';
import './Counter.css'


const Counter = ({title, number}) => {
    return (
        <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  )
}

Counter.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
};

export default Counter
