import React from "react";

class JournalItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            journalItem: [],
            student: [],
            subject: [],
            mark: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/student/${this.props.journalItem.studentId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        student: result
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

        fetch(`http://localhost:8080/mark/${this.props.journalItem.markId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        mark: result,
                        journalItem: this.props.JournalItem
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

        fetch(`http://localhost:8080/subject/${this.props.journalItem.studyPlanId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        subject: result
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
        const { error, isLoaded, journalItem, student, mark } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            const classes =[]
            if (this.state.mark.name === "Незачет" || this.state.mark.name === "Неудовлетворительно") {
                classes.push('red-bg');
            }
            if (this.state.mark.name === "Удовлетворительно") {
                classes.push('orange-bg');
            }
            return (
                <tr>
                    <td>{this.props.journalItem.id}</td>
                    <td>{this.state.student.name}</td>
                    <td>{this.state.student.surname}</td>
                    <td>{this.state.subject.name}</td>
                    <td>{this.props.journalItem.count}</td>
                    <td className={classes.join(' ')}>{this.state.mark.name}</td>
                </tr>
            );
        }
    }
}

export default JournalItem;