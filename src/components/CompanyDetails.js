import { Component } from "react"
class CompanyDetails extends Component{

    render(){
        return <div>
            <b>
                <h4>Comapany Details</h4>
                <pre>
                <p>
                    Company Name:{this.props.cpName},
                    Company Email:{this.props.cpEmail},
                    Company Contact:{this.props.cpContact},
                    Company Address:{this.props.cpAddress}
                </p>
                ==================================================================================
                </pre>
            </b>
        </div>
    }
}

export default CompanyDetails;