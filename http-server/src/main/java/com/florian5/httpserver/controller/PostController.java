package com.florian5.httpserver.controller;

import com.florian5.httpserver.domain.Post;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_PLAIN_VALUE;

@RestController
@RequestMapping("/api/v1.0/posts")
@CrossOrigin("http://localhost:4200")
@Slf4j
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
    List<Post> getAll(@RequestHeader("Authorization") String token) {

        log.info("Token: {}", token);

        return posts;
    }

    @GetMapping(value = "/count", produces = TEXT_PLAIN_VALUE)
    @ResponseStatus(OK)
    String getCountPosts(@RequestHeader("Authorization") String token) {

        log.info("Token: {}", token);

        return String.valueOf(posts.size());
    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(CREATED)
    Post save(@RequestBody Post post, @RequestHeader("Authorization") String token) {

        log.info("Token: {}", token);

        posts.add(post);

        return post;
    }

    @GetMapping(path = "/search", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    List<Post> findByTitle(@RequestParam(required = false) String title,
                           @RequestHeader("Authorization") String token) {

        log.info("Token: {}", token);

        if (Objects.nonNull(title)) {
            return this.posts.stream()
                    .filter(post ->
                            post.getTitle().toLowerCase().contains(title.toLowerCase()))
                    .toList();
        }

        return this.posts;
    }

    @GetMapping(path = "/multiple/search", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    List<Post> findByTitleAndContent(@RequestParam String title,
                                     @RequestParam String content,
                                     @RequestHeader("Authorization") String token) {

        log.info("Token: {}", token);

        return this.posts.stream()
                .filter(post -> post.getTitle().toLowerCase().contains(title.toLowerCase()))
                .filter(post -> post.getBody().toLowerCase().contains(content.toLowerCase()))
                .toList();
    }
}
