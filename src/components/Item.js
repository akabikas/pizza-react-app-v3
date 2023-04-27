const Item = ({ item, handleChange }) => {
    return (
      <div>
        <input type="checkbox" name={item.name} onChange={event => handleChange(item, event)} />
        {item.name} ${item.price}
      </div>
    );
  };
  
  export default Item;