import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item =>
    {
      return <div className="List" key={item.key}>
        <p>
          <input className="iteminput" type="text" id={item.key} value={item.text}
          onChange = {
            (e) => {
              props.setUpdate(e.target.value, item.key)
            }
          }
          />
          <span>
            <FontAwesomeIcon className="faicon" icon="trash"
            onClick={ () => props.deleteItem(item.key)} 
            />
          </span>
        </p>

      </div>
    })
  return(
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  )
}

export default ListItems;