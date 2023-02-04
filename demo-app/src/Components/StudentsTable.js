import React, {Component} from 'react'
//import StudentsItem from './StudentsItem.js'
import _ from 'lodash';

class StudentsTable extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sort: 'asc', // 'desc'
            sortField: 'id',
            students: [],
            studyGroups: [],
            selectedGroup: 1,
            selectedStudent: 1
        };

        //this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeStudent = this.handleChangeStudent.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
    }

    componentDidMount() {

        fetch("http://localhost:8080/student/show_all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        students: result
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
        fetch("http://localhost:8080/study_group/show_all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        studyGroups: result
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

    onSort = sortField => {
        const cloneData = this.state.students.concat();
        const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = _.orderBy(cloneData, sortField, sortType);

        this.setState({
            students: orderedData,
            sort: sortType,
            sortField
        })
    }

    sendMessage = () => {
        fetch(`http://localhost:8080/student-change/${this.state.selectedStudent}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            /*body:  JSON.stringify({
                "surname": this.state.students[this.state.selectedStudent].surname,
                "name": this.state.students[this.state.selectedStudent].name,
                "secondName": this.state.students[this.state.selectedStudent].secondName,
                "studyGroupId": this.state.selectedGroup
            })*/
            body:  JSON.stringify({
                "studyGroupId": this.state.selectedGroup
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true
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
    };

    /*handleSubmit(event) {
        event.preventDefault();
    }*/

    handleChangeGroup(event) {
        this.setState({
            selectedGroup: event.target.value
        });
        console.log(this.state.selectedGroup)
    }
    handleChangeStudent(event) {
        this.setState({
            selectedStudent: event.target.value
        });
        console.log(event.target.value)
    }

    render() {
        const { error, isLoaded, students } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <div>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={5} onClick={this.sendMessage}>Список всех студентов</td>
                        </tr>
                        <tr>
                            <th onClick={this.onSort.bind(null, 'id')}>№
                                {this.state.sortField === 'id' ? <small>{this.state.sort}</small> : null}</th>
                            <th onClick={this.onSort.bind(null, 'name')}>Имя
                                {this.state.sortField === 'name' ? <small>{this.state.sort}</small> : null}</th>
                            <th onClick={this.onSort.bind(null, 'surname')}>Фамилия
                                {this.state.sortField === 'surname' ? <small>{this.state.sort}</small> : null}</th>
                            <th onClick={this.onSort.bind(null, 'secondName')}>Отчество
                                {this.state.sortField === 'secondName' ? <small>{this.state.sort}</small> : null}</th>
                            <th onClick={this.onSort.bind(null, 'studyGroupId')}>Группа
                                {this.state.sortField === 'studyGroupId' ? <small>{this.state.sort}</small> : null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.secondName}</td>
                                <td>{student.studyGroupId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <select onChange={this.handleChangeStudent}>
                    { this.state.students.map((student) => (
                        <option value={student.id}>{student.surname + " " + student.name}</option>
                    ))}
                </select>
                <select onChange={this.handleChangeGroup}>
                    { this.state.studyGroups.map((group) => (
                        <option value={group.id}>{group.name}</option>
                    ))}
                </select>
                <button onClick={this.sendMessage}>Подтвердить</button>
                </div>
        );
        }
    }
}

export default StudentsTable;