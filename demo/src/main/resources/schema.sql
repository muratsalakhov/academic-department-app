create table EXAM_TYPE
(
    ID   INT  not null
        primary key,
    TYPE TEXT not null
);

create table MARK
(
    ID    INT  not null
        primary key,
    NAME  TEXT not null,
    VALUE TEXT not null
);


create table STUDY_GROUP
(
    ID   INT not null
        primary key,
    NAME TEXT
);

create table STUDENT
(
    ID             INT  not null
        primary key,
    SURNAME        TEXT not null,
    NAME           TEXT not null,
    SECOND_NAME    TEXT not null,
    STUDY_GROUP_ID INT  not null
        references STUDY_GROUP (ID)
);

create table STUDENT_LOCAL
(
    ID             INT  not null
        primary key,
    SURNAME        TEXT not null,
    NAME           TEXT not null,
    SECOND_NAME    TEXT not null,
    STUDY_GROUP_ID INT  not null
        references STUDY_GROUP (ID)
);

create table SUBJECT
(
    ID         INT  not null
        primary key,
    NAME       TEXT not null,
    SHORT_NAME TEXT not null
);

create table STUDY_PLAN
(
    ID           INT not null
        primary key,
    SUBJECT_ID   INT not null
        references SUBJECT (ID),
    EXAM_TYPE_ID INT not null
        references EXAM_TYPE (ID)
);

create table JOURNAL
(
    ID            INT not null
        primary key,
    STUDENT_ID    INT not null
        references STUDENT (ID),
    STUDY_PLAN_ID INT not null
        references STUDY_PLAN (ID),
    IN_TIME       BIT not null,
    COUNT         INT not null,
    MARK_ID       INT not null
        references MARK (ID)
);

INSERT INTO STUDY_GROUP
VALUES (1, 'ИКБО-06-17');

INSERT INTO STUDENT_LOCAL
VALUES (131313, 'Манаков', 'Петр', 'Захарович', 1), (131314, 'Тукай', 'Габдулла', 'Мухамедгарифович ', 1);