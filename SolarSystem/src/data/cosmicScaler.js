import {distance} from "three/src/nodes/TSL.js";

const distanceScale = 1_000_00;
const visualScale = 30;
const simulationYear = 20; // 1 real earth year = this many sec
const earthOrbitPeriod = 365.256;

const celestialBodiesData = {
    sun: {
        distanceFromSun: 0,
        diameter: 1_392_700,

        rotationPeriod: 25.38,
    },

    mercury: {
        distanceFromSun: 57_900_000,
        diameter: 4_879,

        orbitPeriod: 87.969,
        rotationPeriod: 58.646,
    },

    venus: {
        distanceFromSun: 108_200_000,
        diameter: 12_104,

        orbitPeriod: 224.701,
        rotationPeriod: -243.018,
    },

    earth: {
        distanceFromSun: 149_600_000,
        diameter: 12_742,

        orbitPeriod: 365.256,
        rotationPeriod: 0.99727,
    },

    moon: {
        distanceFromEarth: 384_400,
        diameter: 3_474.8,

        orbitPeriod: 27.32166,
        rotationPeriod: 27.32166,
    },

    mars: {
        distanceFromSun: 227_900_000,
        diameter: 6_779,

        orbitPeriod: 686.98,
        rotationPeriod: 1.02596,
    },

    jupiter: {
        distanceFromSun: 778_500_000,
        diameter: 139_820,

        orbitPeriod: 11.862615 * 365.256,
        rotationPeriod: 0.41354,
    },

    saturn: {
        distanceFromSun: 1_434_000_000,
        diameter: 116_460,

        orbitPeriod: 29.447498 * 365.256,
        rotationPeriod: 0.44401,
    },

    uranus: {
        distanceFromSun: 2_871_000_000,
        diameter: 50_724,

        orbitPeriod: 84.016846 * 365.256,
        rotationPeriod: -0.71833,
    },

    neptune: {
        distanceFromSun: 4_495_000_000,
        diameter: 49_244,

        orbitPeriod: 164.79132 * 365.256,
        rotationPeriod: 0.67125,
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
        orbitSpeedRelative: earthOrbitPeriod / data.orbitPeriod,
        rotationSpeedRelative: 1 / Math.abs(data.rotationPeriod),
    };
}

celestials.moon = {
    distance: celestialBodiesData.moon.distanceFromEarth / distanceScale,
    visualDistance: celestialBodiesData.moon.distanceFromEarth / distanceScale / 30,
    radius: celestialBodiesData.moon.diameter / distanceScale / 2,
    visualRadius: (celestialBodiesData.moon.diameter / distanceScale / 2) * visualScale,
    orbitSpeedRelative: earthOrbitPeriod / celestialBodiesData.moon.orbitPeriod,
    rotationSpeedRelative: earthOrbitPeriod / celestialBodiesData.moon.rotationPeriod,
};

export {celestials};
