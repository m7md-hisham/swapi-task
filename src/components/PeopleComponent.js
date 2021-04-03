import React, { Component } from 'react';
import { Card, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class People extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            char: {
                films: []
            },
            movies: [],
            pageNumber: 1,
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.fetchCharacters = this.fetchCharacters.bind(this);
    }

    toggleModal(item) {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            char: item
        });
    }

    changeNumber = async () => {
        if(this.state.pageNumber >= 2) {
            return (
                <div>
                    {document.getElementById("button").remove()};
                </div>
            );
        } 
        await this.setState((state) => ({ 
            pageNumber: (state.pageNumber+1)
        }))
        console.log(this.state.pageNumber);

        this.fetchCharacters();
    }
    
    fetchCharacters() {
        const baseUrl = 'https://swapi.dev/api/people/';

        fetch(baseUrl + `?page=${this.state.pageNumber}`)
        .then(res => res.json())
        .then(res => {
            console.log(res.results);
            if (res.results && res.results.length > 0) {
                this.setState((state) => ({
                    items: [...state.items, ...res.results]
                }));
            }
        });
    }

    fetchFilms() {
        const baseUrl = 'https://swapi.dev/api/films/';

        fetch(baseUrl)
        .then(res => res.json())
        .then(res => {
            console.log(res.results);
            if(res.results && res.results.length > 0) {
                this.setState((state) => ({
                    films: [res.results]
                }))
            }
        });
    }

    componentDidMount() {
        this.fetchCharacters();
        this.fetchFilms();
    }

    render() {

        return(
            <div className="row">
                {this.state.items.map((item, index)=>{
                    return( 
                        <div key={index} className="col-12 col-sm-6">
                            <Card body onClick={() => {
                                this.toggleModal(item);
                                console.log(item);
                            }}>            
                                <CardTitle>{item.name}</CardTitle>
                                <div>Gender: {item.gender}</div>
                                <div>Birth Year: {item.birth_year}</div>
                            </Card>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>{this.state.char.name}</ModalHeader>
                                <ModalBody>
                                    <div className="ml-auto">
                                        <p>Gender: {this.state.char.gender}</p>
                                        <p>Birth Year: {this.state.char.birth_year}</p>
                                        <p>Mass: {this.state.char.mass}kg</p>
                                        <p>Height: {this.state.char.height}cm</p>
                                        <div>
                                            Films it Appeared in:
                                                {this.state.char.films}
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal> 
                        </div>
                    );
                })}
                <div className="row col-12 justify-content-center" id="button">
                    <Button outline color="secondary" className="button" onClick={() => {
                        this.changeNumber();
                    }}>
                        Load More...
                    </Button>
                    
                </div>
            </div>
        );
    }
}

export default People;