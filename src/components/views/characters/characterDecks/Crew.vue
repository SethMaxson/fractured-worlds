<script setup lang="ts">
import AccordionItem from "@/components/core/AccordionItem.vue";
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import WikiLink from '@/components/core/WikiLink.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import { GameStrings } from "@/scripts/game-strings";
import Important from "@/components/core/text-tags/Important.vue";

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";


const TheCrewPart1 = [
    CharacterDataUtils.findCharacter(CharacterDatas, 'hamisfore'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'ootah'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'carrie-ward'),
    CharacterDataUtils.findCharacter(CharacterDatas, 'zuzu'),
];

const TheCrew = [
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
        <CharacterCard v-for="person in TheCrewPart1" :person="person">
            <template #footer>{{ getFooter(person) }}</template>
        </CharacterCard>

        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/joey-morton-cropped.png" />
            </template>
            <template #heading>Joey Morton</template>
            <template #subheading>Mall Cop</template>

            <Character>Joey Morton</Character> is a human woman from a kingdom known as Scotland in an Earth variant. She is an avid 'gamer', which apparently means she obsessively collects and plays things called 'video games'.
            <template #footer>Role: Deckhand (06/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/gugg.png" />
            </template>
            <template #heading>Gugg</template>
            <template #subheading>Neanderthal Hunter</template>

            <Character>Gugg</Character> is a surprisingly soft-spoken caveman who seems to embody the phrase "speak softly and carry a big stick". He has a prosthetic right leg.
            <template #footer>Role: Deckhand (06/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/bebop.png" />
            </template>
            <template #heading>Bebop</template>
            <template #subheading>Mutant Enforcer</template>

            <Character>Bebop</Character> is a mutant boar who once worked for a variant of Shredder in a world similar to the Big Apple. What he lacks in brains he makes up for with muscle and aggression. He seems to have formed an almost sibling-like bond with Ootah.
            <template #footer>Role: Master Gunner (06/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/blackhand-roo.png" />
            </template>
            <template #heading>"Blackhand" Roo</template>
            <template #subheading>Train Mechanic</template>

            <Character>"Blackhand" Roo</Character> is an experienced train mechanic who briefly worked as the president of a railway company. His years working with locomotives seem to have allowed him to get to grips with The Brightside's complex engine.
            <template #footer>Role: Engineer (06/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <!-- <Portrait src="img/tokens/per-schnorr.png" /> -->
                <Portrait src="img/npc/per.png" />
            </template>
            <template #heading>Per Schnorr</template>
            <template #subheading>Spiritual Leader</template>

            <Character>Per Schnorr</Character> is a druid from the dark ages of one of the many <Location>Earths</Location>.
            <template #footer>Role: Deckhand (06/02/0001 SE-present)</template>
        </CharacterCard>

        <CharacterCard v-for="person in TheCrew" :person="person">
            <template #footer>{{ getFooter(person) }}</template>
        </CharacterCard>
    </CharacterCardDeck>
</template>