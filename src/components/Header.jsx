// This Child component has received a prop from his parent: App. It cal pick it up.
// Note the addition of the "props" argument.
function Header(props) {
    console.log(props) //
    // Login goes in here.
    // Also this is where we connect our react app to the backend too
    // APIs that I write are consumed here too

    // Let's say we send a request to a backend server and it sends back a response
    const appName = 'ChopChop Restaurant'

    const rowStyle  = {
        backgroundColor: "tomato",
        color: "white",
        padding: "50px 10px",
        textAlign: "center",
        fontWeight: "600"
    }

    return (
        <div className="row" style={rowStyle}>
            <div className="colmd-12 py-5">
                <h1>{appName}</h1>
                <p className="slogan">A place to kill your hunger...</p>

                {/* Child component using prop sent by the parent */}
                <p>Number of Visits: {props.noOfVisits}</p>
            </div>
        </div>
    )
}

export default Header;
{/* <div className="colmd-12 py-5 bg-warning fw-semibold"> */}