const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn text-white'
    >
      {text}
    </button>
  );
};
// Button.defaultProps = {};
// Button.propTypes = {
//   text: propTypes.string,
// };
export default Button;
