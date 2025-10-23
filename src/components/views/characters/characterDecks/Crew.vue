<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import { Utils } from '@/scripts/utils';

const matches = CharacterDatas.filter((c) => {
    if (c.type == "crew") {
        let a = CharacterDataUtils.getAffiliation(c, "Brightside Crew");
        return a && !a.left;
    }
    return false;
});

const TheCrew = matches.sort(function(a, b) {
    return Utils.SortComparators.dateString(
        CharacterDataUtils.getAffiliation(a, "Brightside Crew")?.joined,
        CharacterDataUtils.getAffiliation(b, "Brightside Crew")?.joined
    );
});

defineProps({
	containedByModal: {
		type: Boolean,
		required: false,
		default: false
	}
})

function getFooter(person?: ICharacterData) {
    if (!person) {
        return;
    }
    
    return `${person.affiliations[0].role} (${person.affiliations[0].joined} SE)`;
}
</script>

<template>
    <CharacterCardDeck :containedByModal="containedByModal">
        <CharacterCard v-for="person in TheCrew" :person="person">
            <template #footer><div class="text-center">{{ getFooter(person) }}</div></template>
        </CharacterCard>
    </CharacterCardDeck>
</template>