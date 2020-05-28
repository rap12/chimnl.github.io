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
            <p class = "position mb-2 m-0 text-center text-uppercase">{{ member.position }}</p>
            <div class="user-img bg-secondary mx-auto" style="background: url( {{ member.image }} ); background-position: center; background-size: cover;"></div>
            <p class = "text-center mt-2 m-0 member-name">{{ member.name }}</p>
            <p class ="m-0 text-center">{{ member.affiliation }}</p>
            <!-- <div class = "" hidden> -->
                <p class ="user-bio mt-3 m-0 text-justify" hidden>{{ member.bio }}</p>
            <!-- </div> -->
            <a href = "#" class ="btn btn-primary mt-3 more">Bio</a>
        </div>
        {% endfor %}
    </div>

<section>