package com.example.demo.controller;

import com.example.demo.dao.JournalJdbc;
import com.example.demo.model.Journal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JournalController {

    private final JournalJdbc journalJdbc;

    public JournalController(JournalJdbc journalJdbc) {
        this.journalJdbc = journalJdbc;
    }

    @GetMapping("/journal/{id}")
    public Journal getJournal(@PathVariable int id) {
        Journal journal = journalJdbc.get(id);
        return journal;
    }

    @GetMapping("/journal/show_all")
    public List<Journal> showAll() {
        return journalJdbc.showAll();
    }

}
