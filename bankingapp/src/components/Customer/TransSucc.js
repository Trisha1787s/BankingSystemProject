import '../style2.css';
export default function TransSucc(props) {
  const  handleClick = () => {
        props.history.push("/TransactionAdd");
      };
    return (
    
      <div className="Display4">
    <h5>Transaction Successfully!</h5>
    <button type="button" className="btn btn-success"  onClick={handleClick}>Go Back</button>

      </div>
    );
  }