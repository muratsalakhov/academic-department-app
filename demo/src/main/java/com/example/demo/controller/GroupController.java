package com.example.demo.controller;

import com.example.demo.dao.GroupJdbc;
import com.example.demo.model.Group;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GroupController {

    private final GroupJdbc groupJdbc;

    public GroupController(GroupJdbc groupJdbc) {
        this.groupJdbc = groupJdbc;
    }

    @GetMapping("/group/{id}")
    public Group getGroup(@PathVariable int id) {
        Group group = groupJdbc.get(id);
        return group;
    }

    @GetMapping("/group/show_all")
    public List<Group> showAll() {
        return groupJdbc.showAll();
    }
}
