function MyDetailsComp(props){

    return <div>
        <b>
            <h4>Personal Details</h4>
            <pre>
            <p>
                Name:{props.name} ,
                Email:{props.email} ,
                Contact:{props.contact} ,
                Address:{props.address}
            </p>
            ==================================================================================
            </pre>
        </b>
    </div>
}

export default MyDetailsComp;