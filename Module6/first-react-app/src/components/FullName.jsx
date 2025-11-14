function NamePart(props) {
    return (
        <span className="NamePart">{props.value}</span>  //calling value prop - reusable component - all this does is gives you back the name value
    )
}

function FullName(props) {
    return (  // composes the NamePart component to display a full name
        <div className="FullName componentBox">
            Full name: <NamePart value={props.first} /> 
            <NamePart value={props.middle} />
            <NamePart value={props.last} />
        </div>
    )
}

export default FullName