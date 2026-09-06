import {distance} from "three/src/nodes/TSL.js";

const distanceScale = 1_000_00;
const visualScale = 30;

const celestialBodiesData = {
    sun: {
        distanceFromSun: 0,
        diameter: 1_392_700,
    },

    mercury: {
        distanceFromSun: 57_900_000,
        diameter: 4_879,
    },

    venus: {
        distanceFromSun: 108_200_000,
        diameter: 12_104,
    },

    earth: {
        distanceFromSun: 149_600_000,
        diameter: 12_742,
    },

    moon: {
        distanceFromEarth: 384_400,
        diameter: 3_474.8,
    },

    mars: {
        distanceFromSun: 227_900_000,
        diameter: 6_779,
    },

    jupiter: {
        distanceFromSun: 778_500_000,
        diameter: 139_820,
    },

    saturn: {
        distanceFromSun: 1_434_000_000,
        diameter: 116_460,
    },

    uranus: {
        distanceFromSun: 2_871_000_000,
        diameter: 50_724,
    },

    neptune: {
        distanceFromSun: 4_495_000_000,
        diameter: 49_244,
    },
};

/*
// this part is before The Moon
const celestialsOld = celestialBodiesData.map((celestial) => ({
    name: celestial.name,
    distance: celestial.distanceFromSun / distanceScale,
    radius: celestial.diameter / distanceScale / 2,
    visualRadius: (celestial.diameter / distanceScale / 2) * visualScale,
}));*/

const celestials = {};

for (const [name, data] of Object.entries(celestialBodiesData)) {
    celestials[name] = {
        distance: (data.distanceFromSun ?? 0) / distanceScale,
        visualDistance: (data.distanceFromSun ?? 0) / distanceScale / 30,
        radius: data.diameter / distanceScale / 2,
        visualRadius: (data.diameter / distanceScale / 2) * visualScale,
    };
}

celestials.moon = {
    distance: celestialBodiesData.moon.distanceFromEarth / distanceScale,
    visualDistance: celestialBodiesData.moon.distanceFromEarth / distanceScale / 30,
    radius: celestialBodiesData.moon.diameter / distanceScale / 2,
    visualRadius: (celestialBodiesData.moon.diameter / distanceScale / 2) * visualScale,
};

export {celestials};
