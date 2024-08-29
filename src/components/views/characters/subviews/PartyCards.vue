<script setup lang="ts">
import CharacterCard from '@/components/views/characters/components/CharacterCard.vue';
import CharacterCardDeck from '@/components/core/CardDeck.vue';
import Portrait from '@/components/core/Portrait.vue';
import Character from '@/components/core/text-tags/Character.vue';
import Location from '@/components/core/text-tags/Location.vue';
</script>

<template>
	<CharacterCardDeck>
		<!-- <CharacterCard status="dead">
			<template #image>
				<Portrait src="characters/party/wednesday-warriors/dilbert.png" />
			</template>
			<template #heading>Dilbert the Incontinent</template>
			<template #subheading>Human Paladin</template>

			<b>Dilbert the Incontinent</b> is a formidable warrior with a natural tendency towards good-natured altruism. He
			has uncommonly high self-doubt, which may be the only thing hampering his otherwise tactical mind.
			<!- <template #button><a href="#" class="btn btn-primary">Go somewhere</a></template> ->
		</CharacterCard> -->
		<CharacterCard status="dead">
			<template #image>
				<Portrait src="characters/fractured-worlds/party/cobb.png" />
			</template>
			<template #heading>C.O.B.B.</template>
			<template #subheading>Android Monk</template>

			<Character>Constuct Observing Biological Boundaries</Character>, or <Character>C.O.B.B.</Character>, is a gifted martial artist who is fascinated by the biological concept of mortality. With a mind as powerful as his blows, his only real weakness may be his naivety.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/fractured-worlds/party/phil.png" />
			</template>
			<template #heading>Li'l Phil Antonio</template>
			<template #subheading>Centaur Sorcerer</template>

			<Character>Li'l Phil Antonio</Character> is a manic, unpredictable sorcerer whose purple skin makes him an oddity
			even among other centaurs. He was raised by a trio of witches and now seeks to find his place in the
			universe. His aloof tendencies naturally blend with the	curious magic that flows within his veins to 
			make Li'l Phil the ultimate agent of chaos.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/fractured-worlds/party/tero.png" />
			</template>
			<template #heading>Tero</template>
			<template #subheading>Kitsune Kineticist</template>

			<Character>Tero</Character> is a gifted student of the elements with an appetite for strength rivaled only by her appetite for alcohol. Her cool demeanor hides an icy cunning that will stop at absolutely nothing to achieve her goals.
		</CharacterCard>
		<CharacterCard>
			<template #image>
				<Portrait src="characters/fractured-worlds/party/tropey.png" />
			</template>
			<template #heading>Tropey McTroperson</template>
			<template #subheading>Dwarf Champion</template>

			<Character>Tropey McTroperson</Character> is a dwarven paladin who hails from a small farming village. After finding himself in the mysterious Void Realm, he made it his mission to search its myriad worlds for jelly beans.
		</CharacterCard>
	</CharacterCardDeck>
</template>

<script lang="ts">
export default {
    name: "PartyCards",
    components: { CharacterCardDeck }
}
</script>
