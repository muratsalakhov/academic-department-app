import React, {Component} from 'react'
import StudentsItem from './StudentsItem.js'

class StudentsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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
                            <td colSpan={5}>Список всех студентов</td>
                        </tr>
                        <tr>
                            <td>№</td>
                            <td>Имя</td>
                            <td>Фамилия</td>
                            <td>Отчество</td>
                            <td>Группа</td>
                        </tr>
                    </thead>
                    {this.state.students.map((student) => (
                        <StudentsItem student={student} />
                    ))}
                </table>
            );
        }
    }
}

export default StudentsTable;