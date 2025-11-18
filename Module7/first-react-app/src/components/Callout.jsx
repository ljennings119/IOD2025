function FancyBox(props) {
    return (
        <div className={'FancyBox FancyBox-' + props.color}>
            {props.children} {/* everything in between the opening
<FancyBox> and closing </FancyBox> tags */}
        </div>
    );
}
function Callout(props) {
    return (
        <FancyBox color="blue">
            <h1 className="Callout-title">{props.title}</h1>
            <p className="Callout-message">{props.message}</p>
            {props.children} 
        </FancyBox>
    );
}
export default Callout