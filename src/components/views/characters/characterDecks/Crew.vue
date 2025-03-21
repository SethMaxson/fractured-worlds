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
                <Portrait src="img/npc/hamisfore-toon.png" />
            </template>
            <template #heading>Duvamil "Hamisfore" Turen</template>
            <template #subheading>Gnome</template>

            <Character>Hamisfore</Character> is a brightly colored, middle-aged gnomish woman whose 'crazy aunt' energy hides a world-weary heart. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>.

            <template #footer>Role: Deckhand (04/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/ootah-toon.png" />
            </template>
            <template #heading>Ootah</template>
            <template #subheading>Orc Child</template>

            <Character>Ootah</Character> is a five-year-old orphan who believes herself to be the captain of the <Important>One More Day</Important>. She exhibits behavior that suggests extreme narcissism. Recruited after facing her in gladiatorial combat in <Location>Somewhere</Location>.
            <template #footer>Role: Captain? (04/02/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/giuseppe.png" />
            </template>
            <template #heading>Giuseppe da Albiate</template>
            <template #subheading>Human Painter</template>

            <Character>Giuseppe da Albiate</Character> is an eighteen-year-old with a love of painting. He arrived in <Location>Somewhere</Location> after his home, a variant of <Location>Renaissance Italy</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/tom-cox-full.png" />
            </template>
            <template #heading>Tom Cox</template>
            <template #subheading>Human Singer</template>

            <Character>Tom Cox</Character> is a twenty-four-year-old aspiring folk singer who arrived in <Location>Somewhere</Location> after his home, a variant of 1960's <Location>Earth</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/eva-davis.png" />
            </template>
            <template #heading>Eva Davis</template>
            <template #subheading>Human Computer Programmer</template>

            <Character>Eva Davis</Character> is a twenty-year-old computer programmer who worked for a company called 'Atari.' She arrived in <Location>Somewhere</Location> after her home, a variant of 1970's <Location>Earth</Location> was destroyed. She was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/carrie-ward.png" />
            </template>
            <template #heading>Carrie Ward</template>
            <template #subheading>Human Nurse</template>

            <Character>Carrie Ward</Character> is a forty-five-year-old licensed nurse who arrived in <Location>Somewhere</Location> after her home, a variant of 1970's <Location>Earth</Location> was destroyed. She was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/gloria.jpg" />
            </template>
            <template #heading>Gloria Molloy</template>
            <template #subheading>Human Squatter</template>

            <Character>Gloria Molloy</Character> is a kind-hearted but jaded young woman from the slums of the <Location>Neon Coast</Location> with large gaps in her memory. She already had suspicions about something being wrong with her reality even before meeting the gang, and was consequently quick to adapt to <Location>The Void Realm</Location>.
            <template #footer>Role: Deckhand (05/10/0001 SE-present)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/tommy-one.png" />
            </template>
            <template #heading>Tommy One</template>
            <template #subheading>Android Factory Reject</template>

            <Character>Tommy</Character> is a friendly synth who was sold at a discount due to a manufacturing error that resulted in him being far more simple-minded and impressionable than other "Ledcis" model units. He escaped the <Location>Neon Coast</Location> with the gang. He doesn't seem to comprehend the <Location>Void Realm</Location> or <Important>The Fracturing</Important>, instead believing that the gang is simply exploring outer space.
            <template #footer>Role: Deckhand (05/10/0001 SE-present)</template>
        </CharacterCard>
    </CharacterCardDeck>
</template>