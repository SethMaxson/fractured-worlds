<script setup lang="ts">
import ViewBlurb from "../../core/ViewBlurb.vue";
import PageContainerVue from "@/components/core/PageContainer.vue";
</script>

<template>
    <PageContainerVue>
        <header>
            <ViewBlurb header="DM Info">
                Stuff to help the DM to plan and know things.
            </ViewBlurb>
        </header>
        <main>
            <div>
                {{ murica }}
            </div>
        </main>
    </PageContainerVue>
</template>

<script lang="ts">
import axios from 'axios';
import type { IDNDBeyondCharacter } from "@/interfaces/IDndBeyondCharacter";
import { defineComponent } from "vue";

export default defineComponent({
        name: 'DMViewComponent',
        data() {
            return {
                murica: {} as IDNDBeyondCharacter,
                fetchingData: false
            }
        },
        methods: {
            async fetchCharacters() {
                // const response = await axios.get<IDNDBeyondCharacter>("https://character-service.dndbeyond.com/character/v3/character/93985205/")
                const response = await axios.get<IDNDBeyondCharacter>("https://www.dndbeyond.com/character/93985205/json", {
					withCredentials: false,
				});
                this.murica = response.data
            },
            // async loadMoreFacts() {
            //     this.fetchingData = true
            //     const catFactsResponse = await axios.get<AnimalFacts[]>('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5')
            //     this.catFacts.push(...(catFactsResponse.data || []))

            //     this.fetchingData = false
            // }
        },
        async mounted() {
            await this.fetchCharacters()
        }
    })
</script>
