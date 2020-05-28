---
layout: default
title: "CHI MNL Executive Committee"
---
{% include member-info.html %}

<h3 class = "font-weight-bold text-center mt-5">Executive Committee</h3>

<section class = "container mt-5">
    <div class = "d-flex flex-wrap justify-content-center">
    <!-- {% assign members = site.data.execom.committee %} -->
        {% for member in site.data.execom %}
        <div class = "user shadow bg-white rounded m-3 text-center">
            <div class="user-img bg-secondary mx-auto" style="background: url( {{ member.image }} ); background-position: center; background-size: cover;"></div>
            <p class = "position mt-2 m-0 text-center">{{ member.position }}</p>
            <p class = "text-center m-0 member-name">{{ member.name }}</p>
            <div class = "user-bio module overflow">
                <p class =" mt-3 m-0 text-center">{{ member.bio }}</p>
            </div>
            <a href = "#" class ="btn btn-primary mt-3 more">See more</a>
        </div>
        {% endfor %}
    </div>

<section>