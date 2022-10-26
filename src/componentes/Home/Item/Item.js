import "./Item.scss";

const Item = ({name,description,img,price,category,id}) => {
  return (
    <div className="Item"> 
     <div className="ImgContainer"><img src={img} /></div> 
      <div className="description-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{`$ ${price}`}</p>
      </div>
      </div>
  );
};

export default Item;