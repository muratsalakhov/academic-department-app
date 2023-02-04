import React from 'react';
//import { Dropdown } from "react-bootstrap";

class DropDownMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            student: [],
            groups: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/group/show_all`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        groups: result,
                        student: this.props.studentId
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    /*
        render() {
            return (
                <Dropdown>
                    <Dropdown.Toggle variant="link" size="sm"></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Header>Перевести в другую группу</Dropdown.Header>
                        {this.state.group.map((group, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => (
                                    Request.transferStudent().then((groups) => {
                                        alert('Перевод студента с id ' + this.state.student + ' в группу ' + group.id + (ok ? '' : ' не') + ' произведён');
                                    })
                                )}
                            >
                                {group.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
        );
        }
    }*/

    render() {
        return (
            <div></div>
        );
    }
}
export default DropDownMenu;