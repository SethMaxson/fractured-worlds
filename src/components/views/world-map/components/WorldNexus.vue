<script setup lang="ts">
import { id_ify } from '@/scripts/id_ify';

const nexusClasses = [ "", "", "triangle", "square", "pentagon", "hexagon" ];

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "Nexus Name"
  },
  id: {
    type: String,
    required: false,
    default: "nexus-name"
  },
  /**How many worlds are in this Nexus. Valid options are 4-6 */
  sides: {
    type: Number,
    required: false,
    default: 4
  },
  /** 1 Indexed, clockwise starting at top-leftmost side */
  revealedSides: {
    type: Array<Number>,
    required: false,
    default: [1, 2, 3, 4]
  },
  /** 1 Indexed, clockwise starting at top-leftmost side */
  revealedWorlds: {
    type: Array<Number>,
    required: false,
    default: [1, 2, 3, 4]
  },
  /** 1 Indexed, clockwise starting at top-leftmost side */
  questionWorlds: {
    type: Array<Number>,
    required: false,
    default: [1, 2, 3, 4]
  },
  /** 1 Indexed, clockwise starting at top-leftmost side */
  worldIconClasses: {
    type: Array<String>,
    required: false,
    default: ["agrabah", "halloween_town", "atlantica", "tarzan"]
  },
  /**Hexadecimal color value (e.g. #78aab3b3, #dedede) */
  lightColor: {
    type: String,
    required: false,
    default: "#78aab3b3"
  },
  /**The angle of this Nexus to Fragmenta Fati (ONLY APPLIES TO TRIANGLES)
   * TODO: Actually use this property to rotate the nexus
   */
  angle: {
    type: Number,
    required: false,
    default: 0
  },
})

const iteratorArray: string[] = [];
for (let index = 1; index <= props.sides; index++) {
  iteratorArray.push(props.id + '_' + index.toString());
}
</script>

<template>
  <div class="nexus-outer">

    <div class="orbit" :class="nexusClasses[sides-1]">
      <div class="orbit-ring" :style="{borderColor: lightColor}">
        <div class="orbit-section" v-for="item, index in iteratorArray" :key="item + '_orbit_section'" :class="'border-' + (index + 1).toString()"></div>
      </div>
      <div class="worlds">
        <div class="pos" v-for="item, index in iteratorArray" :key="item + '_world'" :class="'world-' + (index + 1).toString()">
          <div class="planet" :class="worldIconClasses[index]"></div>
        </div>
        <!-- <div class="pos" style="left: 8%; top: 25%;">
          <div class="planet neverland"></div>
        </div> -->
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
$world-box-size: 2em;
$x-rot: 70deg;
$square-z-rot: 45deg;
$nexus-orbit-size: 6em;
// $square-z-rot: 0;


* {
  box-sizing: border-box;
}

.nexus-outer {
  position: relative;
  top: 0;
  left: 0;
  font-size: 5em;
  // width: 12em;
  // height: 12em;
  width: calc(1.5 * $nexus-orbit-size);
  height: calc(1.5 * $nexus-orbit-size);
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 100em; */
  transform-style: preserve-3d;
  // margin-top: -3.1em;
  // margin-bottom: -3.1em;
  transform: rotateX($x-rot) scale(1.5, 1.5);
  // transform: translate(-50%, -50%) rotateX($x-rot);
  // transform-style: flat;
}

.orbit {
  position: relative;
  top: 50%;
  left: 50%;
  /* margin-left: 8em;
  margin-top: 8em; */
  font-size: 1em;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transform-style: preserve-3d;

  /* Orbit sizes */
  width: $nexus-orbit-size;
  height: $nexus-orbit-size;
  margin: 0em;
  margin-top: 0em;
  margin-bottom: 0em;
}

.orbit-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate3d(-50%, -50%, -1px);
  border: 0.5rem solid rgba(120, 170, 179, 0.702);
  border-radius: 50%;
  transform-style: preserve-3d;
  z-index: -1; 
}

.worlds {
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  width: 100%;
  height: 100%;
  // transform: translate3d(-50%, -50%, -1px);
  transform-style: preserve-3d;
  // transform-style: flat;
  z-index: 1; 
}

.orbit.square {
  transform: translate3D(-50%, -50%, 0px) rotateZ(-$square-z-rot);
  // transform: translate(-50%, -50%) rotate(-$square-z-rot);
  border-radius: 0%;

  .orbit-ring {
    border-radius: 0%;
    // transform: scale3d(1, 1, 0.1);
  }

  .pos {
    height: $world-box-size;
    width: $world-box-size;
    transform: translate3d(-50%, -50%, 0) rotateZ($square-z-rot) rotateX(-$x-rot) rotateY(0deg) translateZ(100px);
    // transform: translate(-50%, -50%) rotate($square-z-rot);
  }

  .world-1 { top:0%; right:auto; bottom:auto; left:0%; }
  .world-2 { top:0%; right:auto; bottom:auto; left:100%; }
  .world-3 { top:100%; right:auto; bottom:auto; left:100%; }
  .world-4 { top:100%; right:auto; bottom:auto; left:0%; }
}

/* Planets */
.pos {
  position: absolute;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: translate3d(-50%, -50%, 1000px) rotateX(-$x-rot) rotateY(0deg) rotateZ(0deg);
  z-index: 200;
  font-size: $world-box-size;
  height: $world-box-size;
  width: $world-box-size;
  
  /* Planet starting positions */
    left: 50%;
    top: -1px;
    border: solid 3px red;

}

.pos.larger {
  font-size: 2.55em;
}

.planet {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;
  margin-left: -0.5em;
  border-radius: 50%;
  transform-style: preserve-3d;
  background-size: contain;
  background-repeat: no-repeat;
}


/* images */
.agrabah {
  background-image: url(img/worlds/agrabah.png);
}

.atlantica {
  background-image: url(img/worlds/atlantica.png);
}

.halloween_town {
  background-image: url(img/worlds/halloween_town.png);
}

.hercules {
  background-image: url(img/worlds/hercules.png);
}

.hollow_bastion {
  background-image: url(img/worlds/hollow_bastion.png);
}

.monstro {
  background-image: url(img/worlds/monstro.png);
}

.neverland {
  background-image: url(img/worlds/neverland.png);
}

.somewhere {
  background-image: url(img/worlds/somewhere.png);
}

.tarzan {
  background-image: url(img/worlds/tarzan.png);
}

.wonderland {
  background-image: url(img/worlds/wonderland.png);
}
</style>