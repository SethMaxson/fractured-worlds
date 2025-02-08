<script setup lang="ts">
import ViewBlurb from "@/components/core/ViewBlurb.vue";
</script>

<template>
    <header>
        <ViewBlurb header="Journal"></ViewBlurb>
    </header>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/journal/letters"> Letters </router-link>
        </li>
        <li class="nav-item dev">
            <router-link class="nav-link" active-class="active" to="/journal/log"> Log </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/journal/mysteries"> Mysteries </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/journal/world-anchors"> World Anchors </router-link>
        </li>
    </ul>
</template>