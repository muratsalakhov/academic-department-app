import React, {Component} from 'react'
import SubjectsItem from './SubjectsItem.js'

class SubjectsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            subjects: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/subject/show_all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        subjects: result
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
        const { error, isLoaded, subjects } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <table>
                    <thead>
                    <tr>
                        <td colSpan={4}>Список всех предметов</td>
                    </tr>
                    <tr>
                        <td>№</td>
                        <td>Название</td>
                        <td>Сокращение</td>
                        <td>Тип аттестации</td>
                    </tr>
                    </thead>
                    {this.state.subjects.map((subject) => (
                        <SubjectsItem subject={subject} />
                    ))}
                </table>
            );
        }
    }
}

export default SubjectsTable;