import { MoreHorizontal,Plus } from "react-feather";

import Card from "../Card/Card";

import "./Board.css";

function Board(props) {
  // const [items,setItems] = useState(props?.cards)
  // const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board}
         
        </p>
        <div
          className="board_header_title_more">

          <Plus/>
          <MoreHorizontal />
          </div>
         
      </div>
      <div className="board_cards custom-scroll">
       
        {
          props?.cards.map((item) => {
            if(props?.board !== item.status) { return "" } 
            return <Card key={item.id} id={item.id} priority={item.priority} status={item.status}  tag={item.tag} title={item.title} userId={item.userId} />} )
        }
        
      </div>
    </div>
    
  )
      }
export default Board;