import React from 'react';


class IncomingMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            groupInfo: [],
            group: '',
            firstSubj: '',
            secondSubj: '',
            thirdSubj: '',
            fourthSubj: '',
            fifthSubj: ''
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8080/study_group_plan/${this.props.groupId}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(this.props.groupId)
                    this.setState({
                        isLoaded: true,
                        groupInfo: result
                    });
                    fetch(`http://localhost:8080/study_group/${this.state.groupInfo.study_group_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    group: result.name
                                });
                            })
                    fetch(`http://localhost:8080/subject/${this.state.groupInfo.first_subject_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    firstSubj: result.name
                                });
                            })
                    fetch(`http://localhost:8080/subject/${this.state.groupInfo.second_subject_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    secondSubj: result.name
                                });
                            })
                    fetch(`http://localhost:8080/subject/${this.state.groupInfo.third_subject_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    thirdSubj: result.name
                                });
                            })
                    fetch(`http://localhost:8080/subject/${this.state.groupInfo.fourth_subject_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    fourthSubj: result.name
                                });
                            })
                    fetch(`http://localhost:8080/subject/${this.state.groupInfo.fifth_subject_id}`)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    fifthSubj: result.name
                                });
                            })

                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    componentDidUpdate(prevProps) {
        if (this.props.groupId !== prevProps.groupId) {
            fetch(`http://localhost:8080/study_group_plan/${this.props.groupId}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(this.props.groupId)
                        this.setState({
                            isLoaded: true,
                            groupInfo: result
                        });
                        fetch(`http://localhost:8080/study_group/${this.state.groupInfo.study_group_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        group: result.name
                                    });
                                })
                        fetch(`http://localhost:8080/subject/${this.state.groupInfo.first_subject_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        firstSubj: result.name
                                    });
                                })
                        fetch(`http://localhost:8080/subject/${this.state.groupInfo.second_subject_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        secondSubj: result.name
                                    });
                                })
                        fetch(`http://localhost:8080/subject/${this.state.groupInfo.third_subject_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        thirdSubj: result.name
                                    });
                                })
                        fetch(`http://localhost:8080/subject/${this.state.groupInfo.fourth_subject_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        fourthSubj: result.name
                                    });
                                })
                        fetch(`http://localhost:8080/subject/${this.state.groupInfo.fifth_subject_id}`)
                            .then(res => res.json())
                            .then(
                                (result) => {
                                    this.setState({
                                        fifthSubj: result.name
                                    });
                                })

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

    }

    render() {
        return (
            <table>
                <thead>
                    <tr><th colSpan={6}>Учебный план</th></tr>
                    <tr>
                        <th>Группа</th>
                        <th>Понедельник</th>
                        <th>Вторник</th>
                        <th>Среда</th>
                        <th>Четверг</th>
                        <th>Пятница</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.group}</td>
                        <td>{this.state.firstSubj}</td>
                        <td>{this.state.secondSubj}</td>
                        <td>{this.state.thirdSubj}</td>
                        <td>{this.state.fourthSubj}</td>
                        <td>{this.state.fifthSubj}</td>
                    </tr>
                </tbody>
            </table>
        );
    }

}
export default IncomingMessage;