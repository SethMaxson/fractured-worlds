<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';

import { WorldDataUtils } from '@/scripts/utils/world-data-utils';
import { CharacterDataUtils } from '@/scripts/utils/character-data-utils';
import type { ICharacterData } from '@/interfaces/ICharacterData';
import type { PropType } from 'vue';

const props = defineProps({
	containedByModal: {
		type: Boolean,
		required: false,
		default: false
	},
	people: {
		type: Array as PropType<Array<ICharacterData>>,
		required: false
	},
	worldId: {
		type: String,
		required: false
	}
})

let TheCast: ICharacterData[] = [];
if (props.people && props.people.length > 0) {
	TheCast = props.people;
} else if (props.worldId) {
	TheCast = WorldDataUtils.findCharactersInWorld(CharacterDataUtils.getAll(), props.worldId);
}
</script>

<template>
    <CharacterCardDeck :containedByModal="containedByModal" v-if="TheCast.length > 0">
        <CharacterCard v-for="person in TheCast" :person="person" :containedByModal="containedByModal" />
    </CharacterCardDeck>
</template>