<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/character-data-utils";

const TheCast = CharacterDataUtils.findCharactersByLocation(CharacterDatas, 'somewhere');

defineProps({
	containedByModal: {
		type: Boolean,
		required: false,
		default: false
	}
})
</script>

<template>
    <CharacterCardDeck :containedByModal="containedByModal">
        <CharacterCard v-for="person in TheCast" :person="person" :containedByModal="containedByModal" />
    </CharacterCardDeck>
</template>