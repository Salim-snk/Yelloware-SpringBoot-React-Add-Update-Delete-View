import React, { Component } from 'react'
import CandidatService from '../services/CandidatService'


class ViewCandidatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            candidat: {}
        }
    }

    componentDidMount() {
        CandidatService.getCandidatById(this.state.id).then(res => {
            this.setState({ candidat: res.data });
        })
    }

    render() {
        return (
            <div>

                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Candidat Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Candidat First Name: </label>
                            <div> {this.state.candidat.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Candidat Last Name: </label>
                            <div> {this.state.candidat.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Candidat Email ID: </label>
                            <div> {this.state.candidat.emailId}</div>
                        </div>

                        <div className="row">
                            <label> Candidat candidate_role : </label>
                            <div> {this.state.candidat.candidate_role}</div>
                        </div>

                        <div className="row">
                            <label> Candidat  active: </label>
                            <div> {this.state.candidat.active}</div>
                        </div>

                        <div className="row">
                            <label> Candidat firstStartDate : </label>
                            <div> {this.state.candidat.firstStartDate}</div>
                        </div>
                        <div className="row">
                            <label> Candidat secondLanguageLevel : </label>
                            <div> {this.state.candidat.secondLanguageLevel}</div>
                        </div>
                        <div className="row">
                            <label> Candidat dateOfBirth : </label>
                            <div> {this.state.candidat.dateOfBirth}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCandidatComponent