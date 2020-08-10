import React, {Component} from 'react'
import JournalItem from './JournalItem.js'

class JournalTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            journal: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/journal/show_all")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        journal: result
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
        const { error, isLoaded, journal } = this.state;
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
                        <td>Имя студента</td>
                        <td>Фамилия</td>
                        <td>Предмет </td>
                        <td>Кол-во пересдач</td>
                        <td>Оценка</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.journal.map((journalItem) => (
                            <JournalItem key={journalItem.id} journalItem={journalItem} />
                        ))}
                    </tbody>
                </table>
            );
        }
    }
}

export default JournalTable;