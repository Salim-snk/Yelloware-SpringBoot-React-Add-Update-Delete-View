import React, { Component } from 'react';
import CandidatService from '../services/CandidatService';


class CreateCandidatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            candidate_role: '',
            active: '',
            firstStartDate: '',
            secondLanguageLevel: '',
            dateOfBirth: ''



        }
        this.changeFirtsNameHandler = this.changeFirtsNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeCandidate_roleHandler = this.changeCandidate_roleHandler.bind(this);
        this.changeActiveHandler = this.changeActiveHandler.bind(this);
        this.changefirstStartDateHandler = this.changefirstStartDateHandler.bind(this);
        this.changesecondLanguageLevelHandler = this.changesecondLanguageLevelHandler.bind(this);
        this.changedateOfBirthHandler = this.changedateOfBirthHandler.bind(this);
        this.changedateOfBirthHandler = this.changedateOfBirthHandler.bind(this);


        this.saveCandidat = this.saveCandidat.bind(this);

    }

    saveCandidat = (e) => {
        e.preventDefault();
        let candidat = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, candidate_role: this.state.candidate_role, active: this.state.active,
            firstStartDate: this.state.firstStartDate, secondLanguageLevel: this.state.secondLanguageLevel, dateOfBirth: this.state.dateOfBirth
        };
        console.log('candidat =>' + JSON.stringify(candidat));

        CandidatService.createCandidat(candidat).then(res => {
            this.props.history.push('/candidates');

        });

    }

    changeFirtsNameHandler = (event) => {

        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {

        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {

        this.setState({ emailId: event.target.value });
    }
    changeCandidate_roleHandler = (event) => {

        this.setState({ candidate_role: event.target.value });
    }
    changeActiveHandler = (event) => {

        this.setState({ active: event.target.value });
    }
    changefirstStartDateHandler = (event) => {

        this.setState({ firstStartDate: event.target.value });
    }
    changesecondLanguageLevelHandler = (event) => {

        this.setState({ secondLanguageLevel: event.target.value });
    }
    changedateOfBirthHandler = (event) => {

        this.setState({ dateOfBirth: event.target.value });
    }


    cancel() {
        this.props.history.push('/add-candidates');
    }
    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Candidat</h3>
        } else {
            return <h3 className="text-center">Update Candidat</h3>
        }
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Candidate Role  </label>
                                        <input placeholder="Candidate Role" name="candidate_role" className="form-control"
                                        value={this.state.candidate_role} onChange={this.changeCandidate_roleHandler} />

                                    </div>
                                    <div className="form-group">
                                        <label> Active </label>
                                        <input placeholder="Active me ? " name="active" className="form-control"
                                        value={this.state.active} onChange={this.changeActiveHandler} />

                                    </div>
                                    <div className="form-group">
                                        <label> firstStartDate  </label>
                                        <input placeholder="Email Address" name="firstStartDate" className="form-control"
                                        value={this.state.firstStartDate} onChange={this.changefirstStartDateHandler} />

                                    </div>
                                    <div className="form-group">
                                        <label> secondLanguageLevel </label>
                                        <input placeholder="secondLanguageLevel " name="secondLanguageLevel" className="form-control"
                                        value={this.state.secondLanguageLevel} onChange={this.changesecondLanguageLevelHandler} />

                                    </div>
                                    <div className="form-group">
                                        <label>dateOfBirth </label>
                                        <input placeholder=" DateOfBirth" name="dateOfBirth" className="form-control"
                                        value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler} />

                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrCandidat}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default CreateCandidatComponent;