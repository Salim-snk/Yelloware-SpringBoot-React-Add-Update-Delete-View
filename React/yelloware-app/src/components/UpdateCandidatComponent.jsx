import React, { Component } from 'react';
import CandidatService from '../services/CandidatService';


export default class UpdateCandidatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

      
       


        this.saveCUpdateCandidatandidat = this.UpdateCandidat.bind(this);

    }
   componentDidMount(){
    CandidatService.getCandidatById(this.state.id).then((res) => {
           let candidat =res.data;
           this.setState({firstName: candidat.firstName ,
            lastName: candidat.lastName,
            emailId : candidat.emailId,
            candidate_role : candidat.candidate_role,
            active: candidat.active,
            firstStartDate: candidat.firstStartDate,
            secondLanguageLevel: candidat.secondLanguageLevel,
            dateOfBirth: candidat.dateOfBirth
            

        

        });
    });
   }
    UpdateCandidat = (e) => {
        e.preventDefault();
        let candidat = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, candidate_role: this.state.candidate_role, active: this.state.active,
            firstStartDate: this.state.firstStartDate, secondLanguageLevel: this.state.secondLanguageLevel, dateOfBirth: this.state.dateOfBirth
        };
        console.log('candidat =>' + JSON.stringify(candidat));
        CandidatService.updateCandidat(candidat,this.state.id).then( res =>{
        this.props.history.push('/candidat');
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



    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                        <h3 className="text-center"> Update Candidat </h3>
                        <div className="card-body"></div>
                        <form>
                            <div className="form-group">
                                <label>Firts Name</label>
                                <input placeholder="First Name" type="text" name="firtsName" className="form-control"
                                    value={this.state.firstName} onChange={this.changeFirtsNameHandler}></input>

                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input placeholder="Last Name"type="text" name="lastName" className="form-control"
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}></input>

                            </div>
                            <div className="form-group">
                                <label> Email Id: </label>
                                <input placeholder="Email Address" name="emailId" className="form-control"
                                    value={this.state.emailId} onChange={this.changeEmailHandler}></input>

                            </div>
                            <div className="form-group">
                                <label> Candidate Role  </label>
                                <input placeholder="Candidate Role" name="candidate_role" className="form-control"
                                    value={this.state.candidate_role} onChange={this.changeCandidate_roleHandler}></input>

                            </div>
                            <div className="form-group">
                                <label> Active </label>
                                <input placeholder="Active me ? " name="active" className="form-control"
                                    value={this.state.active} onChange={this.changeActiveHandler}></input>

                            </div>
                            <div className="form-group">
                                <label> firstStartDate  </label>
                                <input placeholder="Email Address" name="firstStartDate" className="form-control"
                                    value={this.state.firstStartDate} onChange={this.changefirstStartDateHandler}></input>

                            </div>
                            <div className="form-group">
                                <label> secondLanguageLevel </label>
                                <input placeholder="secondLanguageLevel " name="secondLanguageLevel" className="form-control"
                                    value={this.state.secondLanguageLevel} onChange={this.changesecondLanguageLevelHandler}></input>

                            </div>
                            <div className="form-group">
                                <label>dateOfBirth </label>
                                <input placeholder=" DateOfBirth" name="dateOfBirth" className="form-control"
                                    value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler}></input>

                            </div>
                            <button className="btn btn-success" onClick={this.UpdateCandidat} style={{ marginLeft:"5px"}}>Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft:"5px"}}>Cancel</button>

                        </form>
                    </div>



                </div>
            </div>
        );
    }
}


