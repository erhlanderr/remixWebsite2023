import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesLayout = () => {

    // if (windowWidth > 768) {
    var particleNumber = 77;
    var framesPerSecond = 60;
    var particleOpacity = 0.7;
    // particleOpacityMin = 0.1
    //   } else {
    //     particleNumber = 32;
    //     framesPerSecond = 60;
    //     particleOpacity = 1;
    //     // particleOpacityMin = 1
    //   }

    const particles = {
        particles: {
            number: {
                value: particleNumber,
                density: {
                    enable: true,
                    value_area: 721.5354273894853,
                },
            },
            color: { value: "#ffffff" },
            shape: {
                type: "triangle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
                polygon: { nb_sides: 5 },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.6974842464765024,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: particleOpacity,
                    sync: false,
                },
            },
            size: {
                value: 8.017060304327615,
                random: true,
                anim: {
                    enable: true,
                    speed: 9.744926547616142,
                    size_min: 4.060386061506725,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 128.27296486924183,
                color: "#ffffff",
                opacity: 0.625330703737554,
                width: 0.7,
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "bottom-right",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 200,
                    rotateY: 200,
                },
            },
        },
        fullScreen: { 
            enable: false, 
            zIndex: 99,
            height: "100%",
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: { opacity: 1 },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 64,
                    duration: 0.4,
                },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: false,
        fpsLimit: framesPerSecond,
    };

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    // const title = header.content.header.title

    return <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}        
    />
}
export default ParticlesLayout;