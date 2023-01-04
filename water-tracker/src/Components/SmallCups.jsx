import Cup from "./Cup";


function SmallCups() {

  return (
   
    <div className="cups">
      {(() => {
          let cups = []
          for(let i = 0; i<8; i++){
            cups.push(<Cup  />)
          }
          return cups
        }
      )()}
    </div>
  )

}

export default SmallCups;