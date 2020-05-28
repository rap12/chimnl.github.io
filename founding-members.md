---
layout: default
title: "Founding Members"
---

<h3 class = "font-weight-bold text-center mt-5">Founding Members</h3>

<section class = "container mt-5">
    <div class = "d-flex flex-wrap justify-content-center">
    <!-- {% assign members = site.data.execom.committee %} -->
        {% for member in site.data.founding %}
        <div class = "user shadow-sm bg-white rounded m-3 text-center">
            <!-- <p class = "position mb-2 m-0 text-center text-uppercase">{{ member.position }}</p> -->
            <!-- <div class="user-img bg-secondary mx-auto" style="background: url( {{ member.image }} ); background-position: center; background-size: cover;"></div> -->
            <p class = "text-center mt-2 m-0 member-name">{{ member.name }}</p>
            <p class ="m-0 text-center">{{ member.affiliation }}</p>
        </div>
        {% endfor %}
    </div>

<section>