<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
</script>

<template>
	<PageContainerVue>
		<header>
			<ViewBlurb header="Contacts">
				We have means of directly contacting these people without first having to find them in person every time.
			</ViewBlurb>
		</header>
		<main>
            <!-- <ul class="nav nav-tabs">
                <li class="nav-item">
                    <!- <router-link class="nav-link" active-class="active" to="/journal/letters"> Letters </router-link> ->
                    <a class="nav-link active" aria-current="page" href="#/perks">{{ GameStrings.Party.Cobb.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Phil.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Tero.first }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#/perks">{{ GameStrings.Party.Tropey.first }}</a>
                </li>
            </ul> -->
			<ul class="list-group list-group-flush">
                <div class="row border-bottom border-2 m-0 fw-bold bg-info-subtle">
                    <div class="col-1"></div>
                    <div class="col border-end border-1">Name</div>
                    <!-- <div class="col text border-1 d-none d-xl-block">Source</div>
                    <div class="col col-xl-4 border-end border-1">Affected Score</div> -->
                    <div class="col col-xl-4 border-1">Type(s)</div>
                </div>
                <div class="row border-bottom border-2 m-0" v-for="(item, index) in contacts">
                    <div class="col-1">
                        {{index+1}}.
                    </div>
                    <div class="col border-end border-1">
                        {{item.name}}
                    </div>
                    <!-- <div class="col text border-1 d-none d-xl-block">
                        {{source || perk?.source}}
                    </div>
                    <div class="col col-xl-4 border-end border-1">
                        {{perk?.affectedScore || affectedScore}}
                    </div> -->
                    <div class="col col-xl-4 border-1">
                        <template v-for="(obj, index) in item.types">
                            {{ index > 0 ? ', ' : undefined }}
                            <span>{{obj}}</span>
                        </template>
                    </div>
                </div>
			</ul>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
interface IContactDetails {
    name: string;
    types: string[];
    /**For cases where the contact belongs to one PC instead of equally to the entire party. The name of the PC who actually has a direct line to this character. */
    primaryPC?: string;
}

const contacts: IContactDetails[] = [
    {
        name: "Cade Brightcloak",
        types: [
            "Teleglyph",
            "Summonstone"
        ],
        primaryPC: "seemingly Tero"
    },
    { name: "Nortle", types: ["Teleglyph"] },
    { name: "Sam & Max", types: ["Teleglyph"] },
    { name: "Smith", types: ["Teleglyph"] },
];

</script>