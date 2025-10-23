<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
import Important from "@/components/core/text-tags/Important.vue";

import { CharacterDatas } from "@/data/character-datas";
import { CharacterDataUtils } from "@/scripts/utils/character-data-utils";
import type { ICharacterData } from "@/interfaces/ICharacterData";
import { Utils } from '@/scripts/utils';

const matches = CharacterDatas.filter((c) => {
    if (c.type == "crew") {
        let a = CharacterDataUtils.getAffiliation(c, "Brightside Crew");
        return a && !!a.left;
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
    
    return `${person.affiliations[0].role} (${person.affiliations[0].joined}—${person.affiliations[0].left} SE)`;
}
</script>

<template>
    <CharacterCardDeck :containedByModal="containedByModal">
        <CharacterCard>
            <template #image>
                <Portrait />
            </template>
            <template #heading>March Hare</template>
            <template #subheading>Rabbit Tea Party-goer</template>

            The <Character>March Hare</Character> was briefly a part of our crew after joining us in <Location>Wonderland</Location>. He has since retired to the <Location>Happy Turtle.</Location>
            <template #footer>Role: Deckhand (04/05—04/21/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/giuseppe.png" />
            </template>
            <template #heading>Giuseppe da Albiate</template>
            <template #subheading>Human Painter</template>

            <Character>Giuseppe da Albiate</Character> is an eighteen-year-old with a love of painting. He arrived in <Location>Somewhere</Location> after his home, a variant of <Location>Renaissance Italy</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21—07/18/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/tom-cox.webp" />
            </template>
            <template #heading>Tom Cox</template>
            <template #subheading>Human Singer</template>

            <Character>Tom Cox</Character> is a twenty-four-year-old aspiring folk singer who arrived in <Location>Somewhere</Location> after his home, a variant of 1960's <Location>Earth</Location> was destroyed. He was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21—07/18/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/eva-davis.png" />
            </template>
            <template #heading>Eva Davis</template>
            <template #subheading>Human Computer Programmer</template>

            <Character>Eva Davis</Character> is a twenty-year-old computer programmer who worked for a company called 'Atari.' She arrived in <Location>Somewhere</Location> after her home, a variant of 1970's <Location>Earth</Location> was destroyed. She was moved to join the crew after <Character>Li'l Phil's</Character> rousing recruitment speech.
            <template #footer>Role: Deckhand (04/21—07/18/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/gloria.jpg" />
            </template>
            <template #heading>Gloria Molloy</template>
            <template #subheading>Dystopian Squatter</template>

            <Character>Gloria Molloy</Character> is a kind-hearted but jaded young woman from the slums of the <Location>Neon Coast</Location> with large gaps in her memory. She already had suspicions about something being wrong with her reality even before meeting the gang, and was consequently quick to adapt to <Location>The Void Realm</Location>.
            <template #footer>Role: Deckhand (05/10—07/18/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/tommy-one.png" />
            </template>
            <template #heading>Tommy One</template>
            <template #subheading>Android Factory Reject</template>

            <Character>Tommy</Character> is a friendly synth who was sold at a discount due to a manufacturing error that resulted in him being far more simple-minded and impressionable than other "Ledcis" model units. He escaped the <Location>Neon Coast</Location> with the gang. He doesn't seem to comprehend the <Location>Void Realm</Location> or <Important>The Fracturing</Important>, instead believing that the gang is simply exploring outer space.
            <template #footer>Role: Deckhand (05/10—07/13/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/hoots.jpg" />
            </template>
            <template #heading>Hoots the Owl</template>
            <template #subheading>Jazz Musician</template>

            <Character>Hoots the Owl</Character> served aboard our vessel for one trial tour to review our vessel as a potential pleasure cruise for citizens of <Location>Somewhere</Location>. We parted amicably, but I'm pretty sure he review-bombed us, kupo.
            <template #footer>Role: Musician (06/02—07/18/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/betsy-boyle.webp" />
            </template>
            <template #heading>Betsy Boyle</template>
            <template #subheading>Aspiring Food Critic</template>

            <Character>Betsy Boyle</Character> was an odd fellow who dressed almost exclusively in beige. He was slain in the Birthday Massacre.
            <template #footer>Role: Deckhand (07/18—08/08/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/elaim-trueblood.png" />
            </template>
            <template #heading>Elaim Trueblood</template>
            <template #subheading>Stand-up Comic</template>

            <Character>Elaim Trueblood</Character> was an aspiring comedian. He was slain in the Birthday Massacre.
            <template #footer>Role: Deckhand (07/18—08/08/0001 SE)</template>
        </CharacterCard>
        <CharacterCard>
            <template #image>
                <Portrait src="img/npc/mardred-fireforge.png" />
            </template>
            <template #heading>Mardred Fireforge</template>
            <template #subheading>Duergar Janitor</template>

            <Character>Mardred Fireforge</Character> was an elderly Duergar janitor with deep-seated racism and pro-slavery beliefs. She was accidentally slain by Zuzu in a botched attempt to rescue her during the Cucu crisis, though Zuzu remains oblivious to his role in her demise. Tero cut Madred's corpse into pieces and fed it down a garbage disposal after hearing her call Zuzu a dwarfish slur in her final moments.
            <template #footer>Role: Janitor (07/18—08/23/0001 SE)</template>
        </CharacterCard>
        <CharacterCard v-for="person in TheCrew" :person="person">
            <template #footer><div class="text-center">{{ getFooter(person) }}</div></template>
        </CharacterCard>
    </CharacterCardDeck>
</template>