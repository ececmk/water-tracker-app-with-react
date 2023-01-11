import Cup from './Cup'

function SmallCups(props) {

  console.log(props.goal)

  return (
  <div className="cups">
    {(() => {
          let cups = []
          for(let i = 0; i<props.goal; i++){
            cups.push(<Cup  />)
          }
          return cups
        }
      )()}
    </div>
  );
};

export default SmallCups;
