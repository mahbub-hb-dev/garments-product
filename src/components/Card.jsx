const date  = new Date();
const getDate = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

const Card = (props) => {
    const {title, desc, key} = props;
    console.log(key)
  return (
    <div key={key} className="bg-amber-300 rounded-md m-3 p-3 shadow-md">
        <h3 className="text-2xl font-bold"> {title} </h3>
        <p> {desc} </p>
        <p className="font-medium"> {getDate} </p>
    </div>
  )
}

export default Card
