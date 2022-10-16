import './Arena.css';

function Fighter(props) {
  return (
    <div className="Fighter">
      <p>{props.fighterName}</p> 
    </div>
  );
}

export default Fighter;
