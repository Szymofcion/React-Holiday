import "./Api.scss";

const Api = (props) => {
    
  return (
    <div className="container">
      <h3 className="name">{props.name}</h3>
      <img className="person-img" src={props.img} alt="" />
      <span className="person-info">tak</span>
    </div>
  );
};

export default Api;
