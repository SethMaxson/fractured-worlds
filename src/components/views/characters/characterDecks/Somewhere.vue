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
        <CharacterCard>
            <template #image>
                <!-- <img class="bg bg-secondary" alt="portrait" src="/img/tokens/HalflingCommoner2.png" /> -->
                <img class="bg bg-secondary" alt="portrait" src="img/npc/kenji-toon.png" />
            </template>
            <template #heading>Kenny Cobblerock</template>
            <!-- <template #heading>Kenji Cherrymoon</template> -->
            <template #subheading>Halfling Dockworker</template>

            <Character>Kenny Cobblerock</Character> is a friendly dockworker in the city of <Location>Somewhere</Location>. His knowledge of events in and out of Somewhere is impressive even for someone who regularly interacts with sailors.
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <img class="bg bg-secondary" alt="portrait" src="img/tokens/Molefolk3.png" />
            </template>
            <template #heading>Bowuf</template>
            <template #subheading>Burrowfolk Cobbler</template>

            <Character>Bowuf</Character> is an astoundingly elderly mole man. The heroes rescued him from Blanks when he wandered into the <Location>2nd District of Somewhere</Location>. He promised them each a free pair of shoes as a way to express his gratitude.
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <img class="bg bg-secondary" alt="portrait" src="img/npc/portia-toon.png" />
            </template>
            <template #heading>Portia "Jamjar" Fiddlewick</template>
            <template #subheading>Halfling Journalist</template>

            <Character>Portia</Character> is a scrappy, fast-talking reporter and the head editor of <Location>Somewhere's</Location> newspaper, <Important>The Happs</Important>. A misunderstanding led to her running a story about <Character>{{ GameStrings.Party.Phil.first }}</Character> eating his parents, but she has since printed a retraction. 
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <img class="bg bg-secondary" alt="portrait" src="img/npc/throden.png" />
            </template>
            <template #heading>Throden</template>
            <template #subheading>Dragonborn Merchant</template>

            <Character>Throden</Character> runs Somewhere's general store, the <Location>Copper General</Location>. He has a fondness for haggling and is determined to one day see <Character>{{ GameStrings.Party.Cobb.first }}</Character> master the art (or at least fully comprehend it).
        </CharacterCard>
    <!-- <CharacterCard>
            <template #image>
                <Portrait src="characters/npc/killinggame/default-portrait.jpeg" />
            </template>
            <template #heading>Baddie</template>
            <template #subheading>Species Job</template>
            <template #pcContact>PCContact</template>

            <b>Baddie</b> is some kind of person.
        </CharacterCard> -->
    </CharacterCardDeck>
</template>