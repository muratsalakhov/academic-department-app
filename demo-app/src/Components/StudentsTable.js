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
            students: []
        };
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


    render() {
        const { error, isLoaded, students } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
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
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.secondName}</td>
                                <td>{student.studyGroupId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            );
        }
    }
}

export default StudentsTable;