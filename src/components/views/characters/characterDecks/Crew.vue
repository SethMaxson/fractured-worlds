<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";

const TheCrew = [
    CharacterDataUtils.findCharacter(CharacterDatas, 'hamisfore'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'ootah'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'carrie-ward'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'bebop'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'blackhand-roo'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'gugg'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'joey-morton'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'per-schnorr'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'zuzu'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'susie'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'flavio'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'matthew-law'),
	CharacterDataUtils.findCharacter(CharacterDatas, 'winter')
];

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

    // // Older format
    // return `Role: ${person.affiliations[0].role} (${person.affiliations[0].joined} SE-present)`;
    
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