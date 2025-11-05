<script setup lang="ts">
import PageContainerVue from "@/components/core/PageContainer.vue";
import Breadcrumb from "@/components/core/Breadcrumb.vue";
import Portrait from "@/components/core/Portrait.vue";
import ViewBlurb from "@/components/core/ViewBlurb.vue";
import { GameStrings } from "@/scripts/game-strings";
import { computed, onMounted } from "vue";
import { Utils } from "@/scripts/utils";

onMounted(() => {
    Utils.LocalStorage.Dates.LastPageView.setNow("Contacts");
})
</script>

<template>
	<PageContainerVue>
		<header>
            <Breadcrumb path="/contacts" />
			<ViewBlurb header="Contacts" author="Eva Davis" version="1.0.1">
				We have means of directly contacting these people without first having to find them in person every time.
			</ViewBlurb>
		</header>
		<main>
            <div class="card mb-3" v-for="(item, index) in filteredContacts" :key="index">
                <div class="row g-0 m-0 ps-1">
                    <div class="col-4 col-md-3 col-lg-2 col-xl-1 text-center">
                        <Portrait class="bg-nle bg-opacity-50 img-fluid rounded-circle" :src="item.image" />
                    </div>
                    <div class="col-8 col-md-9 col-lg-10 col-xl-11">
                        <div class="card-body py-2 ps-lg-3 pe-0">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <p class="card-text small text-body-secondary p-0 m-0 my-1" v-if="item.primaryPC">Primary contact in party: {{ item.primaryPC }}</p>
                            <p class="card-text small gm-only" v-if="item.notes">
                                <b>Notes:</b> {{ item.notes }}
                            </p>
                            <ul class="list-group list-group-flush small">
                                <li class="list-group-item py-0 px-0" v-for="(obj, index) in item.types">
                                    <svg class="menu-button-icon theme-color me-1 d-inline" v-if="getIcon(obj)"><use :href="getIcon(obj)"></use></svg>
                                    {{obj}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-footer small text-body-secondary text-center py-0" v-if="item.since">
                    added {{ item.since }}
                </div>
            </div>

            <div class="small text-center fst-italic py-1">{{ filteredContacts.length }} contacts shown</div>
		</main>
	</PageContainerVue>
</template>

<script lang="ts">
type RemoteContactMethod = "Summonstone" | "Teleglyph";

interface IContactDetails {
    name: string;
    image?: string;
    types: RemoteContactMethod[];
    org?: string;
    since?: string;
    /**For cases where the contact belongs to one PC instead of equally to the entire party. The name of the PC who actually has a direct line to this character. */
    primaryPC?: string;
    notes?: string;
}

const contacts: IContactDetails[] = [
    {
        name: "Cade Brightcloak",
        image: "img/npc/cade-toon.png",
        types: [
            "Teleglyph",
            "Summonstone"
        ],
        since: "04/05/0001",
        primaryPC: "Tero"
    },
    {
        name: "Nortle",
        image: "img/npc/nortle.png",
        types: ["Teleglyph"],
        since: "04/21/0001",
        primaryPC: "Li'l Phil",
        notes: "Contacts on a nightly basis, writes as if Nortle is a surrogate father more than a coconspirator"
    },
    {
        name: "Sam & Max",
        image: "img/npc/sam-and-max-portrait-alt.png",
        types: ["Teleglyph"],
        since: "05/31/0001",
    },
    {
        name: "Smith",
        types: ["Teleglyph"],
        since: "04/21/0001",
    },
];

function getIcon(type: RemoteContactMethod): string | undefined {
	switch (type) {
		case "Summonstone":
			return "#rune-stone";
		case "Teleglyph":
			return "#letter";
		default:
			return undefined;
	}
}

const filteredContacts = computed<IContactDetails[]>(() => {
	var filteredResults = contacts.slice();
	// Filter
	// if (settings.filters.majorOnly) {
	// 	filteredResults = filteredResults.filter(event => event.isMajor);
	// }
	// Sort

	// Return
	return filteredResults;
});
</script>