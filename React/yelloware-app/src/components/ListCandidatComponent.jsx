import React, { Component } from 'react'
import CandidatService from '../services/CandidatService'

class ListCandidatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            candidats: []

        }
        this.addCandidat = this.addCandidat.bind(this);
        this.editCandidat = this.editCandidat.bind(this);
        this.deleteCandidat = this.deleteCandidat.bind(this);
    }
    deleteCandidat(id) {
        CandidatService.deleteCandidat(id).then(res => {
            this.setState({ candidats: this.state.candidats.filter(candidat => candidat.id !== id) });
        });

    }
    viewCandidat(id) {
        this.props.history.push(`/view-candidates/${id}`);
    }
    editCandidat(id) {
        this.props.history.push(`/add-candidates/${id}`);
    }


    componentDidMount() {
        CandidatService.getCandidats().then((res) => {
            this.setState({ candidats: res.data });

        });

    }
    addCandidat() {
        this.props.history.push('/add-candidates/_add');
    }

    render() {
        return (

            <div>
                <h2 className="text-center">Candidats List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCandidats}>Add Candidat</button>

                </div>
                <br></br>
                <div className='row'>

                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Candidats firstName </th>
                                <th>Candidats lastName </th>
                                <th>Candidats emailId </th>
                                <th>Candidats  candidate_role</th>
                                <th>Candidats active </th>
                                <th>Candidats firstStartDate </th>
                                <th>Candidats secondLanguageLevel </th>
                                <th>Candidats dateOfBirth </th>
                                <th>Actions</th>


                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.candidats.map(
                                    candidat =>
                                        <tr key={candidat.id}>
                                            <td> {candidat.firtName} </td>
                                            <td> {candidat.lastName} </td>
                                            <td> {candidat.emailId} </td>
                                            <td> {candidat.candidate_role} </td>
                                            <td> {candidat.active} </td>
                                            <td> {candidat.firstStartDate} </td>
                                            <td> {candidat.secondLanguageLevel} </td>
                                            <td> {candidat.dateOfBirth} </td>

                                            <td>
                                                <button onClick={() => this.editCandidat(candidat.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteCandidat(candidat.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewCandidat(candidat.id)} className="btn btn-info">View </button>

                                            </td>




                                        </tr>
                                )
                            }



                      
                        </tbody>

                    </table>


                </div>

            </div>
        )
    }
}

export default ListCandidatComponent