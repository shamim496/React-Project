const date = new Date();
const currentYear = date.getFullYear();
const monthName = date.getMonth();
const dateName = date.getDay();


function Card(props) {
    console.log(props);
    const {titleText, descText} = props;
    return <div className="card">
        <h3 className="cardTitle">{titleText}</h3>
        <p className="cardDesc">{descText}</p>
        <p className="cardFooter">{currentYear + "/" + monthName + "/" + dateName}</p>
    </div>
}

export default Card;