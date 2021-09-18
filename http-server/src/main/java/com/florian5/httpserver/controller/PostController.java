package com.florian5.httpserver.controller;

import com.florian5.httpserver.domain.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
@RequestMapping("/api/v1.0/posts")
@CrossOrigin("http://localhost:4200")
public class PostController {

    List<Post> posts = new ArrayList<>(){{
        add(new Post(1, "Post 1", "Body 1"));
        add(new Post(2, "Post 2", "Body 2"));
        add(new Post(3, "Post 3", "Body 3"));
        add(new Post(4, "Post 4", "Body 4"));
        add(new Post(5, "Post 5", "Body 5"));
    }};


    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    List<Post> getAll() {

        return posts;
    }

    @GetMapping(value = "/count", produces = TEXT_PLAIN_VALUE)
    @ResponseStatus(OK)
    String getCountPosts() {

        return String.valueOf(posts.size());
    }
}
