// destructures props object into 3 variables, two with defaults
// function City({name, state = 'NSW', country = 'Australia', child}) {
// return (
// <div className="City componentBox">
// <strong>{name}</strong> is in {state}, {country}
// </div>
// )
// }

function City({name, state = 'NSW', country = 'Australia', children}) {
// destructuring the props.children property as well
return (
<div className="City componentBox">
<strong>{name}</strong> is in {state}, {country}
{children}
</div>
)
}



export default City;