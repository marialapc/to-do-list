import "./createTowatchButton.scss";

function CreateTowatchButton({setOpenModal}) {
  return (
     <button 
     className="createTowatchButton"
     onClick={() =>{
        setOpenModal(state => !state);
        }
      } 
    ><svg enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="25" x2="25" y1="9" y2="41"/></svg></button>
);
}

export { CreateTowatchButton };
