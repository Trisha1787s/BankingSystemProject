import './style2.css';
export default function PostSuccessPage(props) {
  const  handleClick = () => {
        props.history.push("/AdminAddPost");
      };
    return (
    
      <div className="Display4">
    <h5>News Posted Successfully!</h5>
    <button type="button" className="btn btn-success"  onClick={handleClick}>Post Again</button>

      </div>
    );
  }